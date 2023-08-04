// Rename this file to settings.js and adjust the settings

window.stellvertretung = window.stellvertretung || {};

window.stellvertretung.settings = {
  /**
   * General settings
   */
  // API base URL (without trailing slash)
  apiUrl: window.parent.eventoPortal.settings.apiServer,
  oAuthUrl: window.parent.eventoPortal.settings.oAuthServer + window.parent.eventoPortal.settings.oAuthPrefix,
  oAuthRedirectUrl: window.parent.location.href,
  webModuleRedirectUrlAdHoc: window.parent.location.href,
  clientId: window.parent.eventoPortal.settings.oAuthClientId,
  appScope: 'Tutoring',
  instanceId: '111',

  // Path (without trailing slash, relative to the index.html) to the
  // JavaScript bundles and the assets directory containing image and
  // locale files
  scriptsAndAssetsPath: '.',
};
