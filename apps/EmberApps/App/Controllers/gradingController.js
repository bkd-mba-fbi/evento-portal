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
                    this.set('toggleModal', false);
                    this.set('showDefaultNoteModal', false);
                    this.set('showDeleteNoteModal', false);
                    this.set('modalHeaderText', '');
                 
                storage.validationResults(new Object())
            }),

            actions: {
                updateField: function (value) {
                    this.actions.updateChosenFields.call(this, value);
                },
                updateFilteredFields: function (value, filter) {
                    if (typeof filter !== 'function')
                        throw Error({
                            Class: 'gradingController.js',
                            Method: 'updateFilteredFields',
                            Message: 'The filter function must be of type "function". Received type: ' + typeof filter,
                            toString: function () { return this.Message; },
                            valueOf: this.Message
                        });

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
                                that.addDropDownMenuForMobile();
                                },
                                10);
                        });
                },
                'continue': function() {
                    var that = this;
                    var idEvent = this.get('model.Event.Id');
                    setTimeout(function() {
                            if (that.get('isSaving') === true) {
                                that.set('isWaiting', true);
                            } else
                                that.transitionToRoute('statistic', idEvent);
                        },
                        1000);
                },

                finish: function() {
                    if (settings.gradingRedirectUrl)
                        window.location.href = settings.gradingRedirectUrl;
                    else
                        alert('no referrer');
                },

                applyToAll: function() {
                    var value = this.get('applyToAllValue');
                    if (!value)
                        return null;

                    this.toggleProperty('applyingValue');

                    this.actions.updateField.call(this, value);
                },
                setAsDefault: function() {
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

                uploadExcel: function() {
                    var selectedFile = $('#fluExcelGradingList')[0].files[0];
                    api.updateExcelGradingList(selectedFile,
                        this.get('model.Event.Id'),
                        settings.grading.adColumns,
                        function() {
                            location.reload();
                        });
                    this.set('forceCloseExcel', true);
                },

                saveSubscriptionDetail: function (sd) {
                    var that = this;
                    this.set('isSaving', true);
                    this.set('savingCount', this.get('savingCount') + 1);
                    api.updateSubscriptionDetail(sd, function () {
                        that.set('savingCount', that.get('savingCount') - 1);
                        that.set('isSaving', that.get('savingCount') > 0);
                    });
                },

                saveGradingItem: function (gi) {
                    var that = this;
                    this.set('isSaving', true);
                    this.set('savingCount', this.get('savingCount') + 1);
                    api.updateGradingItem(gi, function() {
                        that.set('savingCount', that.get('savingCount') - 1);
                        that.set('isSaving', that.get('savingCount') > 0);
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
                    const target = $('.sorting-header').find(`[data-sort-property='IdGrade']`);
                    if ((item && item.original === 'grade')) { 
                            $(target).children().show();
                    } else {
                        $(target).children().hide();
                    }

                    const headers = this.get('availableHeaderList');
                    this.set('currentHeaderIndex', headers.data.findIndex(a => a.header === item.header)); 
                },

                cancelClicked: function() {
                    this.set('toggleModal', false);
                },

                back: function () { 
                    window.history.back();
                }
            },

        showToolbar: ember.computed('model.Event.Scale', 'isReadOnly',
        {
            get: function() {
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

        addDropDownMenuForMobile: function (showExelButton) { 
            const that = this; 
            // prevent 3 point menu to be added if no scale is defined
            if (this.get('model.Event.Scale.FreeGrading')) return;

            if (this.get('menuTimeout'))
              clearTimeout(this.get('menuTimeout'));

            const menuTimeout = setTimeout(() => { 
                const menu_buttons = $('.grade_methods_container'); 
                guiHelpers.addContextMenuToButton($(menu_buttons),
                function (contextMenu) {
                    const method_one = guiHelpers.getDiv(undefined, translate.getString('setAsDefault'));
                    const method_two = guiHelpers.getDiv(undefined, translate.getString('deleteAllGrades'));
                    let headerText = null;

                    contextMenu.empty();

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

                    if (showExelButton) {
                        const method_three = guiHelpers.getDiv(undefined, translate.getString('downloadExcelGradingList'));
                        method_three.click(function () { 
                            const exelUrl = api.getExcelGradingListUrl(that.get('model.Event.Id'), settings.grading.adColumns);
                            const link = document.createElement('a');
                            link.href = exelUrl; 
                            document.body.appendChild(link);
                            link.click();
                            link.remove();
                        }).appendTo(contextMenu)
                    } 
                },
                true);
            }, 100)

            this.set('menuTimeout', menuTimeout); 
        },

        availableHeaders: ember.computed('headerDetails', 'model.Event.Scale', 'model.SubscriptionDetails', 'currentHeaderIndex', {
            get: function () { 
                let menuItems = [];
                const headerDetails = JSON.parse(JSON.stringify(this.get('headerDetails')));
                const currentHeaderIndex = this.get('currentHeaderIndex');

                const itemObject = (translationKey, isVisible = false) => {
                    return{
                        original: translationKey,
                        isActive: false,
                        header: ['comment', 'grade'].includes(translationKey) ? translate.getString(translationKey) : translationKey,
                        isVisible,
                    }
                };

                for (const header of headerDetails) {
                    if (header.VssBezeichnung)
                        menuItems.push(itemObject(header.VssBezeichnung));
                }

                if (this.model.Event && this.model.Event.Scale) {
                    if (this.model.Event.Scale.CommentsAllowed) {
                        menuItems.unshift(itemObject('comment'));
                    }
                    if (this.model.Event.Scale) {
                        menuItems.unshift(itemObject('grade'));
                    }
                }

                menuItems = this.resetAllAndSetCurrent(menuItems, currentHeaderIndex);

                this.setTableHeaderVisibility(menuItems, headerDetails);

                menuItems = this.changeToObjectMenu(menuItems)

                this.setTableColumnVisibility(menuItems);
                this.set('availableHeaderList', menuItems);
                return menuItems;
            }
        }),
          
        excelUrl: ember.computed('model.Event.Id', {
            get: function() {
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
            get: function() {
                return settings.grading.adRange.length > 0;
            }
        }),

        allGrades: ember.computed('model.Event.Scale.Grades', {
            get: function() {
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
            let subscriptionDetails = this.model.SubscriptionDetails.map(item => {
                if (menuItems[item.VssBezeichnung])
                    Ember.set(item, 'isVisible', menuItems[item.VssBezeichnung].isVisible);
                return item;
            });

            Ember.set(this.model, 'SubscriptionDetails', subscriptionDetails);
        },

        setTableHeaderVisibility: function (menuItems, headerDetails) {
            headerDetails.map(a => {
                const item = menuItems.find(b => b.header === a.VssBezeichnung);
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