define([
    'ember',
    'application',
    'api',
    'App/Templates/result'
], function (ember, app, api) {
    app.ResultRoute = ember.Route.extend({
        renderTemplate: function () {
            this.render();

            // render the navigation
            this.render('navigation', {
                into: 'result',
                outlet: 'navigation'
            });
        },

        model: function () {
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
            model.set('error',false);

            // put the new subscriptionDetails on the server one after another
            subscriptionDetails.reduce(function (previous, item) {
                // only send checked items without errors
                if (!item.get('checked') || item.get('error') !== undefined) {
                    return previous;
                }

                return previous.then(function () {
                    var raw = item.get('raw');
                    raw.Value = item.get('newValue');

                    item.set('loading', true);
                    new ember.RSVP.Promise(function (resolve) {
                        // set the new value of the subscriptionDetail
                        api.updateSubscriptionDetail(raw, function () {
                            item.set('uploaded', true);
                            item.set('loading', false);
                            resolve();
                        });
                        ember.Instrumentation.subscribe('validationErrorOccurred',{
                            before(name, timestamp, payload) {
                                var message =  payload.responseJSON.Issues[0].Message;
                                if (payload.status === 409 && message.search(item.subscriptionDetailId) > 0 && message.search('= '+item.newValue) > 0) {
                                    item.set('errorUpload', message);
                                    item.set('uploaded', false);
                                    item.set('loading', false);
                                    model.set('error',true);
                   
                                }
                            },
                            after(name, timestamp, payload) {
           
                            }
                          });
                        
                    });
                    
                });
            }, ember.RSVP.Promise.resolve()).then(function () {
                // every detail has bee sent
                model.set('everythingHasBeenSent', true);
            });

            return model;
        },

        actions: {
            willTransition: function (transition) {
                if (transition.targetName === 'validation') {
                    // don't allow transitions to validation
                    transition.abort();
                    return;
                }

                if (this.controller.get('model.everythingHasBeenSent') !== true) {
                    // not every detail has been checked
                    transition.abort();
                }
            },

            didTransition: function () {
                // set the resetInputTextarea property on the application controller
                // to inform the input route that the textarea can be cleared
                this.controllerFor('application').set('resetInputTextarea', true);
            }
        }
    });
});