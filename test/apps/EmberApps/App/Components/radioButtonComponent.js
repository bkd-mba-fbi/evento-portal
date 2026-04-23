define([
        'jquery',
        'ember'
    ],
    function($, ember) {
        ClxApp.RadioButtonComponent = ember.Component.extend({
            tagName: 'input',
            type: 'radio',
            attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

            htmlChecked: ember.computed('value',
                'checkedValue', {
                    get: function() {
                        var ret = this.get('value') === this.get('checkedValue');
                        this.set('previousChecked', ret);
                        return ret;
                    }
                }),

            change: function() {
                this.set('checkedValue', this.get('value'));
            },

            _updateElementValue: ember.on('init',
                ember.observer('htmlChecked',
                    function() {
                        Ember.run.next(this,
                            function() {
                                if (this.$())
                                    this.$().prop('checked', this.get('htmlChecked'));
                            });
                    }))
        });
    });