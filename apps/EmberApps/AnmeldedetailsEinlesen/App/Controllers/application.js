define([
    'ember',
    'application'
], function (ember, app) {
    app.ApplicationController = ember.Controller.extend({
        subscriptionDetails: null, // allow all Routes to access the subscriptionDetails
        resetInputTextarea: false, // let the result Route reset the textArea when the details get sent
    });
});