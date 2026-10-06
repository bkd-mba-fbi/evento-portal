// Rename this file to settings.js and adjust the settings

window.stellvertretung = window.stellvertretung || {};

window.stellvertretung.settings = {
  /**
   * General settings
   */
  // API base URL (without trailing slash)
  apiUrl: 'https://eventotest.api',
  oAuthUrl: 'https://eventoauthtest.api',
  oAuthRedirectUrl: 'https://eventotest.api',
  clientId: 'CLX.Evento-Public',
  appScope: 'Tutoring',
  instanceId: '111',

  // Path (without trailing slash, relative to the index.html) to the
  // JavaScript bundles and the assets directory containing image and
  // locale files
  scriptsAndAssetsPath: '.',
};
