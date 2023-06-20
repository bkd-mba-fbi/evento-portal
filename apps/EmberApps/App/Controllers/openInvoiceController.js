define([
    'ember'
], function (ember) {
    ClxApp.OpenInvoiceController = ember.Controller.extend({
        isPayed: function () {
            return this.get('model.Balance') === 0 || this.get('model.CountsAsPayed');
        }.property('model.Balance'),
        
        Number: function() {
            return this.get('model.Number');
        }.property('model.Number'),

        Id: function () {
            return this.get('model.Id');
        }.property('model.Id'),

        IsCreditCardPayment: function () {
            return this.get('model.IsCreditCardPayment');
        }.property('model.IsCreditCardPayment'),

        IsPrinted : function() {
            return this.get('model.Printed');
        }.property('model.Printed'),

        PaymentConfirmationPending: function() {
             return this.get('model.PaymentConfirmationPending');
        }.property('model.PaymentConfirmationPending')
    });
});