define(['ember', 'text!htmlTemplates/subscriptionInput.html'], function (ember, subscriptionInputTemplate) {
    ember.TEMPLATES['subscriptionInput'] = ember.Handlebars.compile(subscriptionInputTemplate);
});