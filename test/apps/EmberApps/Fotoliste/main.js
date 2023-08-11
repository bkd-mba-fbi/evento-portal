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
            'App/router'
        ], function (app, ember, framework, applicationHelpers, api, de_CH, custom_de_CH, fr_CH, custom_fr_CH) {

            // templates are all loaded when the application starts
            // so this is not needed
            app.automaticTemplateLoading = false;

            // patch langauge files
            ember.$.extend(de_CH, custom_de_CH);
            ember.$.extend(fr_CH, custom_fr_CH);

            //console.log(ember.$.extend(de_CH, custom_de_CH));

            // patch api.js
            api.ember.getCourses = function (idEvent) {
                return api.getEmber('Courses/'+ idEvent);
            };
            api.ember.LegalRepresentativesByStudent = function (studentId) {
                return api.getEmber('Students/'+ studentId + '/LegalRepresentatives');
            };
            api.ember.LegalRepresentatives = function (param) {
                return api.getEmber('LegalRepresentatives/' + param);
            };
            api.ember.ApprenticeshipContractsCurrent = function (studentId) {
                return api.getEmber('Students/'+ studentId + '/ApprenticeshipContracts/Current');
            };
            api.ember.getSubscriptionByEvent = function(EventId) {
                return api.getEmber('Subscriptions/?filter.EventId==' + EventId);
            };
            api.ember.getSubscriptionDetailsBySubscription = function(subscriptionId) {
                return api.getEmber('Subscriptions/'+subscriptionId+'/SubscriptionDetails');
            };
            api.ember.GetReports = function(eventId) {
                return api.getEmber('CrystalReports/AvailableReports/Anlass?ids=290049,230049,290044&keys='+eventId);
            };
            ///ExcelReports/AvailableReports/{BezugsobjektTyp}?ids={BerichtsdefinitionIDs}&keys={ObjektIDs}
            api.ember.GetExcel = function(eventId) {
                return api.getEmber('ExcelReports/AvailableReports/Anlass?ids=240001,250004&keys='+eventId);
            };

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