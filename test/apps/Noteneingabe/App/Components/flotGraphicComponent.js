define([
    'jquery',
    'ember',
    'flotHelpers',
    'componentCaller',
    'guiHelpers'
], function ($, ember, flotHelpers, componentCaller, guiHelpers) {
    ClxApp.FlotGraphicComponent = ember.Component.extend({
        classNames: ['flotThumb'],

        didInsertElement: function () {
            var element = this.$();
            var that = this;
            ember.run.scheduleOnce('afterRender',
                function() {
                    that.createPlot(element, that.get('legendSelector'));

                    element
                        .css('cursor', 'pointer')
                        .click(function() {
                            var overlayContainer;
                            if (!that.get('clickable')) return;
                            componentCaller.openOverlayDialog(that,
                                true,
                                function (dialogBody) {
                                    dialogBody.css('height', '100%');
                                    overlayContainer = guiHelpers.getDiv(guiHelpers.classes.flot.flotFull)
                                        .appendTo(dialogBody);
                                },
                                function(header) {
                                    header.append(guiHelpers.getDiv(guiHelpers.classes.flot.flotLegend)
                                        .attr('id', 'flot-legend-overlay'));

                                    that.createPlot(overlayContainer, '#flot-legend-overlay');
                                });
                        });
                });
        },

        createPlot: function(container, legendSelector) {
            flotHelpers.createPlot(container,
                this.get('series'),
                this.get('ticks'),
                $(legendSelector),
                this.get('xAxisLabel'),
                this.get('yAxisLabel'));
        }
    });
});