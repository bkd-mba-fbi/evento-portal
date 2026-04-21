define([
    'jquery',
    'ember',
    'application',
    'eventoWidgets'
], function ($, ember, app) {
    app.EventoSearchComponent = ember.Component.extend({

        didInsertElement: function () {
            var that = this;
            var element = this.$();

            var dataClassId = this.get('dataClassId');
            var designation = this.get('designation');
            var searchDefinition = this.get('searchDefinition');
            var showToolbar = this.get('showToolbar');
            if (showToolbar === undefined)
                showToolbar = true;
            var calculateHeight = this.get('calculateHeight');
            if (calculateHeight === undefined)
                calculateHeight = true;
            var isPrintMode = this.get('isPrintMode');
            var overlayTabindex = $('tr.dataRow').length + 100;
            var data = this.get('data');
            var pkColumns = this.get('pkColumns');
            var fixedHeight = undefined;
            if (this.get('fixHeightTo') !== undefined)
                fixedHeight = $(this.get('fixHeightTo')).height();

            if (fixedHeight)
                calculateHeight = false;

            ember.run.scheduleOnce('afterRender',
                function () {
                    element.eventosearch({
                        dataClassId: dataClassId,
                        calculateHeight: calculateHeight,
                        designation: designation,
                        searchDefinition: searchDefinition,
                        isPrintMode: isPrintMode,
                        usePrintButton: false,
                        overlayTabindex: overlayTabindex,
                        showToolbar: showToolbar,
                        data: data,
                        pkColumns: pkColumns,
                        isOfflineMode: data !== undefined,
                        fixedHeight: fixedHeight,
                        rowChosen: function (id, dcId) {
                            that.sendAction('rowChosen', id, dcId);
                        },
                        printModeCalled: function () {
                            that.sendAction('printModeCalled');
                        }
                    });
                });
        },

        anythingThatMattersChanged: ember.observer('dataClassId', 'designation', 'searchDefinition', 'data', function() {
            this.willDestroyElement();
            this.didInsertElement();
        }),

        willDestroyElement: function () {
            var element = this.$();

            ember.run.scheduleOnce('afterRender',
                function () {
                    element.eventosearch('destroy');
                });
        }
    });
});