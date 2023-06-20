define([
    'jquery',
    'ember',
    'mathHelpers',
    'uiSettings',
    'translate',
    'flotHelpers',
    'arrayHelpers',
    'api',
    'settings',
    'storage',
    'constants',
    'application'
], function ($, ember, mathHelpers, uiSettings, translate, flotHelpers, arrayHelpers, api, settings, storage, constants, app) {
    app.StatisticController = ember.Controller.extend({
        init: function () {
            var that = this;
            
            ember.run.scheduleOnce('render', function() {
                var statusId = that.get('model.Event.StatusId');

                api.getStatusProcesses('forward', statusId, false, function(statusProcesses) {
    
                    that.set('statusProcesses', statusProcesses);
                });
            });
        },
        actions: {
            gradingItemValidated: function (isValid) {
                var invalidCount = this.get('invalidValidationCount');
                if (invalidCount === undefined) 
                    invalidCount = 0;

                if (!isValid)
                    invalidCount++;
                this.set('invalidValidationCount', invalidCount);
            },

            finish: function () {
                var that = this;
                var invalidCount = this.get('invalidValidationCount');
                if (invalidCount === 0 || this.get('showValidationMessage')) {
                    ////finish
                    this.set('showValidationMessage', false);
                    var keys = this.get('model.Event.Id');
                    if (settings.reports.finalizeGrading > 0) {
                        var url = api.getCrystalReportUrl(constants.reportContext.anlass,
                            settings.reports.finalizeGrading,
                            keys);
                        window.open(url, '_blank');
                    }

                    var statusId = that.get('model.Event.StatusId');
                    api.getStatusProcesses('forward', statusId, false, function(statusProcesses) {
                        var newStatusId = 0;

                        newStatusId = that.getNextStatusProcess(statusProcesses) || newStatusId;

                        var newStatusProcess = undefined;
                        if (newStatusId !== 0 && statusProcesses && statusProcesses.length > 0)
                            newStatusProcess = statusProcesses.filter(function(sp) {
                                return sp.IdStatus === newStatusId;
                            });
                        
                        if (newStatusId === 0 || !newStatusProcess ||  newStatusProcess.length === 0) {
                            console.error('status change not possible, because current status (' +
                                that.get('model.Event.StatusId') +
                                ') is not as expected');
                            return;
                        }

                        var newSp = newStatusProcess[0];
                        newSp.DataClassId = 'Anlass';
                        newSp.Id1 = that.get('model.Event.Id');
                        api.processStatus(newSp,
                            function () {
                                if (document.referrer)
                                    window.location.href = document.referrer;
                                else {
                                    if (settings.gradingRedirectUrl)
                                        window.location.href = settings.gradingRedirectUrl;
                                    else
                                        alert('no referrer');
                                }
                            });
                    });

                } else {
                    this.set('validationMessage',
                                            invalidCount === 1
                                            ? translate.getString('statisticValidationSingle', this.get('finishButtonText'))
                                            : translate.getString('statisticValidationMultiple', [invalidCount, this.get('finishButtonText')]));
                    this.toggleProperty('showValidationMessage');
                }
            },
            back: function() {
                this.set('showValidationMessage', false); 
                window.history.back();
            }
        },

        getNextStatusProcess: function(statusProcesses) {
            switch((statusProcesses || []).length) {
                case 0: return null;
                case 1: return statusProcesses[0].IdStatus;
                default: return statusProcesses.sort(function (l, r) { return l.IdStatus - r.IdStatus;})[0].IdStatus;
            }
        },

        hasMutableGradingStatus: function() {
            // an easy "workaround" to pass (duplicated) info if the event itself is editable
            return this.get('model.GradingItems.0.AnlassEditAllowed') === true;
        },

        hasForwardEventStatus: ember.computed('statusProcesses', function() {
            return (this.get('statusProcesses') || []).length > 0;
        }),

        isReadOnly: ember.computed('model.Event.StatusId',
        {
            get: function () {
                var isNormalEvaluation = this.hasMutableGradingStatus();
                var isOtherEventType = this.get('model.Event.StatusId') < constants.idStatus.lowestModuleEventStatus ||
                    this.get('model.Event.StatusId') > constants.idStatus.highestModuleEventStatus;
                return !isNormalEvaluation && !isOtherEventType ;
            }
        }),

        canProceed: ember.computed('isReadOnly', 'hasForwardEventStatus', 
        {
            get: function() {
                return this.get('hasForwardEventStatus') && !this.get('isReadOnly');
            }
        }),

        modelChanged: ember.observer('model', function () {
            this.set('invalidValidationCount', undefined);
        }),

        headerDetails: ember.computed('model.SubscriptionDetails', {
            get: function () {
                var sds = [];
                var subDetails = this.get('model.SubscriptionDetails');

                $.each(settings.grading.adColumns,
                    function (i, idVss) {
                        $.each(subDetails,
                            function () {
                                if (this.IdAnmeldeVSS === idVss) {
                                    sds.push(this);
                                    return false;
                                }
                                return true;
                            });
                    });
                return sds.sort(function (d1, d2) {
                    return parseInt(d1.Sort) - parseInt(d2.Sort);
                });
            }
        }),

        getRealGradesValues: function() {
            return this.get('gradeValues').filter(function(grade) {
                return grade > 0;
            });
        },

        showReportButton: ember.computed({
            get: function() {
                return settings.grading.showReportButton;
            }
        }),

        averageGrade: ember.computed('model',
        {
            get: function() {
                return mathHelpers.round(mathHelpers.avg(this.getRealGradesValues()), 2);
            }
        }),

        gradeCount: ember.computed('model',
        {
            get: function() {
                return this.getRealGradesValues().length;
            }
        }),

        bestGrade: ember.computed('model',
        {
            get: function() {
                return this.findBestOrWorst(true);
            }
        }),

        worstGrade: ember.computed('model',
        {
            get: function() {
                return this.findBestOrWorst(false);
            }
        }),

        unsufficientCount: ember.computed('model',
        {
            get: function () {
                var lowestSufficient = this.get('model.Event.Scale.LowestSufficientGrade');
                var rising = this.get('model.Event.Scale.RisingGrades');
                var count = 0;
                $.each(this.getRealGradesValues(),
                    function () {
                        if ((rising && this < lowestSufficient) || (!rising && this > lowestSufficient)) {
                            count++;
                        }
                    });
                return count;
            }
        }),

        standardDeviation: ember.computed('model',
        {
            get: function () {
                return mathHelpers.round(mathHelpers.standardDeviation(this.getRealGradesValues()), 2);
            }
        }),

        finishButtonText: ember.computed({
            get: function () {
                return settings.reports.finalizeGrading
                    ? translate.getString('finalizeAndPrint')
                    : translate.getString('finalizeGrading');
            }
        }),

        gradeValues: ember.computed('model',
        {
            get: function() {
                var that = this;
                var gradeValues = [];

                var gradingItems = this.get('model.GradingItems');
                $.each(gradingItems,
                    function() {
                        var value = that.getGradeValue(this);
                        if (value !== undefined) {
                            gradeValues.push(value);
                        }
                    });
                gradeValues.sort();

                return gradeValues;
            }
        }),

        getGradeValue: function(gradingItem) {
            if (gradingItem.GradeValue > 0)
                return gradingItem.GradeValue;

            var scale = this.get('model.Event.Scale');
            if (scale != undefined) {
                var grade = scale.Grades.filter(function(g) {
                    return g.Id === gradingItem.IdGrade;
                });
                if (grade.length > 0)
                    return grade[0].Value;
            }
            return undefined;
        },

        findBestOrWorst: function (best) {
            var gradeValues = this.getRealGradesValues();
            if (gradeValues.length === 0)
                return '-';
            var rising = this.get('model.Event.Scale.RisingGrades');
            var takeHighest = (rising && best) || (!rising && !best);
            if (takeHighest)
                return gradeValues[gradeValues.length - 1];
            else return gradeValues[0];
        },

        risingGrades: function() {
            return this.get('model.Event.Scale.RisingGrades');
        },

        flotData: function(sufficient) {
            var rising = this.get('model.Event.Scale.RisingGrades');
            var lowestSufficient = this.get('model.Event.Scale.LowestSufficientGrade');
            var data = {};

            $.each(this.getRealGradesValues(),
                function() {
                    var isSufficient = (rising && this >= lowestSufficient) || (!rising && this <= lowestSufficient);
                    if (sufficient && !isSufficient || !sufficient && isSufficient)
                        return true;

                    var key = this.toString();
                    if (data[key] === undefined)
                        data[key] = 1;
                    else {
                        data[key]++;
                    }
                    return true;
                });
            return data;
        },

        getSerie: function(order, flotData, ticks, sufficient) {
            //sort keys
            var sortedData = [];

            // sort object keys for later use
            var keys = Object.keys(flotData).sort(function(a, b) {
                var fa = parseFloat(a);
                var fb = parseFloat(b);
                if (fa === fb)
                    return 0;
                return fa > fb ? 1 : -1;
            });

            //fill data and ticks
            var index = ticks.length;
            $.each(keys,
                function() {
                    sortedData.push([index, flotData[this]]);
                    ticks.push([index, this]);
                    index++;
                });
            return flotHelpers.getBarSerie(order,
                sortedData,
                sufficient
                ? uiSettings.flotSettings.colors.sufficientGrade
                : uiSettings.flotSettings.colors.unsufficientGrade,
                sufficient ? translate.getString('sufficient') : translate.getString('unsufficient'));
        },

        flotSeries: ember.computed('gradeValues',
        {
            get: function() {
                var ticks = [];
                var data;
                if (this.risingGrades()) {
                    data = [
                        this.getSerie(1, this.flotData(false), ticks, false),
                        this.getSerie(2, this.flotData(true), ticks, true)
                    ];

                } else {
                    data = [
                        this.getSerie(1, this.flotData(true), ticks, true),
                        this.getSerie(2, this.flotData(false), ticks, false)
                    ];
                }
                this.set('flotTicks', ticks);
                return data;
            }
        }),
        subscriptionCount: ember.computed('model.GradingItems', function () {
            return this.get('model.GradingItems').length;
        }),
    });
});