define([
    'ember',
    'framework'
], function (ember, framework) {
    ClxApp.PaymentResultView = framework.OverlayView.extend({
        usePrintButton: false,
        dragHandle: '.dialogHeader',
        dialogSelector: '#ovlPayment',
        dialogType: 'smart',
        baseZIndex: 10000,
        baseTransition: function () {
            // here transition back to subscription
            this.get('controller').send('closeRoute');
        }
    });
});