define(['ember', 'text!htmlTemplates/components/workProgressComponent.html'], function (ember, workProgressComponentTemplate) {
    ember.TEMPLATES['components/work-progress'] = ember.Handlebars.compile(workProgressComponentTemplate);
});