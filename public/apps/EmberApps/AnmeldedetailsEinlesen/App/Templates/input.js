define(['ember', 'text!App/HtmlTemplates/input.html'], function (ember, inputTemplate) {
    ember.TEMPLATES['input'] = ember.Handlebars.compile(inputTemplate);
});