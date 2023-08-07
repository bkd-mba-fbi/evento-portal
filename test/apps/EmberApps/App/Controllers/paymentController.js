define([
    'jquery',
    'ember',
    'constants',
    'api'
], function ($, ember, constants, api) {
    ClxApp.PaymentController = ember.Controller.extend({
        init: function() {
            this._super();            
        },
        actions: {
            closeDialog: function() {
                this.send('closeRoute');
            },
            setPayment: function () {
                var that = this;
                //payment with pdf download
                var pm = this.get('model.selectedPayment');
                if (!pm.IsCreditCardPayment && pm.PDFDownload) {
                    var win = window.open('#/invoiceLoading/' + this.get('model.invoice.Id') + '/' + this.get('model.selectedPaymentId'), '_blank');
                    $(win).on('unload', function () {
                        that.send('closeRoute', true);
                    });
                    return;
                }
                
                //creditcard payment
                this.set('isWorking', true);
                //set payment
                this.set('model.invoice.IdKindOfPayment', this.get('model.selectedPaymentId'));
                // this two calls can run parallel
                new ember.RSVP.hash({
                    update: new ember.RSVP.Promise(function(resolve, reject) {
                        api.updateOpenInvoice(that.get('model.invoice'), resolve,
                            function() {
                                console.error('Could not set payment on invoice ID ' + that.get('model.invoice.Id'));
                                reject();
                            });
                    }),
                    setUrl: new ember.RSVP.Promise(function(resolve, reject) {
                        //success
                        if (pm.IsCreditCardPayment) {
                            //send returnlocation to REST
                            api.getPostfinance(that.get('model.invoice.Id'),
                                document.location.href,
                                resolve,
                                function() {
                                    console.error('Could not set returnlocation for onlinepayment');
                                    reject();
                                });
                        } else {
                            resolve();
                        }
                    })
                }).then(function () {
                    if (pm.IsCreditCardPayment) {
                        $('#postfinancePaymentForm').submit();
                    }
                    that.set('isWorking', false);
                }, function () {
                    that.set('isWorking', false);
                });
                
            }
        },
        paymentUrl: function() {
            var model = this.get('model.fields');
            return $.grep(model,
                function(pair) {
                    return pair.Key === constants.payment.pspEndPointKey;
                })[0].Value;
        }.property('model.fields'),

        selectedPaymentIdChanged: function (key, value) {
            var model = this.get('model');
            for (var i = 0; i < model.payment.length; i++)
            {
                if (model.payment[i].IdOpa === model.selectedPaymentId) {
                    this.set('model.selectedPayment', model.payment[i]);
                    break;
                }
            }
        }.observes('model.selectedPaymentId'),

        referenceNumber: function () {
            if (!this.get('model.selectedPayment.IsCreditCardPayment'))
                return false;

            var fields = this.get('model.fields');
            if (fields) {
                for (var i = 0; i < fields.length; i++)
                    if (fields[i].Key === 'ORDERID') {
                        return fields[i].Value === this.get('model.invoice.Number') ? false : fields[i].Value;
                    }
            }

            return false;
        }.property('model.selectedPaymentId')

    });
});