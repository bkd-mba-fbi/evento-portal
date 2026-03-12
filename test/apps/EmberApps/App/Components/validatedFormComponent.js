define([
    'ember',
    'arrayHelpers',
    'translate',
    'templates/components/validatedFormComponent',
    'components/formControlComponent'
], function (ember, arrayHelpers, translate) {
    ClxApp.ValidatedFormComponent = ember.Component.extend({
        tagName: 'form',
        classNames: ['form'],

        initialize: ember.on('init', function () {
            this.set('registeredFields', []);
            var that = this;

            ember.Instrumentation.subscribe('validationErrorOccurred', {
                before: function (name, timestamp, payload) {
                },
                after: function (name, timestamp, payload) {
                    if (!that.get('isDestroyed') && !that.get('isDestroying')) {
                        that.set('validationErrorMessage', payload.validationMessages.join('\n'));
                        that.set('hasBeenInvalid', true);
                    }
                }
            });
        }),

        didInsertElement: function () {
            this.setIsValid();
        },

        willDestroyElement: function () {
            this.get('registeredFields').forEach(function (field) {
                ember.removeObserver(field, 'value', this, this.evaluateValue);
            });
        },

        actions: {
            onRegisterField: function (field) {
                this.get('registeredFields').push(field);

                var fieldname = field.get('fieldname');
                field.set('value', this.get('model.' + fieldname));
                field.set('isRequired', this.isFieldRequired(fieldname));
                ember.addObserver(field, 'value', this, this.evaluateValue);
                var that = this;
                ember.run.scheduleOnce('actions', function () {
                    that.evaluateValue(field);
                });
            },
            onUnregisterField: function (field) {
                var that = this;
                ember.removeObserver(field, 'value', this, this.evaluateValue);
                arrayHelpers.removeSpecific(this.get('registeredFields'), field);
                ember.run.scheduleOnce('actions', function () {
                    that.setIsValid();
                });
            },
            saveInternal: function () {
                if (this.get('isWorking'))
                    return;

                this.setIsValid();
                if (this.get('isValid') === true) {
                    this.set('isWorking', true);
                    this.sendAction('onSave');
                } else {
                    this.setInvalid();
                }
            },
            cancelInternal: function () {
                this.set('isWorking', false);
                this.sendAction('onCancel');
            }
        },

        setIsValid: function () {
            var isValid = true;
            arrayHelpers.eachKeyValue(this.getRequiredFieldValidations(),
                function (key, value) {
                    if (value === false) {
                        isValid = false;
                        return false;
                    }
                    return true;
                });
            this.set('isValid', isValid);
            this.sendAction('validated', isValid);
            // if we invalidated once, we change validation state continuously
            if (this.get('hasBeenInvalid') === true) {
                if (isValid)
                    this.set('validationErrorMessage', undefined);
                else
                    this.setInvalid();
            }
        },

        hasBeenInvalidChanged: ember.observer('hasBeenInvalid', function () {
            if (this.get('hasBeenInvalid') && !this.get('setInvalidCalled'))
                this.setInvalid();
        }),

        setInvalid: function () {
            if (this.get('validationErrorMessage') === undefined)
                this.set('validationErrorMessage', translate.getString('validationRequiredFields'));
            this.set('setInvalidCalled', true);
            this.set('hasBeenInvalid', true);
            this.set('showError', true);
        },

        evaluateValue: function (sender) {
            var value = sender.get('value');
            var fieldname = sender.get('fieldname');
            var requiredFieldValidations = this.getRequiredFieldValidations();
            var isValid = true;
            var isRequired = this.isFieldRequired(fieldname);
            if (isRequired) {
                isValid = value ? true : false;
                requiredFieldValidations[fieldname] = isValid;
            }

            sender.set('isValid', isValid);
            sender.set('isRequired', isRequired);
            this.set('model.' + fieldname, value);
            this.setIsValid();
        },

        isFieldRequired: function (fieldname) {
            var requiredFields = this.getRequiredFields();
            if (requiredFields)
                return requiredFields.indexOf(fieldname) > -1;
            return false;
        },

        getRequiredFields: function () {
            if (this.get('requiredFields'))
                return this.get('requiredFields');
            return this.get('model.RequiredFields');
        },

        validationPrerequisitesChanged: ember.observer('model.RequiredFields.@each', 'requiredFields.@each', function () {
            ember.run.debounce(this, this.evaluateAllFields, 10);
        }),

        evaluateAllFields: function () {
            var that = this;
            // evaluate all fields again
            ember.run.scheduleOnce('actions', function () {
                var fields = that.get('registeredFields');
                if (fields) {
                    fields.forEach(function (field) {
                        that.evaluateValue(field);
                    });
                }
            });
        },

        getRequiredFieldValidations: function () {
            var that = this;
            if (this.get('isDestroying') || this.get('isDestroyed'))
                return {};
            var registeredFields = this.get('registeredFields');
            if (!registeredFields)
                throw new Error('validated-form with required fields, but no fields have been added to this form');

            var requiredFieldValidations = {}; // object used as associative Array
            var requiredFields = this.getRequiredFields();
            // (H1) temporary hack (aneu) to prevent error, because we could not evaluate the reason for the error.
            var allValid = true;
            for (var i = 0; i < requiredFields.length; i++) {
                var fieldname = requiredFields[i];

                // whether there is a field in required fields, but has not been implemented as a form field -> need to throw an exception for the dvlp
                // we make that test here, because here all the fields should be registered and this block will only be executed once.
                var fields = registeredFields.filter(function (field) { return field.fieldname === fieldname; });

                // (H1) temporary hack (aneu) to prevent error, because we could not evaluate the reason for the error.
                if (fields.length === 0 || fields.length > 1) {
                    if (!that.get('errorOccurred')) {
                        that.set('errorOccurred', true);
                        allValid = false;
                        break;
                    }
                }

                if (fields.length === 0)
                    throw new Error('fieldname (' +
                        fieldname +
                        ') is within required fields but not registered as a field in the validated-form');
                if (fields.length > 1)
                    throw new Error('fieldname (' +
                        fieldname +
                        ') is within required fields and has been registered twice as a field in the validated-form');
                var isValid = fields[0].get('value') ? true : false;
                requiredFieldValidations[fieldname] = isValid;
                fields[0].set('isValid', isValid);

                
            }
            if (allValid)
                this.set('errorOccurred', false);
            return requiredFieldValidations;
        }
    });
});