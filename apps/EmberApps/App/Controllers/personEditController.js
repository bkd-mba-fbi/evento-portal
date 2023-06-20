define([
    'ember',
    'api',
    'framework',
    'constants',
    'guiHelpers',
    'eventoHelpers',
    'requiredFieldHelpers'
], function (ember, api, framework, constants, guiHelpers, eventoHelpers, requiredFieldHelpers) {
    ClxApp.PersonEditController = framework.ValidatedController.extend({
        mainModel: 'model.person',
        init: function() {
            this._super();
        },
        actions: {
            save: function () {
                this.set('isWorking', true);
                this.beforeSave();
                var that = this;
                this.validate(function() {
                        api.updatePerson(that.get('model.person'),
                            function () {
                                that.set('isWorking', false);
                                that.send('closeEdit');
                            },
                            function () {
                                that.set('isWorking', false);
                                return true;
                            });
                    },
                    function (error) {
                        that.set('isWorking', false);
                    });

            },
            cancel: function () {
                this.set('isWorking', false);
                this.transitionToRoute('personOverview');
                var route = this.container.lookup('route:personOverview');
                if (route)
                    route.refresh();
            }
        },

        allDisabled: function() {
            return !this.get('model.person.IsEditable');
        }.property('model.person.IsEditable'),

        isSwiss: function() {
            return eventoHelpers.person.isSwiss(this.get('model.person'));
        }.property('model.person.Nationality_IDLFS'),
        
        natOrCountryChanged: function () {
            requiredFieldHelpers.setPersonRequiredFields(this.get('model.person'));
        }.observes('model.person.Nationality_IDLFS', 'model.person.HomeCountry_IDLFS'),

        homeCountry: function (key, value) {
            if (value === undefined)
                return this.get('model.person.HomeCountry_IDLFS');
            else if (value === '')
                this.set('model.person.HomeCountry_IDLFS', null);
            else
                this.set('model.person.HomeCountry_IDLFS', parseInt(value));
        }.property('model.person.HomeCountry_IDLFS'),

        nationality: function (key, value) {
            if (value === undefined)
                return this.get('model.person.Nationality_IDLFS');
            else if (value === '') {
                return undefined;
            } else {
                this.set('model.person.Nationality_IDLFS', parseInt(value));
                var nats = this.get('model.nationalities');
                var nat = $.grep(nats,
                    function(f) {
                        return f.Key === parseInt(value);
                    });
                if (nat[0])
                    this.set('model.person.Nationality', nat[0].Value);
            }
        }.property('model.person.Nationalities_IDLFS'),

        modelChanged: function () {
            this.setProperties({
                'enableSave': true
            });
        },

        formOfAddress: function (key, value) {
            if (value === undefined)
                return this.get('model.person.FormOfAddress_Id');
            else {
                this.set('model.person.FormOfAddress_Id', value);
                var forms = this.get('model.formsOfAddress');
                var form = $.grep(forms,
                    function(f) {
                        return f.Key === parseInt(value);
                    });
                if (form[0])
                    this.set('model.person.FormOfAddress', form[0].Value);
            }
        }.property('model.person.FormOfAddress_Id'),

        isPersonComplete: function() {
            return eventoHelpers.person.isComplete(this.get('model.person'));
        }.property('isPersonComplete', 'model.person'),

        stayPermitChanged: function () {
            if (!eventoHelpers.person.hasStayPermit(this.get('model.person')) && this.get('model.person.IsEditable'))
                this.set('model.person.StayPermitExpiry', null);
            requiredFieldHelpers.setPersonRequiredFields(this.get('model.person'));
        }.observes('model.person.StayPermit'),

        hasStayPermit: function () {
            return eventoHelpers.person.hasStayPermit(this.get('model.person'));
        }.property('model.person.StayPermit')

    });
});