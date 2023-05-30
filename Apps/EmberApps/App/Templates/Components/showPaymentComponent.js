define(['ember', 'text!htmlTemplates/components/showPaymentComponent.html'], function (ember, showPaymentComponentTemplate) {
    ember.TEMPLATES['components/show-payment'] = ember.Handlebars.compile(showPaymentComponentTemplate);
});