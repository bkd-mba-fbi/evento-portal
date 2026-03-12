define([
    'jquery',
    'ember',
    'constants',
    'eventoHelpers',
    'arrayHelpers',
    'guiHelpers',
    'api',
    'templates/components/subscriptionDetailGroupComponent',
    'components/subscriptionDetailComponent',
    'controllers/subscriptionDetailController'
], function ($, ember, constants, eventoHelpers, arrayHelpers, guiHelpers, api) {
    ClxApp.SubscriptionDetailGroupComponent = ember.Component.extend({
        tagName: 'div',
        actions: {
            toggleExpand: function() {
                this.toggleProperty('isExpanded');
            }
        },

        willDestroyElement: function() {
            var sdsToWatch = this.get('sdsToWatch');
            if (!sdsToWatch) return;
            $.each(sdsToWatch, function (index, value) {
                ember.removeObserver(value, 'Value', this);
            });
        },

        childValidated: function () {
            this.setChildValidation(this.get('validChild'), true);
        }.observes('validChildChanged'),

        childInvalidated: function () {
            this.setChildValidation(this.get('invalidChild'), false);
        }.observes('invalidChildChanged'),

        setChildValidation: function (child, isValid) {
            var childValidation = this.get('childValidation');
            if (!childValidation) {
                childValidation = {};
                $.each(this.subscriptionDetailGroup().subscriptionDetails,
                    function() {
                        childValidation[this.IdAnmeldeVSS.toString()] = !eventoHelpers.subscriptionDetails.isRequired(this);
                    });
            }
            childValidation[child.IdAnmeldeVSS.toString()] = isValid;

            // after setting, check for all valid and trigger action on parent controller (only if not explicitely read only
            if (!this.get('setReadOnly')) {
                var allValid = true;
                arrayHelpers.eachKeyValue(childValidation,
                    function(key, value) {
                        if (!value) {
                            allValid = false;
                            return false;
                        }
                    });
                this.sendAction('onValidateAll', this.getIdGroup(), allValid);
                this.set('allValid', allValid);
                this.set('childValidation', childValidation);
            }
        },

        allDisabled: function () {
            var disabled = this.get('disabled');
            if (!disabled) {
                var status = this.get('validationStatus');
                if (!status)
                    disabled = this.get('isPast');
                else
                    disabled = $.inArray(parseInt(status.Value), constants.vssValidationStatus.allDisable) > - 1;
            }
            if (disabled)
                this.sendAction('onDisable', this.getIdGroup());
            return disabled;
        }.property('validationStatus_changed', 'disabled', 'isPast'),
        
        subscriptionDetailGroup: function () {
            var group = this.get('group');
            if (group) // if the groups have already been built in parent and given down to the component
                return group;

            group = this.get('subscriptionDetailGroup_save');
            if (group)
                return group;
            var idGroup = this.getIdGroup();
            var allSds = this.get('allSDs');
            group = eventoHelpers.subscriptionDetails.getSubscriptionGroup(idGroup, allSds);
            this.set('subscriptionDetailGroup_save', group);
            return group;
        },

        subscriptionDetailGroupChanged: function() {
            this.set('subscriptionDetailGroup_save', undefined);
        }.observes('allSDs', 'idGroup', 'group'),

        dependenciesChanged: function () {
            if (this.get('setReadOnly') === true)
                return;
            var dependencies = this.get('dependencies');
            var allSds = this.get('allSDs');
            var header = this.subscriptionDetailGroup().header;
            if (!header)
                return;
            var idVss = header.IdAnmeldeVSS;

            if (!dependencies && !allSds) return undefined;
            var that = this;
            var sdsToWatch = arrayHelpers.intersectArrays(allSds, dependencies, function (sd, dep) {
                return idVss === dep.IdVss && sd.IdAnmeldeVSS === dep.IdVssInfluencer;
            });
            this.set('sdsToWatch', sdsToWatch);
            $.each(sdsToWatch, function (index, value) {
                ember.run.scheduleOnce('afterRender', function () {
                    that.set('hide', eventoHelpers.subscriptionDetails.needsToHideSubscriptionDetail(idVss, value, dependencies));
                });

                ember.addObserver(value,
                    'Value',
                    this,
                    function(sender) {
                        that.set('hide',
                            eventoHelpers.subscriptionDetails
                            .needsToHideSubscriptionDetail(idVss, sender, dependencies));
                    });
            });
        }.observes('dependencies').on('init'),

        hideChanged: function () {
            if (this.get('hide') === true) { // on hide delete SDs
                $.each(this.get('subscriptionDetails'), function (i, v) {
                    if (v.Value) { // only delete if they have a value
                        ember.set(v, 'Value', null);
                        // special case sd with file
                        if (v.VssStyle === constants.vssStyle.File)
                            api.deleteSubscriptionDetailFile(v.IdObject);
                        api.updateSubscriptionDetail(v);
                    }
                });
                // delete validation status
                var group = this.subscriptionDetailGroup();
                var validationStatus = group.validationStatus;
                if (validationStatus && validationStatus.Value) {
                    validationStatus.Value = null;
                    api.updateSubscriptionDetail(validationStatus);
                }
                // delete validation message
                var validationMessage = group.validationMessage;
                if (validationMessage && validationMessage.Value) {
                    validationMessage.Value = null;
                    api.updateSubscriptionDetail(validationMessage);
                }

                // delete information about the group
                this.set('group', group);
            }
        }.observes('hide'),

        headline: function() {
            var header = this.subscriptionDetailGroup().header;
            return header ? header.VssBezeichnung : '';
        }.property('allSDs', 'group'),

        validationStatus: function () {
            return this.subscriptionDetailGroup().validationStatus;
        }.property('allSDs', 'group'),

        isValidationStatusValid: function () {
            var status = this.get('validationStatus');
            if (status) 
                return parseInt(status.Value) === constants.vssValidationStatus.isValid;
            else
                return false;
        }.property('validationStatus'),

        isInvalid: function() {
            var validationStatus = this.get('validationStatus');
            if (!validationStatus)
                return false;

            return $.inArray(parseInt(validationStatus.Value), constants.vssValidationStatus.allErrors) > -1;
        }.property('validationStatus'),

        isSubsequent: function () {
            var validationStatus = this.get('validationStatus');
            if (!validationStatus)
                return false;

            return $.inArray(parseInt(validationStatus.Value), constants.vssValidationStatus.allSubsequent) > -1;
        }.property('validationStatus'),

        validationMessage: function () {
            var messageSd = this.subscriptionDetailGroup().validationMessage;
            if (messageSd)
                return messageSd.Value;
            return '';
        }.property('validationStatus'),

        collapseIconStyle: function () {
            var sds = this.get('subscriptionDetails');
            return ember.String.htmlSafe(sds.length === 0 ? 'visibility: hidden;' : '');
        }.property('subscriptionDetails'),

        subscriptionDetails: function () {
            var setReadonly = this.get('setReadOnly');
            var sds = [];
            var group = this.subscriptionDetailGroup();

            $.each(group.subscriptionDetails, function () {
                if (setReadonly && !this.Value) // don't add it when explicit read only with no value
                    return true;
                if (setReadonly && this.VssStyle === constants.vssStyle.Remark) // neither when it is a remark
                    return true;

                sds.push(this);
                return true;
            });
            if (sds.length > 0)
                this.set('allValid', setReadonly);
            return sds;
        }.property('allSDs', 'group'),

        getIdGroup: function() {
            var idGroup = this.get('idGroup');
            if (!idGroup)
                idGroup = this.get('group').header.IdAnmeldeVSS;
            return idGroup;
        }
    });
});