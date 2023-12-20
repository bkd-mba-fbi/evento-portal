export type EnvSettings = Readonly<{
  apiServer: Readonly<string>;
  oAuthServer: Readonly<string>;
  oAuthPrefix: Readonly<string>;
  oAuthClientId: Readonly<string>;
}>;

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
    }
  );
}
