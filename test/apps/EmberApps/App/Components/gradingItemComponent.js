define([
    'jquery',
    'ember',
    'framework',
    'api',
    'arrayHelpers',
    'settings',
    'storage',
    'uiSettings',
    'guiHelpers',
    'translate',
    'eventoHelpers',
    'templates/components/gradingItemComponent',
    'components/subscriptionDetailComponent'
], function ($, ember, framework, api, arrayHelpers, settings, storage, uiSettings, guiHelpers, translate, eventoHelpers) {
    ClxApp.GradingItemComponent = ember.Component.extend({
        tagName: '',

        initialize: ember.on('init', function () {
            this.set('validationErrorExplanation', '');
            this.set('isValid', this.get('scale') === undefined || this.get('model.IdGrade') !== null || this.get('model.GradeValue') !== null);
            var validatedChildren = {};
            var idSubscription = this.get('model.IdSubscription');
            var subscriptionDetails = this.get('allSubscriptionDetails').filter(function(detail) {
                return detail.IdSubscription === idSubscription;
            });
            var columnDetails = arrayHelpers.intersectArrays(subscriptionDetails,
                settings.grading.adColumns,
                function(detail, idVss) {
                    return detail.IdAnmeldeVSS === idVss;
                });
            var rangeDetails = arrayHelpers.intersectArrays(subscriptionDetails,
                settings.grading.adRange,
                function (detail, idVss) {
                    return detail.IdAnmeldeVSS === idVss;
                });
            this.set('columnDetails', columnDetails);
            this.set('rangeDetails', rangeDetails);
            this.set('subscriptionDetails', subscriptionDetails);
            var settingRequired = settings.grading ? settings.grading.adRequired : [];
            if (!settingRequired)
                settingRequired = [];

            $.each(subscriptionDetails, function () {
                if ($.inArray(this.IdAnmeldeVSS, settingRequired) !== -1)
                    eventoHelpers.subscriptionDetails.setRequired(this, true);

                if (this.Value)
                    validatedChildren[this.IdObject] = true;
                else
                    validatedChildren[this.IdObject] = !eventoHelpers.subscriptionDetails.isRequired(this);
            });
            this.set('validatedChildren', validatedChildren);
            this.allValidChanged();
        }),

        actions: {
            toggleRow: function () {
                this.toggleProperty('isExpanded');
            },
            toggleRowValidation: function () {
                if (!this.get('allValid') && this.get('hasRangeDetails'))
                    this.set('isExpanded', true);
            },
            saveSD: function (sd) {
                this.sendAction('saveSubscriptionDetail', sd);
            },
            sdValidated: function (isValid, sd) {
                var validatedChildren = this.get('validatedChildren');
                validatedChildren[sd.IdObject] = isValid;
                this.set('validatedChildren', validatedChildren);
                // unfortunately ember doesn't seem to notice the changing of the property "validateChildren". Maybe because it is an Object
                // therefor introduce property "validatedChild". That one works as expected when observing in "allValid"
                this.toggleProperty('validatedChild');
            },
            saveGi: function (immediately) {
                if (immediately)
                    this.attemptSave();
                else
                    ember.run.debounce(this, this.attemptSave, uiSettings.defaultDebouncing);
            }
        },

        allValidChanged: ember.observer('allValid', function () {
            var that = this;
            var row = $('#' + this.get('model.IdObject'));
            var showSwitch = row.find('td.validationColumn');

            if (!this.get('allValid')) {
                guiHelpers.addShowError(showSwitch, row, row.next('tr'), function () {
                    that.set('isExpanded', true);
                });
                this.set('validationErrorExplanation', translate.getString('validationRequiredError'));
            } else {
                guiHelpers.removeShowError(row.find('td.validationColumn'));
                this.set('validationErrorExplanation', translate.getString('validationRequiredError'));
            }

            this.sendAction('validated', this.get('allValid'), this.get('model'));
        }),

        hiddenSubscriptionDetails: ember.computed('gradeChanged', {
            get: function () {
                return this.get('gradeSufficient') !== false
                    ? settings.grading.adColumnsOnlyShowWhenGradeFail
                    : undefined;
            }
        }),

        gradeSufficient: ember.computed('gradeChanged', {
            get: function () {
                var isFreeGrading = this.get('scale.FreeGrading');
                var lowestSufficient = this.get('scale.LowestSufficientGrade');
                var rising = this.get('scale.RisingGrades');
                var gradeValue = undefined;

                if (isFreeGrading) {
                    gradeValue = this.get('GradeValue');
                } else {
                    var grades = this.get('scale.Grades');
                    var idGrade = this.get('model.IdGrade');
                    $.each(grades,
                        function() {
                            if (this.Id === idGrade) {
                                gradeValue = this.Value;
                                return false;
                            }
                        });
                }

                if (!gradeValue)
                    return undefined;

                if ((rising && gradeValue >= lowestSufficient) || (!rising && gradeValue <= lowestSufficient))
                    return true;
                return false;
            }
        }),

        allValid: ember.computed('isValid', 'validatedChild', {
            get: function () {
                var valid = this.get('isValid');
                if (!valid)
                    return false;
                var validatedChildren = this.get('validatedChildren');
                arrayHelpers.eachKeyValue(validatedChildren,
                    function(key, value) {
                        if (value === false) {
                            valid = false;
                            return false;
                        }
                        return true;
                    });

                return valid;
            }
        }),

        toggleClassName: ember.computed('isExpanded', {
            get: function() {
                if (this.get('isExpanded'))
                    return 'collapseTriangle triangleExpanded';
                else
                    return 'collapseTriangle triangleCollapsed';
            }
        }),

        IdObject: ember.computed('model.IdObject', {
            get: function() {
                return this.get('model.IdObject');
            }
        }),

        PersonFullname: ember.computed('model.PersonFullname', {
            get: function() {
                return this.get('model.PersonFullname');
            }
        }),

        PersonNameTooltip: ember.computed('model.PersonNameTooltip', 'model.PersonFullname', {
            get: function() {
                var tooltip = this.get('model.PersonNameTooltip');
                if (tooltip)
                    return tooltip;
                return this.get('model.PersonFullname');
            }
        }),

        MatriculationNumber: ember.computed('model.MatriculationNumber', {
            get: function() {
                return this.get('model.MatriculationNumber');
            }
        }),

        IdGrade: ember.computed('model.IdGrade', {
            get: function() {
                return this.get('model.IdGrade');
            },
            set: function (key, value) {
                this.set('model.IdGrade', value);
                this.set('isValid', value !== undefined && value !== null);
                this.send('saveGi', true);
                this.toggleProperty('gradeChanged');
            }
        }),

        gradeValueChanged: ember.observer('model.GradeValue', function () {
            if (this.get('model.GradeValue'))
                this.set('isValid', true);
            else
                this.set('isValid', false);
            this.send('saveGi');
            this.toggleProperty('gradeChanged');
        }),

        Comment: ember.computed('model.Comment', {
            get: function () {
                return this.get('model.Comment');
            },
            set: function(key, value) {
                this.set('model.Comment', value);
                this.send('saveGi');
            }
        }),

        gradeDesignation: ember.computed('model.GradeValue', 'model.IdGrade', {
            get: function() {
                var scale = this.get('scale');
                if (scale.FreeGrading === true)
                    return this.get('model.GradeValue');
                else {
                    var idGrade = this.get('model.IdGrade');
                    var grades = scale.Grades.filter(function(g) {
                        return g.Id === idGrade;
                    });
                    return grades.length > 0 ? grades[0].Designation : undefined;
                }
            }
        }),

        colCount: ember.computed('scale.CommentsAllowed', 'columnDetails', function() {
            var count = 1; // fullname
            if (this.get('scale'))
                count++; // grade
            if (this.get('scale.CommentsAllowed'))
                count++; // comment
            count += this.get('columnDetails').length;
            return count;
        }),

        hasSDsForDetailsView: ember.computed('model.SubscriptionDetails', {
            get: function () {
                return settings.grading.adRange.length > 0;
            }
        }),

        hasRangeDetails: ember.computed('rangeDetails', function() {
            return this.get('rangeDetails').length > 0;
        }),

        save: function() {
            ember.run.debounce(this, this.attemptSave, uiSettings.defaultDebouncing);
        },

        attemptSave: function () {
            this.sendAction('save', this.get('model'));
        }
    });
});