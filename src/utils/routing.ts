import { settings } from "../settings";
import { NAV_ITEM_QUERY_PARAM } from "../state/portal-state";
import { getApp, getScope } from "./navigation";

export function updateQueryParam(key: string, value: string): void {
  const url = new URL(location.href);
  url.searchParams.set(key, value);
  history.pushState({}, "", url);
}

export function getScopeFromUrl(): string {
  const url = new URL(location.href);
  const itemKey = url.searchParams.get(NAV_ITEM_QUERY_PARAM);
  return itemKey
    ? getScope(settings.navigation, itemKey)
    : getApp(settings.navigationHome).scope;
}
