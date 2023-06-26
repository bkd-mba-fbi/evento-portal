define([
    'ember',
    'application',
    'urlHelpers',
    'settings',
    'App/Templates/index',
    'App/Controllers/index'
], function (ember, app, urlHelpers, settings) {
    // copied from 'Noteneingabe'
    app.IndexRoute = ember.Route.extend({
        beforeModel: function () {
            var idEvent = urlHelpers.getUrlParameter(settings.querystringName);
            if (idEvent) {
                this.transitionTo('photos', idEvent);
            }
        }
    });
});
