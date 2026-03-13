define(['ember', 'text!htmlTemplates/components/onlaWorkProgressComponent.html'], function (ember, onlaWorkProgressComponentTemplate) {
    ember.TEMPLATES['components/onla-work-progress'] = ember.Handlebars.compile(onlaWorkProgressComponentTemplate);
});