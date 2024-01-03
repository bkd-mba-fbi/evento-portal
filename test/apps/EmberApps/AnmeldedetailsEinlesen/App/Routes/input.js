define([
    'ember',
    'application',
    'translate',
    'App/Templates/input',
    'App/Controllers/input'
], function (ember, app, translate) {
    app.InputRoute = ember.Route.extend({
        renderTemplate: function () {
            this.render();

            // render the navigation
            this.render('navigation', {
                into: 'input',
                outlet: 'navigation'
            });
        },

        actions: {
            didTransition: function () {
                var applicationController = this.controllerFor('application');

                if (applicationController.get('resetInputTextarea') === true) {
                    applicationController.set('resetInputTextarea', false);
                    this.controller.set('textareaValue', '');
                }
            },

            willTransition: function (transition) {
                if (transition.targetName === 'result') {
                    // it's not possible to go directly to the result route
                    transition.abort();
                    return;
                }

                if (this.controller.get('cannotContinue')) {
                    transition.abort();
                    return;
                }

                // put the subScriptiondetails to the application controller so it can be accessed
                // by the other routes
                var subscriptionDetails = this.controller.get('subscriptionDetails');
                this.controllerFor('application').set('subscriptionDetails', subscriptionDetails);
            }
        }
    });
});