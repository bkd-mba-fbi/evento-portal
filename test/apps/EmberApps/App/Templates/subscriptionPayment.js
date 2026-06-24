define(['ember', 'text!htmlTemplates/subscriptionPayment.html'], function (ember, subscriptionPayment) {
    ember.TEMPLATES['subscriptionPayment'] = ember.Handlebars.compile(subscriptionPayment);
});