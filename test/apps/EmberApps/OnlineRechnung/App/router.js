define([
    'jquery',
    'ember',
    'application',
    'api',
    'storage',
    'translate'
], function ($, ember, app, api, storage, translate) {
    app.Router = ember.Router.extend();
    app.Router.map(function () {
        this.resource('invoices', { path: '/invoices' }, function () {
            this.resource('payment', { path: '/:invoiceId' }, function () { });
            this.resource('paymentResult', { path: '/:invoiceId/:result' });
        });
        this.resource('subscriptionPayment', { path: '/subscriptions/:idSubscription' });
        this.resource('invoiceLoading', { path: 'invoiceLoading/:invoiceId/:kindOfPaymentId' });
    });

    app.SubscriptionPaymentRoute = ember.Route.extend({
        actions: {
            closeRoute: function() {
                this.transitionTo('');
            },
            openInvoicePayment: function(invoiceId) {
                this.transitionTo('payment', invoiceId);
            }
        },

        model: function(params) {
            return new ember.RSVP.hash({
                SubscriptionPayment: api.ember.getSubscriptionPayment(params.idSubscription)
            });
        },

        afterModel: function (model) {
            if (!model.SubscriptionPayment.IsPaymentReady) {
                var validInvoice;
                $.each(model.SubscriptionPayment.OpenInvoices, function() {
                    if (this.Balance != null) {
                        validInvoice = this;
                        return false;
                    }
                    return true;
                });
                if (validInvoice)
                    this.transitionTo('payment', validInvoice.Id);
                else
                    ember.set(model, 'ErrorMessage', translate.getString('noPaymentForSubscription'));
            }
        }
    });

    app.PaymentRoute = ember.Route.extend({
        actions: {
            closeRoute: function () {
                this.transitionTo('');
            }
        },
        model: function (params) {
            var op = storage.tempInvoice();
            return new ember.RSVP.hash({
                invoice: (op ? op : api.ember.getOpenInvoice(params.invoiceId)
                    .then(function(openInvoice) {
                            return openInvoice;
                        })),
                fields: api.ember.getOnlinePaymentFormData(params.invoiceId),
                payment: api.ember.getKindOfPaymentByIdOpenInvoice(params.invoiceId),
                selectedPayment: {},
                selectedPaymentId: 0
            });
        },
        afterModel: function (model, transition) {
            for (var i = 0; i < model.payment.length; i++) {
                if (model.payment[i].IstDefaultOnlr || model.payment.length === 1) {
                    model.selectedPaymentId = model.payment[i].IdOpa;
                    model.selectedPayment = model.payment[i];
                    break;
                }
            }

            if (model.invoice.errorMessage) {
                model.error = true;
                model.errorMessage = model.invoice.errorMessage;
                return;
            }

            if (!model.invoice) {
                model.error = true;
                model.errorMessage = translate.getString('errorInvoiceNotExistent');
                return;
            }

            if (model.invoice.Balance >= 0.0) {
                model.error = true;
                model.errorMessage = translate.getString('errorInvoidePaidOrStorno');
                return;
            }
        }
    });

    app.PaymentResultRoute = ember.Route.extend({
        actions: {
            closeRoute: function () {
                this.transitionTo('index');
            }
        },
        model: function (params) {
            return new ember.RSVP.hash({
                success: params.result === 'success',
                exception: params.result === 'exception',
                signerr: params.result === 'signerr',
                invoice: api.ember.getOpenInvoice(params.invoiceId),
                payment: api.ember.getKindOfPaymentByIdOpenInvoice(params.invoiceId)
            });
        },
        afterModel: function (model) {
            model.success = model.success && model.invoice.Balance >= 0;
            for (var i = 0; i < model.payment.length; i++) {
                if (model.payment[i].PDFDownload) {
                    model.pdfinvoice = true;
                    break;
                }
            }
        }
    });

    //set kind of payment and open the PDF-report afterwards (workaround for pop-up blocker)
    app.InvoiceLoadingRoute = ember.Route.extend({
        model: function (params) {
            this.set('kindOfPaymentId', params.kindOfPaymentId);
            return new ember.RSVP.hash({
                invoice: api.ember.getOpenInvoice(params.invoiceId)
            });
        },

        afterModel: function (model) {
            ember.set(model.invoice, 'IdKindOfPayment', this.get('kindOfPaymentId'));
            api.updateOpenInvoice(model.invoice,
                function () {
                    location.replace('#/reports/Rechnung/' + model.invoice.InvoiceReportId + '/' + model.invoice.Id);
                },
                function () {
                    console.error('Could not set payment on invoice ID ' + model.invoice.Id);
                });
        }
    });
});