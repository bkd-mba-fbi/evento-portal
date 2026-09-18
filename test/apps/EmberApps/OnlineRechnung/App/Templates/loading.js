define(['ember', 'text!App/HtmlTemplates/loading.html'], function (ember, loadingTemplate) {
    ember.TEMPLATES['loading'] = ember.Handlebars.compile(loadingTemplate);
});