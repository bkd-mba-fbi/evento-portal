define([
    'ember',
    'application',

    // load the application template and controller
    // the application route gets created by the CLX framework
    'App/Controllers/application',
    'App/Templates/application',

    // load the navigation template
    'App/Templates/navigation',

    // load all the routes
    'App/Routes/index',
    'App/Routes/input',
    'App/Routes/validation',
    'App/Routes/result'
], function (ember, app) {
    app.Router = ember.Router.extend();
    app.Router.map(function () {
        this.route('input');
        this.route('validation');
        this.route('result');
    });
});