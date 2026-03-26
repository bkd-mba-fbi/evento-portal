define(['ember', 'text!htmlTemplates/addressEdit.html'], function (ember, addressEditTemplate) {
    ember.TEMPLATES['addressEdit'] = ember.Handlebars.compile(addressEditTemplate);
});