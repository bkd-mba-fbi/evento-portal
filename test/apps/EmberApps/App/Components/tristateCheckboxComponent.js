define([
    'ember'
], function (ember) {
    ClxApp.TristateCheckboxComponent = ember.Checkbox.extend({
        attributeBindings: ['disabled'],
        didInsertElement: function () {
            if (this.get('currentValue')) {
                if (this.get('currentValue') === this.get('checkedValue')) {
                    this.$().prop('checked', true);
                } else if (this.get('currentValue') === this.get('uncheckedValue')) {
                    this.$().prop('checked', false);
                }
            } else
                this.$().prop('indeterminate', true);

        },
        change: function () {
            this.$().prop('indeterminate', false);
            var checked = this.$().is(':checked');
            if (this.get('checkedValue')) {
                if (!this.get('uncheckedValue'))
                    console.error('When providing checkedValue, uncheckedValue must be set as well.');
                if (checked)
                    this.set('currentValue', this.get('checkedValue'));
                else
                    this.set('currentValue', this.get('uncheckedValue'));
            }
        }
    });
});