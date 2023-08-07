define([
    'ember',
    'application'
], function (ember, app) {
    app.ValidationController = ember.Controller.extend({

        cannotGoBack: ember.computed.not('model.everythingIsChecked'),

        cannotContinue: ember.computed('model.everythingIsChecked', 'model.thereAreOnlyErrors', function () {
            return !this.get('model.everythingIsChecked') || this.get('model.thereAreOnlyErrors');
        }),
    });
});