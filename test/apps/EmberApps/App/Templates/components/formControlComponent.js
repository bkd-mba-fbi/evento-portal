define(['ember', 'text!htmlTemplates/components/formControlComponent.html'], function (ember, formControlComponentTemplate) {
    ember.TEMPLATES['components/form-control'] = ember.Handlebars.compile(formControlComponentTemplate);
});