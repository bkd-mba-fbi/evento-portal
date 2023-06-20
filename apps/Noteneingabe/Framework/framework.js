define([
    'ember',
    'jquery-ui',
    'configService',
    'settings',
    'uiSettings',
    'guiHelpers',
    'arrayHelpers',
    'translate'
], function (ember, $, appConfig, settings, uiSettings, guiHelpers, arrayHelpers, translate) {
    var framework = {
        constants: {
            intMax: 2147483647,
            intMin: -2147483648,
            shortMax: 32767,
            shortMin: -32767,
            emailRegex: /^[A-Za-z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g,
            listColumnStringRegex: /@Key([0-9])*,([0-9])*\|/g,
            phoneFields: ['TelP', 'Mobile', 'TelG']
        },
        Helpers: {
            // calculates the width of a textbox containing weekdays
            calcWeekdayWidth: function () {
                return this.calcTextWidth(this.getLargestWeekdayShortName()) + 2;
            },

            getQueryStringValue: function (name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                    results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            },

            getLastUrlPart: function (indexReverted) {
                var revertedIndex = indexReverted !== undefined ? indexReverted : 0;
                var urlParts = location.href.split('/');
                var index = urlParts.length - 1 - revertedIndex;
                return index >= 0 ? urlParts[urlParts.length - 1 - revertedIndex] : '';
            },

            getCssValue: function (className, property) {
                /// <summary>gets the specified property value from a css class</summary>
                /// <param name="className" type="String">the name of the css class</param>
                /// <param name="property" type="String">the name of the css property</param>
                var el = $('<div class="' + className + '" style="display:none;">&nbsp;</div>').appendTo('body');
                var value = el.css(property);
                el.remove();
                return value;
            },

            loadCss: function (relativeUrl) {
                /// <summary>loads a css file as link into head</summary>
                /// <param name="relativeUrl" type="String">the url relative to the JSModules folder</param>
                var link = document.createElement('link');
                link.type = 'text/css';
                link.rel = 'stylesheet';
                link.href = appConfig.webBaseUrl + '/' + relativeUrl;
                document.getElementsByTagName('head')[0].appendChild(link);
            },

            clone: function (obj) {
                var copy;

                // Handle the 3 simple types, and null or undefined
                if (null == obj || 'object' != typeof obj) return obj;

                // Handle Date
                if (obj instanceof Date) {
                    copy = new Date();
                    copy.setTime(obj.getTime());
                    return copy;
                }

                // Handle Array
                if (obj instanceof Array) {
                    copy = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        copy[i] = this.clone(obj[i]);
                    }
                    return copy;
                }

                // Handle Object
                if (obj instanceof Object) {
                    copy = {};
                    for (var attr in obj) {
                        if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
                    }
                    return copy;
                }

                throw new Error("Unable to copy obj! Its type isn't supported.");
            },

            // type methods
            isObject: function (obj) {
                return Object.prototype.toString.call(obj) === '[object Object]';
            },
            isArray: function (arr) {
                return $.isArray(arr);
            },

            addLeadingZero: function (number, digits) {
                ///<summary>adds a leading zero to a number</summary>
                ///<param name="number" type="Number">the number to add the leading zero</param>
                ///<param name="digits" type="Number">the number of digits the string with leading zero should have</param>
                var result = number.toString();
                while (result.length < digits)
                    result = '0' + result;
                return result;
            },

            //gui helpers
            animationSpeed: 800,

            animateHeightAsc: function (element, height) {
                var el = $(element);
                if (!height)
                    height = el.height();
                var time = height / this.animationSpeed * 1000;
                el.animate({ 'height': '0px' }, time, 'linear');
            },
            animateHeightDesc: function (element, height, top) {
                var el = $(element);
                if (!height)
                    height = el.height();
                if (!top)
                    top = el.position().top;
                var time = height / this.animationSpeed * 1000;
                el.animate({ 'height': '0px', 'top': (top + height) + 'px' }, time, 'linear');
            },
            cancelUserSelection: function () {
                if (window.getSelection) {
                    if (window.getSelection().empty) { // Chrome
                        window.getSelection().empty();
                    } else if (window.getSelection().removeAllRanges) { // Firefox
                        window.getSelection().removeAllRanges();
                    }
                } else if (document.selection) { // IE?
                    document.selection.empty();
                }
            },
            formatMailTo: function (text) {
                var result;
                do {
                    result = framework.constants.emailRegex.exec(text);
                    if (result)
                        text = text.replace(result, '<a href="mailto:' + result + '">' + result + '</a>');
                } while (result);

                return text;
            },
            formatWebsite: function (text) {
                var url = text;
                if (text.substring(0, 4).toUpperCase() !== 'HTTP')
                    url = 'http://' + text;
                return '<a target="_blank" href="' + url + '">' + text + '</a>';
            },
            formatPhone: function (text) {
                return '<a href="tel:' + text + '">' + text + '</a>';
            }
        },

        htmlHelpers: {
            encodeHtml: function (text) {
                return document.createElement('div').appendChild(document.createTextNode(text)).parentNode.innerHTML;
            }
        },

        // Ember Object Controller that provides helpers to auto save models with a debouncing.
        AutoSaveController: ember.Controller.extend({

            // ---------- validation
            childValidated: function (childModel, isValid) {
                // to override
            },

            registerMustFields: function (mustFields) {
                var that = this;
                if (mustFields instanceof Array) {
                    $.each(mustFields,
                        function () {
                            that._internalRegisterMustField(this);
                        });
                } else {
                    this._internalRegisterMustField(mustFields);
                }
                this._updateIsValid();
            },

            unregisterMustFields: function (mustFields) {
                var that = this;
                if (mustFields instanceof Array) {
                    $.each(mustFields,
                        function () {
                            that._internalUnregisterMustField(this);
                        });
                } else {
                    this._internalUnregisterMustField(mustFields);
                }
                this._updateIsValid();
            },

            updateIsValid: function() {
                return this._updateIsValid();
            },

            _internalUnregisterMustField: function (fieldName) {
                this._setMustFieldValue(fieldName, true);
            },

            _internalRegisterMustField: function (fieldName) {
                var key = 'model.' + fieldName;
                var value = this.get(key);
                if (value)
                    this._setMustFieldValue(fieldName, true, true);
                else
                    this._setMustFieldValue(fieldName, false, true);
            },

            _updateIsValid: function () {
                var valid = true;
                var registeredMustFields = this.get('registeredMustFields');
                if (registeredMustFields) {
                    arrayHelpers.eachKeyValue(registeredMustFields,
                        function (key, value) {
                            if (value === false)
                                valid = false;
                        });
                }
                this.set('isValid', valid);
                this._alertParent();
                return valid;
            },

            _setMustFieldValue: function (fieldName, value, isInit) {
                var registeredMustFields = this.get('registeredMustFields');
                if (!registeredMustFields)
                    registeredMustFields = {};

                // only update if it is a registered must field (except for init)
                if (isInit || registeredMustFields[fieldName] !== undefined) {
                    registeredMustFields[fieldName] = value;
                    this.set('registeredMustFields', registeredMustFields);
                }
            },

            _alertParent: ember.observer('isValid', function () {
                var parentController = this.get('parentController');
                if (parentController) {
                    if (this.get('isValid')) {
                        parentController.set('validChild', this.get('model'));
                        parentController.toggleProperty('validChildChanged');
                    } else {
                        parentController.set('invalidChild', this.get('model'));
                        parentController.toggleProperty('invalidChildChanged');
                    }
                }
            }),

            _validChildObserver: ember.observer('validChildChanged', function () {
                this.childValidated(this.get('validChild'), true);
            }),

            _invalidChildObserver: ember.observer('invalidChildChanged', function () {
                this.childValidated(this.get('invalidChild'), false);
            }),
            // ---------- end validation

            // saves value to the model and the api
            autoSaveProperty: function(propertyName, value, skipSave, immediately, saveInvalid) {
                var key = 'model.' + propertyName;
                var oldValue = this.get(key);
                if (value === undefined) {
                    // property being used as a getter
                    return oldValue;
                } else {
                    // check if value has been changed (especially important for select controls)
                    skipSave = value === oldValue;
                    // property being used as a setter
                    this.set('model.' + propertyName, value);
                    // validation
                    if (value)
                        this._setMustFieldValue(propertyName, true);
                    else
                        this._setMustFieldValue(propertyName, false);

                    if (!this._updateIsValid() && !saveInvalid)
                        return value; // don't save
                    if (!skipSave) {
                        if (immediately)
                            this.save();
                        else
                            ember.run.debounce(this, this.save, uiSettings.defaultDebouncing);
                    }
                    return value;
                }
            },

            // saves value to the model and the api if it is within the valid range
            autoSavePropertyWithinValidRange: function (propertyName, value, validRange) {
                return this.autoSaveProperty(propertyName, value, validRange && $.inArray(value, validRange) === -1);
            },

            save: function () {
                this.saveInternal();
            },

            saveInternal: function () {
                this.get('model').save();
            }
        }),

        ValidatedController: ember.Controller.extend({
            mainModel: '',
            clientValidated: false,
            beforeSave: function () {
                this.setProperties({
                    'isBackendValidation': false,
                    'validationErrorMessage': '',
                    'slideValidationErrorMessageDown': false
                });
            },
            fieldErrors: [],
            runValidate: function () {
                ember.run.debounce(this, this.validate, uiSettings.defaultDebouncing);
            },

            setRequiredFields: function (requiredFields) {
                if (this.get('validateBegin') !== undefined) {
                    var model = this.get(this.mainModel);
                    // remove existing observers
                    if (model.RequiredFields) {
                        for (var i = 0; i < model.RequiredFields.length; i++) {
                            ember.removeObserver(model, model.RequiredFields[i], this, this.runValidate);
                        }
                    }

                    // add observers
                    for (var j = 0; j < requiredFields.length; j++) {
                        ember.addObserver(model, requiredFields[j], this, this.runValidate);
                    }
                }
                this.set(this.mainModel + '.RequiredFields', requiredFields);
            },

            validate: function (success, error) {
                this.set('validateBegin', true);
                this.set('fieldErrors', []);
                var missingFields = [];
                if (!this.mainModel) {
                    return;
                }

                var model = this.get(this.mainModel);
                this.setRequiredFields(model.RequiredFields);
                for (var i = 0; i < model.RequiredFields.length; i++) {
                    if (!model[model.RequiredFields[i]]) {
                        missingFields.push(model.RequiredFields[i]);
                    }
                }

                if (missingFields.length > 0) {
                    var errorMessage = translate.getString('validationRequiredFields');
                    this.set('fieldErrors', missingFields);
                    this.setProperties({
                        'validationErrorMessage': errorMessage,
                        'showValidationErrorMessage': true,
                        'slideValidationErrorMessageDown': true,
                        'enableSave': false
                    });
                    if (error) {
                        error({
                            message: errorMessage,
                            fields: missingFields
                        });
                    }
                } else {
                    if (this.get('isBackendValidation'))
                        return;

                    this.setProperties({
                        'validationErrorMessage': '',
                        'showValidationErrorMessage': true,
                        'slideValidationErrorMessageDown': false,
                        'enableSave': true
                    });
                    if (success)
                        success();
                }
                this.toggleProperty('validated');
            },
            init: function () {
                this._super();
                var that = this;
                this.setProperties({
                    'isBackendValidation': false,
                    'validationErrorMessage': '',
                    'showValidationErrorMessage': false,
                    'slideValidationErrorMessageDown': false,
                    'enableSave': true
                });

                ember.Instrumentation.subscribe('validationErrorOccurred',
                {
                    before: function (name, timestamp, jqXHR) {
                    },
                    after: function (name, timestamp, jqXHR) {
                        that.setProperties({
                            'isBackendValidation': true,
                            'validationErrorMessage': JSON.parse(jqXHR.responseJSON),
                            'showValidationErrorMessage': true,
                            'slideValidationErrorMessageDown': true,
                            'enableSave': false
                        });
                    }
                });

            }
        }),

        //// Ember View that provides helpers to load widget as soon as the template has been loaded
        //WidgetView: ember.View.extend({
        //    didInsertElement: function () {
        //        Ember.run.scheduleOnce('afterRender', this, 'loadWidgets');
        //    },

        //    willDestroyElement: function() {
        //        Ember.run.scheduleOnce('afterRender', this, 'destroyWidgets');
        //    },

        //    watchWidgetCreate: ember.on('didInsertElement', ember.observer('controller.model', function () {
        //        Ember.run.scheduleOnce('afterRender', this, this.loadWidgetsRepeat);
        //    })),

        //    watchWidgetDestroy: ember.on('willDestroyElement', ember.observer('controller.model', function () {
        //        Ember.run.scheduleOnce('afterRender', this, this.destroyWidgetsRepeat);
        //    })),

        //    loadWidgets: function () {

        //    },

        //    destroyWidgets: function() {
                
        //    },

        //    loadWidgetsRepeat: function () {
        //    },

        //    destroyWidgetsRepeat: function () {
        //    }
        //}),

        //OverlayView: ember.View.extend({
        //    baseTransition: undefined,
        //    isPrintMode: false,
        //    usePrintButton: true,
        //    dragHandle: '.' + guiHelpers.classes.dialog.title,
        //    dialogType: 'resizable',
        //    dialogSelector: '.overlayDialog',
        //    baseZIndex: undefined,

        //    dialogResize: function (deltaX, deltaY) {

        //    },

        //    didInsertElement: function () {
        //        Ember.run.scheduleOnce('afterRender', this, 'loadWidgets');
        //    },

        //    watchWidgetCreate: ember.on('didInsertElement', ember.observer('controller.model', function () {
        //        Ember.run.scheduleOnce('afterRender', this, this.loadWidgetsRepeat);
        //    })),

        //    watchWidgetDestroy: ember.on('willDestroyElement', ember.observer('controller.model', function () {
        //        Ember.run.scheduleOnce('afterRender', this, this.destroyWidgetsRepeat);
        //    })),

        //    loadWidgetsRepeat: function () {
        //    },

        //    destroyWidgetsRepeat: function () {
        //    },

        //    loadWidgets: function () {
        //        var that = this;
        //        if (!that.isPrintMode) {
        //            $(this.dialogSelector).overlayDialog({
        //                usePrintButton: that.usePrintButton,
        //                dragHandle: this.dragHandle,
        //                baseZIndex: this.baseZIndex,
        //                dialogType: this.dialogType,
        //                resized: function (deltaX, deltaY) {
        //                    that.dialogResize(deltaX, deltaY);
        //                },
        //                closed: function () {
        //                    if (that.baseTransition !== null)
        //                        that.baseTransition();
        //                },
        //                printModeCalled: function () {
        //                    that.printMode();
        //                }
        //            });
        //        }
        //    },
        //    willDestroyElement: function () {
        //        $(this.dialogSelector).overlayDialog('destroy');
        //        this.destroyWidgets();
        //    },

        //    destroyWidgets: function () {

        //    },
        //    printMode: function () { }
        //})
    };

    //framework.ValidatedView = framework.WidgetView.extend({
    //    slideError: ember.observer('controller.slideValidationErrorMessageDown', function (){

    //        if (this.get('controller.slideValidationErrorMessageDown')) {
    //            ember.run.scheduleOnce('afterRender',
    //                function () {
    //                    $('.validationErrorMessage').slideDown(uiSettings.defaultAnimationSpeed);
    //                });
    //        } else {
    //            var that = this;
    //            $('.validationErrorMessage')
    //                .slideUp(uiSettings.defaultAnimationSpeed,
    //                    function () {
    //                        that.set('controller.showValidationErrorMessage', false);
    //                    });
    //        }

    //    }),
    //    fieldErrors: ember.observer('controller.fieldErrors', function (){
    //        $('[name]').removeClass('validationError showError');
    //        var fields = this.get('controller.fieldErrors');
    //        for (var i = 0; i < fields.length; i++) {
    //            $("[name*='" + fields[i] + "']").addClass('validationError showError');
    //        }
    //    })
    //});

    return framework;
});