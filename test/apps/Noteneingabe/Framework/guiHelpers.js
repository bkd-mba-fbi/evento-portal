define(['jquery', 'keyboard', 'actionStack', 'eventoWidgets'], function ($, keyboard, actionStack) {
    var guiHelpers = {

        // padding constants
        defaultWindowPadding: 20, // when position absolute this is the minimum distance to the window border

        // time constants
        contextMenuShowEmptyTextTime: 1000,
        animationTimeDefault: 300,

        // css classes
        classes: {
            common: {
                defaultShadow: 'defaultShadow'
            },
            controls: {
                inputButton: 'inputButton'
            },
            flexDialog: {
                dialog: 'flexDialog',
                header: 'flexDialogHeader',
                neck: 'flexDialogNeck',
                body: 'flexDialogBody',
                footer: 'flexDialogFooter'
            },
            dialog: {
                overlayDialog: 'overlayDialog',
                contextMenu: 'dialogContextMenu',
                modalDialog: 'modalOverlay',
                body: 'dialogBody',
                buttonContainer: 'buttonContainer',
                title: 'dialogTitle',
                header: 'dialogHeader',
                tab: 'dialogTab',
                tabContainer: 'dialogTabs',
                draggable: 'dialogDraggable',
                quickTabsChoice: 'dialogQuickTabsChoice',
                sectionTitle: 'sectionTitle',
                toggleIcon: 'toggleIcon',
                browseText: 'browseText',
                browseButton: 'browseButton',
                dialogBlockFixed: 'dialogBlockFixed',
                textIcon: 'textIcon',
                footer: 'dialogFooter'
            },
            search: {
                toolbar: 'searchToolbar',
                table: 'searchTable',
                sortableHeader: 'sortableHeader',
                groupRow: 'groupRow',
                dataRow: 'dataRow',
                groupRowText: 'groupRowText',
                searchSelected: 'searchSelected',
                loadingOverlay: 'loadingOverlay',
                noData: 'noData'
            },
            table: {
                headerText: 'headerText',
                headerLabel: 'headerLabel',
                bodyContainer: 'bodyContainer',
                iconColumn: 'iconColumn',
                sortingDirection: 'sortingDirection',
                sortingDirectionAsc: 'sortingDirection sortAsc',
                sortAsc: 'sortAsc',
                sortDesc: 'sortDesc',
                sortedAsc: 'sortedAsc',
                sortedDesc: 'sortedDesc',
                allSortClasses: 'sortedDesc sortedAsc sortAsc sortDesc',
                spanAllColumns: 'spanAllColumns'
            },
            loading: {
                centerWrapper: 'centerWrapper loadingWrapper',
                middleWrapper: 'middleWrapper',
                loadingAnimation: 'alignedContent loadingAnimation',
                loadingText: 'loadingText'
            },
            flot: {
                flotDialog: 'flotDialog',
                flotFull: 'flotFull',
                flotContainer: 'flotContainer',
                flotPointLabel: 'flotPointLabel',
                flotLegend: 'flotLegend'
            },
            report: {
                pdfReport: 'pdfReport'
            }
        },

        // z-index
        currentZIndex: 0,
        tableHeaderZIndex: 1,
        contextMenuZIndex: 50,
        overlayZIndex: 99,

        getElement: function(tagName, className, id, text, innerHtml) {
            var el = $('<' + tagName + '>');
            if (className)
                el.addClass(className);
            if (id)
                el.attr('id', id);
            if (text)
                el.text(text);
            if (innerHtml)
                el.html(innerHtml);
            return el;
        },

        getTextbox: function(className, id, autoComplete, text) {
            var textbox = this.getElement('input', className, id);
            textbox.val(text);
            textbox.attr('type', 'text');
            if (autoComplete !== undefined)
                textbox.attr('autocomplete', autoComplete ? 'on' : 'off');
            return textbox;
        },

        getFileInput: function (className, id, autoComplete, text) {
            var fileInput = this.getElement('input', className, id, text);
            fileInput.attr('type', 'file');
            if (autoComplete !== undefined)
                fileInput.attr('autocomplete', autoComplete ? 'on' : 'off');
            return fileInput;
        },

        getCheckbox: function(className, id, checked) {
            var checkbox = this.getElement('input', className, id);
            checkbox.attr('type', 'checkbox');
            if (checked)
                checkbox.attr('checked', 'true');
            return checkbox;
        },

        getDiv: function(className, text, innerHtml) {
            return this.getElement('div', className, undefined, text, innerHtml);
        },

        getTable: function(className) {
            return this.getElement('table', className);
        },

        getButton: function(icon, id, className) {
            var button = icon !== undefined ? $('<button type="button">' + icon + '</button>') : $('<button type="button">');
            if (className)
                button.addClass(className);
            if (id)
                button.attr('id', id);
            return button;
        },

        getTextButton: function(icon, text, id) {
            var button = icon !== undefined ? $('<button type="button" class="textButton">' + icon + '</button>') : $('<button type="button">');
            button.append(this.getDiv(undefined, text));
            if (id)
                button.attr('id', id);
            return button;
        },

        addShowError: function(showErrorSwitch, validationContainer, expandableSelector, expandDelegate) {
            /// <summary>adds functionality to switch "show error" on. can be used for simple forms or complicated expandable controls</summary>
            /// <param name="showErrorSwitch" type="Object">JQuery element used as the switch</param>
            /// <param name="validationContainer" type="Object">JQuery element containing all elements with possible validation errors</param>
            /// <param name="expandableSelector" type="String">optional. JQuery selector selecting the expandable control with a .next()</param>
            /// <param name="expandDelegate" type="Object">optional. delegate to expand the expandable control on click</param>
            showErrorSwitch
                .css('cursor', 'pointer')
                .on('click', function () {
                        // expand row if not yet
                        if (expandDelegate)
                            expandDelegate();

                        setTimeout(function () {
                                validationContainer.find('.validationError').addClass('showError');
                                if (expandableSelector)
                                    validationContainer
                                        .next(expandableSelector)
                                        .find('.validationError')
                                        .addClass('showError');
                            }, 100);
                    });
        },

        removeShowError: function(showErrorSwitch) {
            /// <summary>removes functionality to switch "show error" on.</summary>
            /// <param name="showErrorSwitch" type="Object">JQuery element used as the switch</param>
            showErrorSwitch
                .attr('title', '')
                .off('click');
        },

        addLongtextTooltip: function(inputElement) {
            inputElement.on('mouseenter',
                function() {
                    if (guiHelpers.calcTextWidth(this.value) > this.offsetWidth)
                        inputElement.prop('title', inputElement.val());
                    else
                        inputElement.removeAttr('title');
                });
        },

        applySpanAllColumns: function(rowOrTable) {
            var table = rowOrTable.closest('table');
            var firstRow = table.find('tr').eq(0);
            var columnsCount = firstRow.children('td, th').length;
            rowOrTable.find('.' + this.classes.table.spanAllColumns)
                .each(function () {
                    var cell = $(this);
                    var otherColSpans = 0;
                    cell.prevAll('th, td')
                        .each(function() {
                            var colspan = parseInt($(this).attr('colspan'));
                            otherColSpans += colspan ? colspan : 1;
                        });
                    cell.nextAll('th, td')
                        .each(function () {
                            var colspan = parseInt($(this).attr('colspan'));
                            otherColSpans += colspan ? colspan : 1;
                        });
                    cell.attr('colspan', columnsCount - otherColSpans);
                });
        },

        // calculates the width of a text using the current CSS
        calcTextWidth: function (text) {
            var widthDiv = $('<div>')
                .css({ 'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden' })
                .html(text)
                .appendTo($('body'));
            var width = widthDiv.width();
            widthDiv.remove();
            return width;
        },
        calcActualTextWidth: function(text, additionalClass) {
            var widthDiv = $('<div>')
                .css({ 'position': 'absolute', 'float': 'left', 'white-space': 'pre-wrap', 'visibility': 'hidden' })
                .html(text)
                .appendTo($('body'));
            if (additionalClass) {
                widthDiv.addClass(additionalClass);
            }
            var width = widthDiv.width();
            widthDiv.remove();
            return width;
        },
        calcTextHeight: function (text) {
            var heightDiv = $('<div>')
                .css({ 'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden' })
                .html(text)
                .appendTo($('body'));
            var height = heightDiv.height();
            heightDiv.remove();
            return height;
        },
        getComputedHeight: function (className) {
            var el = $('<div class="' + className + '" style="display:none;">&nbsp;</div>').appendTo('body');
            var retVal = el.height();
            el.remove();
            return retVal;
        },
        getComputedWidth: function (className) {
            var el = $('<div class="' + className + '" style="display:none;">&nbsp;</div>').appendTo('body');
            var retVal = el.width();
            el.remove();
            return retVal;
        },
        getComputedHeightByCss: function (cssData) {
            var el = $('<div style="display:none;">&nbsp;</div>').css(cssData).appendTo('body');
            var retVal = el.height();
            el.remove();
            return retVal;
        },
        getComputedWidthByCss: function (cssData) {
            var el = $('<div style="display:none;">&nbsp;</div>').css(cssData).appendTo('body');
            var retVal = el.width();
            el.remove();
            return retVal;
        },

        setContextMenu: function (element, originElement, right, isRelativePosition) {
            element.addClass(this.classes.dialog.contextMenu)
                .css({
                    'position': 'absolute'
                });

            this.setContextMenuZIndex(element);
            if (originElement && originElement.length > 0) {
                // set relative to origin if present and when not absolute position
                if (isRelativePosition)
                    originElement.css('position', 'relative');

                if (!isRelativePosition) {
                    var offset = originElement.offset();
                    if (right) {
                        element.css('right', ($(window).width() - (offset.left + originElement.outerWidth())) + 'px');
                    } else
                        element.css('left', offset.left + 'px');
                    element.css('top', (offset.top + originElement.outerHeight()) + 'px');
                } else {
                    if (right) {
                        element.css('right', '0');
                    } else {
                        element.css('left', '0');
                    }
                    element.css('top', (originElement.outerHeight() + 1) + 'px');
                }
            }
            return element;
        },

        correctContextMenuPosition: function (element, originElement, containerSelector, adaptWidthToOrigin) {
            // default is drop down -> check if is out of lower window border
            var win = $(window);
            var windowHeight = win.height();

            if (containerSelector)
                win = $(containerSelector);
            if (win.length === 0)
                win = $(window);
            var winHeight = win.outerHeight();
            var winWidth = win.outerWidth();
            var winOffset = win.offset();
            if (!winOffset)
                winOffset = { top: 0, left: 0 };
            var elementOffset = element.offset();
            var originOffset = originElement.offset();

            var bottom = elementOffset.top + element.outerHeight();
            var winBottom = winOffset.top + winHeight;

            if (windowHeight < winBottom)
                winBottom = windowHeight;

            if (bottom > winBottom) {
                // check if dropping up would have more space
                if ((originOffset.top - winOffset.top) > 3/5 * winHeight) {
                    // -> change drop down to drop up
                    element.css('top', '');
                    element.css('bottom', originElement.outerHeight() + 'px');

                    // if dropping up is also hanging out -> corrrect height
                    elementOffset = element.offset();
                    if (elementOffset.top < winOffset.top)
                        element.height(originOffset.top - winOffset.top - this.defaultWindowPadding);
                }
                // still dropping down -> correct height
                else
                    element.height(winHeight +
                        winOffset.top -
                        (originOffset.top + originElement.outerHeight()) -
                        this.defaultWindowPadding);
            }

            // correct width if hanging out left or right
            var right = elementOffset.left + element.outerWidth();
            var left = winOffset ? winOffset.left : 0;
            if (right > winWidth) {
                element.width(winWidth - 2*this.defaultWindowPadding - elementOffset.left + left);
            }

            // adapt width
            if (adaptWidthToOrigin)
                element.width(originElement.width());

        },

        setContextMenuZIndex: function(element) {
            element.css('z-index', this.currentZIndex + this.contextMenuZIndex);
        },

        getContextMenu: function (originElement, right, isRelativePosition) {
            return this.setContextMenu($('<div>'), originElement, right, isRelativePosition);
        },

        addContextMenuToButton: function(button,
            fillContextMenuDelegate,
            right,
            shortcut,
            emptyText,
            manuallyClose) {
            var that = this;
            // register shortcut if provided
            if (shortcut)
                keyboard.registerShortcut(shortcut, button);

            button.data('isContextMenuButton', true);
            var doc = $(document);

            button.click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                var contextMenu = button.data('contextMenu');
                if (contextMenu) {
                    // remove context menu
                    contextMenu.remove();
                    button.removeData('contextMenu');
                    button.removeClass('active');
                    actionStack.clear(1, true);
                    doc.off('click.handleContextMenu', guiHelpers.handleContextMenuDocumentClick);
                    doc.removeData('contextMenuButton');
                } else {
                    // as long as context menu is open we want to have the active button color
                    button.addClass('active');
                    // create context menu & fill
                    contextMenu = that.getContextMenu(button, right);
                    contextMenu.appendTo('body');
                    fillContextMenuDelegate(contextMenu);
                    // display empty message text for a short time if there is no content
                    if (contextMenu.children().length === 0) {
                        contextMenu.text(emptyText);
                        setTimeout(function() {
                                contextMenu.remove();
                            }, that.contextMenuShowEmptyTextTime);
                        return;
                    }

                    // appended and filled -> correct location / size if it hangs out of the window
                    that.correctContextMenuPosition(contextMenu, button);
                    button.data('contextMenu', contextMenu);
                    // register action
                    actionStack.registerWidgetState(undefined, function () {
                            button.click();
                        });
                    // click on an element in context menu should close it
                    if (!manuallyClose) {
                        contextMenu.children().click(function () {
                            button.click();
                        });
                    }
                    // click elsewhere should also close it
                    doc.data('contextMenuButton', button);
                    setTimeout(function() {
                            doc.on('click.handleContextMenu', that.handleContextMenuDocumentClick);
                        }, 100);
                }
            });
        },

        handleContextMenuDocumentClick: function (e) {
            var doc = $(document);
            var target = $(e.target);
            // don't do anything if the button has been clicked
            if (target.data('isContextMenuButton') !== undefined)
                return;

            var contextMenu = target.closest('.' + guiHelpers.classes.dialog.contextMenu);
            // elsewhere clicked
            if (contextMenu.length === 0) {
                var button = $(document).data('contextMenuButton');
                if (button !== undefined)
                    button.click();
            }
        },

        getOverlay: function(baseZIndex) {
            this.currentZIndex += this.overlayZIndex;
            var overlay = $('<div>')
                .addClass(this.classes.dialog.modalDialog)
                .css({
                    'z-index': baseZIndex ? baseZIndex : this.currentZIndex
                });
            return overlay;
        },

        setOverlayZIndex: function(dialogElement) {
            this.currentZIndex += this.overlayZIndex;
            dialogElement.css('z-index', this.currentZIndex);
        },

        overlayRemoved: function() {
            this.currentZIndex -= this.overlayZIndex;
        },

        getLinkNewWindow: function(href, text) {
            var link = $('<a>');
            link.attr('href', href);
            link.attr('target', '_blank');
            link.text(text);
            return link;
        },

        animatePictureFullsize: function (img, shadowAfter) {
            var image = $(img);
            // if we are already animating the originalCss will still be set -> don't do anything
            var data = image.data('originalCss');
            if (data)
                return;

            // store original css as data, so that the parameterless handler revertToOriginal has the according data.
            image.data('originalCss', {
                    'width': 'auto',
                    'height': 'auto',
                    'max-width': image.css('max-width'),
                    'max-height': image.css('max-height'),
                    'position': image.css('position')
                });

            // thumb size
            var thumbSize = {
                width: image.width(),
                height: image.height()
            };
            // image to normal size and store that size
            image.css({
                'max-width': '100000px',
                'max-height': '100000px'
            });
            var newSize = {
                width: image.width(),
                height: image.height()
            };
            // revert size to thumb size and animate to new size
            image.width(thumbSize.width);
            image.height(thumbSize.height);
            image.css('position', 'absolute');

            image.animate({
                    'height': newSize.height + 'px',
                    'width': newSize.width + 'px'
                }, this.animationTimeDefault, function () {
                    if (shadowAfter) {
                        image.addClass(guiHelpers.classes.common.defaultShadow);
                    }
                });

            // revert original state on document click
            $(document).data('animatedObject', image);
            setTimeout(function () {
                    $(document).on('click.animatedObject', guiHelpers.revertToOriginal);
                }, 100);
            // and also on esc -> actionStack
            actionStack.registerWidgetState(undefined, function() {
                    guiHelpers.revertToOriginal();
                });
        },

        revertToOriginal: function(e) {
            var doc = $(document);
            var element = doc.data('animatedObject');
            if (element === undefined)
                return;
            if (e && e.target && $(e.target).is(element))
                return;
            doc.off('click.animatedObject', guiHelpers.revertToOriginal);
            actionStack.clear(1, true);
            element.css(element.data('originalCss'));
            element.removeClass(guiHelpers.classes.common.defaultShadow);
            // remove data to indicate that animation is completed and the element is reverted
            element.removeData('originalCss');
            doc.removeData('animatedObject');
        },

        openModalDialog: function(title,
            fillBodyFactory,
            onClosed,
            button1,
            button1Handler,
            button2,
            button2Handler,
            closeDelay) {
            var dialog = guiHelpers.getDiv()
                .appendTo('body');

            // delegates
            var removeDialog = function() {
                if (closeDelay)
                    setTimeout(function () {
                            dialog.remove();
                        }, closeDelay);
                else
                    dialog.remove();
            };

            // title
            var header = guiHelpers.getDiv(guiHelpers.classes.dialog.header, title);
            header
                .addClass(guiHelpers.classes.dialog.header)
                .addClass(guiHelpers.classes.dialog.title)
                .appendTo(dialog);
            header.append(guiHelpers.getDiv(guiHelpers.classes.dialog.buttonContainer));

            // body
            var body = guiHelpers.getDiv(guiHelpers.classes.dialog.body);
            if (fillBodyFactory)
                fillBodyFactory(body);
            dialog.append(body);

            // footer
            var footer = guiHelpers.getDiv(guiHelpers.classes.dialog.footer);
            var buttonContainer = guiHelpers.getDiv(guiHelpers.classes.dialog.buttonContainer)
                .appendTo(footer);
            if (button1) {
                button1.click(function (e) {
                    if (button1Handler)
                        button1Handler(e);
                    dialog.overlayDialog('closeDialog');
                    removeDialog();
                });
                buttonContainer.append(button1);
            }
            if (button2) {
                button2.click(function(e) {
                    if (button2Handler)
                        button2Handler(e);
                    dialog.overlayDialog('closeDialog');
                    removeDialog();
                });
                buttonContainer.append(button2);
            }
            dialog.append(footer);
            dialog.overlayDialog({
                usePrintButton: false,
                useUpDownButtons: false,
                dialogType: 'smart',
                closed: function () {
                    if (onClosed)
                        onClosed();
                    removeDialog();
                }
            });
            return dialog;
        },

        adaptableTextBoxComponentLogic: {
            adaptations: {
                text: 'text', 
                memo: 'memo'
            },
            adaptationAttribute: 'adaptAs',
            isAdaptableControl: function (typeFilter) {
                var loweredTypeId = (this.get(this.adaptationAttribute) || '').toLowerCase();
                var typeValue = this.adaptations[loweredTypeId];

                return typeFilter ? typeFilter === typeValue : !!typeValue; // convert to boolean by truthy value
            },

            initializeInputControl: function(control, isInnerControl) {
                // set intial state
                control.attr('contenteditable', 'true');
                // aria attribute
                control.attr('role', 'textbox');
                // firefox requires a min size on empty DIVs
                if (isInnerControl === true)
                    control.css('min-height', '1.2em');
                else
                    control.css('min-height', '2.1em');


                control.on('paste', function (e) {
                    e.preventDefault();
                    var text = '';
                    if (e.clipboardData || e.originalEvent.clipboardData) {
                        text = (e.originalEvent || e).clipboardData.getData('text/plain');
                    } else if (window.clipboardData) {
                        text = window.clipboardData.getData('Text');
                    }

                    text = text.trim();

                    if (document.queryCommandSupported('insertText')) {
                        document.execCommand('insertText', false, text);
                    } else {
                        document.execCommand('paste', false, text);
                    }
                });

                control.css('display', 'inline-block');
                control.css('word-wrap', 'break-word');
                control.prop('innerText', this.get('value') || '');

                var adaptAs = this.adaptations[(this.get(this.adaptationAttribute) || '').toLowerCase()];

                // adaptation specific initializer
                switch (adaptAs) {
                case this.adaptations.text:
                    this.initTextInput(control);
                    break;
                case this.adaptations.memo:
                    this.initMemoInput(control);
                    break;
                default:
                    throw Error(
                        'AdaptableTextBoxComponent must have an "adaptAs" attribute with one of the following as value: ' + Object.keys(this.adaptations) + '. Provided value: "' + this.get(this.adaptationAttribute) +'"');
                }

                // common behavior
                control.on('dragend', this.eventCharter.bind([this.processDragCut.bind(this)]));
            },

            // initializer
            initTextInput: function(control) {
                // ui config
                control.css('white-space', 'normal');

                // pre input guidlines enforcement
                control.on('paste drop', this.eventCharter.bind([this.suspendResize]));
                control.on('keydown',
                    this.eventCharter.bind([
                        this.preventLineBreak,
                        this.limitTextBoxContent.bind(this)
                    ])
                );

                // process content change
                if (this.isMSBrowser()) {

                    control.on('paste drop', this.eventCharter.bind([this.ieTextInputActionManager.bind(this)]));
                } else {

                    control.on('input',
                        this.eventCharter.bind([
                            this.extTextInputDataTransformer.bind(this),
                            this.saveControlContentChanges.bind(this),
                            this.unsuspendResize
                        ])
                    );

                }
                // post input event for IE
                if (this.isMSBrowser())
                    control.on('keyup',
                        this.eventCharter.bind([this.saveControlContentChanges.bind(this)]));
            },

            initMemoInput: function(control) {
                control.css('white-space', 'pre-wrap');

                // process content change
                if (this.isMSBrowser()) {
                    control.on('paste drop', this.eventCharter.bind([this.ieMemoInputActionManager.bind(this)]));
                } else {

                    control.on('input',
                        this.eventCharter.bind([
                            this.saveControlContentChanges.bind(this)
                        ])
                    );

                }
                // post input event for IE
                if (this.isMSBrowser())
                    control.on('keyup',
                        this.eventCharter.bind([this.saveControlContentChanges.bind(this)]));
                
            },

            ieTextInputActionManager: function(event) {

                setTimeout(function(ev) {
                        this.eventCharter.bind([
                            this.extTextInputDataTransformer.bind(this),
                            this.saveControlContentChanges.bind(this),
                            this.unsuspendResize
                        ])(ev);
                    }.bind(this),
                    9,
                    event);
            },

            ieMemoInputActionManager: function(event) {

                setTimeout(function(ev) {
                        this.eventCharter.bind([
                            this.saveControlContentChanges.bind(this)
                        ])(ev);
                    }.bind(this),
                    9,
                    event);
            },

            // behavior
            preventLineBreak: function(event) {
                if (keyboard.isEnterKeyPressed(event)) {
                    event.preventDefault();
                    return true;
                }
                return false;
            },

            limitTextBoxContent: function(event) {
                var highlight = getSelection();
                if (highlight.focusOffset !== highlight.anchorOffset ||
                    event.ctrlKey ||
                    event.altKey ||
                    (event.key || '').length > 1  && event.key.toLowerCase() !== 'spacebar' ||
                    event.target.innerText.length < 255) return false;

                event.preventDefault();
                return true;
            },

            removeLineBreaks: function(payload) {
                return payload.replace(/[\r?\n|\r]+/gm, '');
            },

            truncateContent: function(payload) {
                return payload.length <= 255 ? payload : payload.substring(0, 255);
            },

            trimWhitespaces: function(payload) {
                return (payload || '').trim();
            },

            processDragCut: function(event) {
                event.stopPropagation();
                event.preventDefault();
                this.suspendResize(event);

                if (this.isMSBrowser()) {

                    setTimeout(function(ev) {
                            this.saveControlContentChanges(ev);
                            this.unsuspendResize(ev);
                        }.bind(this),
                        9,
                        event);

                } else {
                    this.saveControlContentChanges(event);
                    this.unsuspendResize(event);
                }
            },

            saveControlContentChanges: function(event) {
                // unchanged input content events
                if (event.target.innerText === this.get('value')) return;
                this.updateControlModel(event.target.innerText);
            },

            // helpers
            eventCharter: function(event) {
                this.forEach(function(func) {
                    func(event);
                });

                return event;
            },

            textControlContentTransformer: function(content) {
                return [
                    this.removeLineBreaks,
                    this.trimWhitespaces,
                    this.truncateContent
                ].reduce(function(data, currentFunc) {
                        return currentFunc(data);
                    },
                    content);
            },

            extTextInputDataTransformer: function(event) {
                if (this.get('value') === event.target.innerText) {
                    event.preventDefault();
                    return;
                }

                // skip input event checking if event is paste or drop; IE
                if (['paste', 'drop'].indexOf(event.type) < 0) {

                    // process only input triggered by paste, drop and format for non-IE
                    if (!/^insertfrom|^history|^format/i.test(event.originalEvent.inputType || ''))
                        return;
                }

                var payload = this.textControlContentTransformer(event.target.innerText);

                if (payload === event.target.innerText) return;

                event.target.innerText = payload;
                this.setCaretPosition(event.target);
            },

            isMSBrowser: function() {
                return /msie|trident|edge/i.test(navigator.userAgent);
            },

            setCaretPosition: function(control, positionIndex) {
                var pureControl = control.get ? control.get(0) : control;
                if (!pureControl.firstChild) return;

                var range = document.createRange();
                var sel = window.getSelection();
                range.setStart(pureControl.firstChild, isNaN(Number(positionIndex)) ? pureControl.innerText.length : Number(positionIndex));
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            },

            suspendResize: function(event) {
                var triggerer = event.target;

                triggerer.style.width = triggerer.offsetWidth + 'px';
                triggerer.style.height = triggerer.offsetHeight + 'px';
                triggerer.style.overflow = 'hidden';
            },

            unsuspendResize: function(event) {
                var triggerer = event.target;

                triggerer.style.width = null;
                triggerer.style.height = null;
                triggerer.style.overflow = null;
            }
        }
    };
    return guiHelpers;
});