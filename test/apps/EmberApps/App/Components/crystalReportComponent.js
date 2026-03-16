define([
    'ember',
    'api',
    'guiHelpers',
    'icons'
], function (ember, api, guiHelpers, icons) {
    ClxApp.CrystalReportComponent = ember.Component.extend({
        tagName: 'a',
        attributeBindings: ['target'],

        didInsertElement: function() {
            var that = this;
            var reportContext = this.get('reportContext');
            var reportId = this.get('reportId');
            var dataKey = this.get('dataKey');
            var caption = this.get('caption');
            
            api.getAvailableCrystalReports(reportContext, [reportId], [dataKey], function (result) {
                if (result && result.length > 0 && (!that.get('storedPdf') || result[0].AllowedKeys.indexOf(dataKey) > -1)) {
                    that.$()
                        .addClass(guiHelpers.classes.report.pdfReport)
                        .addClass(guiHelpers.classes.dialog.textIcon)
                        .attr('href', '#/reports/' + reportContext + '/' + result[0].Id + '/' + dataKey)
                        .html(icons.pdf + (caption ? caption : result[0].Title));
                }
            });
        }
    });
});