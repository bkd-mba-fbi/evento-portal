import { getEnvSettings } from "../env-settings";
import { tokenState } from "../state/token-state";

const envSettings = getEnvSettings();

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

const NOTIFICATION_DATA_KEY = "notificationData";
type UserSetting = Readonly<{
  Key: string;
  Value: string;
}>;
export type NotificationData = Readonly<{
  id: number;
  subject: string;
  body: string;
}>;
export async function fetchNotificationData(): Promise<
  ReadonlyArray<NotificationData>
> {
  const url = `${envSettings.apiServer}/UserSettings/Cst`;
  const { Settings } = await fetchApi<{
    Settings: ReadonlyArray<UserSetting>;
  }>(url);
  const notificationData = Settings.find(
    (setting) => setting.Key === NOTIFICATION_DATA_KEY,
  )?.Value;
  return notificationData ? JSON.parse(notificationData) : [];
}

export function saveNotificationData() {
  const url = `${envSettings.apiServer}/UserSettings/Cst`;
  fetchApi(url, { method: "PATCH", body: "body" });
}

async function fetchApi<T = unknown>(
  url: string | URL,
  {
    method = "GET",
    body = undefined,
  }: Readonly<{
    method?: string;
    body?: string;
  }> = {},
): Promise<T> {
  const { accessToken } = tokenState;
  if (!accessToken) {
    throw new Error("No token available");
  }

  const headers = new Headers({
    "CLX-Authorization": `token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${accessToken}`,
    "Content-Type": "application/json",
  });

  const response = await fetch(url, { method, headers, body });
  return await response.json();
}
