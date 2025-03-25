define([
    'main_settings',
    'constants'
], function (mainSettings, constants) {
    var settings = {
        // module specific settings
        applicationScope: 'NG',
    };
    settings.__proto__ = mainSettings;
    return settings;
});