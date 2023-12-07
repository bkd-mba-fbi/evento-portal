define([
    'ember',
    'main_settings'
], function (ember, mainSettings) {
    var settingsClass = ember.Object.extend(mainSettings);
    var settings = {
        // module specific settings
        applicationScope: 'NG',//constants.applicationScope.tutoring,
    };
    var inheritedSettingsClass = settingsClass.extend(settings);
    return inheritedSettingsClass.create();
});