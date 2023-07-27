import { getCurrentAccessToken } from "./storage";

const envSettings = window.eventoPortal.settings;

if (typeof envSettings?.apiServer !== "string") {
  throw new Error("Invalid 'apiServer' setting");
}

export type UserAccessInfo = Readonly<{
  roles: ReadonlyArray<string>;
  permissions: ReadonlyArray<string>;
}>;

export async function fetchUserAccessInfo(): Promise<UserAccessInfo> {
  const url = `${envSettings.apiServer}/UserSettings/?expand=AccessInfo`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await fetchApi<any>(url);

  return {
    roles: result?.AccessInfo?.Roles ?? [],
    permissions: result?.AccessInfo?.Permissions ?? [],
  };
}

export async function fetchInstanceName(): Promise<string | null> {
  const url = `${envSettings.apiServer}/Configurations/SchoolAppNavigation`;
  const result = await fetchApi<{ instanceName: string }>(url);

  return result?.instanceName || null;
}

export type Substitution = Readonly<{
  Id: number;
  HolderId: number;
  Holder: string;
  DateFrom: string;
  SubstituteId: number;
  Substitute: string;
}>;

export function fetchCurrentSubstitutions(): Promise<
  ReadonlyArray<Substitution>
> {
  const url = `${envSettings.apiServer}/TeacherSubstitutions/current`;
  return fetchApi<ReadonlyArray<Substitution>>(url);
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
