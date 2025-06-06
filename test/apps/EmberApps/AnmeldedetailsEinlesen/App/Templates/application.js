define(['ember', 'text!App/HtmlTemplates/application.html'], function (ember, applicationTemplate) {
    ember.TEMPLATES['application'] = ember.Handlebars.compile(applicationTemplate);
});