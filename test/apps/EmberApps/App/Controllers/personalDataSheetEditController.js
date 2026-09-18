define([
    'jquery',
    'ember',
    'api',
    'framework',
    'settings',
    'uiSettings',
    'arrayHelpers',
    'storage',
    'translate',
    'controllers/personalDataSheetQAItemController',
    'controllers/personalDataSheetAnswerParagraphDController',
    'components/crystalReportComponent'
], function ($, ember, api, framework, settings, uiSettings, arrayHelpers, storage, translate) {
    ClxApp.PersonalDataSheetEditController = framework.ValidatedController.extend({
        mainModel: 'model.DataSheet',
        actions: {
            closeDialog: function() {
                this.send('closeRoute');
            },
            answerQuestion: function (qaItem, isCreate) {
                if (isCreate)
                    this.pushNextQuestion(this.get('model'), qaItem);
                else {
                    this.deleteSubsequentAnswers(this.get('model'), qaItem);
                    this.pushNextQuestion(this.get('model'), qaItem);
                }
                // if the user changes a question after validation -> clear validation
                if (!this.get('isLastQuestionParagraph')) {
                    this.set('finalized', undefined);
                    this.set('enableSave', true);
                }
            },
            answerParagraph: function() {
                this.toggleProperty('paragraphAnswered');
                // validate again, if it has been validated already
                if (this.get('validated') !== undefined)
                    this.validate();
            },
            finalize: function() {
                var that = this;
                setTimeout(function() {
                    that.beforeSave();
                    that.toggleProperty('finalized');
                    that.validate(function () {
                        if (!that.get('isParagraphAnswerValid')) {
                            that.set('enableSave', false);
                            that.set('validationErrorMessage', translate.getString('validationRequiredFields'));
                        } else {
                            that.set('model.DataSheet.Definitive', true);
                            api.updatePersonalDataSheet(that.get('model.DataSheet'));
                            that.send('closeDialog');
                        }
                    });
                }, 100);
            }
        },

        init: function () {
            this._super();
            this.firstChange = true;
            this.trackChanges = true;

            this.qaProto = ember.Object.extend({
                Question: undefined,
                Answer: undefined,
                PersonalDataSheetId: undefined,
                IsParagraphD: function() {
                    return this.Question ? this.Question.Enumeration === 'D' : false;
                }
            });
        },

        updateDataSheet: function () {
            ember.run.debounce(this, this.save, uiSettings.defaultDebouncing);
        },

        save: function () {
            api.updatePersonalDataSheet(this.get('model.DataSheet'));
        },

        pushNextQuestion: function (model, currentQaItem) {
            var followUpId = currentQaItem.Answer.YesNo
                ? currentQaItem.Question.IdFollowUpYes
                : currentQaItem.Question.IdFollowUpNo;
            if (followUpId) {
                var qaItem = this.qaProto.create({
                    Question: this.getQuestionFromModel(model, followUpId),
                    Answer: { YesNo: null, CantonIdELK: null, NationalityIdLFS: null },
                    PersonalDataSheetId: model.DataSheet.Id
                });

                if (qaItem.IsParagraphD())
                    qaItem.Answer.PersonalDataAnswerParagraphD = Ember.A([
                        {
                            CityIdLFS: null,
                            KindOfIndependence: null,
                            DateFrom: null,
                            DateTo: null,
                            IsCity: true
                        },
                        {
                            CityIdLFS: null,
                            KindOfIndependence: null,
                            DateFrom: null,
                            DateTo: null,
                            IsCity: false
                        }
                    ]);

                model.QuestionAnswerItems.pushObject(qaItem);
                this.toggleProperty('questionAdded');
            }
        },

        newQuestionId: function() {
            var qaItems = this.get('model.QuestionAnswerItems');
            if (qaItems.length > 0) {
                var question = qaItems[qaItems.length - 1].Question;
                if (question.Info)
                    return question.Id;
            }
            return null;
        }.property('model.QuestionAnswerItems.@each.Question'),

        getLastQAItem: function() {
            var qaItems = this.get('model.QuestionAnswerItems');
            if (qaItems.length === 0) return null;
            return qaItems[qaItems.length - 1];
        },

        isLastQuestionParagraph: function() {
            return this.getLastQAItem().Question.IsParagraph;
        }.property('model.QuestionAnswerItems.@each.Question'),

        isParagraphAnswerValid: ember.computed('paragraphAnswered', 'finalized', function () {
            if (this.get('finalized') === undefined)
                return true;
            var lastQaItem = this.getLastQAItem();
            var result = lastQaItem.Question.IsParagraph &&
                lastQaItem.Answer &&
                (lastQaItem.Answer.NationalityIdLFS !== null || lastQaItem.Answer.CantonIdELK !== null);
            return result;
        }),

        parentless: function(key, value) {
            if (value !== undefined) {
                if (value === true) {
                    this.set('parentsName', null);
                    this.set('parentsSameAddress', false);
                    this.set('parentsStreet', null);
                    this.set('parentsZip', null);
                    this.set('parentsLocation', null); 
                    this.set('parentsCantonIdELK', null);
                }
                this.setRequiredFieldsDataSheet(value, this.get('model.DataSheet.ParentsSameAddress'));
                this.handlePropertyChange(value, 'Parentless');
                // validate again, if it has been validated already
                if (this.get('validated') !== undefined) 
                    this.validate();
            }
            return this.get('model.DataSheet.Parentless');
        }.property('model.DataSheet.Parentless'),

        parentsSameAddress: function(key, value) {
            if (value !== undefined) {
                if (value === true) {
                    this.set('parentsStreet', null);
                    this.set('parentsZip', null);
                    this.set('parentsLocation', null);
                    this.set('parentsCantonIdELK', null);
                }
                this.setRequiredFieldsDataSheet(this.get('model.DataSheet.Parentless'), value);
                this.handlePropertyChange(value, 'ParentsSameAddress');
                // validate again, if it has been validated already
                if (this.get('validated') !== undefined)
                    this.validate();
            }
            return this.get('model.DataSheet.ParentsSameAddress');
        }.property('model.DataSheet.ParentsSameAddress'),

        cantonsWithNone: function () {
            var cantons = this.get('model.Cantons').slice();
            cantons.unshift({
                Key: 405,
                Value: translate.getString('idELK_405')
            });
            return cantons;
        }.property('model.Cantons'),
        
        courseIdEvent: function (key, value) {
            var that = this;
            if (value !== undefined) {
                this.set('model.DataSheet.CourseIdEvent', value);
                api.updatePersonalDataSheet(this.get('model.DataSheet'));

                if (value !== '' && value !== null) {
                    ember.RSVP.hash({
                            EventContactInformation: api.ember
                                .getEventContactInformation(value, storage.userSettings.personId()),
                            EventSchoolDesignation: api.ember.getEventSchoolDesignation(value)
                        })
                        .then(function(result) {
                            that.set('model.EventContactInformation', result.EventContactInformation);
                            that.set('model.EventSchoolDesignation', result.EventSchoolDesignation);
                            that.toggleProperty('questionAdded');
                        });
                }
            }
            return this.get('model.DataSheet.CourseIdEvent');
        }.property('model.DataSheet.CourseIdEvent'),

        isCourseChoosen: function() {
            return this.get('model.DataSheet.CourseIdEvent') !== null;
        }.property('model.DataSheet.CourseIdEvent'),

        candidateStreet: function(key, value) {
            return this.handlePropertyChange(value, 'CandidateStreet');
        }.property('model.DataSheet.CandidateStreet'),

        candidateZip: function (key, value) {
            return this.handlePropertyChange(value, 'CandidateZip');
        }.property('model.DataSheet.CandidateZip'),

        candidateLocation: function (key, value) {
            return this.handlePropertyChange(value, 'CandidateLocation');
        }.property('model.DataSheet.CandidateLocation'),

        candidateCantonSince: function (key, value) {
            return this.handlePropertyChange(value, 'CandidateCantonSince');
        }.property('model.DataSheet.CandidateCantonSince'),

        candidateCantonIdELK: function (key, value) {
            return this.handlePropertyChange(value, 'CandidateCantonIdELK');
        }.property('model.DataSheet.CandidateCantonIdELK'),
        
        parentsName: function (key, value) {
            return this.handlePropertyChange(value, 'ParentsName');
        }.property('model.DataSheet.ParentsName'),

        parentsStreet: function (key, value) {
            return this.handlePropertyChange(value, 'ParentsStreet');
        }.property('model.DataSheet.ParentsStreet'),

        parentsZip: function (key, value) {
            return this.handlePropertyChange(value, 'ParentsZip');
        }.property('model.DataSheet.ParentsZip'),

        parentsLocation: function (key, value) {
            return this.handlePropertyChange(value, 'ParentsLocation');
        }.property('model.DataSheet.ParentsLocation'),
        
        parentsCantonIdELK: function (key, value) {
            return this.handlePropertyChange(value, 'ParentsCantonIdELK');
        }.property('model.DataSheet.ParentsCantonIdELK'),
          
        handlePropertyChange: function (value, propertyName) {
            if (value !== undefined) {
                this.set('model.DataSheet.' + propertyName, value);
                this.updateDataSheet();
            }

            return this.get('model.DataSheet.' + propertyName);
        },

        getQuestionFromModel: function(model, idQuestion) {
            var retQuestion = null;
            $.each(model.Questions,
                  function (index, question) {
                      if (question.Id === idQuestion) {
                          retQuestion = question;
                          return false;
                      }
                      return true;
                  });
            return retQuestion;
        },
        
        deleteSubsequentAnswers: function (model, changedQaItem) {
            var index = model.QuestionAnswerItems.indexOf(changedQaItem);
            if (model.QuestionAnswerItems.length > index + 1) {
                var laterQaItems = model.QuestionAnswerItems.slice(index + 1);

                if (laterQaItems !== null)
                    $.each(laterQaItems,
                        function(index, qaItemToDelete) {
                            if (qaItemToDelete.Answer.Id !== undefined)
                                api.deletePersonalDataAnswer(qaItemToDelete.Answer.Id);
                            model.QuestionAnswerItems.removeObject(qaItemToDelete);
                        });
            }
        },

        setRequiredFieldsDataSheet: function (parentless, parentsSameAddress) {
            var reqFields = [
               'CourseIdEvent',
               'CandidateStreet',
               'CandidateZip',
               'CandidateLocation',
               'CandidateCantonSince',
               'CandidateCantonIdELK'
            ];

            if (!parentless) {
                reqFields.push('ParentsName');

                if (!parentsSameAddress) {
                    reqFields.push('ParentsStreet');
                    reqFields.push('ParentsZip');
                    reqFields.push('ParentsLocation');
                    reqFields.push('ParentsCantonIdELK');
                }
            }

            this.setRequiredFields(reqFields);
        },

        initializeModel: function (model, initialized) {
            var that = this;

            this.setRequiredFieldsDataSheet(model.DataSheet.Parentless, model.DataSheet.ParentsSameAddress);

            model.Questions.sort(function (a, b) { return a.Sort - b.Sort; });

            var questionAnswerItems = ember.A();

            var getQuestionById = function (questions, idQuestion) {
                var ret = null;
                $.each(questions,
                    function (index, question) {
                        if (question.Id === idQuestion) {
                            ret = question;
                            return false;
                        }
                        return true;
                    });
                return ret;
            }

            var createQAItem = function (question, answer) {
                return that.qaProto.create({
                    Question: question,
                    Answer: answer,
                    PersonalDataSheetId: model.DataSheet.Id
                });
            };

            if (model.Answers !== null) {
                var lastAnsweredItem;
                $.each(model.Answers,
                    function (index, answer) {
                        lastAnsweredItem = createQAItem(getQuestionById(model.Questions, answer.IdPersonalDataQuestion), answer);
                        questionAnswerItems.pushObject(lastAnsweredItem);
                    });


                var nextQuestionId = lastAnsweredItem.Answer.YesNo
                    ? lastAnsweredItem.Question.IdFollowUpYes
                    : lastAnsweredItem.Question.IdFollowUpNo;

                if (nextQuestionId !== null) {
                    var emptyAnswerQaItem = createQAItem(getQuestionById(model.Questions, nextQuestionId),
                    {
                        YesNo: null,
                        CantonIdELK: null,
                        NationalityIdLFS: null
                    });
                    
                    if (emptyAnswerQaItem.IsParagraphD()) {
                        emptyAnswerQaItem.Answer.PersonalDataAnswerParagraphD = Ember.A([
                            {
                                CityIdLFS: null,
                                KindOfIndependence: null,
                                DateFrom: null,
                                DateTo: null,
                                IsCity: true
                            },
                            {
                                CityIdLFS: null,
                                KindOfIndependence: null,
                                DateFrom: null,
                                DateTo: null,
                                IsCity: false
                            }
                        ]);
                    }

                    questionAnswerItems.pushObject(emptyAnswerQaItem);
                } else {
                    if (lastAnsweredItem.IsParagraphD()) {

                        if (this.countParD(lastAnsweredItem.Answer.PersonalDataAnswerParagraphD, true) > 0) {
                            var cantonSc = this
                                .getCantonShortcutFromCities(lastAnsweredItem.Answer.PersonalDataAnswerParagraphD);
                            var cantonId = arrayHelpers.getKeyByValue(this.get('model.Cantons'), cantonSc);
                            this.set('model.ParagraphDCantonId', cantonId);
                        }

                        if (this.countParD(lastAnsweredItem.Answer.PersonalDataAnswerParagraphD, true) < 5) {
                            lastAnsweredItem.Answer.PersonalDataAnswerParagraphD.pushObject({
                                CityIdLFS: null,
                                KindOfIndependence: null,
                                DateFrom: null,
                                DateTo: null,
                                IsCity: true
                            });
                        }
                        if (this.countParD(lastAnsweredItem.Answer.PersonalDataAnswerParagraphD, false) < 5) {
                            lastAnsweredItem.Answer.PersonalDataAnswerParagraphD.pushObject({
                                CityIdLFS: null,
                                KindOfIndependence: null,
                                DateFrom: null,
                                DateTo: null,
                                IsCity: false
                            });
                        }
                    }
                }
            } else {
                questionAnswerItems.pushObject(createQAItem(model.Questions[0], { YesNo: null, CantonIdELK: null, NationalityIdLFS: null }));
            }

            this.set('model.QuestionAnswerItems', questionAnswerItems);
            
            if (initialized)
                initialized();
        },

        getCantonShortcutFromCities: function (parDItems) {
            if (!parDItems || parDItems.length === 0)
                return undefined;

            var cities = this.get('model.Cities');
            var cantonShortcut = undefined;
            $.each(parDItems,
                function () {
                    if (!this.CityIdLFS)
                        return true;
                    var firstSelectedCityText = arrayHelpers.getValueByKey(cities, this.CityIdLFS);
                    var regexCanton = /[A-Z]{2}$/g;
                    cantonShortcut = regexCanton.exec(firstSelectedCityText)[0];
                    return cantonShortcut ? false : true;
                });
            return cantonShortcut;
        },

        countParD: function (personalDataAnswerParagraphD, isCity) {
            var count = 0;
            $.each(personalDataAnswerParagraphD,
                function (index, item) {
                    if (item.IsCity === isCity)
                        count++;
                });
            return count;
        }
    });
});