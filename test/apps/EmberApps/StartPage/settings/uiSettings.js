define([
    'ember',
    'main_uiSettings'
], function (ember, mainUiSettings) {
    var uiSettings = {
        // module specific settings
    };
    uiSettings.__proto__ = mainUiSettings;
    return uiSettings;
});