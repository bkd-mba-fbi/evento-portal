define(['ember', 'text!htmlTemplates/error404.html'], function (ember, errorTemplate) {
    ember.TEMPLATES['error404'] = ember.Handlebars.compile(errorTemplate);
});