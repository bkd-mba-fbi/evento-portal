/**
 * EnvSettings with Readonly<> they must set in settings.js 
 * every other EnvSettings have default value and set log entry if not set
 */
export type EnvSettings = {
  apiServer: Readonly<string>;
  oAuthServer: Readonly<string>;
  oAuthPrefix: Readonly<string>;
  oAuthClientId: Readonly<string>;
  notificationRefreshTime: number;
};

/**
 * Returns the environment specific settings as defined in
 * `public/settings.js` (see `public/settings.example.js`). When
 * offline and settings.js has not been loaded, a dummy object with
 * empty strings is returned.
 *
 * For the static configuration that is part of the build, see
 * `settings.ts`.
 */
export function getEnvSettings(): EnvSettings {
  return (
    window.eventoPortal?.settings ?? {
      apiServer: "",
      oAuthServer: "",
      oAuthPrefix: "",
      oAuthClientId: "",
      notificationRefreshTime: 30,
    }
  );
}
