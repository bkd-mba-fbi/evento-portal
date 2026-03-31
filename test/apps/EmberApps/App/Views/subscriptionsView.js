define([
    'api',
    'framework',
    'settings',
    'storage',
    'uiSettings',
    'eventoWidgets'
], function (api, framework, settings, storage, uiSettings) {
    ClxApp.SubscriptionsView = framework.WidgetView.extend({
        loadWidgetsRepeat: function () {
        },

        loadWidgets: function () {
            var that = this;

            setTimeout(function() {
                    $('#eventoSearch')
                        .eventosearch({
                            dataClassId: 'personenanmeldung',
                            designation: settings.subscriptionsSearchDefinition,
                            showToolbar: false,
                            usePdfButton: false,
                            calculateHeight: false,
                            searchImmediately: true,
                            showInputs: false,
                            isMultiline: true,

                            rowChosen: function (id, dataClassId, selectedRow) {
                                var designation = selectedRow.children('td').eq(0).text();
                                var selectedEventDesignation = storage.selectedEventDesignation();
                                // if the subscription is already selected, don't transition. rowChosen will be called because of dataLoaded below, 
                                // even when the user did not select manually
                                if (!selectedEventDesignation || selectedEventDesignation !== designation) {
                                    that.get('controller').send('subscriptionSelected', designation, id);
                                }
                            },
                            noDataFound: function() {
                                that.get('controller').send('noDataFound');
                            },
                            onError: function () {
                                that.get('controller').send('noDataFound');
                            },
                            dataLoaded: function () {
                                // chose row if id selected id subscription is set, because that means a browser refresh or bookmark entry
                                // in that case the row is not selected by the user
                                var selectedId = storage.selectedIdSubscription();
                                if (selectedId)
                                    $('#eventoSearch').eventosearch('selectRow', selectedId, true);
                            }
                        });
                },
                100);
        },

        searchMustReload: function () {
            $('#eventoSearch').eventosearch('triggerSearch');
        }.observes('controller.model')
    });
});


