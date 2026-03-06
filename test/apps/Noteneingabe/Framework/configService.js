define(['appConfig'], function (appConfig) {

    if (window.noteneingabe) {
        return {
            oauthUrl: window.noteneingabe.settings.oAuthUrl ? window.noteneingabe.settings.oAuthUrl : appConfig.oauthUrl,
            apiUrl: window.noteneingabe.settings.apiUrl ? window.noteneingabe.settings.apiUrl : appConfig.apiUrl,
            webBaseUrl: window.noteneingabe.settings.webBaseUrl ? window.noteneingabe.settings.webBaseUrl : appConfig.webBaseUrl,
            loginUrl: window.noteneingabe.settings.loginUrl ? window.noteneingabe.settings.loginUrl : appConfig.loginUrl,
            instanceId: window.noteneingabe.settings.instanceId ? window.noteneingabe.settings.instanceId : appConfig.instanceId,
            applicationScope: window.noteneingabe.settings.appScope ? window.noteneingabe.settings.appScope : appConfig.applicationScope,
            clientId: window.noteneingabe.settings.clientId ? window.noteneingabe.settings.clientId : appConfig.clientId,
            tokenType: appConfig.tokenType,
            useAutoLogin: appConfig.useAutoLogin,
            refreshInterval: appConfig.refreshInterval,
            refreshSessionUrl: appConfig.refreshSessionUrl
        };
    }
    else
        return appConfig;
});
