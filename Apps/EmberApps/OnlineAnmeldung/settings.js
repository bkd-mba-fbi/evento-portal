define([
    'ember',
    'main_settings',
    'constants'
], function (ember, mainSettings, constants) {
    var settingsClass = ember.Object.extend(mainSettings);
    var settings = {
        // module specific settings
        applicationScope: constants.applicationScope.onla,
        subscriptionsSearchDefinition: 'ONLA_Suchliste_Anmeldungen',
        eventSearchDefinition: 'ONLA_Suchliste_Anmeldbare_STG'
    };
    var inheritedSettingsClass = settingsClass.extend(settings);
    return inheritedSettingsClass.create();
});