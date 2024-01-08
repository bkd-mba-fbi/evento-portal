define(['ember', 'text!htmlTemplates/fullScreenLoading.html'], function (ember, loadingTemplate) {
    ember.TEMPLATES['report'] = ember.Handlebars.compile(loadingTemplate);
    ember.TEMPLATES['report.loading'] = ember.TEMPLATES['report'];
});