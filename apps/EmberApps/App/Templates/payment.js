define(['ember', 'text!htmlTemplates/payment.html'], function (ember, paymentTemplate) {
    ember.TEMPLATES['payment'] = ember.Handlebars.compile(paymentTemplate);
});