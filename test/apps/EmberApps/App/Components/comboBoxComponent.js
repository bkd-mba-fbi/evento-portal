define([
    'application',
    'jquery',
    'ember',
    'keyboard',
    'actionStack',
    'icons',
    'translate',
    'guiHelpers',
    'regexHelpers',
    'uiSettings'
], function (app, $, ember, keyboard, actionStack, icons, translate, guiHelpers, regexHelpers, uiSettings) {
    app.ComboBoxComponent = ember.Component.extend($.extend({}, guiHelpers.adaptableTextBoxComponentLogic, {
        tagName: 'div',
        classNames: ['combobox'],

        didInsertElement: function() {
            this.set('lastValidSearch', '');
            this.set('lastConfirmedValue', '');
            this.set('lastFilteredSource', undefined);
            this.set('isPopupVisible', false);
            this.set('didActionHappen', false);
            this.set('keepPopupOpen', false);
            this.set('isAllVisible', false);

            // run in another thread to save performance and let ember finish rendering the view
            var that = this;
            var element = this.$();
            element.prop('autocomplete', false);
            setTimeout(function () {
                    try {
                        var source = that.get('source');
                        if (source)
                            that.fillBySource(source);

                        var dataSource = that.get('dataSource');

                        var inputControl = that.get('adaptAs')
                            ? that.createAdaptableControl()
                            : that.createInputControl();
                        element.append(inputControl);

                        var value = that.get('value');
                        if (value) {
                            var item = dataSource.find(function(el) {
                                return el.Key === value;
                            });
                            if (item || that.get('allowArbitraryText')) {
                                if (item)
                                    value = item.Value;
                                that.setInputControlContent(value);
                                that.set('lastValidSearch', value);
                                that.set('lastConfirmedValue', value);
                            }
                        }

                        if (!dataSource) {
                            console.error('combobox ' + that.$().attr('id') + ' cannot evaluate data source');
                            return;
                        }

                        element.append(that.createShowAllButton());
                        var popup = that.buildPopup(dataSource);
                        popup.hide();
                        element.append(popup);
                    } catch (ex) {
                        // don't throw the error when the object is beeing destroyed
                        if (!that.get('isDestroyed') && !that.get('isDestroying'))
                            throw ex;
                    }
                }, 1);
        },

        fillBySource: function(source) {
            var keyName = this.get('keyName');
            var valueName = this.get('valueName');
            if (!keyName || !valueName) {
                console.error('when using "source" on combobox, "keyName" and "valueName" must be set as well');
                return;
            }
            var dataSource = [];
            $.each(source,
                function() {
                    dataSource.push({
                        Key: this[keyName],
                        Value: this[valueName]
                    });
                });
            this.set('dataSource', dataSource);
        },

        createInputControl: function() {
            var input = guiHelpers.getTextbox(undefined, this.get('id'), true);
            input.attr('autocomplete', 'off');
            if (this.get('inputMaxlength'))
                input.prop('maxlength', this.get('inputMaxlength'));

            guiHelpers.addLongtextTooltip(input);

            return this.initInputControl(input);
        },

        createAdaptableControl: function() {
            var editDiv = guiHelpers.getDiv();

            this.initializeInputControl(editDiv, true);
            return this.initInputControl(editDiv);
        },

        initInputControl: function(control) {
            control.prop('disabled', this.get('disabled'));
            control.prop('name', this.get('name'));

                var that = this;
                control.on('keyup',
                        function(e) {
                            that.handleKeyUp(e);
                        })
                    .on('keydown',
                        function(e) {
                            that.handleKeyDown(e);
                        })
                    .on('blur',
                        function() {
                            that.handleBlur();
                        });

            this.set('inputControl', control);
            return control;
        },

        getAdaptation: function() {
            return this.get(this.adaptationAttribute);
        },

        endsWith: function (text, suffix) {
            return text.indexOf(suffix, text.length - suffix.length) > -1;
        },

        getInputControlContent: function() {
            var inputCtrl = this.get('inputControl');
            return this.isAdaptableControl() // empty innerText  returns '\n'
                ? inputCtrl.prop('innerText').replace(/\n$/, this.endsWith(inputCtrl.html(), ' <br>') ? ' ' : '')
                : inputCtrl.val();
        },

        setInputControlContent: function(content) {
            var inputCtrl = this.get('inputControl');
            this.isAdaptableControl()
                ? inputCtrl.prop('innerText', (this.isAdaptableControl('text') ? this.textControlContentTransformer(content) : content))
                : inputCtrl.val(content);  
        },

        updateControlModel: function(valueKey) {
            if (this.get('value') === valueKey) return;
            if (valueKey && valueKey.trim)
                valueKey = valueKey.trim();
            this.set('value', valueKey);
        },

        createShowAllButton: function() {
            var that = this;
            var button = guiHelpers.getButton(icons.dropdown, null, guiHelpers.classes.controls.inputButton)
                .attr('tabIndex', -1)
                .attr('title', translate.getString('showAll'))
                .prop('disabled', this.get('disabled'))
                .on('mousedown',
                    function() {
                        if (!that.get('isAllVisible')) {
                            that.set('isAllVisible', true);
                            that.set('keepPopupOpen', true);
                            var searchText = that.getInputControlContent();
                            var regex = searchText
                                ? new RegExp(regexHelpers
                                    .escapeRegExp(searchText),
                                    'gi')
                                : undefined;
                            that.rebuildPopup(that.get('dataSource'), regex);
                        } else {
                            that.hidePopup();
                        }
                    })
                .on('blur',
                    function () {
                        that.set('keepPopupOpen', false);
                        that.handleBlur();
                    });
            this.set('showAllButton', button);
            return button;
        },

        buildPopup: function(dataSource, searchRegex) {
            var that = this;
            var popup = $('<ul class="dialogContextMenu">');
            popup.scroll(function () {
                that.set('keepPopupOpen', true);
            });
            guiHelpers.setContextMenuZIndex(popup);


            if (dataSource) {
                $.each(dataSource,
                    function () {
                        if (!this.Key || !this.Value)
                            throw Error(
                                'when setting "dataSource", dataSource must be an array with objects having "Key" and "Value" fields');

                        var entry = $('<li>');
                        // drop down styling
                        if (that.isAdaptableControl())
                            entry.css('white-space', 'pre-wrap');
                        entry.data('dataItem', this);
                        entry.click(function () {
                            that.confirm(entry, true);
                        });
                        // mark search results
                        if (searchRegex !== undefined) {
                            var hit;
                            var index = 0;
                            while ((hit = searchRegex.exec(this.Value)) != null) {
                                var textToHit = this.Value.substring(index, hit.index);
                                $('<span>')
                                    .text(textToHit)
                                    .appendTo(entry);
                                $('<span class="searchHit">')
                                    .text(hit[0])
                                    .appendTo(entry);
                                index = hit.index + hit[0].length;
                            }
                            if (index < this.Value.length) {
                                $('<span>')
                                    .text(this.Value.substring(index))
                                    .appendTo(entry);
                            }
                        } else
                            entry.text(this.Value);
                        popup.append(entry);
                    });
            }
            this.set('popup', popup);
            return popup;
        },

        openPopup: function () {
            this.set('didActionHappen', true);
            var that = this;
            actionStack.registerComponentState('comboBox_open',
                function() {
                    // create
                    that.get('popup').show();
                    that.set('isPopupVisible', true);
                },
                function() {
                    // destroy
                    if (!that.get('isDestroyed') && !that.get('isDestroying')) {
                        that.get('popup').hide();
                        that.set('isPopupVisible', false);
                    }
                },
                function() {
                    // confirm
                    if (!that.get('isDestroyed') && !that.get('isDestroying')) {
                        var focusedItem = that.get('focusedItem');
                        if (focusedItem) {
                            that.confirm(focusedItem, true);
                        }
                    }
                });
        },

        hidePopup: function () {
            if (this.get('isDestroyed') || this.get('isDestroying'))
                return;

            this.set('isAllVisible', false);
            this.set('didActionHappen', true);
            this.get('popup').hide();
            this.set('focusedItem', undefined);
            this.set('isPopupVisible', false);
            actionStack.unregisterAction('comboBox_open');
        },

        confirm: function (item, close) {
            if (this.get('isDestroyed') || this.get('isDestroying'))
                return;
            this.set('didActionHappen', true);
            this.set('focusedItem', undefined);
            var dataItem = item.data('dataItem');
            var value = this.textControlContentTransformer(dataItem.Value || '');
            this.setInputControlContent(value);
            this.updateControlModel(dataItem.Key);
            this.set('lastConfirmedValue', value);
            this.set('lastValidSearch', value);
            if (close)
                this.hidePopup();
        },

        confirmInputValue: function () {
            if (this.get('isDestroyed') || this.get('isDestroying'))
                return;

            this.set('didActionHappen', true);
            this.set('focusedItem', undefined);
            var value = this.getInputControlContent();
            this.updateControlModel(value);
            this.set('lastConfirmedValue', value);
        },

        handleKeyUp: function(e) {
            var genesisCache = this.get('eventGenesisCache');

            if (!genesisCache)
                return;

            // value has not changed, handle directional/selection keys instead
            if (this.getInputControlContent() === genesisCache.value) {

                // handle up and down keypress
                if (keyboard.isYDirectionalKey(e)) {
                    var newPositions = getSelection();

                    // navigation key was pressed, either with ALT key or caret didn't change position, hence open popup
                    var showPopUp = this.get('isPopupVisible') || event.altKey || 
                        newPositions.focusNode === genesisCache.focusNode && 
                        newPositions.focusOffset == genesisCache.focusOffset && 
                        newPositions.anchorOffset == genesisCache.anchorOffset;
    
                    if (showPopUp) {
                        switch (e.which) {
                            case keyboard.downKey:
                                this.navigateList(true, e);
                                break;
                            case keyboard.upKey:
                                this.navigateList(false, e);
                                break;
                            }
                    }
                    return;

                } else if (this.get('focusedItem') && (keyboard.isApplyChoiceKey(e) || e.which === keyboard.spaceKey)) {
                    // apply value of the marked item
                    this.confirm(this.get('focusedItem'), true);
                    return;
                }  else if (e.which === keyboard.escKey) {
                    // hide opened popup
                    this.hidePopup();
                    return;
                }
            } else if (this.getInputControlContent() !== genesisCache.value) {
                // ignore post control keyup events
                if (this.get('focusedItem') && keyboard.isApplyChoiceKey(e) || e.which === keyboard.altKey) {
                    this.setCaretPosition(e.target);
                    return;
                }
            }

            this.set('lastConfirmedValue', '');
            var searchText = this.getInputControlContent();
            var dataSource = this.get('dataSource');

            if (searchText === '') {
                this.set('lastValidSearch', '');
                this.confirm($('li').data('dataItem', {}), false);
                this.rebuildPopup(dataSource);
                return;
            }

            var regex = new RegExp(regexHelpers.escapeRegExp(searchText), 'gi');
            var filteredSource = this.filterDataSource(dataSource, regex);

            
            if (this.get('allowArbitraryText')) {
                if (filteredSource.length === 0 && this.get('isPopupVisible')) {
                    this.hidePopup();
                    this.rebuildPopup(dataSource);
                    this.hidePopup();
                }
                ember.run.debounce(this, this.confirmInputValue, uiSettings.defaultDebouncing);
            } else {
                // run in another thread to save performance
                var that = this;
                setTimeout(function() {
                        that.correctInput(searchText, filteredSource, e);
                    },
                    1);
            }

            if (filteredSource.length === 0)
                return;
            this.set('lastFilteredSource', filteredSource);
            this.rebuildPopup(filteredSource, regex);
        },

        handleKeyDown: function(e) {
            var selection =  getSelection();

            this.set('eventGenesisCache', {
                anchorOffset: selection.anchorOffset,
                focusOffset: selection.focusOffset,
                value: this.getInputControlContent(),
                focusNode: selection.focusNode
            });

            if (this.get('focusedItem') && keyboard.isPopUpNavigationKey(e) ||
            this.get('isPopupVisible') && keyboard.isApplyChoiceKey(e)) {
                // when navigating popup, prevent moving the caret in input or key inserts
                e.preventDefault();
            }
        },

        handleBlur: function () {
            var that = this;
            this.set('eventGenesisCache', null);
            setTimeout(function () {
                    if (that.get('keepPopupOpen') === true) {
                        that.set('keepPopupOpen', false);
                        return;
                    }
                    if (!that.get('didActionHappen')) {
                        if (that.get('allowArbitraryText')) {
                            that.confirmInputValue();
                            that.hidePopup();
                        } else {
                            // if the value exists exact in the items of the combobox take it as valid choice
                            var dataSource = that.get('dataSource');
                            var searchText = that.getInputControlContent();
                            var foundItems = dataSource.filter(function(item) {
                                return item.Value === searchText;
                            });
                            if (foundItems.length > 0)
                                that.confirm($('li').data('dataItem', foundItems[0]), true);
                            else {
                                that.hidePopup();
                                // clear invalid search
                                that.setInputControlContent('');
                                that.set('lastValidSearch', '');
                            }
                        }
                    } else {
                        that.set('didActionHappen', false);
                        that.handleBlur();
                    }
                }, 100);
        },

        navigateList: function(down, e) {
            var popup = this.get('popup');
            if (this.get('isPopupVisible') === false)
                this.openPopup();

            var focusedItem = this.get('focusedItem');
            var newFocusedItem;

            if (focusedItem) {
                newFocusedItem = down
                    ? focusedItem.nextAll('li:visible').first()
                    : focusedItem.prevAll('li:visible').first();
            } else {
                newFocusedItem = popup.children().eq(0);
            }

            if (newFocusedItem.length > 0) {
                if (focusedItem)
                    focusedItem.removeClass('itemHover');
                newFocusedItem.addClass('itemHover');
                this.set('focusedItem', newFocusedItem);
            }
            e.preventDefault();
        },

        filterDataSource: function(dataSource, regex) {
            var filteredSource = dataSource.filter(function(item) {
                return item.Value.search(regex) > -1;
            });
            return filteredSource;
        },

        rebuildPopup: function(dataSource, regex) {
            var popup = this.get('popup');
            this.set('focusedItem', undefined);
            popup.remove();
            popup = this.buildPopup(dataSource, regex);
            this.$().append(popup);
            this.openPopup();
            var containerSelector = this.get('containerSelector');
            if (!containerSelector)
                containerSelector = '.dialogBody, .flexDialogBody';
            guiHelpers.correctContextMenuPosition(popup, this.$(), containerSelector, true);
        },

        correctInput: function(searchText, filteredSource, event) {
            // no search text is valid
            if (searchText === '') {
                return;
            }

            // invalid -> revert text and search again
            if (filteredSource.length === 0) {
                this.setInputControlContent(this.get('lastValidSearch'));
                this.setCaretPosition(event.target, this.get('eventGenesisCache').focusOffset);
                this.handleKeyUp(event);
                return;
            }

            // valid -> check if the current casing is correct
            var dataSource = this.get('dataSource');
            var exactMatches = this
                .filterDataSource(dataSource, new RegExp(regexHelpers.escapeRegExp(searchText), 'g'));
            if (exactMatches.length === 0) {
                var firstValue = filteredSource[0].Value;
                var regex = new RegExp(regexHelpers.escapeRegExp(searchText), 'gi');
                searchText = regex.exec(firstValue)[0];
                this.setInputControlContent(searchText);
                this.setCaretPosition(event.target);
            }
            // if there is only one result and everything has been entered -> confirm value only
            if (filteredSource.length === 1) {
                
                if (this.get('isPopupVisible') && keyboard.isApplyChoiceKey(event)) {

                    this.confirm($('li').data('dataItem', filteredSource[0]), true);
                    this.setCaretPosition(event.target);
                    var newSearchText = filteredSource[0].Value;
                    this.set('lastValidSearch', newSearchText);
                    return;
                }
            }

            this.set('lastValidSearch', searchText);
        },

        disabledChanged: ember.observer('disabled',
            function() {
                var inputControl = this.get('inputControl');
                var button = this.get('showAllButton');
                if (inputControl)
                    inputControl.prop('disabled', this.get('disabled'));
                if (button)
                    button.prop('disabled', this.get('disabled'));
            }),

        nameChanged: ember.observer('name',
            function () {
                var inputControl = this.get('inputControl');
                if (inputControl)
                    inputControl.prop('name', this.get('name'));
            })
    }));
});