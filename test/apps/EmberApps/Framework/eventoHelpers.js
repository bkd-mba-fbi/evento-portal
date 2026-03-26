define(['jquery', 'constants', 'translate', 'settings'], function ($, constants, translate, settings) {
    return {
        subscriptionDetails: {
            getSubscriptionGroup: function(idHeader, allSDs) {
                var groups = this.getSubscriptionGroups([idHeader], allSDs);
                if (groups)
                    return groups[0];
            },

            getSubscriptionGroups: function (headerIds, allSDs) {
                var result = [];
                var headerFound = false;
                var header = undefined;
                var validationStatus = undefined;
                var validationMessage = undefined;
                var sds = [];

                var fillResult = function () {
                    if (header && header.Style !== constants.vssInternet.hidden) {
                        result.push({
                            header: header,
                            validationStatus: validationStatus,
                            validationMessage: validationMessage,
                            subscriptionDetails: sds
                        });
                    }
                    header = undefined;
                    validationStatus = undefined;
                    validationMessage = undefined;
                    sds = [];
                };

                $.each(allSDs, function () {
                    if (this.VssStyle === constants.vssStyle.Header) {
                        if (headerFound) {
                            fillResult();
                            headerFound = false; // do not add any more sds until next headline to be shown
                        }
                        if (headerIds === undefined || $.inArray(this.IdAnmeldeVSS, headerIds) > -1) {
                            headerFound = true;
                            header = this;
                        }
                        return true;
                    }
                    if (headerFound && this.IsValidationStatus) {
                        validationStatus = this;
                        return true;
                    }
                    if (headerFound && this.IsValidationMessage) {
                        validationMessage = this;
                        return true;
                    }
                    if (headerFound) {
                        sds.push(this);
                    }
                    return true;
                });
                // the last group will never be handled by the foreach above
                fillResult();
                return result;
            },

            isRequired: function (subscriptionDetail) {
                if (settings.useSubscriptionDetailsLegacy)
                    return subscriptionDetail.Required === true ||
                        subscriptionDetail.VssTypEx === constants.vssType.Yes;

                return subscriptionDetail.VssInternet === constants.vssInternet.required ||
                    subscriptionDetail.VssTypEx === constants.vssType.Yes;
            },

            setRequired: function(subscriptionDetail, isRequired) {
                if (settings.useSubscriptionDetailsLegacy)
                    subscriptionDetail.Required = isRequired;
                else {
                    if (isRequired)
                        subscriptionDetail.VssInternet = constants.vssInternet.required;
                    else
                        subscriptionDetail.VssInternet = constants.vssInternet.edit;
                }
            },

            isValidStatus: function (validationStatus) {
                if (!validationStatus)
                    return true;
                return $.inArray(parseInt(validationStatus.Value), constants.vssValidationStatus.allValid) > -1;
            },

            isSubsequentStatus: function (validationStatus) {
                if (!validationStatus)
                    return false;
                return $.inArray(parseInt(validationStatus.Value), constants.vssValidationStatus.allSubsequent) > -1;
            },

            isErrorStatus: function (validationStatus) {
                if (!validationStatus)
                    return false;
                return $.inArray(parseInt(validationStatus.Value), constants.vssValidationStatus.allErrors) > -1;
            },

            getStatusForOnla: function (validationStatusDetail) {
                if (!validationStatusDetail.Value)
                    return constants.vssValidationStatus.ONLA_new;

                var value = parseInt(validationStatusDetail.Value);
                switch (value) {
                    case constants.vssValidationStatus.uncomplete:
                        return constants.vssValidationStatus.ONLA_uncomplete;

                    case constants.vssValidationStatus.isSubsequent:
                        return constants.vssValidationStatus.ONLA_isSubsequent;

                    default:
                        return validationStatusDetail.Value;
                }
            },

            getStatusForValidation: function (validationStatusDetail) {
                if (!validationStatusDetail.Value)
                    return constants.vssValidationStatus.toValidate_new;

                var value = parseInt(validationStatusDetail.Value);
                switch (value) {
                    case constants.vssValidationStatus.ONLA_new:
                        return constants.vssValidationStatus.toValidate_new;

                    case constants.vssValidationStatus.ONLA_uncomplete:
                        return constants.vssValidationStatus.toValidate_uncomplete;

                    case constants.vssValidationStatus.ONLA_isSubsequent:
                        return constants.vssValidationStatus.toValidate_isSubsequent;

                    default:
                        return validationStatusDetail.Value;
                }
            },

            needsToHideSubscriptionDetail: function(idVss, otherSd, allDependencies) {
                if (!otherSd)
                    return true;
                var deps = $.grep(allDependencies, function (dep) {
                    return idVss === dep.IdVss && otherSd.IdAnmeldeVSS === dep.IdVssInfluencer;
                });
                var val = otherSd.Value;
                if (otherSd.VssTypEx === constants.vssType.YesNo || otherSd.VssTypEx === constants.vssType.Yes) {
                    if (val === 'Ja' || val === true)
                        val = '1';
                    else if (val === 'Nein')
                        val = '0';
                    else if (otherSd.VssTypEx === constants.vssType.Yes)
                        val = '0';
                }
                if (!deps) return false;
                var operator = deps[0].Operator;
                var values = deps[0].Values;
                if (operator === constants.vssDependencyOperator.empty)
                    return val !== null && val !== undefined && val !== '';
                if (operator === constants.vssDependencyOperator.notEmpty)
                    return val === null || val === undefined || val === '';
                if (operator === constants.vssDependencyOperator.contains)
                    return !val || $.inArray(val, values) === -1;
                if (operator === constants.vssDependencyOperator.containsNot)
                    return val && $.inArray(val, values) > -1;

                return false;
            }
        },

        person: {
            isSwissOrLI: function(person) {
                return person.Nationality_IDLFS === constants.statistics.IDLFS_CH || person.Nationality_IDLFS === constants.statistics.IDLFS_FL;
            },
            isSwiss: function (person) {
                return person.Nationality_IDLFS === constants.statistics.IDLFS_CH;
            },
            isComplete: function (person) {
                // check if required fields are all set and redirect to edit, if the person is editable
                if (person.IsEditable && !person.IsEmployee) {
                    var requiredFields = person.RequiredFields;
                    for (var i = 0; i < requiredFields.length; i++) {
                        if (!person[requiredFields[i]]) {
                            return false;
                        }
                    }
                }
                return true;
            },
            hasStayPermit: function (person) {
                return person.StayPermit && person.StayPermit !== constants.lookupfields.ausstehend;
            }
        },

        multilanguage: {
            translateNativeLanguage: function (text) {
                if (!text)
                    return text;
                var key = 'ms' + text.replace(/[^\w]/gi, '');
                return translate.getString(key);
            },
            translateStayPermit: function (text) {
                if (!text)
                    return text;
                var key = 'ab' + text.replace(/[^\w]/gi, '');
                return translate.getString(key);
            }
        }
    };
});