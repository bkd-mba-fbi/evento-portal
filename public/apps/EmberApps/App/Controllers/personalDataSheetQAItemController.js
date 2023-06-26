define([
        'jquery',
        'ember',
        'api',
        'arrayHelpers',
        'translate',
        'dateHelpers',
        'uiSettings'
    ],
    function ($, ember, api, arrayHelpers, translate, dateHelpers, uiSettings) {
        ClxApp.PersonalDataSheetQAItemController = ember.Controller.extend({
            actions: {
                answerParagraphD: function () {
                    var qaItem = this.get('model');

                    this.removeEmptyParD(qaItem.Answer.PersonalDataAnswerParagraphD);

                    if (this.isCreate())
                        this.createAnswer();
                    else
                        this.updateAnswer();
                    

                    if (this.countParD(qaItem.Answer.PersonalDataAnswerParagraphD, true) < 5) {
                        qaItem.Answer.PersonalDataAnswerParagraphD.pushObject({
                            CityIdLFS: null,
                            KindOfIndependence: null,
                            DateFrom: null,
                            DateTo: null,
                            IsCity: true
                        });
                    }

                    if (this.countParD(qaItem.Answer.PersonalDataAnswerParagraphD, false) < 5) {
                        qaItem.Answer.PersonalDataAnswerParagraphD.pushObject({
                            CityIdLFS: null,
                            KindOfIndependence: null,
                            DateFrom: null,
                            DateTo: null,
                            IsCity: false
                        });
                    }
                    this.send('answerParagraph');
                }
            },

            countParD: function(personalDataAnswerParagraphD, isCity) {
                var count = 0;
                $.each(personalDataAnswerParagraphD,
                    function(index, item) {
                        if (item.IsCity === isCity)
                            count++;
                    });
                return count;
            },

            removeEmptyParD: function (personalDataAnswerParagraphD) {
                $.each(personalDataAnswerParagraphD.slice(),
                    function (index, item) {
                        if (item.DateFrom === null &&
                            item.DateTo === null &&
                            item.CityIdLFS === null &&
                            (item.KindOfIndependence === null || item.KindOfIndependence === ''))
                            personalDataAnswerParagraphD.removeObject(item);
                    });
            },

            Question: function() {
                return this.get('model.Question');
            }.property(),

            Answer: function() {
                return this.get('model.Answer');
            }.property(),

            HasQuestionInfo: function () {
                return this.get('model.Question.Info') !== null;
            }.property('model.Question.Info'),

            IsCantonParagraph: function() {
                return ['A', 'B', 'C', 'E1', 'E2'].indexOf(this.get('model.Question.Enumeration')) !== -1;
            }.property('model.Question.Enumeration'),

            CantonParagraphTitle: function() {
                var enm = this.get('model.Question.Enumeration');
                if (enm === 'A')
                    return translate.getString('responsibleHomeCanton');

                if(enm === 'B' || enm === 'C')
                    return translate.getString('responsibleLivingCanton');

                if (enm === 'E1')
                    return translate.getString('responsibleLivingCantonOfParents');

                if (enm === 'E2')
                    return translate.getString('responsibleCanton');

                return '';
            }.property(),

            IsParagraphD: function () {
                return this.get('model.Question.Enumeration') === 'D';
            }.property('model.Question.Enumeration'),

            IsParagraphF: function () {
                return this.get('model.Question.Enumeration') === 'F';
            }.property('model.Question.Enumeration'),
            
            YesNo: function(key, value) {
                return this.handleAnswer(value, 'YesNo');
            }.property('model.Answer.YesNo'),

            CantonIdELK: function(key, value) {
                return this.handleAnswer(value, 'CantonIdELK');
            }.property('model.Answer.CantonIdELK'),

            nationalityIdLFS: function (key, value) {
                if (this.get('IsParagraphF')) {
                    if (this.get('model.Answer.NationalityIdLFS') !==
                        this.get('parentController.model.Person.Nationality_IDLFS')) {
                        this.set('model.NationalityIdLFS', this.get('parentController.model.Person.Nationality_IDLFS'));
                        this.handleAnswer(this.get('parentController.model.Person.Nationality_IDLFS'),
                            'NationalityIdLFS');
                    }
                }
                return this.get('parentController.model.Person.Nationality');
            }.property('model.Answer.NationalityIdLFS', 'parentController.model.Person.Nationality_IDLFS'),

            residenceDaysMinimumReached: function() {
                return this.checkMinimumDaysReached(true);
            }.property('model.Answer.PersonalDataAnswerParagraphD.@each.DateFrom', 'model.Answer.PersonalDataAnswerParagraphD.@each.DateTo'),

            independenceDaysMinimumReached: function () {
                return this.checkMinimumDaysReached(false);
            }.property('model.Answer.PersonalDataAnswerParagraphD.@each.DateFrom', 'model.Answer.PersonalDataAnswerParagraphD.@each.DateTo'),

            checkMinimumDaysReached: function (isCity) {
                var that = this;
                var dayCount = 0;
                $.each(this.get('model.Answer.PersonalDataAnswerParagraphD'),
                        function (index, item) {
                            if (item.IsCity === isCity && item.DateFrom && item.DateTo) {
                                dayCount += that.dateDiffInDays(dateHelpers.getDate(item.DateFrom), dateHelpers.getDate(item.DateTo));
                            }
                        });
                return dayCount >= 730;
            },

            residenceDaysContinuous: function () {
                return this.daysContinuous(true);
            }.property('model.Answer.PersonalDataAnswerParagraphD.@each.DateFrom', 'model.Answer.PersonalDataAnswerParagraphD.@each.DateTo'),

            independenceDaysContinuous: function() {
                return this.daysContinuous(false);
            }.property('model.Answer.PersonalDataAnswerParagraphD.@each.DateFrom', 'model.Answer.PersonalDataAnswerParagraphD.@each.DateTo'),

            daysContinuous: function (isCity) {
                var that = this;
                var lastToDate = null;
                var first = true;
                var ret = true;
                $.each(this.get('model.Answer.PersonalDataAnswerParagraphD'),
                       function (index, item) {
                           if (item.IsCity !== isCity) return true;
                           if ((!item.DateFrom || !item.DateTo) &&
                               ((item.IsCity && item.CityIdLFS) || (!item.IsCity && item.KindOfIndependence) || item.DateFrom || item.DateTo)) {
                               ret = false;
                               return false;
                           }
                           if (first) {
                               first = false;
                           } else {
                               if (!item.DateFrom || !lastToDate) return true;
                               var diffInDays = that.dateDiffInDays(lastToDate, dateHelpers.getDate(item.DateFrom));
                               if (diffInDays !== 0 && diffInDays !== 1) {
                                   ret = false;
                                   return false;
                               }
                           }
                           lastToDate = dateHelpers.getDate(item.DateTo);
                           return true;
                       });
                return ret;
            },

            //TODO: move this to datehelpers
            dateDiffInDays: function(a, b) {
                var msPerDay = 1000 * 60 * 60 * 24;

                var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
                var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

                return Math.floor((utc2 - utc1) / msPerDay);
            },
            
            handleAnswer: function (value, propertyName) {
                if (value === undefined)
                    return this.get('model.Answer.' + propertyName);
                this.set('model.Answer.' + propertyName, value);

                ember.run.debounce(this, this.handleAnswerDebounced, uiSettings.defaultDebouncing);

                return this.get('model.Answer.' + propertyName);
            },

            handleAnswerDebounced: function() {
                if (this.isCreate())
                    this.createAnswer();
                else
                    this.updateAnswer();

                // do not alert parent for paragraphs, because there are no subsequent elements
                if (!this.get('model.Question.IsParagraph'))
                    this.get('parentController').send('answerQuestion', this.get('model'), this.isCreate());
                else
                    this.get('parentController').send('answerParagraph', this.get('model'));
            },

            isCreate: function () {
                return this.get('model.Answer.Id') === undefined;
            },

            createAnswer: function() {
                var that = this;
                var qaItem = this.get('model');
                if (!qaItem)
                    return;
                api.createPersonalDataAnswer(qaItem.PersonalDataSheetId,
                    qaItem.Question.Id,
                    qaItem.Answer.YesNo,
                    qaItem.Answer.CantonIdELK,
                    qaItem.Answer.NationalityIdLFS,
                    qaItem.Answer.PersonalDataAnswerParagraphD,
                    function (newAnswer) {
                        if (!that.get('model.Answer'))
                            return;
                        that.set('model.Answer.Id', newAnswer.Id);
                        that.set('model.Answer.IdPersonalDataQuestion', newAnswer.IdPersonalDataQuestion);
                        that.set('model.Answer.IdPersonalDataSheet', newAnswer.IdPersonalDataSheet);
                    });
            },

            updateAnswer: function () {
                var qaItem = this.get('model');
                if (!qaItem)
                    return;
                api.updatePersonalDataAnswer(qaItem.Answer);
            },

            Cities: function () {
                return this.get('parentController').get('model.Cities');
            }.property(),

            CitiesFiltered: function () {
                if (!this.get('CitiesFilteredSave')) {
                    var cantonShortcut = this.getCantonShortcut();
                    var retCities = [];
                    $.each(this.get('Cities'),
                        function(index, item) {
                            if (item.Value.indexOf(cantonShortcut) !== -1) {
                                retCities.push(item);
                            }
                        });
                    this.set('CitiesFilteredSave', retCities);
                }
                return this.get('CitiesFilteredSave');
            }.property('model.Answer.CantonIdELK'),

            getCantonShortcut: function () {
                return arrayHelpers.getValueByKey(this.get('parentController.model.Cantons'), this.get('model.Answer.CantonIdELK'));
            },
            
            cantonIdELKParagraphD: function (key, value) {
                if (value !== undefined) {
                    this.set('model.Answer.CantonIdELK', value);
                    this.set('CitiesFilteredSave', undefined);
                    var parItems = this.get('model.Answer.PersonalDataAnswerParagraphD');
                    $.each(parItems.slice(),
                                    function (index, item) {
                                        if (item.IsCity) {
                                            parItems.removeObject(item);
                                        }
                                    });
                    parItems.pushObject({
                        CityIdLFS: null,
                        KindOfIndependence: null,
                        DateFrom: null,
                        DateTo: null,
                        IsCity: true
                    });
                    this.send('answerParagraphD');
                }
                return this.get('model.Answer.CantonIdELK');
            }.property()
            
        });
    });