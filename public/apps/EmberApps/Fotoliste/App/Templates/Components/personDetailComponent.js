define(['ember', 'text!App/HtmlTemplates/Components/personDetailComponent.html'], function (ember, personDetailComponentTemplate) {
    ember.TEMPLATES['components/person-detail'] = ember.Handlebars.compile(personDetailComponentTemplate);
});