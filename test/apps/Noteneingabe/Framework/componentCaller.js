define(['jquery', 'ember'], function ($, ember) {
    return {
        openOverlayDialog: function (callingComponent, hideFooter, contentDelegate, headerDelegate) {
            var overlayDialog = ClxApp.OverlayDialogComponent.create({
                renderer: callingComponent.renderer
            });
            ember.setOwner(overlayDialog, ember.getOwner(callingComponent));
            overlayDialog.appendTo('body');
            overlayDialog.set('hideFooter', hideFooter);
            overlayDialog.set('autoCloseDialog', true);
            overlayDialog.set('closeOnOverlayClick', true);
            var dialogBody = $('<div class="dialogBody">');

            ember.run.scheduleOnce('afterRender', function () {
                var element = $(overlayDialog.element);
                element.find('#btnClose').click(function () {
                    overlayDialog.closeDialog();
                });
                element.find('.dialogHeader').after(dialogBody);
                contentDelegate(dialogBody);
                var dialogHeader = element.find('.dialogHeader');
                headerDelegate(dialogHeader);
            });
        }
    };
})