define([
    'ember',
    'main_settings'
], function (ember, mainSettings) {
    var settingsClass = ember.Object.extend(mainSettings);
    var settings = {
        // module specific settings
    };
    var inheritedSettingsClass = settingsClass.extend(settings);
    return inheritedSettingsClass.create();
});