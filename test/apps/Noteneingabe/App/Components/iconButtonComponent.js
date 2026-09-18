define([
    'jquery',
    'ember',
    'application',
    'icons',
    'keyboard'
], function ($, ember, app, icons, keyboard) {
    app.IconButtonComponent = ember.Component.extend({
        tagName: 'button',
        type: 'button',

        attributeBindings: ['title', 'type', 'disabled'],

        didInsertElement: function() {
            if (this.get('icon') !== undefined)
                this.$().html(icons[this.get('icon')]);

            if (this.get('shortcut') !== undefined)
                keyboard.registerShortcut(this.get('shortcut'), this.$());
        },

        click: function () {
            if (!this.get('isWorking')) {
                this.sendAction();
            }
        },

        isWorkingChanged: ember.observer('isWorking',
            function() {
                if (this.get('isWorking'))
                    this.$().html(icons.loadingAnimation);
                else
                    this.$().html(icons[this.get('icon')]);
            })
    });
});