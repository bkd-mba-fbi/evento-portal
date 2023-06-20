import {
  App,
  Navigation,
  NavigationGroup,
  NavigationItem,
  settings,
} from "../settings";

/**
 * Returns navigation item (and its group) with given item key.
 */
export function getNavigationItem(
  navigation: Navigation,
  itemKey: string
): { item: NavigationItem; group: NavigationGroup | null } {
  switch (itemKey) {
    case settings.navigationMyProfile.key:
      return { item: settings.navigationMyProfile, group: null };
    case settings.navigationMySettings.key:
      return { item: settings.navigationMySettings, group: null };
    default: {
      for (const group of navigation) {
        const item = group.items.find(({ key }) => key === itemKey);
        if (item) {
          return { item, group };
        }
      }
      return { item: settings.navigationHome, group: null };
    }
  }
}

export function getApp(item: NavigationItem): App {
  const app = settings.apps.find((app) => app.key === item.appKey);
  if (!app) throw new Error(`Invalid app: ${item.appKey}`);
  return app;
}

export function getScope(navigation: Navigation, itemKey: string): string {
  const { item } = getNavigationItem(navigation, itemKey);
  return getApp(item).scope;
}

/**
 * Returns only navigation groups/items that are permitted on the
 * given instance or with the given roles/permissions. Groups without
 * items are omitted.
 */
export function filterAllowed(
  navigation: Navigation,
  instanceId: string,
  rolesOrPermissions: ReadonlyArray<string>
): Navigation {
  return navigation.reduce<Navigation>((acc, group) => {
    const items = group.items.filter(
      (item) =>
        allowedInstance(item, instanceId) &&
        allowedRoleOrPermission(item, rolesOrPermissions)
    );
    return items.length > 0 ? [...acc, { ...group, items }] : acc;
  }, []);
}

function allowedInstance(item: NavigationItem, instanceId: string): boolean {
  return (
    item.deniedInstanceIds === null ||
    item.deniedInstanceIds.includes(instanceId)
  );
}

function allowedRoleOrPermission(
  item: NavigationItem,
  rolesOrPermissions: ReadonlyArray<string>
): boolean {
  return (
    item.allowedRolesOrPermissions === null ||
    item.allowedRolesOrPermissions.some((r) => rolesOrPermissions.includes(r))
  );
}
