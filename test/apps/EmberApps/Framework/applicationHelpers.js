define([
    'jquery',
    'ember',
    'handlebars',
    'application',
    'appConfig',
    'globalize',
    'api',
    'storage',
    'translate',
    'loginHelpers',
    'settings',
    'uiSettings',
    'icons',
    'constants'], function ($, ember, handlebars, app, appConfig, globalize, api, storage, translate, loginHelpers, settings, uiSettings, icons, constants) {

    // actual module
    return {
        _sessionRefreshIntervalId: undefined,

        userWasActive: false,

        initializeApplication: function(initialized, preventAutologin) {
            var that = this;

            // validate appConfig
            var valid = true;
            if (!this._notNullConfigAndLog(appConfig.tokenType, 'tokenType'))
                valid = false;
            if (!this._notNullConfigAndLog(appConfig.apiUrl, 'apiUrl'))
                valid = false;
            if (!this._notNullConfigAndLog(appConfig.webBaseUrl, 'webBaseUrl'))
                valid = false;
            if (!appConfig.loginUrl) {
                if (!this._notNullConfigAndLog(appConfig.oauthUrl, 'oauthUrl', 'when loginUrl is empty'))
                    valid = false;
                if (!this._notNullConfigAndLog(appConfig.instanceId, 'instanceId', 'when loginUrl is empty'))
                    valid = false;
                if (!this._notNullConfigAndLog(appConfig.clientId, 'clientId', 'when loginUrl is empty'))
                    valid = false;
            }

            if (!valid)
                alert('Errors in configuration (appConfig.js). Please see developer console for more details.');

            // check for tokens after OAuth redirect
            loginHelpers.checkToken();

            // call autologin if configured
            if (appConfig.useAutoLogin && !preventAutologin) {
                loginHelpers.autoCheckForLogin();
                that._internalInitializeApplication(initialized);
            } else {
                that._internalInitializeApplication(initialized);
            }
        },

        afterStartApplication: function() {
            ClxApp.Router.map(function() {
                this.route('error400', { path: '/error/400' });
                this.route('error401', { path: '/error/401' });
                this.route('error403', { path: '/error/403' });
                this.route('error404', { path: '/error/404' });
                this.route('error500', { path: '/error/500' });
                this.route('report', { path: '/reports/:context/:idReport/:ids' });
                this.route('sdFile', { path: '/sdFiles/:idObject/:fileName' });
            });

            ClxApp.ReportRoute = ember.Route.extend({
                model: function (params) {
                    return new ember.RSVP.hash({
                        tokenResponse: api.ember.getFileToken(),
                        context: params.context,
                        idReport: params.idReport,
                        ids: params.ids
                });
                },
                afterModel: function(model) {
                    location.replace(api.getCrystalReportUrl(model.context, model.idReport, model.ids, model.tokenResponse.access_token));
                }
            });

            ClxApp.SdFileRoute = ember.Route.extend({
                model: function (params) {
                    return new ember.RSVP.hash({
                        tokenResponse: api.ember.getFileToken(),
                        idObject: params.idObject,
                        fileName: params.fileName
                    });
                },
                afterModel: function (model) {
                    location.replace(api.getSubscriptionDetailFileUrl(model.idObject, model.fileName, model.tokenResponse.access_token));
                }
            });

            ClxApp.ApplicationRoute = ember.Route.extend({
                setupController: function(controller, model) {
                    ember.Instrumentation.subscribe('errorOccurred',
                    {
                        before: function() {
                        },
                        after: function() {
                            var info = storage.errorInfo();
                            controller.transitionToRoute('error' + info.statusCode);
                        }
                    });
                }
            });
            ClxApp.Error400Route = ember.Route.extend({
                model: function() {
                    return storage.errorInfo();
                }
            });
            ClxApp.Error401Route = ember.Route.extend({
                model: function() {
                    return storage.errorInfo();
                }
            });
            ClxApp.Error403Route = ember.Route.extend({
                model: function() {
                    return storage.errorInfo();
                }
            });
            ClxApp.Error404Route = ember.Route.extend({
                model: function() {
                    return storage.errorInfo();
                }
            });
            ClxApp.Error500Route = ember.Route.extend({
                model: function() {
                    return storage.errorInfo();
                }
            });
        },

        _notNullConfigAndLog: function(value, propertyName, additionalMessage) {
            if (!value) {
                var message = 'appConfig.js: ' + propertyName + ' must be set';
                if (additionalMessage)
                    message += ' ' + additionalMessage;
                console.error(message);
                return false;
            }
            return true;
        },

        _internalInitializeApplication: function(initialized) {
            var that = this;

            // TODO aneu: this is not common logic (search settings) and maybe should be moved somewhere else
            storage.searchSettings.clearSettings();
            storage.clearTempData();

            this.checkBrowserVersion();

            // check if logged in
            var loggedIn = loginHelpers.isLoggedIn();
            if (!loggedIn) {
                this._detectLanguage(function (lang) {
                    $('html').attr('lang', lang);
                    // init translate with language so far (will be reinitialized as soon as user language has been loaded after login)
                    translate.init(function () {
                        loginHelpers.tryAddLoginLink();
                    });
                });
            }

            // only continue if logged in
            if (!loggedIn)
                return;

            api.getUserSettings(function(userSettings) {

                // check application scope
                if (settings.applicationScope && settings.applicationScope !== userSettings.ApplicationScope) {
                    if (appConfig.loginUrl) {
                        console.error('settings.js: application scope ' +
                            settings.applicationScope +
                            ' has been configured for this module. The current access_token has application scope ' +
                            userSettings.ApplicationScope +
                            '.');
                        alert('Errors in configuration (settings.js). Please see developer console for more details.');
                    } else
                        loginHelpers.refreshToken(userSettings.UiCulture);
                }

                // save to storage
                storage.userSettings.userId(userSettings.Id);
                storage.userSettings.uiCulture(userSettings.UiCulture);
                storage.userSettings.applicationScope(userSettings.ApplicationScope);
                storage.userSettings.personId(userSettings.IdPerson);

                // aneu: time entry is not used at the moment and causes problems in IE sometimes.
                //$.timeEntry.setDefaults($.timeEntry.regionalOptions[userSettings.uiCulture]);

                // initialize globalize with new culture
                require([userSettings.UiCulture],
                    function() {
                        globalize.culture(userSettings.UiCulture);
                    });

                that._initializeEmberHelpers();

                // fill placeholders of web-modules standard / set language to html
                $('html').attr('lang', userSettings.UiCulture);

                translate.init(function () {
                    loginHelpers.tryAddLoginInfo(userSettings);
                    loginHelpers.tryAddLanguageInfo(userSettings.UiCulture);

                    // load all common components
                    require([
                        'components/contextMenuButtonComponent',
                        'components/crystalReportChooserComponent',
                        'components/fixedHeaderTableComponent',
                        'components/iconButtonComponent',
                        'components/eventoSearchComponent',
                        'components/overlayDialogComponent',
                        'components/maskedTextboxComponent',
                        'components/comboBoxComponent',
                        'components/blendElementComponent',
                        'components/numberTextboxComponent',
                        'components/dateTextboxComponent',
                        'components/adaptableTextBoxComponent'
                    ], function () {
                        // call callback of caller ;)
                        if (initialized)
                            initialized();
                    });
                });
            });

            if (appConfig.refreshInterval && appConfig.refreshSessionUrl) {
                this._sessionRefreshIntervalId = setInterval(function() {
                        if (that.userWasActive)
                            $.get(appConfig.refreshSessionUrl);
                        that.userWasActive = false;
                    },
                    appConfig.refreshInterval * 60000);
            }
        },

        _initializeEmberHelpers: function () {
            app.TranslateHelper = ember.Helper.helper(function(value, allowHtml) {
                var string = translate.getString(value);
                if (!allowHtml && string.indexOf('<span') !== 0)
                    string = handlebars.Utils.escapeExpression(string);
                return new Ember.String.htmlSafe(string);
            });

            app.IconHelper = ember.Helper.helper(function(value) {
                return new Ember.String.htmlSafe(icons[value]);
            });

            app.ConcatHelper = ember.Helper.helper(function() {
                var array = Array.prototype.slice.call(arguments);
                array.pop();
                return new Ember.String.htmlSafe(array.join('_'));
            });

            app.DateFormatHelper = ember.Helper.helper(function (value) {
                var date = new Date(value);
                if (isNaN(date)) return "";
                return new Ember.String.htmlSafe(globalize.format(date, 'd'));
            });

            app.ConstantHelper = ember.Helper.helper(function(value) {
                return new Ember.String.htmlSafe(constants[value]);
            });

            app.CurrencyFormatHelper = ember.Helper.helper(function(value) {
                return new Ember.String.htmlSafe(globalize.format(value, 'N'));
            });

            app.Nl2brHelper = ember.Helper.helper(function (value) {
                if (!value || value.trim === undefined)
                    return '';
                return new Ember.String.htmlSafe(value.trim().replace(/(\r\n|\n|\r)/gm, "\r\n<br/>"));
            });

            app.SessionStoreHelper = ember.Helper.helper(function(key, removeStore) {
                var result = storage.sessionStoreItem(key);
                if (removeStore === true)
                    storage.removeSessionStoreItem(key);
                return result;
            });

            app.SettingsHelper = ember.Helper.helper(function (values) {
                if (values.length === 0)
                    console.error('didn\'t pass a key to the settings helper');
                var array = values[0].split('.');
                var tempObj = settings;
                $.each(array,
                    function() {
                        tempObj = tempObj[this];
                        if (tempObj === undefined) {
                            console.error('settings helper value did not find a value in settings file: ' + value[0]);
                            return false;
                        }
                        return true;
                    });
                return tempObj;
            });
        },

        _detectLanguage: function(success) {
            // detect language or set default language if not set yet
            if (appConfig.useLanguageDetection) {
                var languageToSet = undefined;
                api.getPreferredLanguages(function (langs) {
                    // check if any language of the preferred is available.
                    if (uiSettings.usedLanguages) {
                        $.each(langs,
                            function(index, lang) {
                                $.each(uiSettings.usedLanguages,
                                    function(i, l) {
                                        if (lang === l.key || l.key.indexOf(lang) > -1) {
                                            languageToSet = l;
                                            return false;
                                        }
                                        return true;
                                    });
                                return languageToSet === undefined;
                            });
                    }

                    if (languageToSet !== undefined && success)
                        success(languageToSet.key);
                });
            } else {
                var userLanguage = $('html').attr('lang');
                // the language was not provided by html 5 attribute lang
                if (!userLanguage || userLanguage.length === 0) {
                    var language = 'de-CH';
                    // check if languages have been set in settings
                    if (uiSettings.usedLanguages && uiSettings.usedLanguages.length > 0)
                        language = uiSettings.usedLanguages[0].key;
                } else
                    language = userLanguage;

                if (success)
                    success(language);
            }
        },

        checkBrowserVersion: function() {
            var browserInfo = this.getBrowserInfo();
            if (browserInfo.name === 'MSIE' || browserInfo.name === 'IE') {
                if (parseInt(browserInfo.version) < 10)
                    alert('The version of your browser is to old to display this content. Please update your Internet Explorer to a version of at least IE 10.');
            }
        },

        getBrowserInfo: function() {
            var ua = navigator.userAgent,
                tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return { name: 'IE', version: (tem[1] || '') };
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\bOPR\/(\d+)/)
                if (tem != null) {
                    return { name: 'Opera', version: tem[1] };
                }
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) {
                M.splice(1, 1, tem[1]);
            }
            return {
                name: M[0],
                version: M[1]
            };
        }
    };
});