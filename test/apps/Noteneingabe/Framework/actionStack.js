define(['jquery', 'keyboard'], function ($, keyboard) {
    var actionStack = {
        // action stack:
        // stacks all actions on the GUI (popup, bubble, tooltip, modal, loading, aso.)
        // there are 3 Levels of actions which may be stacked or not. Whether an action can be stacked
        // depends on the level of the new action and the level of the action before the logic of stacking is as following:
        //
        //                                  _stacks_                      _stacks_
        //                                 /        \                    /        \
        //                                 V        /                    V        /
        //  ==========   ----stacks--->   ==========   ----stacks--->   ===========
        //   LEVEL I                       LEVEL II                      LEVEL III
        //  ==========   <---stacks----   ==========   <---stacks----   ===========
        //       \--------------------------stacks------------------>
        //
        //  bubble, tooltip               modal popups                  loading  
        //  widget states                                               calculating
        //
        // if an action cannot be stacked, the former action will be destroyed automatically (e.g. LEVEL I to LEVEL I)
        //
        stack: [],
        registeredActions: new Object(), // assoziative array (string: int), name of Action: index of action in the stack

        init: function () {
            /// <summary>initializes the action stack module</summary>
            var that = this;
            $(document).on('EscPressed', function () {
                that._destroyAction();
            });
            $(document).on('EnterPressed', function () {
                that._confirmAction();
            });
        },

        _handleEscPressed: function () {
            /// <summary>handles action stack on pressing 'Esc' button</summary>
            this._destroyAction();
        },

        _onActionRemoved: function (action) {
            /// <summary>should be called after an action is removed to reset members necessary</summary>
            if (this.stack.length === 0)
                this.registeredActions = new Object();
            else if (action.name)
                this.registeredActions[name] = undefined;
        },

        _destroyAction: function(action) {
            /// <summary>destroys the last registered or the provided action and removes it from the stack</summary>
            if (this.stack.length > 0) {
                // either remove provided action or remove the last one from the stack
                if (action)
                    this.stack.splice(action.index, 1);
                else
                    action = this.stack.pop();

                // destroy it
                if (action.caller)
                    $.proxy(action.destroyAction, action.caller);
                else
                    action.destroyAction();

                this._onActionRemoved(action);
            }
        },

        _confirmAction: function () {
            /// <summary>confirms the last registered action and removes it from the stack if the createAction returned true</summary>
            if (this.stack.length > 0) {
                var action = this.stack[this.stack.length - 1];

                if (!action.confirmAction)
                    return;

                var confirmed;
                if (action.caller)
                    confirmed = $.proxy(action.confirmAction, action.caller);
                else
                    confirmed = action.confirmAction();

                if (confirmed) {
                    this.stack.pop();
                    this._onActionRemoved(action);
                }
            }
        },

        _registerAction: function (name, level, createAction, destroyAction, confirmAction, caller) {
            /// <summary>creates the newly registered action</summary>
            /// <param name="name" type="Number">the name of the action</param>
            /// <param name="level" type="Number">the level of the action</param>
            /// <param name="createAction" type="Method">the delegate to create the action</param>
            /// <param name="destroyAction" type="Method">the delegate to destroy the action</param>
            /// <param name="caller" type="Object">the caller of this registration (also the owner of the create and destroy action</param>
            
            // don't register, if the name is already registered
            if (name && this.registeredActions[name] !== undefined)
                return;

            // remove last action if level 1
            if (level === 1 && this.stack.length > 0) {
                var lastAction = this.stack[this.stack.length - 1];
                if (lastAction.level === 1)
                    this._destroyAction();
            }

            this.stack.push({
                name: name,
                level: level,
                caller: caller,
                index: this.stack.length,
                createAction: createAction,
                destroyAction: destroyAction,
                confirmAction: confirmAction
            });

            // register the name if provided
            if (name)
                this.registeredActions[name] = this.stack.length - 1;

            if (createAction) {
                if (caller)
                    $.proxy(createAction, caller);
                else
                    createAction();
            }
        },

        // accessors

        clear: function (level, preventDestroy) {
            /// <summary>clears all registered actions</summary>
            /// <param name="level" type="Number">optional: clears all the actions stacked with this level</param>
            /// <param name="preventDestroy" type="Boolean">optional: if true the destroy function will not be called</param>
            if (level) {
                for (var index = this.stack.length - 1; index >= 0; index--) {
                    var action = this.stack[index];
                    if (action.level === level) {
                        if (!preventDestroy) {
                            if (action.caller)
                                $.proxy(action.destroyAction, action.caller);
                            else
                                action.destroyAction();
                        }
                        this.stack.splice(index, 1);
                    }
                }
            } else {
                this.stack = [];
            }
        },

        registerQtip: function (createAction, destroyAction, caller) {
            /// <summary>Level I: registeres a bubble or tooltip for the action stack</summary>
            /// <param name="createAction" type="Method">the delegate to create the action. May be null if action for creating must be called on caller</param>
            /// <param name="destroyAction" type="Method">the delegate to destroy the action</param>
            /// <param name="caller" type="Object">optional: the caller of this registration when explicit context is needed. NOTE: the actions need to be members of caller if set</param>
            this._registerAction(undefined, 1, createAction, destroyAction, undefined, caller);
        },
        registerWidgetState: function (createAction, destroyAction, confirmAction, caller) {
            /// <summary>Level I: registeres a widget state (edit state, merge, ..) for the action stack</summary>
            /// <param name="createAction" type="Method">the delegate to create the action. May be null if action for creating must be called on caller</param>
            /// <param name="destroyAction" type="Method">the delegate to destroy the action</param>
            /// <param name="caller" type="Object">optional: the caller of this registration when explicit context is needed. NOTE: the actions need to be members of caller if set</param>
            this._registerAction(undefined, 1, createAction, destroyAction, confirmAction, caller);
        },
        registerComponentState: function (name, createAction, destroyAction, confirmAction, caller) {
            /// <summary>Level I: registeres a widget state (edit state, merge, ..) for the action stack</summary>
            /// <param name="name" type="String">the name, the action will be registered with, if provided, action stack makes sure, that only one instance of this action is registered</param>
            /// <param name="createAction" type="Method">the delegate to create the action. May be null if action for creating must be called on caller</param>
            /// <param name="destroyAction" type="Method">the delegate to destroy the action</param>
            /// <param name="caller" type="Object">optional: the caller of this registration when explicit context is needed. NOTE: the actions need to be members of caller if set</param>
            this._registerAction(undefined, 1, createAction, destroyAction, confirmAction, caller);
        },
        registerModalDialog: function (name, createAction, destroyAction, confirmAction, caller) {
            /// <summary>Level II: registeres a modal dialog for the action stack</summary>
            /// <param name="name" type="String">the name, the action will be registered with, if provided, action stack makes sure, that only one instance of this action is registered</param>
            /// <param name="createAction" type="Method">the delegate to create the action. May be null if action for creating must be called on caller</param>
            /// <param name="destroyAction" type="Method">the delegate to destroy the action</param>
            /// <param name="caller" type="Object">optional: the caller of this registration when explicit context is needed. NOTE: the actions need to be members of caller if set</param>
            this._registerAction(name, 2, createAction, destroyAction, confirmAction, caller);
        },
        registerBackgroundAction: function (createAction, destroyAction, caller) {
            /// <summary>Level III: registeres a background worker action for the action stack</summary>
            /// <param name="createAction" type="Method">the delegate to create the action. May be null if action for creating must be called on caller</param>
            /// <param name="destroyAction" type="Method">the delegate to destroy the action</param>
            /// <param name="caller" type="Object">optional: the caller of this registration when explicit context is needed. NOTE: the actions need to be members of caller if set</param>
            this._registerAction(undefined, 3, createAction, destroyAction, undefined, caller);
        },
        unregisterAction: function (name) {
            /// <summary>unregisters an action with given name. the destroy action will not be called</summary>
            /// <param name="name" type="String">the name, the action was registered with</param>
            if (this.registeredActions[name] !== undefined) {
                var registeredIndex = this.registeredActions[name];
                for (var i = this.stack.length - 1; i >= 0; i--) {
                    var action = this.stack[i];
                    // clear the action if it matches and exit the loop
                    if (i === registeredIndex) {
                        this.stack.splice(i, 1);
                        break;
                    }
                    var registeredAction = this.stack[registeredIndex];
                    // when the registered action is level two clear the newer level 1 action
                    if (registeredAction && registeredAction.level === 2 && action.level === 1)
                        this._destroyAction(action);
                        
                    this.stack.splice(action, 1);
                }
                this.registeredActions[name] = undefined;
            }
        }
    };

    actionStack.init();
    return actionStack;
})