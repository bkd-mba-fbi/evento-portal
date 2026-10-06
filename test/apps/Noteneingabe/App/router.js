define([
    'ember',
    'application',
    'api',
    'settings',
    'urlHelpers',
    'arrayHelpers'
], function (ember, app, api, settings, urlHelpers, arrayHelpers) {
    app.Router = ember.Router.extend();
    app.Router.map(function () {
        this.route('grading', { path: '/grading/:idEvent' });
        this.route('statistic', { path: '/statistic/:idEvent' });
    });

    app.IndexRoute = Ember.Route.extend({
        beforeModel: function () {
            var idEvent = urlHelpers.getUrlParameter(settings.querystringName);
            if (idEvent)
                this.transitionTo('grading', idEvent);
        }
    });

    app.GradingRoute = ember.Route.extend({
        model: function (params) {
            return app.loadGradingModels(params);
        },
        afterModel: function (model) {
            var settingsDetails = settings.grading.adColumns.concat(settings.grading.adRange);
            var subscriptionDetails = arrayHelpers.intersectArrays(model.SubscriptionDetails, settingsDetails, function (subDet, setDet) {
                return subDet.IdAnmeldeVSS === setDet;
            });
            ember.set(model, 'SubscriptionDetails', subscriptionDetails);
            if (subscriptionDetails.length === 0 && model.Event.Scale === undefined) {
                ember.set(model, 'hasNothingToShow', true);
            }
        }
    });

    app.StatisticRoute = ember.Route.extend({
        model: function (params) {
            return app.loadGradingModels(params);
        },
        afterModel: function (model) {
            if (!model)
                return;
            if (model.Event.Scale === undefined) {
                ember.set(model, 'hasNothingToShow', true);
            }
        }
    });

    app.loadGradingModels = function(params) {
        return new ember.RSVP.hash({
            Event: api.ember.getEvent(params.idEvent).then(function (event) {
                return new ember.RSVP.Promise(function (resolve) {
                    if (!event || !event.GradingScaleId) {
                        resolve(event);
                        return;
                    }

                    api.ember.getGradingScale(event.GradingScaleId).then(function (scale) {
                        event.Scale = scale;
                        resolve(event);
                    });
                });
            }),
            SubscriptionDetails: api.ember.getSubscriptionDetailsByEvent(params.idEvent),
            GradingItems: api.ember.getGradingItems(params.idEvent)
        });
    };
});