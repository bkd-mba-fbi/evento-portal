define(['ember', 'text!htmlTemplates/error401.html'], function (ember, errorTemplate) {
    ember.TEMPLATES['error401'] = ember.Handlebars.compile(errorTemplate);
});