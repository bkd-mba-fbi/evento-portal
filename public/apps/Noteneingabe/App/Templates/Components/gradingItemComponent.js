define(['ember', 'text!htmlTemplates/components/gradingItemComponent.html'], function (ember, gradingItemComponent) {
    ember.TEMPLATES['components/grading-item'] = ember.Handlebars.compile(gradingItemComponent);
});