define(['ember', 'text!htmlTemplates/components/subscriptionDetailComponent.html'], function (ember, subscriptionDetailComponentTemplate) {
    ember.TEMPLATES['components/subscription-detail'] = ember.Handlebars.compile(subscriptionDetailComponentTemplate);
});