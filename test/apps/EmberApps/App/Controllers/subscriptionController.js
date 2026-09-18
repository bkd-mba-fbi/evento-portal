define([
    'ember'
], function (ember) {
    ClxApp.SubscriptionController = ember.Controller.extend({
        actions: {
            editCurrent: function() {
                var that = this;
                this.set('isWorking', true);
                this.send('openWorkProgressForEdit', this.get('model.Subscription.CurrentWorkProgressId'));
                setTimeout(function () {
                    that.set('isWorking', false);
                },
                                    2000);
            },
            openWorkProgress: function (idProgress) {
                this.send('openWorkProgressForEdit', idProgress);
            }
        }
    });
});