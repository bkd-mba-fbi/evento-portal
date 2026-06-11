define(['ember', 'text!htmlTemplates/error400.html'], function (ember, errorTemplate) {
    ember.TEMPLATES['error400'] = ember.Handlebars.compile(errorTemplate);
});