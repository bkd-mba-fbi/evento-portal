export function updateQueryParam(key: string, value: string): void {
  const url = new URL(location.href);
  url.searchParams.set(key, value);
  history.pushState({}, "", url);
}
