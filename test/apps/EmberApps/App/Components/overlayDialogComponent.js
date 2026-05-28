define([
    'jquery',
    'ember',
    'application',
    'guiHelpers',
    'actionStack',
    'templates/components/overlayDialogComponent'
], function ($, ember, app, guiHelpers, actionStack) {
    app.OverlayDialogComponent = ember.Component.extend({
        classNames: ['modalOverlay'],
        layoutName: 'components/overlay-dialog',

        actions: {
            cancelClicked: function () {
                actionStack.unregisterAction(this.get('dialogName'));
                if (this.get('autoCloseDialog') === true)
                    this.$().remove();
                this.sendAction('closeDialog');
            }
        },

        didInsertElement: function () {
            var that = this;
            this.set('resizable', true);
            this.set('closeOnOverlayClick', false);
            var dragHandle = '.' + guiHelpers.classes.dialog.title;
            this.set('dragHandle', dragHandle);
            var dialogName = $(dragHandle).text();
            this.set('dialogName', dialogName);

            actionStack.registerModalDialog(dialogName, null, function () {
                that.closeDialog();
            });

            var element = this.$();
            var draggable = element.find('.dialogDraggable');
            var resizable = element.find('.dialogResizable');

            if (this.get('resizable')) 
                this.addResizable(resizable);

            guiHelpers.setOverlayZIndex(draggable);
            this.addDraggable(draggable);

            // focus first control, if there is one for input
            $('.dialogBody').find('input, textarea, select').first().focus();
        },

        closeDialog: function() {
            this.$().remove();
        },

        addResizable: function (resizeableElement) {
            var that = this;
            resizeableElement
                .resizable({
                    resize: function(event, ui) {
                        // first time resize -> get current size now, because it could be bigger than on creation because of the content
                        if (that.get('currentSize') === undefined) {
                            that.set('currentSize',
                            {
                                width: resizeableElement.width(),
                                height: resizeableElement.height()
                            });
                        }
                        that.sendAction('resize',
                            that.get('currentSize').width - ui.size.width,
                            ui.size.height - that.get('currentSize').height);
                        that.set('currentSize',
                        {
                            width: ui.size.width,
                            height: ui.size.height
                        });
                        resizeableElement.parent().width(ui.size.width);
                        resizeableElement.parent().height(ui.size.height);
                    }
                });
        },

        addDraggable: function(draggableElement) {
            draggableElement
                .draggable({
                    handle: this.get('dragHandle'),
                    containment: 'window',
                    scroll: false,
                    drag: function() {
                        // cancel all level 1 stacks on move
                        actionStack.clear(1);
                    }
                });
            $(this.get('dragHandle')).css('cursor', 'move');
        }
    });
});