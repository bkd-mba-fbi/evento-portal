define([
    'jquery',
    'ember'
], function ($, ember) {
    ClxApp.AddressLabelComponent = ember.Component.extend({
        tagName: 'pre',
        classNames: ['address'],

        didInsertElement: function () {
            this.$().text(this.getText());
        },

        getText: function() {
            var address = this.get('address');
            var text = '';
            if (address.Company) {
                text += address.Company;
                text += '\r\n';
            }
            if (address.Department) {
                text += address.Department;
                text += '\r\n';
            }
            text += address.FormOfAddress + ' ' + (address.FirstName ? address.FirstName + ' ': '') + address.LastName;
            text += '\r\n';
            text += address.AddressLine1;
            text += '\r\n';
            if (address.AddressLine2) {
                text += address.AddressLine2;
                text += '\r\n';
            }
            text += address.Zip + ' ' + address.Location;
            text += '\r\n';
            text += address.Country;

            return text;
        }
    });
});