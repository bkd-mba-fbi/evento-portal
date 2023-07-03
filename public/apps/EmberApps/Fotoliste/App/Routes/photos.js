define([
    'ember',
    'application',
    'App/Services/cacheService',
    'App/Templates/photos',
    'App/Helpers/endOfLine',
    'App/Components/photoListComponent'
], function (ember, app) {
    app.PhotosRoute = ember.Route.extend({

        cache: ember.inject.service(),

        model: function (params) {
            return this.get('cache').getEvent(params.idEvent);
        }
    });
});