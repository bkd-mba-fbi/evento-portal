define(['ember', 'text!htmlTemplates/funding.html'], function (ember, fundingTemplate) {
    ember.TEMPLATES['funding'] = ember.Handlebars.compile(fundingTemplate);
});