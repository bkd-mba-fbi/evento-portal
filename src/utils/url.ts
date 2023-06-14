export function isExternalUrl(href: string, baseURI: string): boolean {
  if (!href || !baseURI) return false;
  const url = new URL(href, baseURI);
  const baseUrl = new URL(baseURI);
  return url.hostname !== baseUrl.hostname;
}
