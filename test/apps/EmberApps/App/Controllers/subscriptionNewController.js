define([
    'ember',
    'framework',
    'api',
    'storage',
    'eventoWidgets'
], function (ember, framework, api, storage) {
    ClxApp.SubscriptionNewController = framework.AutoSaveController.extend({
        init: function () {
            var that = this;
            ember.Instrumentation.subscribe('validationErrorOccurred',
            {
                before: function (name, timestamp, jqXHR) {
                },
                after: function (name, timestamp, jqXHR) {
                    that.set('isWorking', false);
                    that.set('hasValidationError', true);
                    that.set('validationErrorMessage', JSON.parse(jqXHR.responseJSON));
                }
            });
        },
        actions: {
            eventChosen: function (idEvent, designation) {
                this.set('idEvent', idEvent);
                this.set('designation', designation);
                this.set('hasValidationError', false);
            },
            subscribe: function () {
                this.set('isWorking', true);
                var that = this;
                api.createSubscription(storage.userSettings.personId(), this.get('idEvent'), function (result) {
                    that.set('isWorking', false);
                    storage.sessionStoreItem('isNewSubscription', true);
                    that.send('subscriptionCreated', result, that.get('designation'));
                    // HACK: never should a widget be called from within a controller.
                    // even this is the controller of the sub route. But there was no ember way feasible
                    $('#eventoSearch').eventosearch('triggerSearch');
                });
            }
        }
    });
});