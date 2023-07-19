define(['ember', 'text!htmlTemplates/invoices.html'], function (ember, invoicesTemplate) {
    ember.TEMPLATES['invoices'] = ember.Handlebars.compile(invoicesTemplate);
});