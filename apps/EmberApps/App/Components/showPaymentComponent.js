define([
    'ember',
    'templates/components/showPaymentComponent'
], function (ember) {
    ClxApp.ShowPaymentComponent = ember.Component.extend({
        tagName: '',

        actions: {
            paymentClicked: function (idSubscription) {
                this.sendAction('doPayment', idSubscription);
            },

            invoiceClicked: function (invoiceId) {
                this.sendAction('payInvoice', invoiceId);
            }
        },

        hasSubscriptionDetailsForPayment: function () {
            var sds = this.get('subscriptionPayment.SubscriptionDetailsForPayment');
            return sds ? sds.length > 0 : false;
        }.property(),

        hasInvoices: function () {
            var invoices = this.get('subscriptionPayment.OpenInvoices');
            return invoices ? invoices.length > 0 : false;
        }.property('subscriptionPayment.OpenInvoices.@each')
    });
});