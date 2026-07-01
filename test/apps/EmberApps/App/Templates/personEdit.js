define(['ember', 'text!htmlTemplates/personEdit.html'], function (ember, personEditTemplate) {
    ember.TEMPLATES['personEdit'] = ember.Handlebars.compile(personEditTemplate);
});