define(['ember', 'text!htmlTemplates/subscriptionNew.html'], function (ember, subscriptionNewTemplate) {
    ember.TEMPLATES['subscriptionNew'] = ember.Handlebars.compile(subscriptionNewTemplate);
});