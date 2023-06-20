define(['ember', 'text!App/HtmlTemplates/Components/photoListComponent.html'], function (ember, photoListComponentTemplate) {
    ember.TEMPLATES['components/photo-list'] = ember.Handlebars.compile(photoListComponentTemplate);
});