define([
    'ember',
    'application',
    'api',
    'storage'
], function (ember, app, api, storage) {
    app.Router = ember.Router.extend();
    app.Router.map(function () {
        this.resource('persons', { path: '/persons' }, function () {
            this.resource('dialogGroup', { path: '/:dataClassId/:dataKey' }, function() {
                this.resource('dialog', { path: ':dialogType' });
                this.resource('commentary', { path: '/commentary' });
            });
        });
    });

    app.IndexRoute = Ember.Route.extend({
        beforeModel: function () {
            this.transitionTo('persons');
        }
    });

    var dialogCache = new Object();

    app.DialogGroupRoute = Ember.Route.extend({
        actions: {
            closeRoute: function() {
                this.transitionTo('persons');
                // clear recent user history
                storage.dialogHistory([]);
            },
            routeBack: function (context, dataKey) {
                this.transitionTo('dialogGroup', context, dataKey);
            }
        },
        model: function (params) {
            //clear cache array when changing person
            dialogCache = new Object();
            return ember.$.getJSON(api.getDialogGroupUrl(params.dataClassId, params.dataKey)).then(function (data) {
                $.each(data.Dialogs, function() {
                    var dialogType = this.DialogType;
                    var cacheKey = params.dataClassId + '_' + params.dataKey + '_' + dialogType;
                    dialogCache[cacheKey] = this;
                });
                return data;
            });
        }
    });

    app.DialogRoute = Ember.Route.extend({
        model: function (params, transition) {
            // try to get cached model
            var dataKey = transition.params.dialogGroup.dataKey;
            var dataClassId = transition.params.dialogGroup.dataClassId;
            var dialogType = params.dialogType;
            var cacheKey = dataClassId + '_' + dataKey + '_' + dialogType;

            if (dialogCache[cacheKey])
                return dialogCache[cacheKey];

            return ember.$.getJSON(api.getDialogUrl(dataClassId, dataKey, dialogType)).then(function (data) {
                // cache model
                dialogCache[cacheKey] = data;
                return data;
            });
        }
    });

    app.CommentaryRoute = Ember.Route.extend({
        model: function (params, transition) {
            // try to get cached model
            var dataKey = transition.params.dialogGroup.dataKey;
            var dataClassId = transition.params.dialogGroup.dataClassId;
            if (dataClassId.toUpperCase() !== 'PERSON') {
                console.error('CLX.Evento Web Modules: commentary route is only usable in context "person", but it has been used in context "' + dataClassId + '"');
                return null;
            }
            var dialogType = 3;
            var cacheKey = 'person_' + dataKey + '_commentary';

            if (dialogCache[cacheKey])
                return dialogCache[cacheKey];

            return ember.$.getJSON(api.getDialogUrl('person', dataKey, dialogType)).then(function (data) {
                var commentaryModel = new Object();
                $.grep(data.Fields, function(field) {
                    if (field.FieldId === 'Memo') {
                        commentaryModel.Commentary = field.Value;
                        commentaryModel.IsEditable = field.IsEditable;
                    }
                });
                commentaryModel.Id = dataKey;
                
                // cache model
                dialogCache[cacheKey] = commentaryModel;
                return commentaryModel;
            });
        }
    });
});