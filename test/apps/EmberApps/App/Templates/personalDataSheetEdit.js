define(['ember', 'text!htmlTemplates/personalDataSheetEdit.html'], function (ember, personalDataSheetEditTemplate) {
    ember.TEMPLATES['personalDataSheetEdit'] = ember.Handlebars.compile(personalDataSheetEditTemplate);
});