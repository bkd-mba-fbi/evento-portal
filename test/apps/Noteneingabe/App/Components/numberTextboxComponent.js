define([
        'jquery',
        'ember',
        'application',
        'globalize',
        'keyboard'
    ],
    function($, ember, app, globalize, keyboard) {
        app.NumberTextboxComponent = ember.TextField.extend({
            initialize: function() {
                this.set('number', null);
            },
            didInitAttrs: function() {
                var number = this.get('number');
                var value = null;

                if (isNaN(number)) {
                    switch (number) {
                        case '.':
                        case ',':
                            value = '0' + globalize.culture().numberFormat['.'];
                            break;
                        case '':
                        case null:
                        case undefined:
                            value = null;
                            break;
                        default:
                            value = number.replace(',', '.');
                            break;
                    }
                }
                else
                    value = globalize.format(number);
                this.set('value', value);
            },
            didInsertElement: function() {
                this.set('isChanging', false);

                var allowDecimals = true;
                var maxDecimals = undefined;
                var disableSteps = false;
                if (this.get('disableSteps') !== undefined)
                    disableSteps = this.get('disableSteps');

                var mode = this.get('mode');
                switch (mode) {
                    case 'int':
                        allowDecimals = false;
                        break;
                    case 'currency':
                        maxDecimals = 2;
                }

                this.$().on('keydown',
                    function (e) {
                        if (keyboard.isAnyModifierKeyPressed(e))
                            return true;

                        if (!keyboard.isNumberKey(e) &&
                            !keyboard.isDecimalDelimiter(e) &&
                            !keyboard.isNavigationKey(e) &&
                            !keyboard.isDeletionKey(e) &&
                            !keyboard.isFunctionKey(e) )
                            return false;
                        return true;
                    });

                var delimiter = globalize.culture().numberFormat['.'];
                var that = this;
                this.$().on('input',
                    function () {
                        var parts = that.$().val().split(/[,\.]+/g);
                        if (parts.length > 1)
                            that.$().val(parts.shift() + delimiter + parts.join(''));
                    })
                    // trim decimal delimiter on leave
                    .on('blur', function () {
                        var value = that.get('value');
                        if (value.slice(-1) === globalize.culture().numberFormat['.']) {
                            that.set('value', value.substring(0, value.length - 1));
                            that.set('inValueChange', true);
                        }
                    });

                this.$().jStepper({
                    minValue: this.get('minValue'),
                    maxValue: this.get('maxValue'),
                    minLength: undefined,
                    allowDecimals: allowDecimals,
                    decimalSeparator: globalize.culture().numberFormat['.'],
                    maxDecimals: maxDecimals,
                    shiftStep: 10,
                    ctrlStep: 100,
                    disableSteps: disableSteps
                });
            },

            valueChanged: ember.observer('value', function () {
                if (this.get('inValueChange')) {
                    this.set('inValueChange', false);
                    return;
                }

                var fraction = '0' + globalize.culture().numberFormat['.'];
                var value = this.get('value');
                switch (value) {
                    case fraction:
                    case globalize.culture().numberFormat['.']:
                        this.set('number', 0);
                        this.set('inValueChange', true);
                        this.set('value', fraction);
                        break;
                    case '':
                    case null:
                    case undefined:
                        this.set('number', null);
                        break;
                    default:
                        this.set('number', parseFloat(value.toString().replace('.', globalize.culture().numberFormat['.'])));
                        break;
                }  
            })
        });
    });
