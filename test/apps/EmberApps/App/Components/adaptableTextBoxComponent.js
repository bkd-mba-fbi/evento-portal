define([
    'application',
    'jquery',
    'ember',
    'guiHelpers'
],
    function(app, $, ember, guiHelpers) {
        app.AdaptableTextBoxComponent = ember.Component.extend($.extend({},
            guiHelpers.adaptableTextBoxComponentLogic,
            {
                tagName: 'div',
                classNames: ['textBox'],
                didInsertElement: function() {
                    var element = this.$();
                    this.initializeInputControl(element);
                },
                updateControlModel: function(value) {
                    this.set('value', (value || '').trim());
                }
            }
        ));
    });