define(['ember', 'text!htmlTemplates/grading.html'], function (ember, gradingTemplate) {
    ember.TEMPLATES['grading'] = ember.Handlebars.compile(gradingTemplate);
});