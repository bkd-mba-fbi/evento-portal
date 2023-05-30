define([
        'ember-data',
        'appConfig',
        'storage'
], function (ds, appConfig, storage) {

    var app = {
        rootElement: '#CLX_Root',
        ApplicationAdapter: ds.RESTAdapter.extend()
    };

    return app;
});
