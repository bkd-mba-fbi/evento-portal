define(['jquery'], function ($) {
    var keyboard = {
        keys: [],
        registeredShortcuts: [],

        currentShortcut: '',

        ctrl: false,
        shift: false,
        alt: false,

        backspaceKey: 8,
        tabKey: 9,
        enterKey: 13,
        shiftKey: 16,
        ctrlKey: 17,
        altKey: 18,
        escKey: 27,
        spaceKey: 32,
        pageUpKey: 33,
        pageDownKey: 34,
        endKey: 35,
        homeKey: 36,
        leftKey: 37,
        upKey: 38,
        rightKey: 39,
        downKey: 40,
        deleteKey: 46,
        plus: 107,
        minus: 108,

        decimalPoint: 110,

        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,

        comma: 188,
        dash: 189,
        period: 190,


        // unicode chars for special keys
        displayChars: {
            37: '\u2190',
            38: '\u2191',
            39: '\u2192',
            40: '\u2193'
        },

        init: function () {
            /// <summary>initializes the keyboard module</summary>
            var that = this;
            $(document)
                .keydown(function (event) {
                    return that._handleKeyDown(event);
                })
                .keyup(function (event) { that._handleKeyUp(event); });
        },

        _handleKeyDown: function (event) {
            /// <summary>handles the key down event on document</summary>
            /// <param name="event" type="Object">the original event of keydown</param>
            this.alt = event.altKey;
            this.ctrl = event.ctrlKey;
            this.shift = event.shiftKey;

            // special keys
            // Enter
            if (event.which === this.enterKey) {
                this.keys.push('Enter');
                $(document).trigger('EnterPressed');
            }
            // Esc
            else if (event.which === this.escKey) {
                this._clearKeys();
                $(document).trigger('EscPressed');
            }
            // PageUp
            else if (event.which === this.pageUpKey) {
                this.keys.push('PageUp');
            }
            // PageDown
            else if (event.which === this.pageDownKey) {
                this.keys.push('PageDown');
            }
            // Left
            else if (event.which === this.leftKey) {
                this.keys.push('Left');
            }
            // Up
            else if (event.which === this.upKey) {
                this.keys.push('Up');
            }
            // Right
            else if (event.which === this.rightKey) {
                this.keys.push('Right');
            }
            // Down
            else if (event.which === this.downKey) {
                this.keys.push('Down');
            }
            // Space
            else if (event.which === this.spaceKey) {
                this.keys.push('Space');
            }
            // Plus
            else if (event.which === this.plus) {
                this.keys.push('Plus');
            }
            // Minus
            else if (event.which === this.plus) {
                this.keys.push('Minus');
            }
            // normal keys
            else if (!(event.which === this.ctrlKey || event.which === this.shiftKey || event.which === this.altKey))
                this.keys.push(this._keyCodeToLetter(event.which));

            if (this.keys.length > 0) {
                this.currentShortcut = (this.ctrl ? 'Ctrl+' : '') +
                    (this.shift ? 'Shift+' : '') +
                    (this.alt ? 'Alt+' : '') +
                    this.keys[this.keys.length - 1];
                return this._tryExecuteShortcut(this.currentShortcut);
            }
            return true;
        },

        _tryExecuteShortcut: function (shortcut) {
            /// <summary>checks if the shortcut has been registered and returns the boolean for keydown event</summary>
            /// <param name="shortcut" type="String">the pressed shortcut</param>
            var shortcutInfo = this.registeredShortcuts[shortcut];
            if (shortcutInfo) {
                // empty keys collection, so that a new shortcut can be detected
                this.keys = [];
                // if there is a control associated, click it
                if (shortcutInfo.control !== undefined && shortcutInfo.control !== null) {
                    shortcutInfo.control.click();
                    return false;
                }
                // or execute registered action
                if (shortcutInfo.caller) {
                    $.proxy(shortcut.action, shortcut.caller);
                } else {
                    var result = shortcutInfo.action();
                    if (result !== true)
                        return false;
                    else
                        return true;
                }
            }
            return true;
        },

        _handleKeyUp: function () {
            /// <summary>handles the key up event on document</summary>
            /// <param name="event" type="Object">the original event of keyup</param>
            this._clearKeys();
        },

        _clearKeys: function () {
            /// <summary>clears all pressed keys</summary>
            this.alt = this.ctrl = this.shift = false;
            this.keys = [];
        },

        _keyCodeToLetter: function (keyCode) {
            /// <summary>converts keycode to upper case letter</summary>
            /// <param name="keyCode" type="Number">the keycode pressed</param>
            return String.fromCharCode(keyCode);
        },

        registerShortcut: function (shortcut, associatedControl, createAction, cancellable, destroyAction, caller) {
            /// <summary>register an action to a shortcut (order: Ctrl -> Shift -> Alt -> Key(upper case))</summary>
            /// <param name="shortcut" type="String">the string representing the shortcut (order: Ctrl -> Shift -> Alt -> Key(upper case)) example: Ctrl+S</param>
            /// <param name="associatedControl" type="Object">the control associated with this shortcut. NOTE: the action will not be called when providing a control!
            ///when provided, keyboard will automatically add shortcut to title and execute a click on the control</param>
            /// <param name="createAction" type="Method">the delegate owned by caller to be called when the shortcut has been pressed</param>
            /// <param name="cancellable" type="boolean">optional: set to true when the action is cancellable. it will be but on action stack</param>
            /// <param name="destroyAction" type="Method">optional: must be set if cancellable. the action passed to the action stack to cancel the action</param>
            /// <param name="caller" type="Object">optional: the instance calling register shortcut (owner of the createAction)</param>
            this.registeredShortcuts[shortcut] = {
                shortcut: shortcut,
                caller: caller,
                action: createAction,
                control: associatedControl
            };
            // add shortcut title
            if (associatedControl !== undefined && associatedControl !== null) {
                var title = associatedControl.attr('title');
                title = title ? (title + ' ') : '';
                associatedControl.attr('title', title + '(' + this.translateShortcut(shortcut) + ')');
            }
            if (cancellable);
            // TODO aneu: call action stack here
        },

        unregisterShortcuts: function (shortcuts) {
            /// <summary>unregister a single or a list of short cuts</summary>
            /// <param name="shortcuts" type="Object">a single string or a list of strings defining the shortcuts to unregister</param>            
            var that = this;
            if (shortcuts instanceof Array) {
                $.each(shortcuts,
                    function () {
                        that._unregisterShortcut(this);
                    });
            } else
                that._unregisterShortcut(shortcuts);
        },

        translateShortcut: function (shortcut) {
            return shortcut
                .replace('Left', this.displayChars[this.leftKey])
                .replace('Up', this.displayChars[this.upKey])
                .replace('Right', this.displayChars[this.rightKey])
                .replace('Down', this.displayChars[this.downKey]);
        },

        _unregisterShortcut: function (shortcut) {
            var info = this.registeredShortcuts[shortcut];
            if (!info)
                return;
            if (info.control !== undefined && info.control !== null) {
                var title = info.control.attr('title');
                title = title.replace('(' + info.shorcut + ')');
                // remove space of concatination if there is one left over
                if (title === ' ')
                    title = '';
                info.control.attr('title', title);
            }
            this.registeredShortcuts[shortcut] = undefined;
        },

        isShortcutRegistered: function (shortcut) {
            return this.registeredShortcuts[shortcut] !== undefined;
        },

        /**
         * whether key of an keyUp / keyDown event is a navigation key (like up, down, pageUp, end, aso..)
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {boolean} - true if it is a navigation key
         */
        isNavigationKey: function (event) {
            return event.which === this.tabKey ||
                event.which === this.escKey ||
                event.which === this.enterKey ||
                event.which === this.ctrlKey ||
                event.which === this.altKey ||
                event.which === this.shiftKey ||
                event.which === this.pageDownKey ||
                event.which === this.endKey ||
                event.which === this.homeKey ||
                event.which === this.pageUpKey ||
                event.which === this.upKey ||
                event.which === this.downKey ||
                event.which === this.rightKey ||
                event.which === this.leftKey;
        },

        /**
         * checks if the up or down key was pressed
         * @param {Event} event - the event object
         * @returns  {boolean} - 
         */
        isYDirectionalKey: function (event) {
            return [this.upKey, this.downKey].indexOf(event.which) > -1;
        },

        /**
         * checks if the the tab or spacebar key is pressed to make a selection
         * @param {Event} event - the event object
         * @returns  {boolean} -
         */
        isApplyChoiceKey: function (event) {
            return [keyboard.enterKey, keyboard.tabKey].indexOf(event.which) > -1;
        },

        /**
         * checks if any key used to navigate and confirm selection is pressed
         * @param {Event} event - the event object
         * @returns  {boolean} -
         */
        isPopUpNavigationKey: function (event) {
            return [keyboard.downKey, keyboard.upKey, keyboard.enterKey, keyboard.tabKey, keyboard.spaceKey].indexOf(event.which) > -1;
        },

        /**
         * whether key of an keyUp / keyDown event is a deletion key (delete or backspace)
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {boolean} - true if the key is a deletion key
         */
        isDeletionKey: function (event) {
            return event.which === this.backspaceKey ||
                event.which === this.deleteKey;
        },

        /**
         * whether key of an keyUp / keyDown event is a function key (F1 - F12)
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {boolean} -
         */
        isFunctionKey: function (event) {
            return event.which >= this.f1 && event.which <= this.f12;
        },

        /**
         * whether the key in the event has been a number code
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {boolean} -
         */
        isNumberKey: function (event) {
            return ((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)) && !event.ctrlKey && !event.shiftKey && !event.altKey;
        },

        /**
         * whether key of an keyUp / keyDown event is a possible decimal delimiter (.,)
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {boolean} - 
         */
        isDecimalDelimiter: function (event) {
            return event.which === this.period || event.which === this.decimalPoint || event.which === this.comma;
        },

        /**
         * Checks if any modifier key is pressed
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {boolean} - 
         */
        isAnyModifierKeyPressed: function (event) {
            return event.ctrlKey || event.shiftKey || event.altKey;
        },

        /**
         * Checks if the enter key is pressed
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {boolean} - 
         */
        isEnterKeyPressed: function (event) {
            return event.which === this.enterKey;
        },

        /**
         * gets the letter of keyCode in keyDown / keyUp
         * @param {Event} event - the event object of keyDown / keyUp
         * @returns {string} - 
         */
        getKeyCodeLetter: function (event) {
            return this._keyCodeToLetter(event.which);
        },

        getCaretPosition: function (input) {
            var pos = 0;
            // IE Support
            if (document.selection) {
                input.focus();
                var selection = document.selection.createRange();
                selection.moveStart('character', input.value.length);
                pos = selection.text.length;
            }
            // others
            else if (typeof input.selectionStart === 'number')
                pos = input.selectionDirection === 'backward' ? input.selectionStart : input.selectionEnd;

            return pos;
        },

        setCaretPosition: function (input, pos) {
            if (input.createTextRange) {
                var range = input.createTextRange();
                input.move('character', pos);
                range.select();
            } else {
                if (input.selectionStart) {
                    input.focus();
                    input.setSelectionRange(pos, pos);
                } else
                    input.focus();
            }
        }
    };

    keyboard.init();
    return keyboard;
});