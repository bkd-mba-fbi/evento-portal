(function (root) {
    require(['../config', '../customConfig'], function (mainConfig, customConfig) {
        requirejs.config(mainConfig);
        requirejs.config(customConfig);
        require([
            'application',
            'ember',
            'framework',
            'applicationHelpers',
            'App/router',
            'App/Templates/application'
        ], function (app, ember, framework, applicationHelpers) {
            // start application
            applicationHelpers.initializeApplication(function () {
                framework.Helpers.loadCss('/CSS/jquery-ui.custom.css');
                var appName = 'ClxApp';
                var application = ember.Application.create(app);
                root[appName] = application;
                applicationHelpers.afterStartApplication();
            });
        });
    });
// ReSharper disable once ThisInGlobalContext
})(this);