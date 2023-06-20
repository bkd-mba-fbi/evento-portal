define([
        'jquery',
        'ember'
    ],
    function($, ember) {
        ClxApp.RadioButtonComponent = ember.Component.extend({
            tagName: 'input',
            type: 'radio',
            attributeBindings: ['type', 'value', 'name', 'disabled'],
            checkedValue: undefined,

            _isSelected: ember.computed('value', 'checkedValue', function(){
                return String(this.get('value')) === String(this.get('checkedValue'));
            }),

            didInsertElement () {
                this._super();
                this.checkMeNext();
            },

            change: function() {
                this.set('checkedValue', this.get('value'));
            },

            checkMeNext() {
                ember.run.next(this, function() {
                    if (!this.$()) return;
                    this.$().prop('checked', this.get('_isSelected'));
                });
            }
        });
    });