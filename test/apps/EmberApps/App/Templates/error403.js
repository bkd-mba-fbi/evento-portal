define(['ember', 'text!htmlTemplates/error403.html'], function (ember, errorTemplate) {
    ember.TEMPLATES['error403'] = ember.Handlebars.compile(errorTemplate);
});