define(['ember', 'text!htmlTemplates/fullScreenLoading.html'], function (ember, loadingTemplate) {
    ember.TEMPLATES['sdFile'] = ember.Handlebars.compile(loadingTemplate);
    ember.TEMPLATES['sdFile.loading'] = ember.TEMPLATES['sdFile'];
});