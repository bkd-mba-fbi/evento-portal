define(function() {
    return {
        // Common application settings. NOTE: all url values MUST be without trainling slash
        ////////////////////////////////////////////////////////////////////////////////////

        // the token type
        tokenType: 'urn:ietf:params:oauth:token-type:jwt-bearer',
        // API base URL without trailing slash
        apiUrl: window.parent.eventoPortal.settings.apiServer,
        // base Url of the web application without trailing slash (also the redirect url for public clients)
        webBaseUrl:  '../',
        // url to a page that handles login without trailing slash. Provide a value here, if you are not using
        // CLX.Evento OAuth Server for Authentication, but a login form on your website
        loginUrl: '../Evt_Pages/Login.aspx',
        // base url of the CLX.Evento OAuth Server. Provide this value if you are intending to use CLX.Evnto OAuth Server
        // for authentication. In this case you MUST leave "loginUrl" empty
        oauthUrl: undefined,
        // the instance id for this application. This value is mandatory when authenticate with CLX.Evento OAuth Server
        instanceId: undefined,
        // the client id for this application. This value is mandatory when authenticate with CLX.Evento OAuth Server
        clientId: undefined,
        // url to a page that can refresh the session (website and modules)
        refreshSessionUrl: '../tools/RefreshSession.aspx',
        // the interval to refresh the session on website and modules (in minutes)
        refreshInterval: 5,
        // set this to true if you want to use autologin on your page
        useAutoLogin: false,
        // set this to true if your webserver is not detecting the language, or if you can't add the language to the <html> element (HTML5)
        useLanguageDetection: true,
    };
});