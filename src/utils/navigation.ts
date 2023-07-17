import {
  App,
  Navigation,
  NavigationGroup,
  NavigationItem,
  settings,
} from "../settings";

const ungroupedNavigationItems = [
  settings.navigationHome,
  settings.navigationMyProfile,
  settings.navigationMySettings,
  settings.navigationPhotoList,
  settings.navigationInputGrades,
];

/**
 * Returns navigation item (and its group) with given item key.
 */
export function getNavigationItem(
  navigation: Navigation,
  itemKey: string
): { item: NavigationItem; group: NavigationGroup | null } {
  const navigationItem = findNavigationItem(
    navigation,
    ({ key }) => key === itemKey
  );
  return navigationItem
    ? navigationItem
    : { item: settings.navigationHome, group: null };
}

/**
 * Returns navigation item (and its group) with given app path.
 */
export function getNavigationItemByAppPath(
  navigation: Navigation,
  appPath: string
): { item: NavigationItem | null; group: NavigationGroup | null } | null {
  return findNavigationItem(
    navigation,
    (item) => item.appPath !== "#/" && appPath.startsWith(item.appPath)
  );
}

function findNavigationItem(
  navigation: Navigation,
  callback: (item: NavigationItem) => boolean
): { item: NavigationItem; group: NavigationGroup | null } | null {
  let item = ungroupedNavigationItems.find((item) => callback(item));
  if (item) return { item, group: null };

  for (const group of navigation) {
    item = group.items.find((item) => callback(item));
    if (item) return { item, group };
  }

  return null;
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
