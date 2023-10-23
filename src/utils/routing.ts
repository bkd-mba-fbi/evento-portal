import { NavigationItem, settings } from "../settings";
import {
  LOCALE_QUERY_PARAM,
  NAV_ITEM_QUERY_PARAM,
  portalState,
} from "../state/portal-state";
import { getApp, getNavigationItem, getScope } from "./navigation";

export function cleanupQueryParams(paramsToKeep: ReadonlyArray<string>): void {
  const url = new URL(location.href);
  const keys = Array.from(url.searchParams.keys());
  keys.forEach((key) => {
    if (!paramsToKeep.includes(key)) {
      url.searchParams.delete(key);
    }
  });
  history.replaceState({}, "", url);
}

export function updateQueryParam(
  key: string,
  value: string,
  replace = false,
): void {
  const url = new URL(location.href);
  url.searchParams.set(key, value);
  if (replace) {
    history.replaceState({}, "", url);
  } else {
    history.pushState({}, "", url);
  }
}

export function getHash(url: string): string {
  return url.slice(Math.max(url.indexOf("#"), 0));
}

export function updateHash(hash: string, replace = false): void {
  const url = new URL(location.href);
  url.hash = hash;
  if (replace) {
    history.replaceState({}, "", url);
  } else {
    history.pushState({}, "", url);
  }
}

export function getScopeFromUrl(): string {
  const url = new URL(location.href);
  const itemKey = url.searchParams.get(NAV_ITEM_QUERY_PARAM);
  return itemKey
    ? getScope(settings.navigation, itemKey)
    : getApp(settings.navigationHome).scope;
}

export function buildUrl(itemKey: string): string;
export function buildUrl(item: NavigationItem): string;
export function buildUrl(itemOrKey: NavigationItem | string): string {
  const item =
    typeof itemOrKey === "string"
      ? getNavigationItem(portalState.navigation, itemOrKey).item
      : itemOrKey;
  return buildItemUrl(item).toString();
}

function buildItemUrl(item: NavigationItem): URL {
  const url = new URL(location.origin);
  url.searchParams.set(LOCALE_QUERY_PARAM, portalState.locale);
  url.searchParams.set(NAV_ITEM_QUERY_PARAM, item.key);
  url.hash = item.appPath;
  return url;
}
