define([
    'ember',
    'application',
    'App/Services/cacheService',
    'App/Templates/photoDetail',
], function (ember, app) {

    app.PhotoDetailRoute = ember.Route.extend({

        cache: ember.inject.service(),

        model: function (params){
            return this.get('cache').getStudentData(params.idPerson);
        }
    });
});