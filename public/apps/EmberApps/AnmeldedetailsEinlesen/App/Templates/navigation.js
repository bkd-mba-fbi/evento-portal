define(['ember', 'text!App/HtmlTemplates/navigation.html'], function (ember, navigationTemplate) {
    ember.TEMPLATES['navigation'] = ember.Handlebars.compile(navigationTemplate);
});