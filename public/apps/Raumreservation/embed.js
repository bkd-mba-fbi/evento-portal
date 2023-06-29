(function() {
    var headElement = document.querySelector('html > head');
    var scriptPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/' + document.currentScript.getAttribute('src');
    var baseURL = scriptPath.substring(0, scriptPath.lastIndexOf('/')) + '/';

    // Config
    var config = {};
    var globalConfig = window._RoomReservationConfig || {};
    var defaultConfig = {
        "tokenType": "urn:ietf:params:oauth:token-type:jwt-bearer",
        "webBaseUrl": location.protocol + '//' + location.host + ':' + location.port,
        "apiUrl": null,
        "oauthUrl": null,
        "clientId": null,
        "instanceId": null,
        "appScope": "NG",
        "useAutoLogin": true,
        "useLanguageDetection": true,
        "debug": false,
        "language": null,
        "availableLanguages": ["de-CH"],
        "copyright": null,
        "qrCodeBaseUrl": null,
        "showRoomReservation": true,
        "showDeviceReservation": true,
        "useHashRouting": true,
        "assetPath": baseURL + 'assets/',
        "AllowFurtherEvents": true,
        "RoomColumns": [
          {
            "Column": "Room",
            "Size": 1
          },
          {
            "Column": "RoomType",
            "Size": 1
          },
          {
            "Column": "Building",
            "Size": 0
          },
          {
            "Column": "Floor",
            "Size": 0
          },
          {
            "Column": "NumberPersons",
            "Size": 0
          }
        ]
    };

    if (globalConfig.initialPath) {
        location.hash = globalConfig.initialPath;
    }

    for (const [key, value] of Object.entries(defaultConfig)) {
        config[key] = globalConfig.hasOwnProperty(key) ? globalConfig[key] : defaultConfig[key];
    }

    var localStoragePrefix = config.instanceId + "_" + config.appScope + "_";
    if (localStorage.getItem(name) !== null) {
        localStorage.setItem(localStoragePrefix + name, localStorage.getItem(name));
    }
    if (config.language !== null) {
        localStorage.setItem(localStoragePrefix + "uiCulture", JSON.stringify(config.language));
    }

    window._RoomReservationConfig = config;

    // App-Root
    var rootElement = document.createElement('app-root');
    rootElement.innerHTML = [
    '<div class="text-center" style="margin-top: 10rem;">',
    '    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"></div>',
    '</div>'].join('\n');

    document.currentScript.parentElement.insertBefore(rootElement, document.currentScript.nextSibling);

    // CSS
    var cssURLs = [
        baseURL + './assets/css/bootstrap-clx.min.css',
        baseURL + './assets/icons/open-iconic/css/open-iconic-bootstrap.min.css',
        baseURL + './styles.css',
        'https://fonts.googleapis.com/css?family=Open+Sans'
    ];

    var lastLinkElement = null;

    for (var i = 0; i < cssURLs.length; i += 1) {
        var url = cssURLs[i];
        var linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', url);

        headElement.insertBefore(linkElement, lastLinkElement ? lastLinkElement.nextSibling : null);

        lastLinkElement = linkElement;
    }

    // Scripts
    var scripts = [
        baseURL + 'polyfills.js', 
        baseURL + 'runtime.js',
        baseURL + 'main.js'
    ];
    var lastScriptElement = rootElement;
    for (var i = 0; i < scripts.length; i += 1) {
        var url = scripts[i];
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.setAttribute('src', url);

        rootElement.parentElement.insertBefore(scriptElement, lastScriptElement.nextSibling);

        lastScriptElement = scriptElement;
    }

})();
