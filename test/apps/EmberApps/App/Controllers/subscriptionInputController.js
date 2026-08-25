define([
    'ember',
    'jquery',
    'framework',
    'api',
    'translate',
    'arrayHelpers',
    'eventoHelpers'
], function (ember, $, framework, api, translate, arrayHelpers, eventoHelpers) {
    ClxApp.SubscriptionInputController = framework.AutoSaveController.extend({

        areExpanded: function (key, value) {
                return true;
        }.property('mustExpandAll'),

        actions: {
            onGroupValidated: function (idGroup, allValid) {
                var that = this;
                var allGroupsValidation = this.get('allGroupsValidation');
                if (!allGroupsValidation) {
                    allGroupsValidation = {};
                    $.each(this.get('subscriptionDetailGroups'), function (index, group) {
                        allGroupsValidation[group.header.IdAnmeldeVSS.toString()] = false;
                    });
                }
                allGroupsValidation[idGroup.toString()] = allValid;
                this.set('allGroupsValidation', allGroupsValidation);


                // if all groups are valid update invalidated, so the view and template can be displayed correctly
                var allGroupsValid = true;
                arrayHelpers.eachKeyValue(allGroupsValidation, function (key, value) {
                    if (!value) {
                        allGroupsValid = false;
                        return false;
                    }
                });

                if (allGroupsValid) {
                    ember.run.scheduleOnce('afterRender', function() {
                        that.set('invalidated', false);
                    });
                }
            },
            groupDisabled: function (idGroup) {
                var allGroupsDisabledList = this.get('allGroupsDisabledList');
                if (!allGroupsDisabledList) {
                    allGroupsDisabledList = {};
                    $.each(this.get('subscriptionDetailGroups'), function (index, group) {
                        allGroupsDisabledList[group.header.IdAnmeldeVSS.toString()] = false;
                    });
                }
                allGroupsDisabledList[idGroup.toString()] = true;
                this.set('allGroupsDisabledList', allGroupsDisabledList);

                var allDisabled = true;
                arrayHelpers.eachKeyValue(allGroupsDisabledList, function (k, v) {
                    if (v === false) {
                        allDisabled = false;
                        return false;
                    }
                });
                this.set('allGroupsDisabled', allDisabled);
            },

            forwardStatus: function () {
                var that = this;
                // if there are no subscription details displayed -> don't validate
                var groups = this.getAllSDs();

                if (groups && groups.length > 0) {
                    // if one SD is not valid stop execution and let View handle the display of the errors (bind on invalidated)
                    var allGroupsValidation = this.get('allGroupsValidation');

                    if (!allGroupsValidation)
                        return;

                    var allValid = true;
                    arrayHelpers.eachKeyValue(allGroupsValidation,
                        function(key, value) {
                            allValid &= value;
                        });

                    if (!allValid) {
                        this.toggleProperty('mustExpandAll');
                        ember.run.scheduleOnce('afterRender',
                            function() {
                                that.set('validationMessage', translate.getString('validationRequiredFields'));
                                that.set('invalidated', true);
                            });
                        return;
                    }
                }
                // check for open payments
                var isValidPayment = this.isValidPayment();
                if (!isValidPayment) {
                    ember.run.scheduleOnce('afterRender',
                        function () {
                            that.set('validationMessage', translate.getString('payBeforeContinue'));
                            that.set('invalidated', true);
                        });
                    return;
                }

                // do not forward status if it is an already passed work progress or if it is the last work progress
                if (!this.get('model.SelectedWorkProgress.IsCurrent') || this.get('model.SelectedWorkProgress.IsLast')) {
                    // change validation status to validation (validation for the SGS)
                    this.advanceValidationStatus();
                    this.transitionToRoute('subscriptionInput', this.get('model.Subscription.CurrentWorkProgressId'));
                    this.send('refreshRoute');
                    return;
                }

                var successor = this.get('model.NextStatus');
                this.setupStatusSuccessor(successor);
                this.toggleProperty('isProcessing');

                // change validation status to validation (validation for the SGS)
                this.advanceValidationStatus();

                // forward status until the next with work progress
                this.processStatusRecursive(successor,
                    this.get('model.Subscription.CurrentWorkProgressId'),
                    function (newWorkProgressId) {
                        var intervalId = setInterval(function() {
                            if (that.get('validationStatusAdvanced')) {
                                that.toggleProperty('isProcessing');
                                that.transitionToRoute('subscriptionInput', newWorkProgressId);
                                that.send('refreshAll');
                                that.set('validationStatusAdvanced', undefined);
                                clearInterval(intervalId);
                            }
                        }, 100);
                    });
            },
            
            doPayment: function (idSubscription) {
                var that = this;
                this.set('isWorking', true);
                this.send('openSubscriptionPayment', idSubscription);
                setTimeout(function () {
                    that.set('isWorking', false);
                }, 3000);
            },

            payInvoice: function (invoiceId) {
                var that = this;
                this.set('isWorking', true);
                this.send('openInvoicePayment', invoiceId);
                setTimeout(function () {
                    that.set('isWorking', false);
                }, 3000);
            }
        },

        advanceValidationStatus: function () {
            var that = this;
            var groups = this.getAllSDs();
            var counter = groups.length;
            if (counter === 0) {
                this.set('validationStatusAdvanced', true);
                return;
            }
            var hasValidationStatus = false;

            $.each(groups, function(index, group) {
                var status = group.validationStatus;
                if (status) {
                    hasValidationStatus = true;
                    status.Value = eventoHelpers.subscriptionDetails.getStatusForValidation(status);
                    api.updateSubscriptionDetail(status, function() {
                        counter--;
                        if (counter <= 0) {
                            that.set('validationStatusAdvanced', true);
                        }
                    });
                }
            });

            if (!hasValidationStatus)
                this.set('validationStatusAdvanced', true);

            // to be sure the application can continue and will not be blocked, set success after 5 seconds
            setTimeout(function() {
                that.set('validationStatusAdvanced', true);
            }, 5000);
        },

        dialogDisabled: function () {
            return this.get('allGroupsDisabled') && !this.hasOpenPayment();
        }.property('allGroupsDisabled', 'model.SubscriptionPayment.IsPaymentReady', 'model.SubscriptionPayment.OpenInvoices.@each'),

        selectedWorkProgressChanged: function() {
            var selected = this.get('model.SelectedWorkProgress');
            this.set('invalidated', false);
            this.set('allGroupsDisabled', false);
            this.set('allGroupsValidation', undefined);
            // go back when the selected work progress is not selectable (probably url hack of the user)
            if (selected && !selected.IsPast && !selected.IsCurrent)
                history.back();
        }.observes('model.SelectedWorkProgress.Id'),

        finalizeInputText: function () {
            var text = undefined;
            if (this.get('model.NextStatus.HasBeenVisited') || this.get('model.SelectedWorkProgress.IsPast'))
                text = this.get('model.SelectedWorkProgress.InputConsecutiveTimesText');
            else
                text = this.get('model.SelectedWorkProgress.InputFirstTimeText');

            if (text)
                return text;
            else
                return translate.getString('finalizeInput');

        }.property('model.SelectedWorkProgress'),

        setupStatusSuccessor: function(successor) {
            successor.DataClassId = 'PersonenAnmeldung';
            successor.Id1 = this.get('model.Subscription.IdSubscription');
            successor.Id2 = this.get('model.Subscription.IdPerson');
        },

        processStatusRecursive: function (successor, currentWorkProgressId, success) {
            var that = this;
            var foundProgress = $.grep(this.get('model.WorkProgresses'), function(prog) {
                return prog.Id === successor.WorkProgressId;
            });
            var repost = successor.WorkProgressId === currentWorkProgressId || foundProgress.length === 0;
            api.processStatus(successor, function () {
                if (repost) {
                    api.getStatusProcesses('forward',
                        successor.IdStatus,
                        true,
                        function(newSuccessors) {
                            var newSuccessor = newSuccessors[0]; // always take the first one as by designed
                            that.setupStatusSuccessor(newSuccessor);
                            that.processStatusRecursive(newSuccessor, currentWorkProgressId, success);
                        });
                } else {
                    success(successor.WorkProgressId);
                }
            }); 
        },

        subscriptionDetailGroups: function() {
            var result = eventoHelpers.subscriptionDetails
                .getSubscriptionGroups(this.get('model.SelectedWorkProgress.SubscriptionDetailGroups'),
                    this.get('model.SubscriptionDetails'));
            return result;
        }.property('model.SelectedWorkProgress.SubscriptionDetailGroups', 'model.SubscriptionDetails'),

        hasContent: function () {
            var subsequentSDs = this.get('subsequentSDs');
            var subscriptionDetailGroups = this.get('subscriptionDetailGroups');
            var isEligibilityTest = this.get('model.SelectedWorkProgress.IsEligibilityTest');
            var eligibilitySubscriptions = this.get('model.EligibilitySubscriptions');
            return (subsequentSDs && subsequentSDs.length > 0) ||
                (subscriptionDetailGroups && subscriptionDetailGroups.length > 0) ||
                (isEligibilityTest && eligibilitySubscriptions && eligibilitySubscriptions.length > 0);
        }.property('subscriptionDetailGroups', 'subsequentSDs', 'model.SelectedWorkProgress.Id'),

        allDisabled: function () {
            return !this.get('model.SelectedWorkProgress.InputAllowed');
        }.property('model.SelectedWorkProgress.InputAllowed'),

        hasSubscriptionDetailsForPayment: function () {
            var sds = this.get('model.SubscriptionPayment.SubscriptionDetailsForPayment');
            return sds ? sds.length > 0 : false;
        }.property(),

        hasInvoices: function () {
            var invoices = this.get('model.SubscriptionPayment.OpenInvoices');
            return invoices ? invoices.length > 0 : false;
        }.property('model.SubscriptionPayment.OpenInvoices.@each'),

        hasOpenPayment: function() {
            if (this.get('model.SelectedWorkProgress.IsPayment')) {
                if (this.get('model.SubscriptionPayment.IsPaymentReady'))
                    return true;
                return !this.isValidPayment();
            }
            return false;
        },

        isValidPayment: function () {
            var that = this;
            // validation base method
            var checkValid = function(sp) {
                var isValidPayment = true;
                if (sp.IsPaymentReady)
                    isValidPayment = false;
                if (sp.OpenInvoices) {
                    $.each(sp.OpenInvoices,
                        function () {
                            if (this.Balance !== 0 && !this.CountsAsPayed && !this.PaymentConfirmationPending)
                                isValidPayment = false;
                        });
                }
                return isValidPayment;
            };
            var isValid = true;

            if (this.get('model.SelectedWorkProgress.IsEligibilityTest')) {
                $.each(this.get('model.EligibilitySubscriptions'),
                    function(index, eli) {
                        if (!checkValid(eli.SubscriptionPayment)) {
                            isValid = false;
                            return false;
                        }
                        return true;
                    });
            }

            if (this.get('model.SelectedWorkProgress.IsPayment'))
                isValid &= checkValid(this.get('model.SubscriptionPayment'));

            return isValid;
        },

        subsequentSDs: function () {
            if (!this.get('model.SelectedWorkProgress.IsSubsequentFiling'))
                return [];
            var allGroups = eventoHelpers.subscriptionDetails
                .getSubscriptionGroups(undefined, this.get('model.SubscriptionDetails'));
            var result = $.grep(allGroups, function(group) {
                return eventoHelpers.subscriptionDetails.isSubsequentStatus(group.validationStatus);
            });
            return result;
        }.property('model.SubscriptionDetails', 'model.SelectedWorkProgress.Id'),

        getAllSDs: function() {
            var groups = this.get('subscriptionDetailGroups');
            if (this.get('model.SelectedWorkProgress.IsSubsequentFiling'))
                groups = groups ? groups.concat(this.get('subsequentSDs')) : undefined;
            return groups;
        },

        showInputButton: function() {
            var inputAllowed = this.get('model.SelectedWorkProgress.InputAllowed');
            var isLast = this.get('model.SelectedWorkProgress.IsLast');
            var isPast = this.get('model.SelectedWorkProgress.IsPast');
            var hasContent = this.get('hasContent');
            if (hasContent)
                return true;
            return !isLast && !isPast && inputAllowed;
        }.property('model.SelectedWorkProgress.Id', 'hasContent')
    });
});