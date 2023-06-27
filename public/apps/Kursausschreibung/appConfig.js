window.kursausschreibung = window.kursausschreibung || {};
window.kursausschreibung.appConfig = {
    // the token type
    "tokenType": "urn:ietf:params:oauth:token-type:jwt-bearer",
    // API base URL without trailing slash
    "apiUrl": 'https://eventoapp-test.erz.be.ch/restApi', // "https://b17eb32d-b72d-4238-a677-74639b5dbf20.mock.pstmn.io"
    // base Url of the web application without trailing slash (also the redirect url for public clients)
    "webBaseUrl": null,
    // url to a page that handles login without trailing slash. If there is no login page on the website, this
    // must be the url of the login form in CLX.Evento OAuth Server: https://{BaseUriOAuth}/Authorization/{InstanceId}/Login
    "loginUrl": null,
    // base url of the CLX.Evento OAuth Server. Provide this value if you are intending to use CLX.Evnto OAuth Server
    // for authentication. In this case you MUST leave "loginUrl" empty
    "oauthUrl": null,
    // the instance id for this application. This value is mandatory when authenticate with CLX.Evento OAuth Server
    "instanceId": null,
    // the client id for this application. This value is mandatory when authenticate with CLX.Evento OAuth Server
    "clientId": null,
    // url to a page that can refresh the session (website and modules)
    "refreshSessionUrl": "../tools/RefreshSession.aspx",
    // the interval to refresh the session on website and modules (in minutes)
    "refreshInterval": 5,
    // set this to true if you want to use autologin on your page. 
    "useAutoLogin": false,
    // set this to true if your webserver is not detecting the language, or if you can't add the language to the <html> element (HTML5)
    "useLanguageDetection": true,

    "applicationScope": "Public"
};