define([
    'ember',
    'application',
    'App/Controllers/validation',
    'App/Templates/validation',
    'App/Services/validationHelpers',
], function (ember, app) {
    app.ValidationRoute = ember.Route.extend({
        renderTemplate: function () {
            this.render();

            // render the navigation
            this.render('navigation', {
                into: 'validation',
                outlet: 'navigation'
            });
        },

        // service
        validationHelpers: ember.inject.service('validationHelpers'),

        model: function (params, transition) {

            var model = ember.Object.create();

            // get the subscriptionDetails
            var applicationController = this.controllerFor('application');
            var subscriptionDetails = applicationController.get('subscriptionDetails');

            if (subscriptionDetails === null) {
                // there are no subscriptionDetails
                this.transitionTo('input');
                return;
            }

            // put a reference to the subscriptionDetails object on the model
            model.set('subscriptionDetails', subscriptionDetails);

            // when there are only errors
            // there is no reason to continue
            var thereAreOnlyErrors = true;

            // cache api responses until 
            // every row is validated
            var cache = {
                events: {},
                subscriptionDetails: {},
                names: {}
            };

            var validationHelpers = this.get('validationHelpers');

            // validate the subscriptionDetails
            subscriptionDetails.reduce(function (previous, item) {
                return previous.then(function () {
                    return validationHelpers.validateSubscriptionDetail(cache, item).then(function () {
                        if (item.get('error') === undefined) {
                            thereAreOnlyErrors = false;
                        }
                    });
                });
            }, ember.RSVP.Promise.resolve()).then(function () {

                // every row has been checked
                model.set('everythingIsChecked', true);
                model.set('thereAreOnlyErrors', thereAreOnlyErrors);
            });

            return model;
        },

        actions: {
            willTransition: function (transition) {
                if (transition.targetName === 'result') {
                    if (this.controller.get('cannotContinue')) {
                        transition.abort();
                    }
                } else {
                    if (this.controller.get('cannotGoBack')) {
                        transition.abort();
                    }
                }
            }
        }
    });
});