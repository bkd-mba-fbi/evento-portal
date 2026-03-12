define(['configService', 'storage', 'urlHelpers', 'translate', 'guiHelpers', 'settings', 'uiSettings', 'icons'],
    function (appConfig, storage, urlHelpers, translate, guiHelpers, settings, uiSettings, icons) {
    var loginHelpers = {
        loginRedirectUrl: '',
        refreshTokenUrl: '',
        logoutRedirectUrl: '',

        init: function () {
            if (appConfig.loginUrl) {
                this.loginRedirectUrl = appConfig.loginUrl;
            } else {
                //loginRedirectUrl
                this.loginRedirectUrl = appConfig.oauthUrl;
                this.loginRedirectUrl += '/Authorization/';
                this.loginRedirectUrl += appConfig.instanceId;
                this.loginRedirectUrl += '/Login';
                this.loginRedirectUrl += '?client_id=';
                this.loginRedirectUrl += appConfig.clientId;
                this.loginRedirectUrl += '&redirect_uri=';
                this.loginRedirectUrl += encodeURIComponent(appConfig.webBaseUrl);

                var culture = urlHelpers.getParamIfSet('culture_info');
                if (culture)
                    this.loginRedirectUrl += '&' + culture;

                this.loginRedirectUrl += '&application_scope=';
                if (settings.applicationScope)
                    this.loginRedirectUrl += settings.applicationScope;
                //refreshTokenUrl
                this.refreshTokenUrl = appConfig.oauthUrl;
                this.refreshTokenUrl += '/Authorization/RefreshPublic';
                this.refreshTokenUrl += '?redirect_uri=';
                this.refreshTokenUrl += encodeURIComponent(appConfig.webBaseUrl);
                this.refreshTokenUrl += '&refresh_token=##refreshToken##&culture_Info=##cultureInfo##&application_scope=';
                if (settings.applicationScope)
                    this.refreshTokenUrl += settings.applicationScope;
                //logoutRedirectUrl
                this.logoutRedirectUrl = appConfig.oauthUrl;
                this.logoutRedirectUrl += '/Authorization/';
                this.logoutRedirectUrl += appConfig.instanceId;
                this.logoutRedirectUrl += '/Logout?access_token=';
                this.logoutRedirectUrl += storage.access_token();
            }
        },

        hex: function (code, length) {
            var result = Math.abs(code).toString(16);
            while (result.length < length) {
            result = '0' + result;
            }
            return result;
        },

        escape: function escape(string) {
            let str = String(string).toString();
            let result = '';
            let length = str.length;
            let index = 0;
            let chr, code;
            let raw = /[\w*+\-./@]/;

            while (index < length) {
                chr = str.charAt(index++);
                if (raw.exec(chr)) {
                result += chr;
                } else {
                code = chr.charCodeAt(0);
                if (code < 256) {
                    result += '%' + this.hex(code, 2);
                } else {
                    result += '%u' + (this.hex(code, 4).toUpperCase());
                }
                }
            } return result;
        },
        
        parseJwt: function (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedBase64 = decodeURIComponent(this.escape(window.atob(base64))) ;
            return JSON.parse(decodedBase64);
        },

        getRefreshTokenUrl: function(cultureInfo) {
            return this.refreshTokenUrl
                .replace('##cultureInfo##', cultureInfo)
                .replace('##refreshToken##', storage.refresh_token());
        },

        tryAddLoginLink: function() {
            var loginInfo = $('#CLX_LoginInfo');
            if (loginInfo.length > 0) {
                // add login link
                var link = $('<a>');
                link.attr('href', loginHelpers.loginRedirectUrl);
                link.html(translate.getString('login'));
                loginInfo.append(link);
            }
        },

        tryAddLoginInfo: function (userSettings) {
            var that = this;
            var loginInfo = $('#CLX_LoginInfo');
            if (loginInfo.length) {
                // add user info
                var userButton = guiHelpers.getButton(undefined, 'clx_userButton')
                    .appendTo(loginInfo);
                userButton.append('<span class="material-icons">person</span>');
                userButton.append('<div>' + userSettings.FullName + '</div>');
                guiHelpers.addContextMenuToButton(userButton, function (contextMenu) {
                    var logoutDiv = guiHelpers.getDiv(undefined, translate.getString('logout'))
                        .appendTo(contextMenu);
                    logoutDiv.click(function () {
                        storage.clearTokenInformation();
                        location.replace(that.logoutRedirectUrl);
                    });
                }, true);
            }
        },

        tryAddLanguageInfo: function (currentUiCulture) {
            var languageInfo = $('#CLX_LanguageInfo');
            if (languageInfo.length === 0 || !uiSettings.usedLanguages || uiSettings.usedLanguages.length === 0)
                return;

            var that = this;

            // 1 language -> verify that the language is set
            if (uiSettings.usedLanguages.length === 1) {
                if (currentUiCulture !== uiSettings.usedLanguages[0].key)
                    this.refreshToken(uiSettings.usedLanguages[0].key);
                return;
            }

            // 2 languages -> display as two language buttons
            if (uiSettings.usedLanguages.length === 2) {
                $.each(uiSettings.usedLanguages, function () {
                    var languageItem = guiHelpers.getTextButton(undefined, this.designation)
                        .addClass('languageItem')
                        .data('key', this.key)
                        .click(function() {
                            that.refreshToken($(this).data('key'));
                        });
                    if (currentUiCulture === this.key) {
                        languageItem.prop('disabled', true);
                        languageItem.addClass('currentLanguage');
                    }
                    languageInfo.append(languageItem);
                });
                return;
            } 
                var languageButton = guiHelpers.getButton(undefined, 'clx_languageButton')
                    .appendTo(languageInfo);
                    languageButton.append('<span class="material-icons">language</span>');
                    languageButton.append('<div>' + currentUiCulture + '</div>');

            // > 2 languages -> display dropdown
            if (uiSettings.usedLanguages.length > 1) {
                guiHelpers.addContextMenuToButton(languageButton,
                    function(contextMenu) {
                        $.each(uiSettings.usedLanguages,
                            function() {
                                guiHelpers.getDiv(undefined, this.designation)
                                    .data('key', this.key)
                                    .click(function() {
                                        that.refreshToken($(this).data('key'));
                                    })
                                    .appendTo(contextMenu);
                            });
                    },
                    true);
            }
        },

        refreshToken: function (cultureInfo) {
            location.replace(loginHelpers.getRefreshTokenUrl(cultureInfo) + '&moduleRedirectUrl=' + encodeURIComponent(location.href));
        },

        isLoggedIn: function () {
            var loggedToken = storage.access_token();

            if (loggedToken) {
                var expire = storage.token_expire();
                if (expire) {
                    if (Date.now() >= expire)
                        return false;
                }
                return true;
            } else {
                return false;
            }
        },

        checkToken: function() {
            var token = urlHelpers.getUrlParameter('access_token');
            if (token) {
                // redirect from OAuth Server -> store token, refresh token and expiration
                var refreshToken = urlHelpers.getUrlParameter('refresh_token');
                var expire = parseInt(urlHelpers.getUrlParameter('expires_in'));
                var date = Date.now() + expire * 1000;
                storage.access_token(token);
                storage.refresh_token(refreshToken);
                storage.token_expire(date);

                var redirectUrl = urlHelpers.getUrlParameter('moduleRedirectUrl');
                if (redirectUrl && redirectUrl.length > 0)
                    location.replace(redirectUrl);
                else
                    location.replace(location.href.split('?')[0]);
            }
        },

        autoCheckForLogin: function () {
            if (!this.isLoggedIn()) {
                //strip unrequired params
                var loc = location.href.replace(/culture_info=[^&#]+(&)?/, '');
                //redirect
                var url = this.loginRedirectUrl;
                if (appConfig.loginUrl)
                    url += '?Target=' + location.pathname;
                else
                    url += '&moduleRedirectUrl=' + encodeURIComponent(loc);
                location.replace(url);
            } else {
                this.checkToken();
            }
        }
    };

    loginHelpers.init();

    return loginHelpers;
});
