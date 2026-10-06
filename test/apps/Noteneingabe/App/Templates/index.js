define(['ember', 'text!htmlTemplates/index.html'], function (ember, indexTemplate) {
    ember.TEMPLATES['index'] = ember.Handlebars.compile(indexTemplate);
});