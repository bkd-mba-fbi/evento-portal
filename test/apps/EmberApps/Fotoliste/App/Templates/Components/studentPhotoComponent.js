define(['ember', 'text!App/HtmlTemplates/Components/studentPhotoComponent.html'], function (ember, studentPhotoComponentTemplate) {
    ember.TEMPLATES['components/student-photo'] = ember.Handlebars.compile(studentPhotoComponentTemplate);
});