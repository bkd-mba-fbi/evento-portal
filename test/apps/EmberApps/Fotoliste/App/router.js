define([
    'ember',
    'application',
    'App/Routes/index',
    'App/Routes/photos',
    'App/Routes/photoDetail'
], function (ember, app) {
    app.Router = ember.Router.extend();
    app.Router.map(function () {
        this.route('photos', { path: '/:idEvent'}, function () {
            this.route('photoDetail', { path: '/:idPerson', resetNamespace: true });
        });
    });
});