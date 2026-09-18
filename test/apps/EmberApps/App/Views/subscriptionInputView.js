define([
    'framework',
    'guiHelpers',
    'keyboard'
], function (framework, guiHelpers, keyboard) {
    ClxApp.SubscriptionInputView = framework.OverlayView.extend({
        usePrintButton: false,
        dragHandle: '.flexDialogHeader',

        hasBeenInvalidated: function () {
            var invalidated = this.get('controller.invalidated');
            if (invalidated && this.$())
                this.$().find('.validationError').addClass('showError');
        }.observes('controller.invalidated'),

        destroyWidgetsRepeat: function () {
            // HACK: this is the only way to do it at the moment. There is a search-Widget in the background listening to those events -> reregister here (on close)
            $('#eventoSearch').eventosearch('refreshAfterDialogClosed');
        },

        loadWidgetsRepeat: function() {
            this._super();

            // HACK: this is the only way to do it at the moment. There is a search-Widget in the background listening to those events
            keyboard.unregisterShortcuts('Up');
            keyboard.unregisterShortcuts('Down');
            // unfortunately when reloading the page the search will be loaded later...
            setTimeout(function() { 
                keyboard.unregisterShortcuts('Up');
                keyboard.unregisterShortcuts('Down');
            }, 1000);

            var selectedWorkProgress = this.get('model.SelectedWorkProgress');
            if (selectedWorkProgress) {
                guiHelpers.addContextMenuToButton(this.$().find('#infoButton'),
                    function (contextMenu) {
                        contextMenu.text(selectedWorkProgress.Note);
                    });
            }
        },

        baseTransition: function () {
            // here transition back to subscription
            this.get('controller').send('closeRoute');
        }
    });
});


