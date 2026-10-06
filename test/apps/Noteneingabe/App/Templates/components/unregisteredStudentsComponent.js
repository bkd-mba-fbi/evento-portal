define(['ember', 'text!htmlTemplates/components/unregisteredStudentsComponent.html'], function (ember, templateString) {
    console.log('unregistered-students templated compiling');
    ember.TEMPLATES['components/unregistered-students'] = ember.Handlebars.compile(templateString);
});