define([
        'maskedinput',
        'ember',
        'application'
    ],
    function($, ember, app) {
        app.MaskedTextboxComponent = ember.TextField.extend({
            didInsertElement: function() {
                var that = this;

                if (this.get('mask')) {
                    this.set('completedValue', this.get('value'));
                    this.set('maskValue', this.get('mask'));
                    ember.run.scheduleOnce('afterRender',
                        function() {
                            that.$().on('blur',
                                function() {
                                    setTimeout(function() {
                                            that.set('value', that.$().val());
                                        },
                                        10);
                                });
                            that.$().mask(that.get('mask'),
                                {
                                    placeholder: that.get('placeholder')
                                }
                            );
                        });
                } else {
                    console.warn('mask is empty on masked-textbox');
                }
            }
        });
    });
