define([
    'ember',
    'application',
    'translate'
], function (ember, app, translate) {
    app.IndexRoute = ember.Route.extend({
        beforeModel: function (transition) {
            // always transition to input
            this.transitionTo('input');
        }
    });
});