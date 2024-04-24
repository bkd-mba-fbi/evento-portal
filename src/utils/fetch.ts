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

type SchoolAppNavigation = Readonly<{
  instanceName: string;
  guiLanguage: string[];
}>;

export async function fetchSchoolAppNavigation(): Promise<SchoolAppNavigation> {
  const url = `${envSettings.apiServer}/Configurations/SchoolAppNavigation`;
  return await fetchApi<SchoolAppNavigation>(url);
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
type UserSettings = Readonly<{
  Id: string;
  Settings: ReadonlyArray<UserSetting>;
}>;
type UserSetting = Readonly<{
  Key: string;
  Value: string;
}>;
export type NotificationDataEntry = Readonly<{
  id: number;
  subject: string;
  body: string;
}>;

export async function fetchNotifications(): Promise<
  ReadonlyArray<NotificationDataEntry>
> {
  const url = `${envSettings.apiServer}/UserSettings/Cst`;
  const { Settings } = await fetchApi<UserSettings>(url);
  const notificationData = Settings.find(
    (setting) => setting.Key === NOTIFICATION_DATA_KEY,
  )?.Value;
  return notificationData ? JSON.parse(notificationData) : [];
}

export function updateNotifications(
  notifications: ReadonlyArray<NotificationDataEntry>,
): Promise<void> {
  const url = `${envSettings.apiServer}/UserSettings/Cst`;
  const userSettings: UserSettings = {
    Id: "Cst",
    Settings: [
      { Key: NOTIFICATION_DATA_KEY, Value: JSON.stringify(notifications) },
    ],
  };
  return fetchApi(
    url,
    { method: "PATCH", body: JSON.stringify(userSettings) },
    true,
  );
}

function fetchApi(
  url: string | URL,
  options:
    | Readonly<{
        method?: string;
        body?: string;
      }>
    | undefined,
  emptyResponse: true,
): Promise<void>;
function fetchApi<T = unknown>(
  url: string | URL,
  options?: Readonly<{
    method?: string;
    body?: string;
  }>,
): Promise<T>;
async function fetchApi<T = unknown>(
  url: string | URL,
  {
    method = "GET",
    body = undefined,
  }: Readonly<{
    method?: string;
    body?: string;
  }> = {},
  emptyResponse?: true,
): Promise<T | void> {
  const { accessToken } = tokenState;
  if (!accessToken) {
    throw new Error("No token available");
  }

  const headers = new Headers({
    "CLX-Authorization": `token_type=urn:ietf:params:oauth:token-type:jwt-bearer, access_token=${accessToken}`,
    "Content-Type": "application/json",
  });

  const response = await fetch(url, { method, headers, body });
  if (!emptyResponse) {
    return response.json();
  }
}
