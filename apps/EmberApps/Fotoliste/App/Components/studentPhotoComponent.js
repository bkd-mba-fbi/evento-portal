define([
    'ember',
    'application',
    'api',
    'jquery',
    'App/Templates/Components/studentPhotoComponent'
], function (ember, app, api, $) {
    app.StudentPhotoComponent = ember.Component.extend({
        didInsertElement: function () {
            // show a placeholder image when the image fails to load
            this.$('img').on('error', function (event) {
                $(event.target).attr('src', require.toUrl('../images/Custom/avatar-placeholder.png'));
            });
        },

        willDestroyElement: function () {
            // remove the eventListener
            this.$('img').off('error');
        }
    });
});