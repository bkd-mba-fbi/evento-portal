define(['ember', 'text!App/HtmlTemplates/validation.html'], function (ember, validationTemplate) {
    ember.TEMPLATES['validation'] = ember.Handlebars.compile(validationTemplate);
});