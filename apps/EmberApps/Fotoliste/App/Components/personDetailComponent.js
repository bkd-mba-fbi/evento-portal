define([
    'ember',
    'application',
    'api',
    'jquery',
    'App/Templates/Components/personDetailComponent'
], function (ember, app, api, $) {
    app.PersonDetailComponent = ember.Component.extend({
        cache: ember.inject.service('cache'),

        studentData: ember.computed('idPerson', function () {
            var idPerson = this.get('idPerson');
            return this.get('cache').getStudentData(idPerson);
        })
    });
});