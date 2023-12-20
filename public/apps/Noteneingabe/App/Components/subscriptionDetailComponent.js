define([
    'ember',
    'guiHelpers',
    'translate',
    'constants',
    'eventoHelpers',
    'api',
    'arrayHelpers',
    'uiSettings',
    'icons',
    'components/radioButtonComponent',
    'templates/components/subscriptionDetailComponent',
    'components/fileChooserComponent',
    'components/tooltipButtonComponent',
    'components/tristateCheckboxComponent'
], function (ember, guiHelpers, translate, constants, eventoHelpers, api, arrayHelpers, uiSettings, icons) {
    ClxApp.SubscriptionDetailComponent = ember.Component.extend({
        tagName: 'span',
        classNames: 'subscriptionDetail',
        setInvalid: undefined,

        init: function () {
            this._super();
            if (this.get('showLabel') === undefined)
                this.set('showLabel', true);
        },

        actions: {
            deleteFile: function () {
                api.deleteSubscriptionDetailFile(this.get('model.IdObject'));
                this.set('value', null);
                this.set('model.Value', null);
                api.updateSubscriptionDetail(this.get('model'));
                this.set('showFileUpload', false);
            },
            saveFile: function (selectedFile, fileName) {
                var that = this;
                var oldValue = this.get('value');
                // expect existing file -> try merge
                if (oldValue) {
                    api.updateSubscriptionDetailFile(this.get('model.IdObject'),
                        selectedFile,
                        fileName,
                        true,
                        function(result) {
                            // merge successful -> save merged filename into sd otherwise save filename
                            if (result === true)
                                that.set('value', translate.getString('mergedFilename') + '.pdf');
                            else
                                that.set('value', fileName);
                            api.updateSubscriptionDetail(that.get('model'));
                        });
                } else {
                    // no existing file -> save file and filename to sd
                    api.updateSubscriptionDetailFile(this.get('model.IdObject'),
                        selectedFile,
                        fileName,
                        false,
                        function() {
                            // succcess
                            that.set('value', fileName);
                            api.updateSubscriptionDetail(that.get('model'));
                        },
                        function() {
                            // validation error
                            that.set('validationError', translate.getString('fileuploadError'));
                        });
                }
                this.valueChanged();
            },
            cancelValidationError: function() {
                this.set('validationError', undefined);
            }
        },

        didInsertElement: function () {
            this.setHasValue();
        },

        willDestroyElement: function() {
            var sdsToWatch = this.get('sdsToWatch');
            if (!sdsToWatch)
                return;
            $.each(sdsToWatch, function(index, value) {
                ember.removeObserver(value, 'Value', this);
            });
        },

        hiddenSubscriptionDetailsChanged: ember.on('init', ember.observer('hiddenSubscriptionDetails', function () {
            var hiddenDetails = this.get('hiddenSubscriptionDetails');
            if (hiddenDetails && $.inArray(this.get('model.IdAnmeldeVSS'), hiddenDetails) > -1) {
                this.set('hide', true);
                this.set('isValid', true);
            } else {
                this.set('hide', false);
            }
        })),
        
        dependenciesChanged: ember.on('init', ember.observer('dependencies', function () {
            if (this.get('setReadOnly') === true)
                return;

            var dependencies = this.get('dependencies');
            var allSds = this.get('allSDs');
            var idVss = this.get('model.IdAnmeldeVSS');

            if (!dependencies && !allSds) return;
            var ownDependencies = dependencies.filter(function(depe) {
                return depe.IdVss === idVss;
            });
            // no dependencies for this sd
            if (ownDependencies.length === 0)
                return;

            var that = this;
            var sdsToWatch = arrayHelpers.intersectArrays(allSds, ownDependencies, function (sd, dep) {
                return idVss === dep.IdVss && sd.IdAnmeldeVSS === dep.IdVssInfluencer;
            });
            this.set('sdsToWatch', sdsToWatch);

            // no sds found to the dependencies -> hide the sd
            if (sdsToWatch.length === 0) {
                ember.run.scheduleOnce('afterRender', function () {
                    that.set('hide', true);
                });
                return;
            }

            $.each(sdsToWatch, function (index, value) {
                ember.run.scheduleOnce('afterRender', function () {
                    that.set('hide',
                        eventoHelpers.subscriptionDetails.needsToHideSubscriptionDetail(idVss, value, dependencies));
                });
                
                ember.addObserver(value, 'Value', this, function (sender) {
                    if (!(that.get('isDestroyed') || that.get('isDestroying'))) {
                        that.set('dependencyChange', true);
                        that.set('hide', eventoHelpers.subscriptionDetails.needsToHideSubscriptionDetail(idVss, sender, dependencies));
                    }
                });
            });
        })),

        hideChanged: ember.observer('hide', function () {
            if (this.$() === undefined)
                return;
            var hide = this.get('hide');
            if (hide)
                this.sendAction('onHide');
            else
                this.sendAction('onShow');

            if (this.get('hideParent') === true) {
                if (hide === true) { // on hide delete SD

                    // hide parent after animation when dependency has changed
                    var that = this;
                    if (this.get('dependencyChange')) {
                        that.set('dependencyChange', false);
                        setTimeout(function () {
                            that.$().parent().hide();
                        }, uiSettings.defaultAnimationSpeed);
                    }
                    else // hide immediately
                        this.$().parent().hide();

                } else {
                    this.$().parent().show();
                }
            }

            // delete content on hide
            if (this.get('model.Value')) { // only when set already
                this.set('model.Value', null);
                // special case sd with file
                if (this.get('model.VssStyle') === constants.vssStyle.File)
                    api.deleteSubscriptionDetailFile(this.get('model.IdObject'));
                api.updateSubscriptionDetail(this.get('model'));
            }
        }),

        valueChanged: ember.observer('model.Value', function () {
            // "yes only" must be deleted on "no".
            if (this.get('model.VssTypEx') === constants.vssType.Yes && this.get('model.Value') === false) {
                this.set('model.Value', undefined);
                this.set('model.Value', undefined);
            }

            var isValid =  true;
            
            // check for required sds, only when not readonly
            if (!this.get('setReadOnly') && 
                eventoHelpers.subscriptionDetails.isRequired(this.get('model')) &&
                !this.get('model.Value')
                ) {
                isValid = false;
            }

            this.sendAction('validated', isValid, this.get('model'));
            ember.run.debounce(this, this.attemptSave, uiSettings.defaultDebouncing);
        }),

        IdObject: ember.computed('model.IdObject', {
            get: function() {
                return this.get('model.IdObject');
            }
        }),

        VssBezeichnung: ember.computed('model.VssBezeichnung', {
            get: function() {
                return this.get('model.VssBezeichnung');
            }
        }),

        isDisabled: ember.computed('disabled', 'model.ReadOnly', {
            get: function () {
                return this.get('disabled') || this.get('model.ReadOnly');
            }
        }),

        isDropdown: ember.computed('isDropdown', {
            get: function() {
                var dropdownItems = this.get('model.DropdownItems');
                return dropdownItems !== undefined && dropdownItems !== null;
            }
        }),

        dropdownItems: ember.computed('model.DropdownItems', {
            get: function() {
                return this.get('model.DropdownItems')
                    .filter(v => v.IsActive)
                    .map(v => {
                        // The Value property on the SubscriptionDetail model is of
                        // type string. In case of a DropDown, the Value refers to a
                        // Key from a list of DropdownItems that is also part of the
                        // SubscriptionDetailModel. The Key however is of type int.
                        // The Combo-Box component selects values based on strict
                        // equality, which would not work in this case, because the
                        // types don't match. As a workaround, we convert the Key
                        // property to a string here, so it matches the Value.
                        let result = Object.assign({}, v);
                        result.Key = (result.Key || "").toString();
                        return result;
                    });
            }
        }),

        allowArbitraryText: ember.computed('model.VssStyle', {
            get: function() {
                return this.get('model.VssStyle') === constants.vssStyle.Combobox;
            }
        }),

        radioButtonListItems: ember.computed('radioButtonListItems',  {
            get: function() {
                return this.get('model.DropdownItems').filter(v => v.IsActive);
            }
        }),

        isHeader: ember.computed('model.VssTypEx', {
            get: function() {
                return this.get('model.VssStyle') === constants.vssStyle.Header;
            }
        }),

        isRemark: ember.computed('model.VssStyle', {
            get: function() {
                return this.get('model.VssStyle') === constants.vssStyle.Remark;
            }
        }),

        isInt: ember.computed('model.VssTypEx', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.IntField;
            }
        }),

        isPrice: ember.computed('model.VssTypEx', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.Currency;
            }
        }),

        isText: ember.computed('VssTypEx', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.Text;
            }
        }),
        
        isYesNo: ember.computed('VssTypEx', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.YesNo;
            }
        }),
        
        isYes: ember.computed('VssTypEx', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.Yes;
            }
        }),
        
        isMemo: ember.computed('VssTypEx', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.MemoText;
            }
        }),
        
        isDate: ember.computed('VssTypEx', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.Date;
            }
        }),

        isFile: ember.computed('VssTypEx', {
            get: function() {
                return this.get('model.VssStyle') === constants.vssStyle.File;
            }
        }),

        isFoto: ember.computed('VssTypEx', {
            get: function() {
                return this.get('model.VssStyle') === constants.vssStyle.Foto;
            }
        }),

        idYes: ember.computed({
            get: function() {
                return this.get('model.IdObject') + '_yes';
            }
        }),

        idNo: ember.computed({
            get: function() {
                return this.get('model.IdObject') + '_no';
            }
        }),

        isReadOnly: ember.computed({
            get: function() {
                var setReadOnly = this.get('setReadOnly');
                if (setReadOnly === true)
                    return true;
                return this.get('model.VssInternet') === constants.vssInternet.ReadOnly;
            }
        }),

        hasTooltip: ember.computed('model.Tooltip', {
            get: function() {
                if (this.get('model.Tooltip'))
                    return true;
                return false;
            }
        }),

        disabled: ember.computed('model.Validated', 'setDisabled', {
            get: function() {
                if (this.get('model.Validated') || this.get('setDisabled')) {
                    this.sendAction('onDisable');
                    return 'disabled';
                }
                return undefined;
            }
        }),

        required: ember.computed('model.VssTypEx', 'model.VssInternet', {
            get: function() {
                return this.get('model.VssTypEx') === constants.vssType.Yes ||
                    this.get('model.VssInternet') === constants.vssInternet.required;
            }
        }),

        invalidatedClass: ember.computed('isValid', 'setInvalid', function () {
            return this.setInvalid === true || this.isValid === false
                ? 'validationError showError'
                : '';
        }),

        translatedValue: ember.computed('model.Value', {
            get: function() {
                var value = this.get('model.Value');
                if (!value)
                    return '-';

                if (this.get('isYes') || this.get('isYesNo')) {
                    if (this.get('model.ShowAsRadioButtons')) {
                        if (value === 'Ja')
                            return translate.getString('yes');
                        else if (value === 'Nein')
                            return translate.getString('no');
                    } else
                        return undefined;

                } else if (this.get('isDropdown') && !this.get('allowArbitraryText')) {
                    var key = this.get('model.Value');
                    var items = this.get('dropdownItems');
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].Key === key.toString()) {
                            return items[i].Value;
                        }
                    }
                    return '-';
                }
                return value;
            }
        }),

        controlId: ember.computed('model.IdObject', 'overrideControlId', {
            get: function() {
                return this.get('overrideControlId') ? this.get('overrideControlId') : this.get('model.IdObject');
            }
        }),

        fileUrl: ember.computed('model.IdObject', 'model.Value', {
            get: function() {
                if (this.get('isFoto'))
                    return api.getSubscriptionDetailFileUrl(this.get('model.IdObject'), this.get('model.Value'));
                return '#/sdFiles/' + this.get('model.IdObject') + '/' + this.get('model.Value');
            }
        }),

        readOnlyIcon: ember.computed('model.Value', {
            get: function() {
                if (this.get('isYesNo') && !this.get('model.ShowAsRadioButtons')) {
                    if (!this.get('model.Value'))
                        return undefined;
                    return this.get('model.Value') === 'Ja' ? icons.checkmark : '-';
                }
            }
        }),

        setHasValue: function() {
            if (this.get('model.Value'))
                this.set('hasValue', true);
            else
                this.set('hasValue', false);
        },

        attemptSave: function () {
            this.setHasValue();
            var validationStatus = this.get('validationStatus');
            if (validationStatus) {
                var status = eventoHelpers.subscriptionDetails.getStatusForOnla(validationStatus);
                if (this.get('validationStatus.Value') === status)
                    return; // don't send an update of this SD when there is no change
                this.set('validationStatus.Value', status);
                api.updateSubscriptionDetail(validationStatus);
            }

            // Note: For Dropdown inputs, the user is able to type into the
            // combo-box to filter the displayed options. The search term the
            // user is typing is stored in model.Value, and is only corrected to
            // a DropdownItems-Key when an option is selected, or when focus
            // leaves the combo-box. However, attemptSave() is automatically
            // triggered whenever model.Value changes (every keystroke), which
            // causes the app to try to save the search-term as a Value, as it
            // has not been corrected to a DropdownItems-Key yet, which will
            // result in an error. As a workaround, for Dropdown inputs we only
            // save if model.Value is equal to any DropdownItems-key. Otherwise
            // we save a copy of model where Value is set to null.
            //
            // Todo: Combo-Box should be changed so the typed in value is not
            // directly written to model.Value.
            let modelValue = this.get('model.Value');
            let isValid = !this.get('isDropdown') || this.get('model.DropdownItems').some(v => v.Key == modelValue) || this.get('allowArbitraryText');
            if (isValid) {
                this.sendAction('save', this.get('model'));
            } else {
                let modelCopy = Object.assign({}, this.get('model'));
                modelCopy.Value = null;
                this.sendAction('save', modelCopy);
            }
        },

        inputMaxlength: ember.computed('model', {
            get: function () {
                if (this.get('isText') || this.get('isDropdown') && this.get('allowArbitraryText'))
                    return constants.inputSizes.subscriptionDetailValue;
                return undefined;
            }
        })
    });
});