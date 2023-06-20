define([
    'jquery',
    'ember',
    'guiHelpers',
    'actionStack',
    'icons',
    'translate',
    'uiSettings'
], function ($, ember, guiHelpers, actionStack, icons, translate, uiSettings) {
    ClxApp.TooltipButtonComponent = ember.Component.extend({
        tagName: 'button',
        type: 'button',
        classNames: ['tooltipButton'],
        classNameBindings: ['active:active'],

        didInsertElement: function () {
            var that = this;
            this.$().append(icons.info);
            this.$().attr('tabindex', -1);

            var text = this.get('text');
            if (text.string)
                text = text.string;

            this.$().prop('title', text);

            if (this.get('showPopupOnRender'))
                ember.run.scheduleOnce('afterRender', function () {
                    setTimeout(function() {
                        that.showPopup();
                    }, 100);
                });
        },

        click: function (e) {
            actionStack.clear(1, true);
            this.toggleProperty('active');
            this.updateContextMenu();
        },

        showPopup: function() {
            var that = this;
            this.toggleProperty('active');
            var dialog = guiHelpers.openModalDialog(translate.getString('information'),
                function (body) {
                    if (that.get('isHtml'))
                        body.append(guiHelpers.getDiv('informationPopup', undefined, that.get('text')));
                    else
                        body.append(guiHelpers.getDiv('informationPopup', that.get('text')));
                },
                function() {
                    var position = that.$().offset();
                    dialog.css({
                        'min-width': '0',
                        'min-height': '0'
                    });
                    dialog.animate({
                        top: position.top + 'px',
                        left: position.left + 'px',
                        width: '0',
                        height: '0',
                        margin: '0'
                    }, uiSettings.defaultAnimationSpeed,
                        function() {
                            dialog.hide();
                            that.toggleProperty('active');
                        });
                },
                guiHelpers.getTextButton(icons.continue, translate.getString('continue')),
                undefined,
                undefined,
                undefined,
                uiSettings.defaultAnimationSpeed);
        },

        updateContextMenu: function () {
            var that = this;
            var active = this.get('active');

            var right = this.get('right');

            if (active) {
                var contextMenu = $('<div class="dialogContextMenu">');
                if (right)
                    contextMenu.css('right', '0px');
                else
                    contextMenu.css('left', '0px');
                guiHelpers.setContextMenuZIndex(contextMenu);

                var text = this.get('text');
                if (text.string)
                    text = text.string;

                if (this.get('isHtml')) {
                    contextMenu.html(text);
                    contextMenu.addClass('htmlTooltipMenu');
                } else {
                    contextMenu.text(text);
                    contextMenu.addClass('tooltipMenu');
                }

                // calculate witdh
                var width = guiHelpers.calcActualTextWidth(text, 'dialogContextMenu');
                contextMenu.width(width);
                if (this.get('maxWidth'))
                    contextMenu.css('max-width', this.get('maxWidth') + 'px');

                this.set('contextMenu', contextMenu);
                contextMenu.appendTo(this.$());

                var containerSelector = '.flexDialogBody';
                if (this.get('containerSelector'))
                    containerSelector += ', ' + this.get('containerSelector');

                guiHelpers.correctContextMenuPosition(contextMenu, this.$(), containerSelector);

                // register action
                actionStack.registerWidgetState(undefined,
                    function() {
                        that.set('active', false);
                        contextMenu.remove();
                    });

                // click elsewhere should close it
                setTimeout(function() {
                        $(document)
                            .on('click.handleContextMenu',
                                function (e) {
                                    if (that.get('isDestroyed') || that.get('isDestroying'))
                                        return;
                                    if ($(e.target).closest('#' + that.elementId).length > 0)
                                        return;
                                    that.set('active', false);
                                    contextMenu.remove();
                                });
                    },
                    100);
            } else {
                var cm = this.get('contextMenu');
                if (cm)
                    cm.remove();
            }
        }
    });
});