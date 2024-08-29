define(['ember', 'text!App/HtmlTemplates/photos.html'], function (ember, photosTemplate) {
    ember.TEMPLATES['photos'] = ember.Handlebars.compile(photosTemplate);
});