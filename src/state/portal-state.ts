import { State, property, query } from "@lit-app/state";
import { getLocale, updateLocale } from "../utils/locale";
import { updateQueryParam } from "../utils/routing";
import {
  App,
  Navigation,
  NavigationGroup,
  NavigationItem,
  settings,
} from "../settings";
import { getCurrentAccessToken } from "../utils/storage";
import { getTokenPayload } from "../utils/token";
import { fetchUserAccessInfo } from "../utils/fetch";
import { filterAllowed, getApp, getNavigationItem } from "../utils/navigation";

export const LOCALE_QUERY_PARAM = "locale";
export const NAV_ITEM_QUERY_PARAM = "module";

export class PortalState extends State {
  @query({ parameter: LOCALE_QUERY_PARAM })
  @property({ value: getLocale() })
  locale!: string;

  @property({ value: [] })
  rolesAndPermissions!: ReadonlyArray<string>;

  @property({ value: [] })
  navigation!: Navigation;

  @query({ parameter: NAV_ITEM_QUERY_PARAM })
  @property({ value: settings.navigationHome.key })
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

  async init() {
    this.subscribe((key, value) => {
      if (key === "rolesAndPermissions" || key === "locale") {
        this.updateNavigation();
        this.updateNavigationItemAndGroup(this.navigationItemKey);
      }

      if (key === "navigationItemKey" || key === "navigation") {
        this.updateNavigationItemAndGroup(this.navigationItemKey);
        this.updateApp(this.navigationItem);
      }
    });

    this.subscribeNavigationItemKey(
      this.updateNavigationItemAndGroup.bind(this)
    );

    await this.loadRolesAndPermissions();
  }

  subscribeLocale(
    callback: (locale: PortalState["locale"]) => void,
    withCurrent = true
  ) {
    if (withCurrent) {
      callback(this.locale);
    }
    return this.subscribe((_, locale) => callback(locale), "locale");
  }

  subscribeNavigationItemKey(
    callback: (itemKey: PortalState["navigationItemKey"]) => void,
    withCurrent = true
  ) {
    if (withCurrent) {
      callback(this.navigationItemKey);
    }
    return this.subscribe(
      (_, itemKey) => callback(itemKey),
      "navigationItemKey"
    );
  }

  subscribeScope(
    callback: (scope: PortalState["app"]["scope"]) => void,
    withCurrent = true
  ) {
    if (withCurrent) {
      callback(this.app.scope);
    }
    return this.subscribe((_, app) => callback(app.scope), "app");
  }

  private async loadRolesAndPermissions(): Promise<void> {
    const token = getCurrentAccessToken();
    if (!token) return;

    const { roles, permissions } = await fetchUserAccessInfo();
    this.rolesAndPermissions = [...roles, ...permissions];
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

      // The returned item might be home, if non-existing
      if (item.key !== itemKey) {
        this.navigationItemKey = item.key;
      }
    }

    updateQueryParam(NAV_ITEM_QUERY_PARAM, this.navigationItemKey);
  }

  private updateApp(item: PortalState["navigationItem"]): void {
    this.app = getApp(item);
  }
}

export const portalState = new PortalState();

// Update locale if state changes
portalState.subscribeLocale(handleLocaleChange);
function handleLocaleChange(locale: string) {
  updateLocale(locale);
  updateQueryParam(LOCALE_QUERY_PARAM, locale);
}
