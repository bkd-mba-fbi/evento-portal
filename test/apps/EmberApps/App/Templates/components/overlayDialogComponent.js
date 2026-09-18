define(['ember', 'text!htmlTemplates/components/overlayDialogComponent.html'], function (ember, overlayDialogComponent) {
    ember.TEMPLATES['components/overlay-dialog'] = ember.Handlebars.compile(overlayDialogComponent);
});