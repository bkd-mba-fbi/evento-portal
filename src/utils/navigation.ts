import { Navigation, NavigationItem } from "../settings";

/**
 * Returns only navigation groups/items that are permitted on the given instance or with the given roles/permissions. Groups without items are omitted.
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
    return items.length > 0 ? [...acc, group] : acc;
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
