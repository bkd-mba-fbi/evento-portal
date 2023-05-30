define([
    'ember',
    'main_uiSettings'
], function (ember, mainUiSettings) {
    var uiSettings = {
        // module specific settings
        useDoubleClick: false,
        usedLanguages: [
            {
                key: 'de-CH',
                designation: 'DE'
            },
            {
                key: 'en-US',
                designation: 'EN'
            }
        ]
    };
    uiSettings.__proto__ = mainUiSettings;
    return uiSettings;
});