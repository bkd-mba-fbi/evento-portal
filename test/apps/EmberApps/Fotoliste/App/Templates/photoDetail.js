define(['ember', 'text!App/HtmlTemplates/photoDetail.html'], function (ember, photoDetailTemplate) {
    ember.TEMPLATES['photoDetail'] = ember.Handlebars.compile(photoDetailTemplate);
});