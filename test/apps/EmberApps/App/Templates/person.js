define(['ember', 'text!htmlTemplates/person.html'], function (ember, personTemplate) {
    ember.TEMPLATES['person'] = ember.Handlebars.compile(personTemplate);
});