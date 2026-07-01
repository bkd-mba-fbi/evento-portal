define([
    'jquery',
    'ember',
    'application',
    'storage',
    'settings',
    'keyboard',
    'guiHelpers',
    'icons',
    'api',
    'translate',
    'actionStack',
    'components/overlayDialogComponent',
    'eventoWidgets'
], function ($, ember, app, storage, settings, keyboard, guiHelpers, icons, api, translate, actionStack) {
    app.DetailDialogComponent = app.OverlayDialogComponent.extend({
        layoutName: 'components/overlay-dialog',
        classNames: ['detailDialog'],

        actions: {
            transitionTab: function (context, params) {
                // no idea why but some #each helpers have the context of the component when calling an action
                // that's why we need to hand them over to the controller again..
                this.sendAction('transitionTab', context, params);
            }
        },

        didInsertElement: function () {
            this._super();
            this.validateProperties();

            var that = this;
            var element = this.$();
            var searchListSelector = this.get('searchListSelector');
            var pdfButton = this.get('addPDFButton');
            var dataClassId = this.get('dataClassId').toLowerCase();
            var dataKey = this.get('dataKey');

            ember.run.scheduleOnce('afterRender', function () {

                var pictureDiv = $('.dialogIcon');

                var icon = $(icons[dataClassId]);
                // add the icon already and remove it when the image can load
                pictureDiv.append(icon);

                if (dataClassId === 'person')
                    that.setPersonPicture(pictureDiv, icon, dataKey);

                that.set('tabs', element.find('.' + guiHelpers.classes.dialog.tab));
                that.set('tabContainer', element.find('.' + guiHelpers.classes.dialog.tabContainer));
                that.set('quickTabChoice', element.find('.' + guiHelpers.classes.dialog.quickTabsChoice));
                that.set('sectionTitle', element.find('.' + guiHelpers.classes.dialog.sectionTitle));
                that.set('dataTitle', element.find('.' + guiHelpers.classes.dialog.title));

                that.initHistory();
                that.formatTabBar();
                that.addBackButton();
                if (pdfButton)
                    that.appendPDFButton();

                if (searchListSelector !== undefined)
                    that.addButtonsFromSearch($(searchListSelector));

                that.registerShortcuts();
                that.selectDefaultTab();

                that.calculateDataTitleSize();
            });
        },

        setPersonPicture: function(pictureDiv, icon, dataKey) {
            // just add an img with the url and replace it with the icon if there is an error on load
            var image = $('<img>');
            image.attr('src', api.getPersonPictureUrl(dataKey));
            // hide image as long as it is not loaded
            image.hide();
            guiHelpers.setContextMenuZIndex(image);
            image.attr('alt', this.get('controller.model.Title'));
            image.error(function() {
                    $(this).remove();
                })
                .click(function() {
                    guiHelpers.animatePictureFullsize(image, true);
                })
                .load(function() {
                    image.show();
                    icon.remove();
                });
            image.appendTo(pictureDiv);
            keyboard.registerShortcut('Ctrl+I', image);
        },

        validateProperties: function () {
            if (!this.get('dataClassId') || !this.get('dataKey'))
                console.error('"context" and "dataKey" properties must be set on detail-dialog');
        },

        formatTabBar: function () {
            var that = this;
            var quickWidth = this.get('quickTabChoice').outerWidth();
            this.get('tabContainer').css({
                // add 1px to quickWidth because all the sizes are or might be in rem. that could lead to rounding issues and quickTabChoice will be to large to fit the bar
                'width': 'calc(100% - ' + (quickWidth + 1) + 'px'
            });

            var tabs = this.get('tabs');
            var tabWidth = 100 / tabs.length;
            tabs.each(function () {
                var tab1 = $(this);
                tab1.css('width', tabWidth + '%')
                    .parent().click(function () {

                        // clear level 1 actions
                        actionStack.clear(1);

                        storage.dialogSettings.currentTabId(tab1.attr('id'));

                        // handle dataTypeName for section title (before -)
                        var sectionTitle = that.get('sectionTitle');
                        var sectionTitleText = sectionTitle.text();
                        var indexOfDash = sectionTitleText.indexOf(' - ');
                        if (indexOfDash > 0)
                            sectionTitleText = sectionTitleText.substring(0, indexOfDash);

                        sectionTitle.text(sectionTitleText + ' - ' + tab1.attr('title'));
                    });
            });
        },

        initHistory: function () {
            var newHistory = storage.dialogHistory();
            if (!newHistory)
                newHistory = [];
            newHistory.push({
                title: this.get('dataTitle').text(),
                context: this.get('dataClassId'),
                dataKey: this.get('dataKey')
            });
            storage.dialogHistory(newHistory);
        },

        appendPDFButton: function () {
            var that = this;
            var context = this.get('dataClassId');
            var crInfos = {};
            // if there are reports add them to the report button
            if (settings.reports !== undefined) {
                var reports = settings.reports[context.toLowerCase()];
                if (reports) {
                    api.getAvailableCrystalReports(context,
                        reports,
                        '',
                        function (result) {
                            crInfos = result;
                        });
                }
            }
            // append pdf button
            var pdfButton = guiHelpers
                .getButton(icons.pdf, 'btnPdf')
                .appendTo(this.$().find('.buttonContainer'));

            guiHelpers.addContextMenuToButton(pdfButton,
                function(contextMenu) {
                    if (crInfos === undefined)
                        return;
                    $.each(crInfos,
                        function() {
                            var link = guiHelpers.getLinkNewWindow(
                                api.getCrystalReportUrl(that.get('dataClassId'), this.Id, that.get('dataKey')),
                                this.Title);
                            contextMenu.append(link);
                        });
                },
                true,
                'Ctrl+Shift+P',
                translate.getString('noReports'));

        },

        addBackButton: function () {
            var that = this;
            var backButton = guiHelpers.getButton(icons.back, 'btnBack');
            var history = storage.dialogHistory();
            if (history && history.length > 0) {
                backButton.appendTo(this.$().find('.buttonContainer'));
                guiHelpers.addContextMenuToButton(backButton, function (contextMenu) {
                    $.each(history, function (histIndex, hist) {
                        var div = guiHelpers.getDiv(undefined, hist.title);
                        div.click(function () {
                                // remove from history until selected
                                history.splice(histIndex, history.length - histIndex);
                                storage.dialogHistory(history);
                                // invoke back clicked
                                that.sendAction('back', hist.context, hist.dataKey);
                            })
                            .appendTo(contextMenu);
                    });
                }, true);
            }
        },

        addButtonsFromSearch: function (searchList) {
            var buttonContainer = this.$().find('.buttonContainer');
            try {
                buttonContainer.append(searchList.eventosearch('getButtonUp'));
                buttonContainer.append(searchList.eventosearch('getButtonDown'));
            } catch (ex) {
                // only happens when button cannot be added
                console.error('error setting up / down buttons: ' + ex);
            }
        },

        registerShortcuts: function () {
            var that = this;
            keyboard.registerShortcut('Ctrl+T', null, function () {
                that.get('quickTabChoice').click();
            });
            keyboard.registerShortcut('Ctrl+Right', null, function () {
                that.get('tabContainer').find('a.active').next().click();
            });
            keyboard.registerShortcut('Ctrl+Left', null, function () {
                that.get('tabContainer').find('a.active').prev().click();
            });
        },

        selectDefaultTab: function () {
            // select first or last selected tab if nothing selected
            var tabContainer = this.get('tabContainer');
            var active = tabContainer.find('a.active');
            if (active.length === 0) {
                var id = storage.dialogSettings.lastTabId();
                if (id) {
                    var tab = this.tabContainer.find('#' + id);
                    if (tab.length > 0)
                        tab.click();
                    else
                        tabContainer.children().eq(0).click();
                } else
                    tabContainer.children().eq(0).click();
                storage.dialogSettings.lastTabId('');
            } else {
                // click it anyway, because when refreshing or direct url call, it is not clicked..
                active.click();
            }
        },

        calculateDataTitleSize: function () {
            var buttonContainerWidth = this.$().find('.buttonContainer').outerWidth();
            var dataTitle = this.get('dataTitle');
            var pos = dataTitle.position();
            var titleLeft = pos ? pos.left : 0;
            var headerPadding = dataTitle.parent().outerWidth() - dataTitle.parent().width();
            dataTitle.css('width', 'calc(100% - ' + (buttonContainerWidth + titleLeft + headerPadding) + 'px)');
        }
    });
});