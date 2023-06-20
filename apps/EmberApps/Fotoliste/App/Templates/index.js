define(['ember', 'text!App/HtmlTemplates/index.html'], function (ember, indexTemplate) {
    ember.TEMPLATES['index'] = ember.Handlebars.compile(indexTemplate);
});