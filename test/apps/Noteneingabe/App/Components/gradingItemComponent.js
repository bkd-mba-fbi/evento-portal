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
        changesets: {}, // holds validation meta for grade and subscription details
        validatedChildren: {},

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
            var settingRequired = settings.grading ? (settings.grading.adRequired || []) : [];
            
            $.each(subscriptionDetails, function () {
                // NOTE: jquery's $.each sets the 'this' context to th current item being iterated
                var curItem = this;

                if ($.inArray(curItem.IdAnmeldeVSS, settingRequired) !== -1)
                    eventoHelpers.subscriptionDetails.setRequired(curItem, true);

                if (curItem.Value) 
                    validatedChildren[curItem.IdObject] = true;
                else
                    validatedChildren[curItem.IdObject] = !eventoHelpers.subscriptionDetails.isRequired(curItem);
            });
            this.set('validatedChildren', validatedChildren);
            this.allValidChanged();
        }),

        actions: {
            toggleRow: function () {
                this.toggleProperty('isExpanded');
            },
            toggleRowValidation: function (gradingId) {
                this.showValidationStatus(gradingId);
                if (!this.get('allValid') && this.get('hasRangeDetails'))
                    this.set('isExpanded', true);
            },
            saveSD: function (sd) {
                this.sendAction('saveSubscriptionDetail', sd);
            },
            sdValidated: function (isValid, sd) {
                var vkids = this.validatedChildren;
                var copy = Object.assign({}, vkids, { [sd.IdObject]: isValid });
                this.set('validatedChildren', copy);
                this.registerChangedField(sd.IdObject);
            },
            saveGi: function (immediately) {
                if (immediately)
                    this.attemptSave();
                else
                    ember.run.debounce(this, this.attemptSave, uiSettings.defaultDebouncing);
            }
        },

        registerChangedField(changedFieldId){
            if (!changedFieldId || this.changesets[changedFieldId] === true) {
                return;
            }

            this.set('changesets.' + changedFieldId, true);
        },

        invalidatedClass: ember.computed('isValid', 'isValidated', function () {
            return this.isValidated && this.isValid !== true
                ? 'validationError showError'
                : '';
        }),

        updateViewState(selection) {
            // update all fields by setting either class or updating component field
            var list = selection || this.changesets;
            list.forEach(cs => console.log('change state of ' + cs.id + ' to ' + cs.isValid ))
        },

        showValidationStatus(gradingId) {
            this.subscriptionDetails
                .map(sd => sd.IdObject)
                .forEach(fId => {
                    this.set('changesets.' + fId, true);
                });
            // trigger validation performed flag
            this.set('isValidated', true);
        },

        allValidChanged: ember.observer('allValid', function () {
            var that = this;
            var row = $('#' + this.get('model.IdObject'));
            var showSwitch = row.find('td.validationColumn');

            if (!this.get('allValid')) {
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

        allValid: ember.computed('isValid', 'validatedChildren.@eachObject', function () {

            return this.isValid && Object.values(this.validatedChildren).every(c => c === true);
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
                this.set('isValidated', true);
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

            this.set('isValidated', true);
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
            return count + 2; // plus 2 for icon columns in the front
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