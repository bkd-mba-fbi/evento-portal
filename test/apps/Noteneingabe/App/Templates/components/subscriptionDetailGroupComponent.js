define(['ember', 'text!htmlTemplates/components/subscriptionDetailGroupComponent.html'], function (ember, subscriptionDetailComponentTemplate) {
    ember.TEMPLATES['components/subscription-detail-group'] = ember.Handlebars.compile(subscriptionDetailComponentTemplate);
});