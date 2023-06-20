define([
    'jquery',
    'ember',
    'application',
    'guiHelpers',
    'settings',
    'icons',
    'translate',
    'api'
], function ($, ember, app, guiHelpers, settings, icons, translate, api) {
    app.CrystalReportChooserComponent = ember.Component.extend({
        tagName: 'button',
        type: 'button',
        attributeBindings: ['type'],

        didInsertElement: function () {
            var reportInfo;
            var element = this.$();
            var keys = this.get('keys');
            element.append(icons.pdf);
            var context = this.get('context').toLowerCase();
            if (settings.reports !== undefined) {
                var reports = settings.reports[context];
                if (reports) {
                    api.getAvailableCrystalReports(context, reports, keys, function (result) {
                        reportInfo = result;

                        if (reportInfo === undefined)
                            return;

                        guiHelpers.addContextMenuToButton(element, function (contextMenu) {
                            $.each(reportInfo, function () {
                                var link = guiHelpers.getLinkNewWindow(
                                    api.getCrystalReportUrl(context, this.Id, keys),
                                    this.Title);
                                contextMenu.append(link);
                            });
                        }, true, 'Ctrl+Shift+P', translate.getString('noReports'));
                    });
                }
            }
        }
    });
});