define(['ember', 'text!htmlTemplates/fullScreenLoading.html'], function (ember, loadingTemplate) {
    ember.TEMPLATES['invoiceLoading'] = ember.Handlebars.compile(loadingTemplate);
    
});