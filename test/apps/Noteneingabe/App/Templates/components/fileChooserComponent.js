define(['ember', 'text!htmlTemplates/components/fileChooserComponent.html'], function (ember, fileChooserComponentTemplate) {
    ember.TEMPLATES['components/file-chooser'] = ember.Handlebars.compile(fileChooserComponentTemplate);
});