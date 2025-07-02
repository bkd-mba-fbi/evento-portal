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
    apiServer: "https://eventoapp-test.apps.be.ch/restApi",

    /**
     * Base URL of the OAuth provider without any path part
     */
    oAuthServer: "https://eventoapp-test.apps.be.ch",

    /**
     * Path prefix for OAuth endpoints
     */
    oAuthPrefix: "/OAuth",

    /**
     * The OAuth client ID
     */
    oAuthClientId: "schoolWeb",

    /**
     * Notification refresh time in seconds
     */
    notificationRefreshTime: 30,
  },
};
