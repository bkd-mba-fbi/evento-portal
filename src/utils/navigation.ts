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
  ...settings.footer,
];

/**
 * Returns navigation item (and its group) with given item key.
 */
export function getNavigationItem(
  navigation: Navigation,
  itemKey: string,
): { item: NavigationItem; group: NavigationGroup | null } {
  const navigationItem = collectNavigationItems(navigation).find(
    ({ item }) => item.key === itemKey,
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
  appPath: string,
): { item: NavigationItem | null; group: NavigationGroup | null } | null {
  // Make sure we search the items by descending appPath length, to
  // match the more specific items first. I.e. if we are looking for
  // the /events/study-courses/something path, we don't want the /events
  // item to match first, instead we want to find the
  // /events/study-courses item.
  const navigationItems = sortNavigationItemsByAppPathLengthDesc(
    collectNavigationItems(navigation),
  );
  return (
    navigationItems.find(
      ({ item }) => item.appPath !== "#/" && appPath.startsWith(item.appPath),
    ) ?? null
  );
}

function collectNavigationItems(navigation: Navigation): ReadonlyArray<{
  item: NavigationItem;
  group: NavigationGroup | null;
}> {
  // Although it is not "pure", we reference the `ungroupedNavigationItems` here
  // directly, because they are not filtered based on the permissions
  return [
    ...ungroupedNavigationItems.map((item) => ({ item, group: null })),
    ...navigation.flatMap((group) =>
      group.items.map((item) => ({ item, group })),
    ),
  ];
}

function sortNavigationItemsByAppPathLengthDesc(
  items: ReadonlyArray<{
    item: NavigationItem;
    group: NavigationGroup | null;
  }>,
): ReadonlyArray<{
  item: NavigationItem;
  group: NavigationGroup | null;
}> {
  return [...items].sort((a, b) => {
    const aPath = a.item.appPath;
    const bPath = b.item.appPath;
    if (aPath.length === bPath.length) {
      return aPath.localeCompare(bPath);
    }
    return bPath.length - aPath.length;
  });
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
  rolesOrPermissions: ReadonlyArray<string>,
): Navigation {
  return navigation.reduce<Navigation>((acc, group) => {
    const items = group.items.filter(
      (item) =>
        allowedInstance(item, instanceId) &&
        allowedRoleOrPermission(item, rolesOrPermissions),
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
  rolesOrPermissions: ReadonlyArray<string>,
): boolean {
  return (
    item.allowedRolesOrPermissions === null ||
    item.allowedRolesOrPermissions.some((r) => rolesOrPermissions.includes(r))
  );
}
