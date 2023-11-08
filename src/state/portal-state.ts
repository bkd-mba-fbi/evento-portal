import { msg } from "@lit/localize";
import { State, property, query } from "@lit-app/state";
import {
  App,
  Navigation,
  NavigationGroup,
  NavigationItem,
  settings,
} from "../settings";
import { fetchInstanceName, fetchUserAccessInfo } from "../utils/fetch";
import { getInitialLocale, getLocale, updateLocale } from "../utils/locale";
import { filterAllowed, getApp, getNavigationItem } from "../utils/navigation";
import { cleanupQueryParams, updateQueryParam } from "../utils/routing";
import { getCurrentAccessToken, storeLocale } from "../utils/storage";
import { getTokenPayload } from "../utils/token";

export const LOCALE_QUERY_PARAM = "locale";
export const NAV_ITEM_QUERY_PARAM = "module";

const QUERY_PARAMS = [LOCALE_QUERY_PARAM, NAV_ITEM_QUERY_PARAM];

export class PortalState extends State {
  @property({ value: getInitialLocale() })
  locale!: string;

  @property({ value: [] })
  rolesAndPermissions!: ReadonlyArray<string>;

  @property({ value: "" })
  instanceName!: string;

  @property({ value: [] })
  navigation!: Navigation;

  @query({ parameter: NAV_ITEM_QUERY_PARAM })
  @property({ value: null })
  navigationItemKey!: string;

  /**
   * Don't write this property, change `navigationItemKey` instead to
   * navigate.
   */
  @property({ value: null })
  navigationGroup!: NavigationGroup | null;

  /**
   * Don't write this property, change `navigationItemKey` instead to
   * navigate.
   */
  @property({ value: settings.navigationHome })
  navigationItem!: NavigationItem;

  /**
   * Don't write this property, change `navigationItemKey` instead to
   * navigate.
   */
  @property({ value: getApp(settings.navigationHome) })
  app!: App;

  @property({ value: settings.navigationHome.appPath })
  appPath!: string;

  actualAppPath: string | null = null;

  private setInitialized: () => void = () => undefined;
  initialized = new Promise(
    (resolve) => (this.setInitialized = () => resolve(null)),
  );

  async init() {
    // Update initially
    await this.handleStateChange("locale", this.locale);

    // Update on state change
    this.subscribe(this.handleStateChange.bind(this));

    await this.loadRolesAndPermissions();

    this.setInitialized();
  }

  subscribeLocale(callback: (locale: PortalState["locale"]) => void) {
    callback(this.locale); // Initial value
    return this.subscribe((_, locale) => callback(locale), "locale");
  }

  subscribeInstanceName(
    callback: (instanceName: PortalState["instanceName"]) => void,
  ) {
    // It makes no sense to call with initial value since it is
    // fetched asynchronously
    return this.subscribe(
      (_, instanceName) => callback(instanceName),
      "instanceName",
    );
  }

  subscribeNavigationItemKey(
    callback: (itemKey: PortalState["navigationItemKey"]) => void,
  ) {
    callback(this.navigationItemKey); // Initial value
    return this.subscribe(
      (_, itemKey) => callback(itemKey),
      "navigationItemKey",
    );
  }

  subscribeNavigationItem(
    callback: (item: PortalState["navigationItem"]) => void,
  ) {
    callback(this.navigationItem); // Initial value
    return this.subscribe((_, item) => callback(item), "navigationItem");
  }

  subscribeScopeAndLocale(
    callback: (
      scope: PortalState["app"]["scope"],
      locale: PortalState["locale"],
    ) => void,
    skipInitial = false,
  ) {
    if (!skipInitial) {
      callback(this.app.scope, this.locale); // Initial value
    }
    return this.subscribe(
      () => callback(this.app.scope, this.locale),
      ["app", "locale"],
    );
  }

  /**
   * Update the state according to the given URL (typically after
   * login or when navigating) instead of doing a full page refresh.
   */
  navigate(url: URL): void {
    this.initialized.then(() => {
      // Remove unused query params
      cleanupQueryParams(QUERY_PARAMS);

      // Set new state from `redirectUrl`
      this.locale = url.searchParams.get(LOCALE_QUERY_PARAM) || getLocale();
      this.navigationItemKey =
        url.searchParams.get(NAV_ITEM_QUERY_PARAM) ??
        settings.navigationHome.key;
      if (
        url.hash &&
        url.hash !== "#" &&
        url.hash !== "#/" &&
        url.hash.startsWith(this.navigationItem.appPath)
      ) {
        this.appPath = url.hash;
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async handleStateChange(key: string, value: any): Promise<void> {
    if (key === "locale") {
      await this.updateLocale(value);
      await this.loadInstanceName();
    }

    if (key === "locale" || key === "navigationItemKey") {
      // Store locale in localeStorage and update it whenever
      // navigation changes, since some legacy apps modify the value
      storeLocale(this.locale);
    }

    if (key === "rolesAndPermissions" || key === "locale") {
      this.updateNavigation();
    }

    if (key === "navigationItemKey" || key === "navigation") {
      this.updateNavigationItemAndGroup(this.navigationItemKey);
      this.updateApp(this.navigationItem);
    }
  }

  private async updateLocale(locale: PortalState["locale"]): Promise<void> {
    updateQueryParam(LOCALE_QUERY_PARAM, locale);
    await updateLocale(locale);
  }

  private updateNavigation(): void {
    const token = getCurrentAccessToken();
    if (!token) return;

    const { instanceId } = getTokenPayload(token);
    this.navigation = filterAllowed(
      settings.navigation,
      instanceId,
      this.rolesAndPermissions,
    );
  }

  private updateNavigationItemAndGroup(
    itemKey: PortalState["navigationItemKey"],
  ): void {
    if (this.navigation.length > 0) {
      const { item, group } = getNavigationItem(this.navigation, itemKey);
      this.navigationItem = item;
      this.navigationGroup = group;

      if (
        this.actualAppPath &&
        this.actualAppPath !== "#" &&
        this.actualAppPath !== "#/" &&
        this.actualAppPath.startsWith(item.appPath)
      ) {
        // Consume `actualAppPath`
        this.appPath = this.actualAppPath;
      } else {
        // Use item's app path
        this.appPath = item.appPath;
      }

      this.actualAppPath = null; // Only relevant the first time
      this.updateHashFromAppPath();

      // For invalid item key's redirect to home
      if (item.key === settings.navigationHome.key && item.key !== itemKey) {
        this.navigationItemKey = item.key;
      }
    }

    updateQueryParam(NAV_ITEM_QUERY_PARAM, this.navigationItemKey);
  }

  private updateHashFromAppPath() {
    const url = new URL(document.location.href);
    url.hash = this.appPath;
    history.replaceState({}, "", url);
  }

  private updateApp(item: PortalState["navigationItem"]): void {
    this.app = getApp(item);
  }

  private async loadRolesAndPermissions(): Promise<void> {
    const token = getCurrentAccessToken();
    if (!token) return;

    const { roles, permissions } = await fetchUserAccessInfo();
    this.rolesAndPermissions = [...roles, ...permissions];
  }

  private async loadInstanceName(): Promise<void> {
    const token = getCurrentAccessToken();
    if (!token) return;

    const instanceName = await fetchInstanceName();
    this.instanceName = [msg("Evento"), instanceName]
      .filter(Boolean)
      .join(" | ");
  }
}

export const portalState = new PortalState();
