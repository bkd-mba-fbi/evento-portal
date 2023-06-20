define([
    'ember',
    'application',
    'api',
    'settings',
    'urlHelpers',
    'arrayHelpers',
    'jquery',
    'translate',
    'dateHelpers',
], function (ember, app, api, settings, urlHelpers, arrayHelpers, jquery, translate, dateHelpers) {
    app.Router = ember.Router.extend();
    app.Router.map(function () {
        this.route('grading', { path: '/grading/:idEvent' });
        this.route('statistic', { path: '/statistic/:idEvent' });
    });

    app.IndexRoute = ember.Route.extend({
        beforeModel: function () { 
            var idEvent = urlHelpers.getUrlParameter(settings.querystringName);
            if (idEvent)
                this.transitionTo('grading', idEvent);
        },
        model: function () {
            return app.loadAllEvents();
        },
        afterModel: function (model) {
            
            let availableToBeGraded = this.sortData(model.Events);

            availableToBeGraded = availableToBeGraded.map(item => {
                if(item.StatusDate){
                    const date = dateHelpers.formatDate(item.StatusDate);
                    ember.set(item, 'StatusDate', date);
                }
                
                return item;
            })

            ember.set(model, 'toGrade', availableToBeGraded); 
        },

        sortData: function(data) {
            return data.sort(function (a, b) {
                var dateA = a.StatusDate || '9999-12-31T23:59:59';
                var dateB = b.StatusDate || '9999-12-31T23:59:59';
                return new Date(dateA) - new Date(dateB) 
                || a.Designation.localeCompare(b.Designation);
            });
        }
    });

    app.GradingRoute = ember.Route.extend({
        model: function (params) {
            return app.loadGradingModels(params);
        },
        afterModel: function (model) {
            var settingsDetails = settings.grading.adColumns.concat(settings.grading.adRange);
            if (settingsDetails === undefined)
                settingsDetails = [];

            var modelDetails = model.SubscriptionDetails;
            if (modelDetails === undefined)
                modelDetails = [];

            var subscriptionDetails = arrayHelpers.intersectArrays(modelDetails, settingsDetails, function (subDet, setDet) {
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

    app.loadAllEvents = function(){
        return new ember.RSVP.hash({
            Events: api.ember.getEventsToBeGraded() 
        });
    }
});