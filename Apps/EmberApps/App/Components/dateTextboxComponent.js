define([
    'jquery',
    'ember',
    'application',
    'icons',
    'globalize',
    'storage'
], function ($, ember, app, icons, globalize, storage) {

    // initialize jquery ui datepicker

    //de
    $.datepicker.regional['de'] = {
        prevText: 'Zurück',
        nextText: 'Vorwärts',
        monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        firstDay: 1
    };

    //en
    $.datepicker.regional['en'] = {
        prevText: 'Previous',
        nextText: 'Next;',
        monthNames: ['January', 'February', 'March', 'April', 'Mai', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        firstDay: 0
    };

    //fr
    $.datepicker.regional['fr'] = {
        prevText: 'Previus',
        nextText: 'Suivant;',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
        firstDay: 1
    };


    // actual module
    app.DateTextboxComponent = ember.TextField.extend({
        classNames: ['dateTextbox'],

        initProperties: function(lang) {
            if (this.get('hideButton') === undefined)
                this.set('hideButton', false);
            if (this.get('yearRange') === undefined)
                this.set('yearRange', '-100:+20');
            if (this.get('format') === undefined) {
                var format = 'dd.mm.yy';
                if (lang === 'en-US')
                    format = 'mm/dd/yy';
                if (lang === 'en-GB')
                    format = 'dd/mm/yy';
                this.set('format', format);
            }
            // overwrite properties
            if (this.get('disabeld'))
                this.set('hideButton', true);
        },

        initDatePickerDefaults: function(lang) {
            switch (lang) {
            case 'de-CH':
            case 'de-DE':
                $.datepicker.setDefaults($.datepicker.regional['de']);
                break;
            case 'fr-CH':
                $.datepicker.setDefaults($.datepicker.regional['fr']);
                break;
            case 'en-US':
                $.datepicker.setDefaults($.datepicker.regional['en']);
                break;
            }
        },

        didInsertElement: function () {
            var that = this;
            var lang = storage.userSettings.uiCulture();

            this.initDatePickerDefaults(lang);
            this.initProperties(lang);

            ember.run.scheduleOnce('afterRender',
                function () {
                    var element = that.$();
                    element.wrap('<div class="dateTextbox">');
                    
                    element.datepicker({
                        showOn: 'button',
                        buttonImageOnly: false,
                        showAnim: 'slideDown',
                        dateFormat: that.get('format'),
                        changeYear: true,
                        yearRange: that.get('yearRange'),
                        onSelect: function (dateText) {
                            that.set('validValue', dateText);
                            that.set('value', dateText);
                        }
                    })
                    .next('button')
                        .html(icons.calendar)
                        .attr('tabindex', -1);

                    if (that.get('hideButton')) {
                        element.next('button').remove();
                        element.addClass('noButton');
                    }

                    element.blur(function () {
                        that.handleBlur();
                    });
                });
        },

        handleBlur: function () {
            var that = this;
            setTimeout(function () {
                var element = that.$();
                // showError method
                var showError = function () {
                    that.toggleProperty('updateDate');
                    var oldValue = that.formatDateString(that.get('date'));
                    that.set('value', oldValue);
                    element.val(oldValue);
                    element.addClass('validationError showError');
                    setTimeout(function () {
                        element.removeClass('validationError showError');
                    },
                        1000);
                };
                // validate date
                var dateString = element.val();
                if (dateString === '') {
                    if (that.get('required')) {
                        showError();
                    }
                    return;
                }
                var date = globalize.parseDate(dateString);

                // validate for format dd.MM.yy
                if (!date) {
                    var culture = globalize.culture();
                    var pattern = culture.calendar.patterns['d'];
                    date = globalize.parseDate(dateString, pattern.replace('yyyy', 'yy'));
                }

                if (date && date > new Date(1753, 1, 1)) {
                    that.set('validValue', globalize.format(date, 'd'));
                    element.change();
                } else
                    showError();
            }, 10);
        },

        value: ember.computed('date', 'updateDate', {
            get: function() {
                if (!this.get('date'))
                    return this.get('validValue');
                return this.formatDateString(this.get('date'));
            },
            set: function(key, value) {
                if (value === '') {
                    if (this.get('allowEmpty')) {
                        this.set('date', null);
                        return null;
                    }

                    return this.get('validValue');
                }                 
                try {
                    var date = globalize.parseDate(value, 'd');
                    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                    var jsonDate = date.toJSON();
                    if (date > new Date(1753, 1, 1)) {
                        if (jsonDate !== this.get('date')) {
                            this.set('date', jsonDate);
                        }
                        this.set('validValue', globalize.format(date, 'd'));
                    }

                    return this.get('validValue');
                } catch (ex) {
                    return this.get('validValue');
                }
            }
        }),

        formatDateString: function(dateString) {
            var date = new Date(dateString);
            return globalize.format(date, 'd');
        }
    });
});