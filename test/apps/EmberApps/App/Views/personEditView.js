define([
    'ember',
    'framework',
    'guiHelpers'
], function (ember, framework, guiHelpers) {
    ClxApp.PersonEditView = framework.ValidatedView.extend({
        loadWidgets: function () {
            guiHelpers.loadAllWidgetControls();
        }
        
    });
});