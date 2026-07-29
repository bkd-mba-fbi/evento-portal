define([
    'jquery',
    'ember',
    'api'
], function ($, ember, api) {
    ClxApp.PersonalDataSheetController = ember.Controller.extend({
        actions: {
            editDataSheet: function () {
                var that = this;
                if (this.get('model.DataSheet') === null) {
                    api.createPersonalDataSheet(function(model) {
                        that.set('model.DataSheet', model);
                        that.send('openEditDataSheet');
                    });
                } else {
                    this.send('openEditDataSheet');
                }
                
            }
        }
    });
});