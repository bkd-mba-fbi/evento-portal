// @ts-check

/**
 * This file contains the environment-specific configuration of the
 * Evento Portal. Rename this file to `public/settings.js` and adjust
 * its contents. For static configuration see `src/settings.ts`.
 */
window.eventoPortal = {
  settings: {
    /**
     * Base URL of the Evento API
     */
    apiServer: "https://eventotest.api/restApi",

    /**
     * Base URL of the OAuth provider without any path part
     */
    oAuthServer: "https://eventotest.api",

    /**
     * Path prefix for OAuth endpoints
     */
    oAuthPrefix: "/OAuth",

    /**
     * The OAuth client ID
     */
    oAuthClientId: "example",

    /**
     * Refresh time for notifications
     */
    notificationRefreshTime: 30,
  },
};
