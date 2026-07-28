define([
    'jquery',
    'ember',
    'api',
    'settings',
    'storage',
    'constants',
    'application',
    'arrayHelpers',
    'translate',
    'guiHelpers',
], function ($, ember, api, settings, storage, constants, app, arrayHelpers, translate, guiHelpers) {
    app.GradingController = ember.Controller.extend({
        initialize: ember.on('init', function () {
            this.set('applyToAllValue', '');
            this.set('applyingValue', false);
            this.set('savingCount', 0);
            this.set('availableHeaderList', []);
            this.set('currentHeaderIndex', 0);
            this.set('currentHeaderId', 'grade');
            this.set('toggleModal', false);
            this.set('showDefaultNoteModal', false);
            this.set('showDeleteNoteModal', false);
            this.set('modalHeaderText', '');

            storage.validationResults(new Object());
        }),

        init: function () {
            this._super();
            this.addDropDownMenuForMobile(settings.grading.showExcelButton);
            var that = this;
            ember.Instrumentation.subscribe('gradingController.alertMessage',
                {
                    before: function () { },
                    after: function (channel, _, payload) {
                        that.appendError(channel, payload);
                    }
                });
        },

        appendError: function (channel, payload) {
            var errorMsg = payload;
            if (this.errorMsgs.includes(errorMsg)) return;

            this.set('errorMsgs', this.get('errorMsgs').concat(errorMsg));
        },

        dismissNotice(errorMsg) {
            var uml = this.errorMsgs.filter(m => m !== errorMsg);
            this.set('errorMsgs', uml);
        },

        actions: {
            addUnregisteredStudent(){
                var item = api.helpers.transformUnregisteredStudent({
                    FullName: "",
                    Comment: ""
                }, this.get('model.UnregisteredStudents').length, this.get('model.SubscriptionDetails'));

                this.get('model.UnregisteredStudents').push(item);
                console.log(this.get('model.UnregisteredStudents'));
                this.set('model.UnregisteredStudents', this.get('model.UnregisteredStudents').concat([]));

                Ember.run.schedule("afterRender",this,function() {
                    document.querySelector('table.unregisteredStudents tr:last-child input.fullName')?.focus();
                });
            },
            dismissNotice(msg, i) {
                return this.dismissNotice(msg, i);
            },

            updateField: function (value) {
                this.actions.updateChosenFields.call(this, value);
            },
            updateFilteredFields: function (value, filter) {
                if (typeof filter !== 'function')
                //@ts-ignore
                    throw Error({
                        Class: 'gradingController.js',
                        Method: 'updateFilteredFields',
                        Message: 'The filter function must be of type "function". Received type: ' + typeof filter,
                        toString: function () { return this.Message; },
                        valueOf: this.Message
                    }.toString());

                this.actions.updateChosenFields.call(this, value, filter);
            },
            updateChosenFields: function (value, filter) {
                var that = this;

                var gradingItemsSelection = filter ? this.get('model.GradingItems').filter(filter) : this.get('model.GradingItems');

                if (this.get('model.Event.Scale.FreeGrading'))
                    gradingItemsSelection.setEach('gradeValue', value);
                else
                    gradingItemsSelection.setEach('idGrade', value);

                api.updateGradingItems(this.get('model.Event.Id'),
                    this.get('model.GradingItems'),
                    function () {
                        that.get('target.router').refresh();
                        // timeout so that the view is not updated before the refresh takes part
                        setTimeout(function () {
                            that.toggleProperty('applyingValue');
                            that.toggleProperty('toggleModal');
                        },
                            10);
                    }, function (eresp) {
                        var model = new String(eresp.responseText || '');
                        model['header'] = 'Fehler beim Speichern der Noten';
                        ember.Instrumentation.instrument('gradingController.alertMessage', model);
                    });
            },
            'continue': function () {
                var that = this;
                var idEvent = this.get('model.Event.Id');
                setTimeout(function () {
                    if (that.get('isSaving') === true) {
                        that.set('isWaiting', true);
                    } else
                        that.transitionToRoute('statistic', idEvent);
                },
                    1000);
            },

            finish: function () {
                if (settings.gradingRedirectUrl)
                    window.location.href = settings.gradingRedirectUrl;
                else
                    alert('no referrer');
            },

            applyToAll: function () {
                var value = this.get('applyToAllValue');
                if (!value)
                    return null;

                this.toggleProperty('applyingValue');

                this.actions.updateField.call(this, value);
            },
            setAsDefault: function () {
                var value = this.get('applyToAllValue');
                if (!value)
                    return null;

                this.toggleProperty('applyingValue');

                this.actions.updateFilteredFields.call(this, value, function (fgi) {
                    return !fgi.GradeValue && !fgi.IdGrade;
                });
            },

            deleteAllGrades: function () {
                this.toggleProperty('applyingValue');
                this.actions.updateField.call(this, null);
            },

            uploadExcel: function () {
                this.doUpload();
            },

            saveSubscriptionDetail: function (sd) {
                var that = this;
                this.set('isSaving', true);
                this.set('savingCount', this.get('savingCount') + 1);
                api.updateSubscriptionDetail(sd, function () {
                    that.set('savingCount', that.get('savingCount') - 1);
                    that.set('isSaving', that.get('savingCount') > 0);
                }, function (eresp) {
                    var model = new String(eresp.responseText || '');
                    model['header'] = 'Fehler beim Speichern der Anmeldedetail';
                    
                    ember.Instrumentation.instrument('gradingController.alertMessage', model);
                });
            },

            saveGradingItem: function (gi) {
                var that = this;
                this.set('isSaving', true);
                this.set('savingCount', this.get('savingCount') + 1);
                api.updateGradingItem(gi, function () {
                    that.set('savingCount', that.get('savingCount') - 1);
                    that.set('isSaving', that.get('savingCount') > 0);
                }, function (eresp) {
                    var model = new String(eresp.responseText || '');
                    model['header'] = 'Fehler beim Speichern der Note';

                    ember.Instrumentation.instrument('gradingController.alertMessage', model);
                });
            },

            customTableSort: function (columnIndex, asc, sortProperty) {

                var dataSource = this.get('model.GradingItems');

                var sortedModel = arrayHelpers.sortByProperty(dataSource, asc, sortProperty);

                // trigger re-render, by re-referencing
                this.set('model.GradingItems', null);
                this.set('model.GradingItems', sortedModel);
            },

            setSelectedColumn: function (item) {
                var target = $('.sorting-header').find(`[data-sort-property='IdGrade']`);
                if ((item && item.original === 'grade')) {
                    $(target).children().show();
                } else {
                    $(target).children().hide();
                }

                var headers = this.get('availableHeaderList');
                this.set('currentHeaderIndex', headers.data.findIndex(a => a.header === item.header));
                this.set('currentHeaderId', item.id);
            },

            cancelClicked: function () {
                this.set('toggleModal', false);
            },

            back: function () {
                this.cleanup();
                this.transitionToRoute('/');
            },

            //NOTE: check if this function is being referenced or delete. copied here during merge
            triggerModalDialogPrompt: function (key) {
                this.promptModalDialog(key)
            }
        },

        cleanup: function () {
            //NOTE: clear the error messages or they will persist on next detail page
            this.set('errorMsgs', []);
            ember.Instrumentation.unsubscribe('gradingController.alertMessage');
        },

        errorMsgs: [],

        doUpload: function () {
            var selectedFile = $('#fluExcelGradingList')[0].files[0];
            api.updateExcelGradingList(selectedFile,
                this.get('model.Event.Id'),
                settings.grading.adColumns,
                function () {
                    location.reload();
                }, function (eresp) {
                    var model = new String(eresp.responseText || '');
                    model['header'] = 'Fehler beim Importieren';
                    ember.Instrumentation.instrument('gradingController.alertMessage', model);
                });
        },

        showToolbar: ember.computed('model.Event.Scale', 'isReadOnly',
            {
                get: function () {
                    return this.get('model.Event.Scale') !== null && this.get('model.Event.Scale') !== undefined && !this.get('isReadOnly');
                }
            }),

        hasMutableGradingStatus: function () {
            this.addDropDownMenuForMobile(settings.grading.showExcelButton);
            // an easy "workaround" to pass info (on each item) if the event itself is editable
            return this.get('model.GradingItems.0.AnlassEditAllowed') === true;
        },

        isReadOnly: ember.computed('model.Event.StatusId',
            {
                get: function () {
                    this.addDropDownMenuForMobile(settings.grading.showExcelButton);
                    var isNormalEvaluation = this.hasMutableGradingStatus();
                    var isOtherEventType = this.get('model.Event.StatusId') < constants.idStatus.lowestModuleEventStatus ||
                        this.get('model.Event.StatusId') > constants.idStatus.highestModuleEventStatus;
                    return !isNormalEvaluation && !isOtherEventType;
                }
            }),

        headerDetails: ember.computed('model.SubscriptionDetails', {
            get: function () {
                var ads = this.get('model.SubscriptionDetails');
                if (ads.length === 0) {
                    return [];
                }
                return arrayHelpers.intersectArrays(ads, settings.grading.adColumns, function (detail, idVss) {
                    return detail.IdAnmeldeVSS === idVss && detail.IdSubscription === ads[0].IdSubscription;
                });
            }
        }),

        promptModalDialog: function(key) {
            switch (key) {
                case 'applyGrade':
                    this.set('modalHeaderText', translate.getString('grade_set_default'));
                    this.set('showDefaultNoteModal', true);
                    this.set('showDeleteNoteModal', false);
                    break;
                case 'clearGrades':
                    this.set('modalHeaderText', translate.getString('grade_delete_question'));
                    this.set('showDefaultNoteModal', false);
                    this.set('showDeleteNoteModal', true);
                    break;
            
                default:
                    console.warn('Target action `key` out of range!');
                    this.set('toggleModal', false);
                    return;
            }

            this.set('toggleModal', true);
        },

        addDropDownMenuForMobile: function (showExelButton) {
            var that = this;
            // prevent 3 point menu to be added if no scale is defined 
            // TODO: ask : if (this.get('model.Event.Scale.FreeGrading')) return;

            if (this.get('menuTimeout'))
                clearTimeout(this.get('menuTimeout'));

            var menuTimeout = setTimeout(() => {
                /*
                 * var menu_buttons = $('.grade_methods_container');
                guiHelpers.addContextMenuToButton($(menu_buttons),
                    function(contextMenu) {
                        var applyGradeButton = guiHelpers.getDiv(undefined, translate.getString('setAsDefault'));
                        applyGradeButton.click(that.promptModalDialog.bind(that, 'applyGrade')).appendTo(contextMenu)
                            
                        var clearGradesButton = guiHelpers.getDiv(undefined, translate.getString('deleteAllGrades'));
                        clearGradesButton.click(that.promptModalDialog.bind(that, 'clearGrades')).appendTo(contextMenu);
                    },
                    true);
            },
                **/
                var menu_buttons = $('.grade_methods_container');
                guiHelpers.addContextMenuToButton($(menu_buttons),
                    function (contextMenu) {
                        var method_one = guiHelpers.getDiv(undefined, translate.getString('setAsDefault'));
                        var method_two = guiHelpers.getDiv(undefined, translate.getString('deleteAllGrades'));

                        method_one.click(function () {
                            that.set('modalHeaderText', translate.getString('grade_set_default'));
                            that.set('showDefaultNoteModal', true);
                            that.set('showDeleteNoteModal', false);
                            that.set('toggleModal', true);
                        }).appendTo(contextMenu)

                        method_two.click(function () {
                            that.set('modalHeaderText', translate.getString('grade_delete_question'));
                            that.set('showDefaultNoteModal', false);
                            that.set('showDeleteNoteModal', true);
                            that.set('toggleModal', true);
                        }).appendTo(contextMenu);

                        if (that.model.IsUnregisteredStudentsEnabled) {
                            var method_three = guiHelpers.getDiv(undefined, translate.getString('addUnregisteredStudent'));
                            method_three.click(function () {
                                that.send('addUnregisteredStudent');
                            }).appendTo(contextMenu);
                        }
                    },
                    true);
            },
                100);

            this.set('menuTimeout', menuTimeout);
        },

        availableHeaders: ember.computed('headerDetails', 'model.Event.Scale', 'model.SubscriptionDetails', 'currentHeaderIndex', {
            get: function () {
                var menuItems = [];
                var headerDetails = JSON.parse(JSON.stringify(this.get('headerDetails')));
                var currentHeaderIndex = this.get('currentHeaderIndex');

                var itemObject = (headerId, translationKey, isVisible = false) => {
                    return {
                        id: headerId,
                        original: translationKey,
                        isActive: false,
                        header: ['comment', 'grade'].includes(translationKey) ? translate.getString(translationKey) : translationKey,
                        isVisible,
                    }
                };

                for (var header of headerDetails) {
                    if (header.VssBezeichnung)
                        menuItems.push(itemObject(header.VssId, header.VssBezeichnung));
                }

                if (this.model.Event && this.model.Event.Scale) {
                    if (this.model.Event.Scale.CommentsAllowed) {
                        menuItems.unshift(itemObject('comment', 'comment'));
                    }
                    if (this.model.Event.Scale) {
                        menuItems.unshift(itemObject('grade', 'grade'));
                    }
                }

                menuItems = this.resetAllAndSetCurrent(menuItems, currentHeaderIndex);

                this.setTableHeaderVisibility(menuItems, headerDetails);

                menuItems = this.changeToObjectMenu(menuItems);

                this.setTableColumnVisibility(menuItems);
                this.set('availableHeaderList', menuItems);
                return menuItems;
            }
        }),

        excelUrl: ember.computed('model.Event.Id', {
            get: function () {
                return api.getExcelGradingListUrl(this.get('model.Event.Id'), settings.grading.adColumns);
            }
        }),

        isSavingChanged: ember.observer('isSaving', function () {
            if (this.get('isWaiting') === true && this.get('isSaving') === false) {
                this.set('isWaiting', false);
                this.transitionToRoute('statistic', this.get('model.Event.Id'));
            }
        }),

        showExcelButton: ember.computed({
            get: function () {
                return settings.grading.showExcelButton;
            }
        }),

        hasSDsForDetailsView: ember.computed('model.SubscriptionDetails', {
            get: function () {
                return settings.grading.adRange.length > 0;
            }
        }),

        allGrades: ember.computed('model.Event.Scale.Grades', {
            get: function () {
                var grades = this.get('model.Event.Scale.Grades');
                return grades;
            }
        }),

        subscriptionCount: ember.computed('model.GradingItems', function () {
            return this.get('model.GradingItems').length;
        }),

        showInfoTextAtFooter: ember.computed({
            get: function () {
                return settings.grading.showInfoTextAtFooter;
            }
        }),

        setTableColumnVisibility: function (menuItems) {
            var subscriptionDetails = this.model.SubscriptionDetails.map(item => {
                if (menuItems[item.VssBezeichnung])
                    ember.set(item, 'isVisible', menuItems[item.VssBezeichnung].isVisible);
                return item;
            });

            ember.set(this.model, 'SubscriptionDetails', subscriptionDetails);
        },

        setTableHeaderVisibility: function (menuItems, headerDetails) {
            headerDetails.map(a => {
                var item = menuItems.find(b => b.header === a.VssBezeichnung);
                a.isVisible = item.isVisible;
                return a;
            })

            this.set('headerDetails', headerDetails);
        },

        changeToObjectMenu: function (menuItems) {
            return menuItems.reduce((a, c) => {
                a[c.original || c.header] = c;
                if (!a.data) a.data = [];
                a.data.push(c);
                return a;
            }, {});
        },

        resetAllAndSetCurrent: function (menuItems, currentHeaderIndex) {
            if (currentHeaderIndex >= 0 && menuItems.length > currentHeaderIndex) {
                menuItems[currentHeaderIndex].isActive = true;
                menuItems.forEach(a => a.isVisible = false);
                menuItems.forEach((a, i) => {
                    if (currentHeaderIndex === i) {
                        a.isVisible = true;
                    }
                });
            }
            return menuItems;
        },
    });
});