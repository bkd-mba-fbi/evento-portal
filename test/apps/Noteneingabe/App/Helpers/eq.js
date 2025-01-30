define([
    'ember',
    'application'
], function (ember, app) {
    app.EqHelper = ember.Helper.helper(function(params) {
        return params[0] === params[1];
    });
});