define(['ember', 'text!htmlTemplates/addressEdit.html'], function (ember, addressEditTemplate) {
    ember.TEMPLATES['addressNew'] = ember.Handlebars.compile(addressEditTemplate);
});