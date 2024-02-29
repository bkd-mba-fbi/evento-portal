define([
    'ember',
    'eventoHelpers'
], function (ember, eventoHelpers) {
    ClxApp.PersonOverviewIndexController = ember.Controller.extend({
        isSwiss: function() {
            return eventoHelpers.person.isSwiss(this.get('model.person'));
        }.property('model.person.Nationality_IDLFS'),
        hasStayPermit: function () {
            return eventoHelpers.person.hasStayPermit(this.get('model.person'));
        }.property('model.person.stayPermit')
    });
});