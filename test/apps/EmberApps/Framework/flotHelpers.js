define(['uiSettings', 'guiHelpers', 'translate', 'flot', 'flot.symbol'], function (uiSettings, guiHelpers, translate) {
    var flotHelpers = {
        getBarSerie: function (order, data, color, label) {
            /// <summary>Returns serie data for flot chart</summary>
            /// <param name="order" type="Number">the order of the serie in a chart</param>
            /// <param name="data" type="Object">the sorted data for the chart</param>
            /// <param name="color" type="String">color of the bars in this serie</param>
            /// <param name="label" type="String">the label text of this serie</param>
            return {
                data: data,
                color: color !== undefined? color: uiSettings.flotSettings.colors['color' + order],
                bars: { show: true },
                label: label
            };
        },
        getOptions: function (ticks, legendContainer) {
            /// <summary>Returns the options for a flot chart</summary>
            /// <param name="ticks" type="Object">the ticks of the x-axis</param>
            return {
                series: {
                    bars: {
                        show: true
                    }
                },
                bars: {
                    align: 'center',
                    barWidth: 0.5
                },
                xaxis: {
                    axisLabelUseCanvas: false,
                    tickLength: uiSettings.flotSettings.showGridlines ? undefined : 0,
                    ticks: ticks
                },
                yaxis: {
                    axisLabelUseCanvas: false,
                    tickLength: uiSettings.flotSettings.showGridlines ? undefined : 0,
                    tickFormatter: function(v, axis) {
                        return '';
                    }
                },
                legend: {
                    noColumns: 2,
                    labelBoxBorderColor: uiSettings.flotSettings.borderColor,
                    container: legendContainer
                },
                grid: {
                    hoverable: uiSettings.flotSettings.barsHoverable,
                    borderWidth: 1,
                    borderColor: uiSettings.flotSettings.borderColor,
                    backgroundColor: { colors: ['#ffffff', '#ffffff'] }
                }
            };
        },
        setPointLabels: function (jqueryElement, plot, spacing, seriesCount) {
            for (var serie = 0; serie < seriesCount; serie++) {
                $.each(plot.getData()[serie].data, function (i, el) {
                    var textHeight = guiHelpers.calcTextHeight(el[1].toString());
                    var textWidth = guiHelpers.calcTextWidth(el[1].toString());
                    var o = plot.pointOffset({ x: el[0], y: el[1] });
                    guiHelpers.getDiv(guiHelpers.classes.flot.flotPointLabel, el[1])
                    .css({
                        position: 'absolute',
                        left: o.left - textWidth / 2,
                        top: (o.top - textHeight - (2 * spacing) >= 0) ? o.top - textHeight - spacing : o.top + spacing
                    })
                    .appendTo(plot.getPlaceholder());
                });
            }
        },

        setAxisLabels: function (jqueryElement, xAxisText, yAxisText) {
            var xAxisLabel = guiHelpers.getDiv('axisLabel xaxisLabel', xAxisText)
                .appendTo(jqueryElement);
            xAxisLabel.css('margin-left', -xAxisLabel.width() / 2);

            var yAxisLabel = guiHelpers.getDiv('axisLabel yaxisLabel', yAxisText)
                .appendTo(jqueryElement);
            yAxisLabel.css('margin-top', yAxisLabel.height() / 2);
        },

        createPlot: function (jqueryElement, seriesData, ticks, legendContainer, xAxisLabelText, yAxisLabelText) {
            var element = jqueryElement
                .addClass(guiHelpers.classes.flot.flotContainer);

            var plot = $.plot(element, seriesData, this.getOptions(ticks, legendContainer));
            this.setPointLabels(element, plot, 4, seriesData.length);
            this.setAxisLabels(element, xAxisLabelText, yAxisLabelText);
        }
    };

    return flotHelpers;
});