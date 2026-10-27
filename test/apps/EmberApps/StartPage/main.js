require(['../config', '../customConfig'], function (mainConfig, customConfig) {
    requirejs.config(mainConfig);
    requirejs.config(customConfig);
    require([
        'loginHelpers',
        'applicationHelpers'
    ], function(loginHelpers, applicationHelpers) {
        applicationHelpers.initializeApplication(function() {}, true);
    });
});