define(['ember', 'text!App/HtmlTemplates/loading.html'], function (ember, loadingTemplate) {
    var compiledTemplate = ember.Handlebars.compile(loadingTemplate);
    ember.TEMPLATES['subscriptions/loading'] = compiledTemplate;
    //var compiledResizable = ember.Handlebars.compile(resizableDialog);
    //ember.TEMPLATES['subscriptionInput/loading'] = compiledResizable;
    
});