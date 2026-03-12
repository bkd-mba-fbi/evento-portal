define([
    'ember',
    'framework',
    'application',
    'icons',
    'settings'
], function (ember, framework, app, icons, settings) {
    app.HierarchyNodeComponent = ember.Component.extend({
        classNameBindings: ['nodeClass', 'hasParent:indent:'],
        nodeClass: 'hierarchyNode',
        _isExpanded: true,

        actions: {
            toggleNode: function() {
                this.toggleProperty('isCollapsed');
            }
        },

        hasParent: ember.computed('node.ParentId', {
            get: function() {
                var parentId = this.get('node.ParentId');
                return parentId !== undefined && parentId !== null;
            }
        }),

        textClassName: ember.computed('textClassName', {
            get: function() {
                var children = this.get('node.Children');
                if (children.length > 0)
                    return 'parentNode';
                return '';
            }
        }),

        toggleIcon: ember.computed('isCollapsed', {
            get: function() {
                var children = this.get('node.Children');
                if (children.length > 0) {
                    if (this.get('isCollapsed'))
                        return icons.collapsed;
                    else
                        return icons.expanded;
                }
                return '';
            }
        }),

        displayedChildren: ember.computed('node.Children', {
            get: function() {
                return this.get('node.Children');
            }
        })
    });

    app.DialogTabComponent = ember.Component.extend({
        tagName: '',

        actions: {
            tabClicked: function() {
                this.sendAction('clicked');
            }
        },

        DialogType: ember.computed('model.DialogType', {
            get: function () {
                var dialogType = this.get('model.DialogType');

                // dialog substitutes -> change context of transition
                var substitute = settings.dialogSubstitutes[dialogType];
                if (substitute !== undefined)
                    return substitute;
                else
                    return dialogType;
            }
        }),

        HasSubstitute: ember.computed('model.DialogType', {
            get: function () {
                var dialogType = this.get('model.DialogType');
                return settings.dialogSubstitutes[dialogType] !== undefined;
            }
        }),

        Caption: ember.computed('model.Caption', {
            get: function () {
                return this.get('model.Caption');
            }
        }),

        ShortCaption: ember.computed('model.ShortCaption', {
            get: function () {
                return this.get('model.ShortCaption');
            }
        }),

        hasRowCount: ember.computed('model.RowCount', {
            get: function () {
                return this.get('model.RowCount') !== null || this.get('model.RowCount') != undefined;
            }
        }),

        RowCount: ember.computed('model.RowCount', {
            get: function () {
                return this.get('model.RowCount');
            }
        })
    });

    app.DialogFieldComponent = ember.Component.extend({
        tagName: 'div',
        classNames: ['fieldDialogSection'],

        actions: {
            openDialogFromField: function (dataKey, dataClassId) {
                this.sendAction('openDialog', dataKey, dataClassId);
            }
        },

        didInsertElement: function() {
            var element = this.$();
            var width = this.get('model.PercentWidth');
            var isSameLine = this.get('model.IsSameLine');
            element.css('width', width + '%');
            if (!isSameLine)
                element.css('clear', 'left');
            element.attr('id', this.get('model.FieldId'));
        },

        Value: ember.computed('model.Value', {
            get: function () {
                var val = this.get('model.Value');
                if (val) {
                    var id = this.get('model.FieldId');
                    if (id.toUpperCase() === 'PASSWORT')
                        return '●●●●●●';
                    if (id.toUpperCase() === 'WEBSITE')
                        return framework.Helpers.formatWebsite(val);
                    if ($.inArray(id, framework.constants.phoneFields) > -1)
                        return framework.Helpers.formatPhone(val);
                    return framework.Helpers.formatMailTo(val);
                } else
                    return '-';
            }
        }),

        BrowseDataKey: ember.computed('model.BrowseDataKey', {
            get: function () {
                var val = this.get('model.BrowseDataKey');
                return val ? val : '-';
            }
        }),

        BrowseDataClassId: ember.computed('model.BrowseDataClassId', {
            get: function () {
                var val = this.get('model.BrowseDataClassId');
                return val ? val : '-';
            }
        }),

        IsBool: ember.computed('model.IsBool', {
            get: function () {
                var val = this.get('model.Value');
                if (!val)
                    return false;
                return val.toLowerCase() === 'true' || val.toLowerCase() === 'false';
            }
        }),

        IsBrowsable: ember.computed('model.IsBrowsable', {
            get: function () {
                var dataClassId = this.get('model.BrowseDataClassId');
                return dataClassId !== null && dataClassId !== undefined;
            }
        }),

        BrowseDisabled: ember.computed('model.BrowseDisabled', {
            get: function () {
                var dataKey = this.get('model.BrowseDataKey');
                return dataKey === null || dataKey === undefined;
            }
        }),

        BoolIcon: ember.computed('model.BoolIcon', {
            get: function () {
                var val = this.get('model.Value');
                return val.toLowerCase() === 'true' ? icons.checkmark : '-';
            }
        }),

        BrowseIcon: ember.computed('model.BrowseIcon', {
            get: function () {
                var val = this.get('model.BrowseDataClassId');
                if (!val)
                    return '';
                return icons[val.toLowerCase()];
            }
        }),

        Caption: ember.computed('model.Caption', {
            get: function () {
                return this.get('model.Caption');
            }
        }),

        IsMultiline: ember.computed('model.IsMultiline', {
            get: function () {
                return this.get('model.IsMultiline');
            }
        })
    });
});