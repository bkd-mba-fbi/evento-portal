define([
    'api',
    'framework',
    'settings',
    'translate',
    'uiSettings',
    'eventoWidgets'
], function (api, framework, settings, translate, uiSettings) {
    ClxApp.SubscriptionNewView = framework.WidgetView.extend({
        classNames: ['subscriptionNew'],

        loadWidgets: function () {
            var that = this;

            setTimeout(function() {
                    $('#eventoSearchEvent')
                        .eventosearch({
                            dataClassId: 'anlass',
                            designation: settings.eventSearchDefinition,
                            showToolbar: false,
                            usePdfButton: false,
                            calculateHeight: true,
                            useMaxHeight: true,
                            includeAbsoluteElementsForCalculation: '.textButton',
                            searchImmediately: true,
                            showInputs: true,
                            noDataText: translate.getString('ONLA_noEventsFound'),

                            rowChosen: function (id, dataClassId, selectedRow) {
                                var designation = selectedRow.children('td').eq(0).text();
                                that.get('controller').send('eventChosen', id, designation);
                            },
                            dataLoaded: function () {
                                var selectedId = that.get('controller.model.SelectedIdEvent');
                                if (selectedId)
                                    $('#eventoSearchEvent').eventosearch('selectRow', selectedId, true);
                            }
                        });
                },
                100);
        }
    });
});


