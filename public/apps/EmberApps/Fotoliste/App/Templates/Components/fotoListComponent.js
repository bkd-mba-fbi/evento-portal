define(['ember', 'text!App/HtmlTemplates/Components/fotoListComponent.html'], function (ember, fotoListComponentTemplate) {
    ember.TEMPLATES['components/foto-list'] = ember.Handlebars.compile(fotoListComponentTemplate);
});