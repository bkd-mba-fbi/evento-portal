define([
    'ember',
    'framework',
    'application',
    'api',
    'icons',
    'actionStack',
    'settings',
    'urlHelpers'
], function (ember, framework, app, api, icons, actionStack, settings, urlHelpers) {

    app.PersonsController = ember.Controller.extend({
        actions: {
            rowChosen: function(id) {
                this.transitionToRoute('dialogGroup', 'person', id);
            }
        },
        designation: ember.computed(function() {
            return $('#CLX_Root').data('search-definition');
        }),
        isPrintMode: ember.computed(function() {
            return urlHelpers.getUrlParameter('Print') === 'true';
        })
    });

    app.DialogController = ember.Controller.extend({
        actions: {
            openDialog: function (dataKey, dataClassId) {
                var that = this;

                var parentClass = this.get('model.DataClassId');
                var parentKey = this.get('model.DataKey');
                // don't open a new dialog if it is the exact same data
                if (parentClass.toUpperCase() === dataClassId.toUpperCase() && parentKey === dataKey) {
                    return;
                }

                // get substitute
                api.getSubstituteEntity(dataClassId, dataKey, parentClass, parentKey, function (result) {

                    // check if the dataclass is allowed to be used
                    var dataClassAllowed;
                    $.each(settings.allowedEntityTypes, function () {
                        if (this.toUpperCase() === result.DataClassId.toUpperCase()) {
                            dataClassAllowed = true;
                            return false;
                        }
                        return true;
                    });

                    if (!dataClassAllowed)
                        return;

                    that.transitionToRoute('dialogGroup', result.DataClassId.toLowerCase(), result.DataKey);
                });
            }
        },

        hasFields: ember.computed('model.Fields', {
            get: function () {
                var fields = this.get('model.Fields');
                return fields && fields.length > 0;
            }
        }),

        hasList: ember.computed('model.List', {
            get: function () {
                var list = this.get('model.List');
                return list != null;
            }
        }),

        hasHierarchy: ember.computed('model.HierarchyList', {
            get: function () {
                var list = this.get('model.HierarchyList');
                return list && list.length > 0;
            }
        })
    });

    app.DialogGroupController = Ember.Controller.extend({
        actions: {
            dialogBack: function(context, dataKey) {
                this.send('routeBack', context, dataKey);
            },

            toggleQuickTabs: function () {
                var that = this;
                
                this.toggleProperty('isQuickTabsExpanded');
                // register action stack when opened
                if (this.get('isQuickTabsExpanded')) {
                    // register for ESC action (destroy)
                    actionStack.registerWidgetState(null, function() {
                        that.toggleProperty('isQuickTabsExpanded');
                    });
                // when closing remove action stack
                } else
                    actionStack.clear(1, true);
            },

            closeQuickTabs: function () {
                if (this.get('isQuickTabsExpanded'))
                    this.toggleProperty('isQuickTabsExpanded');
                // when closing remove action stack
                actionStack.clear(1, true);
            },

            transitionTab: function (context, param) {
                if (context === '')
                    this.transitionToRoute(param);
                else
                    this.transitionToRoute(context, param);
                this.toggleProperty('isQuickTabsExpanded');
                // when closing remove action stack
                actionStack.clear(1, true);
            },

            //TODO xxxANEUxxx
            dialogResize: function (deltaX, deltaY) {
                var list = $('.dialogList');
                if (list.children(':not(.noData)').length > 0) {
                    $('.dialogList').eventosearch('resize', deltaX, deltaY);
                }
            }
        },

        dropdownIcon: ember.computed('dropdownIcon', {
            get: function() {
                return icons.dropdown;
            }
        }),

        quickTabsChoiceClassName: ember.computed('isQuickTabsExpanded', {
            get: function() {
                var additionalClass = this.get('isQuickTabsExpanded') ? ' active' : '';
                return 'dialogQuickTabsChoice ' + additionalClass;
            }
        })
    });

    app.CommentaryController = Ember.Controller.extend({

        disabled: ember.computed('isWorking', {
            get: function() {
                if (this.get('model.IsEditable') === true)
                    return this.get('isWorking') === true;
                else
                    return true;
            }
        }),

        // actions
        actions: {
            postCommentary: function () {
                var that = this;
                var model = this.get('model');
                var commentary = this.get('model.newCommentary');
                if (!commentary)
                    return;
                this.set('isWorking', true);
                api.addPersonCommentary(commentary, model.Id, function (result) {
                    model = that.get('model');
                    that.set('model.Commentary', result);
                    that.set('model.newCommentary', '');
                    that.set('isWorking', false);
                });
            }
        }
    });
});