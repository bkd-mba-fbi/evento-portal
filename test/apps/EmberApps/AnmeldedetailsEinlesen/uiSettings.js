define([
    'ember',
    'main_uiSettings'
], function (ember, mainUiSettings) {
    var uiSettingsClass = ember.Object.extend(mainUiSettings);
    var uiSettings = {
        // module specific settings
    };
    var inheritedUiSettingsClass = uiSettingsClass.extend(uiSettings);
    return inheritedUiSettingsClass.create();
});