import { State, property, query } from "@lit-app/state";
import { getLocale, updateLocale } from "../utils/locale";
import { cleanupQueryParams, updateQueryParam } from "../utils/routing";
import {
  App,
  Navigation,
  NavigationGroup,
  NavigationItem,
  settings,
} from "../settings";
import { getCurrentAccessToken } from "../utils/storage";
import { getTokenPayload } from "../utils/token";
import { fetchInstanceName, fetchUserAccessInfo } from "../utils/fetch";
import { filterAllowed, getApp, getNavigationItem } from "../utils/navigation";
import { msg } from "@lit/localize";

export const LOCALE_QUERY_PARAM = "locale";
export const NAV_ITEM_QUERY_PARAM = "module";

const QUERY_PARAMS = [LOCALE_QUERY_PARAM, NAV_ITEM_QUERY_PARAM];

export class PortalState extends State {
  @query({ parameter: LOCALE_QUERY_PARAM })
  @property({ value: getLocale() })
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

  private setInitialized: () => void = () => undefined;
  private initialized = new Promise(
    (resolve) => (this.setInitialized = () => resolve(null))
  );

  async init() {
    // Update initially
    this.handleStateChange("locale", this.locale);

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
    callback: (instanceName: PortalState["instanceName"]) => void
  ) {
    // It makes no sense to call with initial value since it is
    // fetched asynchronously
    return this.subscribe(
      (_, instanceName) => callback(instanceName),
      "instanceName"
    );
  }

  subscribeNavigationItemKey(
    callback: (itemKey: PortalState["navigationItemKey"]) => void
  ) {
    callback(this.navigationItemKey); // Initial value
    return this.subscribe(
      (_, itemKey) => callback(itemKey),
      "navigationItemKey"
    );
  }

  subscribeNavigationItem(
    callback: (item: PortalState["navigationItem"]) => void
  ) {
    callback(this.navigationItem); // Initial value
    return this.subscribe((_, item) => callback(item), "navigationItem");
  }

  subscribeScope(
    callback: (scope: PortalState["app"]["scope"]) => void,
    skipInitial = false
  ) {
    if (!skipInitial) {
      callback(this.app.scope); // Initial value
    }
    return this.subscribe((_, app) => callback(app.scope), "app");
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

      // TODO: apply app path as well (as `path` query param?)
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleStateChange(key: string, value: any): void {
    if (key === "locale") {
      this.updateLocale(value);
      this.loadInstanceName();
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
    await updateLocale(locale);
    updateQueryParam(LOCALE_QUERY_PARAM, locale);
  }

  private updateNavigation(): void {
    const token = getCurrentAccessToken();
    if (!token) return;

    const { instanceId } = getTokenPayload(token);
    this.navigation = filterAllowed(
      settings.navigation,
      instanceId,
      this.rolesAndPermissions
    );
  }

  private updateNavigationItemAndGroup(
    itemKey: PortalState["navigationItemKey"]
  ): void {
    if (this.navigation.length > 0) {
      const { item, group } = getNavigationItem(this.navigation, itemKey);
      this.navigationItem = item;
      this.navigationGroup = group;

      // For invalid item key's redirect to home
      if (item.key === settings.navigationHome.key && item.key !== itemKey) {
        this.navigationItemKey = item.key;
      }
    }

    updateQueryParam(NAV_ITEM_QUERY_PARAM, this.navigationItemKey);
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
