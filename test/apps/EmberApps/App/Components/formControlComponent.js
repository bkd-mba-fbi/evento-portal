define([
    'jquery',
    'ember',
    'templates/components/formControlComponent',
    'components/tooltipButtonComponent'
], function ($, ember) {
    ClxApp.FormControlComponent = ember.Component.extend({
        classNames: ['formControl'],

        init: function () {
            this._super();
            this.set('myOptionValuePath', this.get('optionValuePath') ? 'content.' + this.get('optionValuePath') : 'content');
            this.set('myOptionLabelPath', this.get('optionLabelPath') ? 'content.' + this.get('optionLabelPath') : 'content');
        },

        isRequired: function() {
            return $.inArray(this.get('fieldname'), this.get('requiredFields')) > -1;
        }.property('requiredFields.@each'),

        isSelect: function () {
            return this.get('type') === 'select';
        }.property(),

        isDate: function () {
            return this.get('type') === 'date';
        }.property(),

        isValid: ember.computed(function (key, value) {
            var that = this;
            setTimeout(function() {
                if (value === true)
                    $("[name='" + that.get('fieldname') + "']").removeClass('validationError showError');
                else if (value === false)
                    $("[name='" + that.get('fieldname') + "']").addClass('validationError showError');
            }, 10);
        })
    });
});