define(['ember', 'text!htmlTemplates/personalDataSheet.html'], function (ember, personalDataSheetTemplate) {
    ember.TEMPLATES['personalDataSheet'] = ember.Handlebars.compile(personalDataSheetTemplate);
});