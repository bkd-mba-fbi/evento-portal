define(['ember', 'text!htmlTemplates/error500.html'], function (ember, errorTemplate) {
    ember.TEMPLATES['error500'] = ember.Handlebars.compile(errorTemplate);
});