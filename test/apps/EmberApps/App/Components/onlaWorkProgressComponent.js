define([
    'ember',
    'icons',
    'eventoHelpers',
    'templates/components/onlaWorkProgressComponent'
], function (ember, icons, eventoHelpers) {
    ClxApp.OnlaWorkProgressComponent = ember.Component.extend({
        tagName: '',

        actions: {
            toggleExpand: function () {
                var that = this;
                setTimeout(function () {
                    if (that.isPastOrCurrent() && !that.get('isWorking'))
                        that.toggleProperty('isExpanded');
                }, 10);
            },
            openForEdit: function () {
                var that = this;
                this.set('isWorking', true);
                this.sendAction('openForEdit', this.get('model.Id'));
                setTimeout(function () {
                    if (!that.get('isDestroyed') && !that.get('isDestroying'))
                        that.set('isWorking', false);
                }, 2000);
            }
        },

        sdGroups: function() {
            var result = this.get('sdGroups_save');
            if (result)
                return result;
            var groups = this.get('model.SubscriptionDetailGroups');
            if (!groups)
                return [];
            else {
                var allSDs = this.get('allSDs');
                var sdGroups = eventoHelpers.subscriptionDetails.getSubscriptionGroups(groups, allSDs);
                this.set('sdGroups_save', sdGroups);
                return sdGroups;
            }
        }.property('allSDs', 'model.SubscriptionDetailGroups'),

        collapseIconStyle: function () {
            var groups = this.isPastOrCurrent() ? this.get('sdGroups') : undefined;
            return ember.String.htmlSafe(!groups || groups.length === 0 ? 'visibility: hidden; cursor: default;' : '');
        }.property('subscriptionDetails'),

        collapseItemStyle: function() {
            return ember.String.htmlSafe(this.isPastOrCurrent() ? 'font-weight: bold;' : 'font-weight: bold; cursor: default;');
        }.property(),

        validationIcon: function () {
            if (!this.get('model.IsPast') && !this.get('model.IsCurrent'))
                return undefined;

            if (this.get('model.IsLast') && !this.get('model.InputAllowed'))
                return icons.checkmark;

            if (this.get('model.Id') === this.get('currentProgress')) {
                if (this.get('model.InputAllowed')) {
                    this.set('showEdit', true);
                    return undefined;
                }
                return icons.inProgress;
            }

            var groups = this.get('sdGroups');
            var isValid = this.get('model.IsPast');
            if (!isValid) 
                return undefined;

            var isSubsequent = false;
            var isError = false;
            
            if (groups.length > 0) {
                $.each(groups,
                    function () {
                        if (!this.validationStatus)
                            return true;

                        if (eventoHelpers.subscriptionDetails.isSubsequentStatus(this.validationStatus))
                            isSubsequent = true;
                        if (eventoHelpers.subscriptionDetails.isErrorStatus(this.validationStatus)) {
                            isError = true;
                            return false;
                        }
                        return true;
                    });
                isValid = !isSubsequent && !isError;
            }

            if (!isValid)
                this.set('showEdit', true);

            if (isValid) {
                return icons.checkmark;
            } else if (isSubsequent) {
                return icons.subsequent;
            } else if (isError)
                return icons.error;
            return undefined;
        }.property('allSDs'),

        isPastOrCurrent: function() {
            return this.get('model.IsPast') || this.get('model.IsCurrent');
        }
    });
});