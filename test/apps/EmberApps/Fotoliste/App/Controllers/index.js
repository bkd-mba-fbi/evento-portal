define([
    'application',
    'ember'
], function (app, ember) {
    // copied from 'Noteneingabe'
    app.IndexController = ember.Controller.extend({
        actions: {
            click: function () {
                this.transitionToRoute('photos', this.get('idEvent_save'));
            }
        },
        
        idEvent: ember.computed({
            get: function (key) {
                return this.get('idEvent_save');
            },
            set: function(key, value) {
                this.set('idEvent_save', value);
            }
        })
    });
});