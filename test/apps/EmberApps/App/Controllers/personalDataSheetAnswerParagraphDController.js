define([
    'jquery',
    'ember',
    'uiSettings'
], function ($, ember, uiSettings) {
    ClxApp.PersonalDataSheetAnswerParagraphDController = ember.Controller.extend({
        CityIdLFS: function (key, value) {
            return this.handleEntry(value, 'CityIdLFS');
        }.property('model.CityIdLFS'),

        KindOfIndependence: function (key, value) {         
            return this.handleEntry(value, 'KindOfIndependence');
        }.property('model.KindOfIndependence'),

        DateFrom: function (key, value) {
            return this.handleEntry(value, 'DateFrom');
        }.property('model.DateFrom'),

        DateTo: function (key, value) {
            return this.handleEntry(value, 'DateTo');
        }.property('model.DateTo'),

        Cities: function () {
            return this.get('parentController').get('CitiesFiltered');
        }.property('parentController.CitiesFiltered'),
   
        IsCity: function () {
            return this.get('model.IsCity');
        }.property('model.IsCity'),

        handleEntry: function (value, propertyName) {
            if (value !== undefined) {
                this.set('model.' + propertyName, value);
                ember.run.debounce(this, this.sendAnswerParagraph, uiSettings.defaultDebouncing);
            }

            return this.get('model.' + propertyName);
        },

        sendAnswerParagraph: function() {
            this.get('parentController').send('answerParagraphD');
        }
    });
});