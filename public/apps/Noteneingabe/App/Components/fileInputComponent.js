define([
    'ember'
], function (ember) {
    ClxApp.FileInputComponent = ember.TextField.extend({
        type: 'file',
        attributeBindings: ['accept'],

        didInsertElement: function() {
            if (this.get('autofocus'))
                this.$().focus();
        },

        change: function (e) {
            this.sendAction('action', e.target.files);
        }
    });
});