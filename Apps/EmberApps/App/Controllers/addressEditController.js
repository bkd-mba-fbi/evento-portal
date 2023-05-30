define([
    'api',
    'framework',
    'translate'
], function (api, framework, translate) {
    ClxApp.AddressEditController = framework.ValidatedController.extend({
        init: function () {
            this._super();
            this.mainModel = 'model.address';
        },
        actions: {
            save: function () {
                this.set('isWorking', true);
                this.beforeSave();
                var that = this;
                this.validate(function () {

                    // set to correspondence on direct editing
                    if (that.get('model.addressType') === 'correspondenceDirect') {
                        that.set('model.address.IsCorrespondence', true);
                    }

                    api.updateAddress(that.get('model.address'), function () {
                        that.set('isWorking', false);
                        that.transitionToRoute('personOverview');
                        that.get('target.router').refresh();
                    },
                    function () {
                        that.set('isWorking', false);
                        return true;
                    });
                }, function (error) {
                    that.set('isWorking', false);
                });

            },
            cancel: function () {
                this.transitionToRoute('personOverview');
            }
        },

        nationality: function (key, value) {
            if (value === undefined)
                return this.get('model.address.Nationality_IDLFS');
            else if (value === '') {
                return undefined;
            } else {
                this.set('model.address.Nationality_IDLFS', parseInt(value));
                var nats = this.get('model.nationalities');
                var nat = $.grep(nats,
                    function (f) {
                        return f.Key === parseInt(value);
                    });
                if (nat[0])
                    this.set('model.address.Nationality', nat[0].Value);
            }
        }.property('model.address.Nationalities_IDLFS'),

        formOfAddress: function (key, value) {
            if (value === undefined)
                return this.get('model.address.FormOfAddress_Id');
            else {
                this.set('model.address.FormOfAddress_Id', value);
                var forms = this.get('model.formsOfAddress');
                var form = $.grep(forms,
                    function(f) {
                        return f.Key === parseInt(value);
                    });
                if (form[0])
                    this.set('model.address.FormOfAddress', form[0].Value);
            }
        }.property('model.address.FormOfAddress_Id'),

        title: function () {
            switch (this.get('model.addressType')) {
                case 'home':
                    return translate.getString('editHomeAddress');
                case 'correspondence':
                case 'correspondenceDirect':
                    return translate.getString('editCorrespondenceAddress');
                case 'billing':
                    return translate.getString('editBillingAddress');
            }
        }.property('content.address'),

        showCompany: function() {
            return this.get('model.addressType') !== 'home';
        }.property('model.addressType')
    });
});
