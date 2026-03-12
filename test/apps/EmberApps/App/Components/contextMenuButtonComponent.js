define([
    'jquery',
    'ember',
    'application',
    'actionStack',
    'keyboard',
    'guiHelpers',
    'templates/components/contextMenuButtonComponent'
], function ($, ember, app, actionStack, keyboard, guiHelpers) {
    app.ContextMenuButtonComponent = ember.Component.extend({
        tagName: '',

        actions: {
            buttonClicked: function() {
                this.get('contextMenu').toggle();
            }
        },

        didInsertElement: function () {
            var that = this;
            if (this.get('id') === undefined)
                this.set('id', 'btnContextMenu');

            var button = $('#' + this.get('id'));
            ember.run.scheduleOnce('afterRender', function () {
                var contextMenu = button.next('.contextMenu');
                guiHelpers.setContextMenu(contextMenu, button, that.get('right'), true);
                that.set('contextMenu', contextMenu);
                actionStack.registerComponentState('showContextMenu',
                    undefined,
                    function () { that.get('contextMenu').hide(); });
                if (that.get('shortcut')) {
                    keyboard.registerShortcut(that.get('shortcut'),
                        undefined,
                        function() {
                            contextMenu.toggle();
                        });
                }
            });
        },

        forcedClose: ember.observer('forceClose', function() {
            if (this.get('forceClose') === true)
                this.get('contextMenu').hide();
        })
    });
});