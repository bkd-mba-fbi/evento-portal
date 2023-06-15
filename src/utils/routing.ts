import { settings } from "../settings";
import {
  LOCALE_QUERY_PARAM,
  NAV_ITEM_QUERY_PARAM,
  portalState,
} from "../state/portal-state";
import { getApp, getNavigationItem, getScope } from "./navigation";

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

export function getUrl(itemKey: string): string {
  const { item } = getNavigationItem(portalState.navigation, itemKey);
  const url = new URL(location.origin);
  url.searchParams.set(LOCALE_QUERY_PARAM, portalState.locale);
  url.searchParams.set(NAV_ITEM_QUERY_PARAM, item.key);
  return url.toString();
}
