import { settings } from "../settings";
import { getCurrentAccessToken } from "./storage";

export type UserAccessInfo = {
  roles: ReadonlyArray<string>;
  permissions: ReadonlyArray<string>;
};

export async function fetchUserAccessInfo(): Promise<UserAccessInfo> {
  const url = `${settings.api.server}/UserSettings/?expand=AccessInfo`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await fetchApi<any>(url);

  return {
    roles: result?.AccessInfo?.Roles ?? [],
    permissions: result?.AccessInfo?.Permissions ?? [],
  };
}

async function fetchApi<T = unknown>(
  url: string | URL,
  { method = "GET" } = {}
): Promise<T> {
  const token = getCurrentAccessToken();
  if (!token) {
    throw new Error("No token available");
  }

  const headers = new Headers({
    "CLX-Authorization": `token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${token}`,
    "Content-Type": "application/json",
  });

  const response = await fetch(url, { method, headers });
  const json = await response.json();
  return json;
}
