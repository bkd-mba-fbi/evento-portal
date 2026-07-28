define(['ember', 'text!htmlTemplates/subscriptions.html'], function (ember, subscriptionsTemplate) {
    ember.TEMPLATES['subscriptions'] = ember.Handlebars.compile(subscriptionsTemplate);
});