(function (root) {
    require(['../config', '../customConfig'], function (mainConfig, customConfig) {
        requirejs.config(mainConfig);
        requirejs.config(customConfig);
        require([
            'application',
            'ember',
            'framework',
            'applicationHelpers',
            'api',
            'locale/de-CH',
            'locale/Custom/de-CH',
            'locale/fr-CH',
            'locale/Custom/fr-CH',
            'appConfig',
            'storage',
            'App/router'
        ], function (app, ember, framework, applicationHelpers, api, de_CH, custom_de_CH, fr_CH, custom_fr_CH, appConfig, storage) {

            // templates are all loaded when the application starts
            // so this is not needed
            app.automaticTemplateLoading = false;

            // change api a little so the callback gets called
            api.ember.getEvent = function (id) {
                return api.getEmber('Events/' + id, true);
            };

            api.ember.getSubscriptionByIdEventPerson = function (idEvent, idPerson) {
                return api.getEmber('Subscriptions/?filter.EventId==' + idEvent + '&filter.PersonId==' + idPerson, true);
            };

            api.ember.SubscriptionDetailsByIdSubscription = function (idSubscription) {
                return api.getEmber('Subscriptions/'+ idSubscription +'/SubscriptionDetails', true);
            };

            // patch langauge files
            ember.$.extend(de_CH, custom_de_CH);
            ember.$.extend(fr_CH, custom_fr_CH);

            // start application
            applicationHelpers.initializeApplication(function () {
                var appName = 'ClxApp';
                var application = ember.Application.create(app);
                root[appName] = application;
                applicationHelpers.afterStartApplication();
            });
        });
    });
})(this);