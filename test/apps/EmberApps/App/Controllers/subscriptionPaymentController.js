define([
    'ember',
    'api',
    'storage'
], function (ember, api, storage) {
    ClxApp.SubscriptionPaymentController = ember.Controller.extend({
        actions: {
            doPayment: function () {
                var that = this;
                this.set('isWorking', true);
                api.ember.getOpenInvoiceByIdSubscription(this.get('model.SubscriptionPayment.IdSubscription'))
                    .then(function (op) {
                        if (op.Id) {
                            storage.tempInvoice(op);
                            that.send('openInvoicePayment', op.Id);
                        } else
                            that.set('model.ErrorMessage', op.errorMessage);
                        setTimeout(function () {
                            that.set('isWorking', false);
                        }, 3000);
                    });
            }
        }
    });
});