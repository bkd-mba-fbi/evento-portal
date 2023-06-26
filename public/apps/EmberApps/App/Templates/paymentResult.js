define(['ember', 'text!htmlTemplates/paymentResult.html'], function (ember, paymentResultTemplate) {
    ember.TEMPLATES['paymentResult'] = ember.Handlebars.compile(paymentResultTemplate);
});