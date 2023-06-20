define(['ember', 'text!App/HtmlTemplates/result.html'], function (ember, resultTemplate) {
    ember.TEMPLATES['result'] = ember.Handlebars.compile(resultTemplate);
});