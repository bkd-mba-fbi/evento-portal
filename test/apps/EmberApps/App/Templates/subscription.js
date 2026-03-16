define(['ember', 'text!htmlTemplates/subscription.html'], function (ember, subscriptionTemplate) {
    ember.TEMPLATES['subscription'] = ember.Handlebars.compile(subscriptionTemplate);
});