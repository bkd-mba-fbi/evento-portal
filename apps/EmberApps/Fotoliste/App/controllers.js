define([
    'ember',
    'App/application'
], function (ember, app) {
    app.IndexController = ember.Controller.extend({
        actions: {
            click: function() {
                this.transitionToRoute('photos', this.get('idEvent_save'));
            }
        },
 
        idEvent: function (key, value) {
            if (key === null) {
                return this.get('idEvent_save');
            } else { 
                this.set('idEvent_save', value);
            }
        }.property('idEvent')
    });
});