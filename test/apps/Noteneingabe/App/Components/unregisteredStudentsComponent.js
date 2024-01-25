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
    'templates/components/unregisteredStudentsComponent',
    'helpers/eq'
], function ($, ember, framework, api, arrayHelpers, settings, storage, uiSettings, guiHelpers, translate, eventoHelpers, eq) {
    ClxApp.UnregisteredStudentsComponent = ember.Component.extend({
        
        initialize: ember.on('init', function () {
            this.set('validationErrorExplanation', '');
            this.set('isValid', this.get('scale') === undefined || this.get('model.IdGrade') !== null || this.get('model.GradeValue') !== null);
            var validatedChildren = {};
            var idSubscription = (this.get('allSubscriptionDetails')[0] || {}).IdSubscription;
            var subscriptionDetails = this.get('allSubscriptionDetails').filter(function(detail) {
                return detail.IdSubscription === idSubscription;
            });
            var columnDetails = arrayHelpers.intersectArrays(subscriptionDetails,
                settings.grading.adColumns,
                function(detail, idVss) {
                    return detail.IdAnmeldeVSS === idVss;
                }).map(v => v.VssId);;
            var rangeDetails = arrayHelpers.intersectArrays(subscriptionDetails,
                settings.grading.adRange,
                function (detail, idVss) {
                    return detail.IdAnmeldeVSS === idVss;
                }).map(v => v.VssId);
            
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
            this.updateValidation();
        }),

        headerDetails: ember.computed('allSubscriptionDetails', {
            get: function () {
                var ads = this.get('allSubscriptionDetails');
                if (ads.length === 0) {
                    return [];
                }
                return arrayHelpers.intersectArrays(ads, settings.grading.adColumns, function (detail, idVss) {
                    return detail.IdAnmeldeVSS === idVss && detail.IdSubscription === ads[0].IdSubscription;
                });
            }
        }),

        hasSDsForDetailsView: ember.computed('allSubscriptionDetails', {
            get: function () {
                return settings.grading.adRange.length > 0;
            }
        }),

        hasRangeDetails: ember.computed('rangeDetails', function() {
            return this.get('rangeDetails').length > 0;
        }),

        hasItems: ember.computed('items', function() {
            return this.get('items').length > 0;
        }),

        itemsToSave: ember.computed('items', function() {
            return (this.get('items') ?? []).map(v => {
                return {
                    "FullName": v.FullName,
                    "MatriculationNumber": v.MatriculationNumber,
                    "GradeId": v.GradeId,
                    "Grade": this.getGradeValue(v.Grade, v.GradeId),
                    "Comment": v.Comment,
                    "SubscriptionDetails": v.SubscriptionDetails.concat(v.SubscriptionDetailColumns).map(w => {
                        return {
                            "VssId": w.VssId,
                            "Designation": w.VssBezeichnung,
                            "Value": w.Value
                        }
                    })
                }
            });
        }),

        getItemsToSave() {
            return (this.get('items') ?? [])
                /*.filter(v => v.isValid)*/
                .filter(v => v.FullName)
                .map(v => {
                    return {
                        "FullName": v.FullName,
                        "MatriculationNumber": v.MatriculationNumber,
                        "GradeId": v.GradeId,
                        "Grade": this.getGradeValue(v.Grade, v.GradeId),
                        "Comment": v.Comment,
                        "SubscriptionDetails": v.SubscriptionDetails.concat(v.SubscriptionDetailColumns).map(w => {
                            return {
                                "VssId": w.VssId,
                                "Designation": w.VssBezeichnung,
                                "Value": w.Value
                            }
                        })
                    }
                });
        },

        getGradeValue(grade, gradeId) {
            var scale = this.get('scale');
            if (scale.FreeGrading === true || !gradeId)
                return grade;
            else {
                var grades = scale.Grades.filter(function(g) {
                    return g.Id === parseInt(gradeId);
                });
                return grades.length > 0 ? grades[0].Designation : undefined;
            }
        },

        handleGradeIdChange: ember.observer('items.@each.GradeId', 'items.@each.Grade', 'items.@each.FullName', 'items.@each.Comment', 'items.@each.MatriculationNumber', function (val) {
            this.updateValidationAndSave();
        }),

        handleGradeChange: ember.observer('items.@each.isGradeValid', 'items.@each.SubscriptionDetails.@each.Value', function () {
            this.updateValidationAndSave();
        }),

        updateValidation() {
            this.updateSDValidation();

            let allValid = true;

            for (var item of this.get('items')) {
                let isGradeValid = !!item.GradeId || !!item.Grade;
                let isValid = isGradeValid && item.FullName && item.SubscriptionDetails.every(v => v.isValid);
                ember.set(item, 'isValid', isValid);
                console.log('validated item', isValid);
                allValid = allValid && isValid;
            }

            this.set('isValid', allValid);
        },

        updateValidationAndSave() {
            this.updateValidation();
            this.save();
        },

        updateSDValidation() {
            var settingRequired = settings.grading ? (settings.grading.adRequired || []) : [];

            for (var item of this.get('items')) {
                for (var sd of item.SubscriptionDetails) {
                    ember.set(sd, 'isValid', !settingRequired.includes(sd.VssId) || !!sd.Value);
                }
            }
        },

        save: framework.Helpers.debounce(500, function() {
            console.log('save', this);
            api.updateUnregisteredStudents(this.get("eventId"), this.getItemsToSave());
        }),

        actions: {
            add() {
                console.log("add");
                let unregisteredStudents = this.get("items") ?? [];
                let newItem = {
                    FullName: "New",
                    Comment: "No Comment"
                }
                unregisteredStudents.pushObject(newItem);
                this.set('items', unregisteredStudents);
            },
            remove(item) {
                var index = this.get('items').indexOf(item);
                if (index == -1) {
                    return;
                }
                this.get('items').popObject(item);
            },
            save() {
                this.save();
            },
            toggleRow: function (item) {
                ember.set(item, 'isExpanded', !item.isExpanded);
                ember.set(item, 'toggleClassName', item.isExpanded ? "collapseTriangle triangleExpanded" : 'collapseTriangle triangleCollapsed');
            },
            saveSD: function (sd) {
                this.updateValidationAndSave();
            },
            sdValidated: function (isValid, sd) {
                ember.set(sd, 'isValid', isValid);
                this.updateValidation();
            },
        }
    });
});