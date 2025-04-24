define([
    'ember',
    'main_settings',
    'constants'
], function (ember, mainSettings, constants) {
    var settingsClass = ember.Object.extend(mainSettings);
    var settings = {
        // module specific settings
        applicationScope: 'Tutoring',//constants.applicationScope.tutoring,
        querystringName: 'idanlass'
    };
    var inheritedSettingsClass = settingsClass.extend(settings);
    return inheritedSettingsClass.create();
});