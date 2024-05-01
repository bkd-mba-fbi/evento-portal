require([
    'jquery-ui',
    'ember',
    'framework',
    'storage',
    'api',
    'keyboard',
    'actionStack',
    'icons',
    'globalize',
    'settings',
    'uiSettings',
    'guiHelpers',
    'flotHelpers',
    'translate',
    'jstepper',
    'tristate'
], function ($, ember, framework, storage, api, keyboard, actionStack, icons, globalize, settings, uiSettings, guiHelpers, flotHelpers, translate) {

    /**** Evento Search ************************************
    *
    *   Widget for searching evento database
    *
    **************************************************************/
    $.widget('clx.eventosearch', {
        options: {
            dataClassId: '',
            designation: '',
            isPrintMode: false,
            isOfflineMode: false,
            usePrintButton: false,
            showToolbar: true,
            usePdfButton: true,
            calculateHeight: false,
            useMaxHeight: false,
            includeAbsoluteElementsForCalculation: undefined,
            overlayTabindex: 0, // when this table is an overlay of another table, use this as start tabindex for all
            fixedHeight: undefined,
            searchDefinition: undefined,
            data: undefined,
            dataPkColumns: [],
            searchImmediately: false,
            showInputs: true,
            noDataText: undefined,
            isMultiline: false,

            rowChosen: undefined,
            printModeCalled: undefined,
            noDataFound: undefined,
            onError: undefined,
            dataLoaded: undefined
        },

        // body rows start their tabindex after this value 
        // this means that there could be 99 colums before tabindex is messed up
        _startBodyTabindex: 100,

        selectNextRow: function () {
            // clear dialog history when changing data row
            storage.dialogHistory([]);
            // set last tab index for dialog
            var current = storage.dialogSettings.currentTabId();
            storage.dialogSettings.lastTabId(current);

            if (this._selectedRow) {
                var nextRow = $(this._selectedRow).next();
                if (nextRow.length > 0)
                    this._selectRow(nextRow, true);
            }
        },

        selectPrevRow: function () {
            // clear dialog history when changing data row
            storage.dialogHistory([]);
            // set last tab index for dialog
            var current = storage.dialogSettings.currentTabId();
            storage.dialogSettings.lastTabId(current);

            if (this._selectedRow) {
                var prevRow = $(this._selectedRow).prev();
                if (prevRow.length > 0)
                    this._selectRow(prevRow, true);
            }
        },

        getButtonUp: function () {
            return this._buttonUp;
        },

        getButtonDown: function () {
            return this._buttonDown;
        },

        resize: function (deltaX, deltaY) {
            if (deltaX !== 0) {
                this._resizeTableEvenly(deltaX);
                this._calculateActualWidths();
                this._setWidthToBodyCells();
            }
            this._bodyContainer.height(this._bodyContainer.height() + deltaY);
        },

        refreshAfterDialogClosed: function () {
            if (this._selectedRow !== undefined)
                this._selectedRow.focus();
            else if (this._lastFocusedHeaderInput !== undefined)
                this._lastFocusedHeaderInput.focus();
            else
                this._headerCells[0].find('input, select').focus();
            this._applyKeyboardControl();
        },

        selectRow: function (id, callChosen) {
            var row = $('tr[id="' + id + '"]');
            this._selectRow(row, callChosen);
        },

        triggerSearch: function() {
            this._triggerSearch();
        },

        _create: function () {
            /// <summary>Construction of an evento search</summary>
            /// <param name="dataClassId" type="Method">The type of object to search for (CLX.Evento NG DataClassId)</param>
            /// <param name="designation" type="Method">The designation of the search definition to use</param>
           
            // Properties
            this._searchDefinition = undefined;
            this._originalSearchFields = [];
            this._searchFields = [];
            this._searchFieldIds = [];
            this._dataKeys = []; // will be filled on each search or at beginning in offline mode
            this._searchResult = undefined;
            this._originalSearchResult = undefined;
            this._table = undefined;
            this._toolbar = guiHelpers.getDiv(guiHelpers.classes.search.toolbar);
            this._bodyContainer = undefined;
            this._mainTableHeight = 0;
            this._tableBody = undefined;
            this._headerCells = [];
            this._headerCellsOfBody = [];
            this._searchInputs = [];
            this._actualCellWidths = [];
            this._sortDirections = [];
            this._currentSortedIndex = undefined;
            this._currentSortedAsc = undefined;
            this._totalFieldWidth = undefined;
            this._selectedRow = undefined; 
            this._buttonUp = guiHelpers.getButton(icons.buttonUp, 'btnUp');
            this._buttonDown = guiHelpers.getButton(icons.buttonDown, 'btnDown');
            this._noDataMessageDiv = guiHelpers.getDiv(guiHelpers.classes.search.noData, undefined, this.options.noDataText ? this.options.noDataText : translate.getString('noData'));
            this._groupExpandings = new Object(); // meant to be an associative array
            this._originalGroupSizes = new Object(); // meant to be an associative array
            this._crystalReportInfos = [];
            this._pdfButton = guiHelpers.getButton(icons.pdf, 'btnPdf');
            this._hasPdf = false; // only used in offline mode (whether there have been reports defined for the data class)
            this._iconColumnWidth = 0;
            // properties used for keyboard-control
            this._lastFocusedHeaderInput = undefined;
            this._lastFocusedRowIndex = -1;
            this._isInHeaderCell = true;

            // create searchAnimationDiv
            this._searchAnimation = guiHelpers.getDiv(guiHelpers.classes.search.loadingOverlay);
            this._searchAnimationText = guiHelpers.getDiv(guiHelpers.classes.loading.loadingText);
            this._searchAnimationDiv = guiHelpers.getDiv(guiHelpers.classes.loading.loadingAnimation, ' ');
            guiHelpers.getDiv(guiHelpers.classes.loading.centerWrapper)
                .append(guiHelpers.getDiv(guiHelpers.classes.loading.middleWrapper)
                    .append(this._searchAnimationText)
                    .append(this._searchAnimationDiv))
                .appendTo(this._searchAnimation);

            var that = this;

            if (this.options.isOfflineMode) {
                this._searchDefinition = this.options.searchDefinition;
                this._originalSearchFields = this._searchDefinition.SearchFields;
                // if there is no data in offline mode, show no data element
                if (this.options.data !== undefined && this.options.data.length > 0) {
                    this._hasPdf = settings.reports[this.options.dataClassId.toLowerCase()] !== undefined;
                    this._initTable();
                    this._primaryKeyColumns = this.options.dataPkColumns;
                    this._createTableBody(this.options.data );
                    this.options.data = undefined;

                    // add pdf buttons to each row
                    if (this._hasPdf) {
                        var reports = settings.reports[this.options.dataClassId.toLowerCase()];
                        // get report infos for all rows
                        api.getAvailableCrystalReports(that.options.dataClassId, reports, that._dataKeys, function (result) {
                            that._crystalReportInfos = result;
                            that._createPdfButtons(result);
                        });
                        
                    }
                } else {
                    this.element.empty().append(this._noDataMessageDiv);
                }
                return;
            }
            api.getSearchDefinition(this.options.dataClassId, this.options.designation, function(result) {
                that._searchDefinition = result;
                that._originalSearchFields = result.SearchFields;
                that._initTable();
            }, function (jqXHR, textStatus, errorThrown) {
                if (that.options.onError)
                    that.options.onError(jqXHR, textStatus, errorThrown);
                else {
                    that.element.text(translate.getString('noSearchDefinitionFriendly',
                        [
                            that.options.dataClassId,
                            that.options.designation
                        ]) +
                        errorThrown);
                }
            });
        },

        _destroy: function () {
            //this._removeKeyboardControl();
            this._searchDefinition = undefined;
            this._searchFields = undefined;
            this._originalSearchFields = undefined;
            this._searchFieldIds = undefined;
            this._searchResult = undefined;
            this._originalSearchResult = undefined;
            //if (this._table)
            //    this._table.remove();
            this._table = undefined;
            //if (this._toolbar)
            //    this._toolbar.remove();
            this._toolbar = undefined;
            //if (this._bodyContainer)
            //    this._bodyContainer.remove();
            this._bodyContainer = undefined;
            this._tableBody = undefined;
            this._headerCells = undefined;
            this._headerCellsOfBody = undefined;
            this._searchInputs = undefined;
            this._actualCellWidths = undefined;
            this._sortDirections = undefined;
            this._currentSortedIndex = undefined;
            this._currentSortedAsc = undefined;
            this._totalFieldWidth = undefined;
            this._selectedRow = undefined;
            //this._noDataMessageDiv.remove();
            this._groupExpandings = undefined;
            this._lastFocusedHeaderInput = undefined;
            this._pdfButton = undefined;
        },

        _initTable: function () {
            var that = this;

            $.each(this._originalSearchFields, function() {
                // only add when visible and not in a grouping
                if (that._isSearchFieldDisplayed(this)) {
                    that._searchFields.push(this);
                }
            });

            this._createTable();
            this._applyKeyboardControl();

            this._buttonUp
                .click(function () {
                    that.selectPrevRow();
                });

            this._buttonDown
                .click(function () {
                    that.selectNextRow();
                });

            // TODO: checking if registered is not the right way to handle the problem of 2 actions registering the same shortcut, but only one can be active (implement a disable function and enable again on unregister or so). sure there must be situations, where it is meant to have 2 actions at the same time
            // register keyboard shortcuts
            if (!keyboard.isShortcutRegistered('Ctrl+Up')) {
                keyboard.registerShortcut('Ctrl+Up', this._buttonUp);
                keyboard.registerShortcut('Ctrl+Down', this._buttonDown);
            }

            if (this.options.isPrintMode || this.options.searchImmediately)
                this._triggerSearch();

            // initially set focus to first input, select
            this._headerCells[0].find('input, select').focus();
        },

        _createTable: function () {
            var that = this;

            this._totalFieldWidth = 0;

            $(this._searchFields).each(function (index, field) {
                that._totalFieldWidth += field.Width;
            });

            if (!this.options.isPrintMode && this.options.showToolbar) {
                // print button
                if (this.options.usePrintButton) {
                    guiHelpers.getButton(icons.print, 'btnPrint')
                        .click(function() {
                            if (that.options.printModeCalled)
                                that.options.printModeCalled();
                        })
                        .appendTo(this._toolbar);
                }
                // run search button
                guiHelpers.getButton(icons.runSearch, 'btnRunSearch')
                    .click(function() {
                        that._triggerSearch();
                    })
                    .appendTo(this._toolbar);

                // pdf button
                if (this.options.usePdfButton) {
                    // if there are reports add them to the report button
                    if (settings.reports !== undefined) {
                        var listReports = settings.reports[this.options.dataClassId.toLowerCase() + 'List'];
                        var reports = listReports !== undefined ? listReports : settings.reports[this.options.dataClassId.toLowerCase()];
                        if (reports && reports.length > 0) {
                            api.getAvailableCrystalReports(this.options.dataClassId, reports, '', function (result) {
                                that._crystalReportInfos = result;
                            });
                        }
                    }

                    // append pdf button
                    this._pdfButton
                        .appendTo(this._toolbar);
                    guiHelpers.addContextMenuToButton(this._pdfButton, function(contextMenu) {
                        that._fillContextMenuCrystalReports(contextMenu);
                    }, false, 'Ctrl+Shift+P', translate.getString('noReports'));
                }
            }

            this._table = guiHelpers.getTable(guiHelpers.classes.search.table);
            var tableHead = $('<thead>').appendTo(this._table);
            var headerRow = $('<tr>');

            var actualIndex = 0;

            if (this._hasPdf) {
                var cell = guiHelpers.getElement('th', guiHelpers.classes.table.iconColumn, undefined, undefined, icons.pdf);
                headerRow.append(cell);
                this._iconColumnWidth = cell.outerWidth();
            }

            $(this._originalSearchFields).each(function (index, item) {
                // only add when visible and not in a grouping
                if (that._isSearchFieldDisplayed(item)) {
                    var cell = that._createHeaderCell(item, actualIndex, that._searchFields.length);

                    // set search direction from loaded definition if awailable
                    if (item.SearchDirection === undefined)
                        that._sortDirections[actualIndex] = true;
                    else
                        that._sortDirections[actualIndex] = item.SearchDirection === 'asc';

                    that._headerCells.push(cell);
                    cell.appendTo(headerRow);
                    actualIndex++;
                }
            });
            headerRow.appendTo(tableHead);
            $('<tbody>').appendTo(this._table);

            this.element.text('');
            this.element
                .append(this._toolbar)
                .append(this._table);
        },

        _createHeaderCell: function (searchField, index, totalCount) {
            var that = this;

            var cell = guiHelpers.getElement('th', guiHelpers.classes.table.sortableHeader);

            // header text and sorting
            // sortAsc and sortDesc are preview sortings, sortedAsc and sortedDesc are actually sorted columns
            var headerText = guiHelpers.getDiv(guiHelpers.classes.table.headerText)
                .addClass('sortAsc')
                // actual header text div
                .append(guiHelpers.getDiv(guiHelpers.classes.table.headerLabel)
                    .text(searchField.HeaderText)
                    .attr('title', searchField.HeaderText))
                .appendTo(cell);

            // if print mode sorting is not needed
            if (!this.options.isPrintMode) {
                headerText.click(function(event) {
                        var i = $(this).parent().prevAll().length;
                        // if there is an icon column reduce by 1
                        if (that._iconColumnWidth > 0)
                            i -= 1;
                        var asc = that._sortDirections[i];

                        that._sortTable(i, asc);
                        that._sortDirections[i] = !asc;

                        // set preview sorting direction again for those previously sorted and remove sorted class
                        if (i !== that._currentSortedIndex) {
                            that._table.find('.' + guiHelpers.classes.table.sortingDirection)
                                .eq(that._currentSortedIndex)
                                .removeClass(guiHelpers.classes.table.allSortClasses)
                                .addClass(that._currentSortedAsc ? guiHelpers.classes.table.sortAsc : guiHelpers.classes.table.sortDesc);
                            that._sortDirections[that._currentSortedIndex] = that._currentSortedAsc;

                            that._currentSortedIndex = i;
                        }
                        that._currentSortedAsc = asc;

                        // remove classes and set again for current cell
                        $(this).children('.' + guiHelpers.classes.table.sortingDirection)
                            .removeClass(guiHelpers.classes.table.allSortClasses)
                            .addClass(asc ? guiHelpers.classes.table.sortedAsc : guiHelpers.classes.table.sortedDesc);

                        $(this).parent().children().mouseleave(function() {
                            $(this).children('.' + guiHelpers.classes.table.sortingDirection)
                                .addClass(asc ? guiHelpers.classes.table.sortDesc : guiHelpers.classes.table.sortAsc);
                            $(this).unbind('mouseleave');
                        });
                    })
                    .css('cursor', 'pointer');

                guiHelpers.getDiv(guiHelpers.classes.table.sortingDirectionAsc)
                    .appendTo(headerText);
            }

            // calculate field witdh
            if (index < totalCount - 1) {
                // factor to decrease the size when there is a icon column
                var iconFactor = this._iconColumnWidth / (totalCount - 1);
                searchField.PercentWidth = ((searchField.Width - iconFactor) / this._totalFieldWidth * 100);
                var totalWidth = this.element.width();
                var cellWidth = (totalWidth / 100 * searchField.PercentWidth);
                cell.css('width', cellWidth + 'px');
            }

            if (!this.options.isPrintMode && this.options.showInputs) {
                var inputElement;
                var input = guiHelpers.getTextbox(undefined, searchField.FieldId, false)
                    .appendTo(cell);
                inputElement = input;

                // add masked textboxes
                switch (searchField.TypeName) {
                case 'Int32':
                    input.numberTextbox({
                        minValue: framework.constants.intMin,
                        maxValue: framework.constants.intMax,
                        allowDecimals: false
                    });
                    break;
                }

                // hide textbox if it is a dropdown, but add a select
                if (searchField.DropDownItems && searchField.DropDownItems.length > 0) {
                    input.hide();
                    var select = $('<select><option /></select>');
                    inputElement = select;
                    $(searchField.DropDownItems).each(function() {
                        $('<option />', { value: this, text: this }).appendTo(select);
                    });
                    select.change(function() {
                        input.val(select.find('option:selected').text());
                    });
                    select.appendTo(cell);

                    this._addNavigationToHeaderControl(select, index);
                }
                else // only add navigation if not hidden
                    this._addNavigationToHeaderControl(input, index);

                // hide textbox if it is a boolean, but add 3-state button
                if (searchField.TypeName === 'Boolean') {
                    input.hide();
                    inputElement = guiHelpers.getCheckbox(undefined, undefined, false)
                        .attr('indeterminate', '1')
                        .tristate({
                            change: function(state, value) {
                                input.val(state);
                            }
                        })
                        .appendTo(cell);
                }

                inputElement.on('keyup', function(e) {
                    if (keyboard.enterKey === e.which) {
                        if (that.options.isOfflineMode || that.options.searchImmediately)
                            that._filterTable();
                        else
                            that._triggerSearch();
                    }
                });

                this._searchInputs.push(input);
            }

            if (index < totalCount - 1) {
                // add resizing for all but the last
                cell.resizable({
                    handles: 'e',
                    resize: function(event, ui) {
                        if (!keyboard.ctrl)
                            that._resizeHeaderCellEvenly(ui.element, ui.size, ui.originalSize);
                        that._calculateActualWidths();
                        that._setWidthToBodyCells();
                    }
                });

                // add data attribute for faster check
                cell.data('resizable', true);
            }

            this._searchFieldIds.push(searchField.FieldId);
            return cell;
        },

        _createPdfButtons: function (crystalReports) {
            var that = this;
            if (!crystalReports)
                return;
            // add buttons to each row if report is available
            this.element.find('td.iconColumn').each(function () {
                var allowedCrystalReports = [];
                var td = $(this);
                var dataKey = parseInt(td.parent().attr('id'));
                $.each(crystalReports, function () {
                    if (this.AllowedKeys === null || this.AllowedKeys === undefined)
                        allowedCrystalReports.push(this);
                    if ($.inArray(dataKey, this.AllowedKeys) > -1)
                        allowedCrystalReports.push(this);
                });
                // add button and set context menu if there are valid reports
                if (allowedCrystalReports.length > 0) {
                    var button = guiHelpers.getButton(icons.pdf);
                    guiHelpers.addContextMenuToButton(button, function (contextMenu) {
                        that._fillContextMenuCrystalReports(contextMenu, allowedCrystalReports, dataKey);
                    });
                    button.appendTo(this);
                }
            });
        },

        _addNavigationToHeaderControl: function (control, index) {
            var that = this;
            // handle focus of cell control
            control.focus(function () {
                that._lastFocusedHeaderInput = $(this);
                that._isInHeaderCell = true;
            });
            // focus if it is the first column
            if (index === 0)
                control.focus();
            // set tabindex (must start at 1)
            control.attr('tabindex', this.options.overlayTabindex + index + 1);
            // add auto filter if offline mode
            if (this.options.isOfflineMode || this.options.searchImmediately)
                control.keyup(function() {
                    that._filterTable();
                });
        },

        _resizeHeaderCellEvenly: function (element, size, originalSize) {
            var el = $(element);
            var dataWidth = el.data('width');
            if (dataWidth === undefined)
                dataWidth = originalSize.width;

            var delta = dataWidth - size.width;
            var left = delta > 0;
            var neighbours = left ? el.prev('th') : el.next('th');
            var count = neighbours.length;

            if (count > 0) {
                var amount = Math.abs(delta);
                var evenAmount = amount / (count + 1);
                neighbours.each(function () {
                    var neighbour = $(this);
                    if (neighbour.data('resizable') === true)
                        neighbour.width(neighbour.width() - evenAmount);
                });
            }
            dataWidth = size.width;
            el.data('width', dataWidth);
        },

        _resizeTableEvenly: function (deltaX) {
            // resize all but the last one
            var count = this._headerCells.length - 1;
            var amount = deltaX / count;
            $.each(this._headerCells, function() {
                var cell = $(this);
                if (cell.data('resizable') === true)
                    cell.width(cell.width() - amount);
            });
        },

        _triggerSearch: function () {
            var that = this;
            // if there is an open context menu or similar close them on search
            actionStack.clear(1);
            if (this._tableBody)
                this._tableBody.find('tbody').empty();

            // if not yet, create body container now (before result because of loading animation)
            if (!this._bodyContainer)
                this._createBodyContainer();
            // show loading animation
            this._searchAnimation.appendTo(this._bodyContainer);
            this._searchAnimationText.text(translate.getString('searchRunning'));
            this._searchAnimationDiv.show();

            // don't trigger search in offline mode
            if (this.options.isOfflineMode)
                return;
            // clear datakeys. they will be filled again with new data
            this._dataKeys = [];

            $(this._searchInputs).each(function (index, input) {
                if (input)
                    that._searchFields[index].SearchText = input.val();
            });
            var searchDefinition = this._searchDefinition;
            // fill search fields with text and sort direction if sort has been triggered
            if (this._currentSortedIndex > -1) {
                $(this._searchFields).each(function() {
                    this.SortDirection = undefined;
                });
                this._searchFields[this._currentSortedIndex].SortDirection = this._currentSortedAsc ? 'asc' : 'desc';
            }

            searchDefinition.SearchFields = this._searchFields;
            if (this.options.isPrintMode)
                searchDefinition = storage.searchSettings.lastSearch();

            api.getSearchResult(searchDefinition, function (result) {
                that._primaryKeyColumns = result.PrimaryKeyColumns;
                // change animation text
                that._searchAnimationText.text(translate.getString('searchProcessing'));
                // somehow the animation currently changes position after changing the text. But we don't really need an animation
                // because the animation cannot be rendered properly during creation of the table -> hide it
                that._searchAnimationDiv.hide();
                // give the browser a chance to update the text -> small timeout
                setTimeout(function() {
                    that._createTableBody(result.Result);
                    // hide loading animation
                    that._searchAnimation.remove();
                    if (that.options.dataLoaded) {
                        that.options.dataLoaded();
                    }
                }, 10);
            });

            storage.searchSettings.lastSearch(searchDefinition);
        },

        _createBodyContainer: function() {
            this._bodyContainer = guiHelpers.getDiv(guiHelpers.classes.table.bodyContainer)
                .appendTo(this.element);

            //calculate height of body container
            this._mainTableHeight = this._table.find('th').first().outerHeight() + 0.3; // add a small amount
            // because rem can cause that the hidden part will hang out 1px because of rounding (this will give a double border, which is ugly). 
            // 0.3 will fix that problem and in the worst case just decrease the first "padding" of the cell
            // by 1px
            var height = undefined;
            if (this.options.calculateHeight)
                height = $(window).height() - this._bodyContainer.offset().top - guiHelpers.defaultWindowPadding;
            else if (this.options.fixedHeight !== undefined)
                height = this.options.fixedHeight - this._mainTableHeight;

            // substract any other elements from the height
            if (this.options.includeAbsoluteElementsForCalculation) {
                height += guiHelpers.defaultWindowPadding;
                var followerHeights = 0;
                $(this.options.includeAbsoluteElementsForCalculation).each(function () {
                    followerHeights += $(this).outerHeight();
                });
                height -= followerHeights;
            }
            if (height !== undefined) {
                if (this.options.useMaxHeight)
                    this._bodyContainer.css('max-height', height + 'px');
                else
                    this._bodyContainer.css('height', height + 'px');
            }

        },

        _createTableBody: function (result) {
            var that = this;

            // the first time save result as original result (used for filtering) 
            if ((this.options.isOfflineMode || this.options.searchImmediately) && this._searchResult === undefined)
                this._originalSearchResult = result;
            this._searchResult = result;

            if (this._tableBody)
                this._tableBody.find('tbody').empty();
                // on print mode we dont use the copied table body
            else if (!this.options.isPrintMode) {
                
                // if not yet, create body container now (e.g. when offline mode)
                if (!this._bodyContainer)
                    this._createBodyContainer();

                // create table
                this._tableBody = this._table.clone(true, true)
                    .appendTo(this._bodyContainer)
                    .css('margin-top', '-' + this._mainTableHeight + 'px')
                    .on('keyup', function (e) {
                        if (e.which === keyboard.enterKey)
                            that._selectRow(that._getFocusedRow(), true);
                    });

                // hide sorting triangles they can ruin the th height..
                this._tableBody.find('.' + guiHelpers.classes.table.sortingDirection).remove();
                // remove tabindex from header cells
                this._tableBody.find('input, select').attr('tabindex', -1);

                //recalculate cell width -> because of scrollbar, percent are not correct
                this._calculateActualWidths();

                this._setWidthToBodyCells();

                this._headerCellsOfBody = this._tableBody.find('th');
            }

            if (!result || result.length === 0) {
                // add no data found text (will be removed on new search trigger)
                this._tableBody.find('tbody')
                    .empty()
                    .append($('<tr>')
                        .append($('<td class="' + guiHelpers.classes.search.noData + '" colspan="' + this._headerCells.length + '">')
                            .append(this._noDataMessageDiv)));
                if (this.options.noDataFound)
                    this.options.noDataFound();
                return;
            }

            // on print mode just fill the tbody of the main table
            var body = this.options.isPrintMode ? this._table.find('tbody') : this._tableBody.find('tbody');

            var groups = [];
            var groupKeys = new Object();
            var hasGroups = false;
            // create rows and cells
            $(result).each(function (index, row) {
                var rowElement = guiHelpers.getElement('tr', guiHelpers.classes.search.dataRow)
                    .attr('tabindex', that.options.overlayTabindex + that._startBodyTabindex + index);

                // add cell for pdf icons (pdf buttons will be loaded later)
                if (that._hasPdf)
                    $('<td class="' + guiHelpers.classes.table.iconColumn + '">').appendTo(rowElement);

                var pks = that._primaryKeyColumns;
                // add dataKey todo aneu: only int datakeys supportet so far create logic for wrapped datakeys later
                var dataKey;
                if (pks !== null && pks !== undefined && pks.length === 1) {
                    dataKey = row[pks[0]];
                    that._dataKeys.push(dataKey);
                    rowElement.attr('id', dataKey);
                } else {
                    dataKey = row['PK1'];
                    that._dataKeys.push(dataKey);
                    rowElement.attr('id', dataKey);
                }

                $(that._originalSearchFields).each(function (i, field) {
                    var text = row[field.FieldId];

                    // only add when visible and not in a grouping
                    if (that._isSearchFieldDisplayed(field)) {
                        var cellElement = $('<td>');
                        if (that.options.isMultiline)
                            cellElement.addClass('multiline');

                        // handle list columns
                        if (text && field.IsListColumn) {
                            text = text.replace(framework.constants.listColumnStringRegex, '').replace(new RegExp('♫', 'g'), '\r\n');
                            that._handleListColumnClick(cellElement, text, i, that._originalSearchFields.length);
                        }

                        if (field.TypeName === 'Boolean') {
                            if (text === true)
                                $(icons.checkmark).appendTo(cellElement);
                        } else if (field.TypeName.indexOf('DateTime') >= 0) {
                            //TODO: 0000important: maybe later with ember data this can be ommitted, but for now correct date here
                            if (text && text.toString().indexOf('T') > 0)
                                row[field.FieldId] = new Date(text);
                            text = globalize.format(row[field.FieldId], 'd');
                            cellElement.text(text);
                            cellElement.attr('title', text);
                        } 
                        else {
                            cellElement.text(text);
                            cellElement.attr('title', text);
                        }

                        if (uiSettings.useDoubleClick) {
                            cellElement
                                .on('touchstart dblclick', function () {
                                    framework.Helpers.cancelUserSelection();
                                    that._selectRow(cellElement.parent(), true);
                                })
                                .click(function() {
                                    that._selectRow(cellElement.parent(), false);
                                });
                        }
                        else
                            cellElement.click(function () {
                                that._selectRow(cellElement.parent(), true);
                            });
                            
                        cellElement.appendTo(rowElement);
                    }
                    if (field.GroupIndex > 0) {
                        rowElement.data('GroupName', text);
                    }
                });

                var groupsIndex = 0;

                // the groupname (value of the column)
                var groupName = rowElement.data('GroupName');
                // if there is at least one group field the rows must be added in groups
                if (groupName) {
                    // get index of groups[] from groupKeys associative Array
                    if (groupKeys[groupName] === undefined)
                        groupKeys[groupName] = groups.length;
                    groupsIndex = groupKeys[groupName];
                    hasGroups = true;
                }
                // if the data must be grouped, the index is evaluated in the block above, if not take 0 (no grouping)
                if (!groups[groupsIndex]) {
                    groups[groupsIndex] = {
                        'name': groupName,
                        'group': [],
                        'groupRow': undefined
                    };
                }
                // add the row to the desired group
                groups[groupsIndex].group.push(rowElement);
            });

            // for group rows use the same tabindex of the row before
            var lastTabindex = this.options.overlayTabindex + this._startBodyTabindex;
            // add the rows in the order of the groups
            $.each(groups, function (index, group) {
                // add toggle row for each group if there are groups
                if (hasGroups) 
                    group.groupRow = that._createGroupRow(group.name, group.group.length)
                        .attr('tabindex', lastTabindex)
                        .appendTo(body);

                $.each(group.group, function (i, rowElement) {
                    lastTabindex = rowElement.attr('tabindex');
                    rowElement.appendTo(body);
                });
            });

            // set toggle state to groups
            if (hasGroups) {
                $.each(groups, function(index, group) {
                    // if first time store expanded to the toggle state. if not use the stored toggle state
                    var expandingState = that._groupExpandings[group.name];
                    if (expandingState === undefined)
                        that._groupExpandings[group.name] = true;
                    else if (!expandingState)
                        that._toggleGroup(group.groupRow.children()[0]);
                });
            }

            // fallback when tabindex exceeded -> set all to -1. navigation will still be possible with up/down
            if (this.options.overlayTabindex + this._startBodyTabindex + result.length > framework.shortMax)
                this._tableBody.find('tbody tr').attr('tabindex', -1);
        },

        _handleListColumnClick: function (cellElement, text, index, count) {
            var right = index > count / 2;
            guiHelpers.addContextMenuToButton(cellElement, function (contextMenu) {
                var lines = text.split('\r\n');
                var colCount = 0;
                var allLines = [];
                $.each(lines, function () {
                    var cols = this.split(';');
                    if (cols.length > colCount)
                        colCount = cols.length;
                    allLines.push(cols);
                });
                // actually create table
                var table = $('<table>');
                $.each(allLines, function () {
                    var htmlRow = $('<tr>');
                    for (var j = 0; j <= colCount; j++) {
                        var cellText = this[j];
                        if (cellText !== undefined)
                            htmlRow.append('<td>' + cellText + '</td>');
                        else
                            htmlRow.append('<td>&nbsp;</td>');
                    }
                    table.append(htmlRow);
                });
                contextMenu.append(table);
            }, right);
        },

        _fillContextMenuCrystalReports: function (contextMenu, reports, dataKey) {
            var that = this;
            if (reports === undefined)
                reports = this._crystalReportInfos;
            $.each(reports, function () {
                var link = guiHelpers.getLinkNewWindow(
                    api.getCrystalReportUrl(that.options.dataClassId, this.Id, dataKey !== undefined ? dataKey : that._dataKeys),
                    this.Title);
                contextMenu.append(link);
            });
        },

        _getFocusedRow: function() {
            var row = this._tableBody.find('tbody tr:focus');
            if (row.length === 0)
                return undefined;
            else
                return row;
        },

        _applyKeyboardControl: function () {
            var that = this;
            // make sure, that there are no other events or double events
            this._removeKeyboardControl();

            // move up in the rows or up to the header when top is reached
            keyboard.registerShortcut('Up', null, function () {
                return that._moveUpOrDown(false);
            });
            // move down in the rows until bottom is reached
            keyboard.registerShortcut('Down', null, function () {
                return that._moveUpOrDown(true);
            });
            // jump directly to header
            keyboard.registerShortcut('Shift+Up', null, function () {
                that._isInHeaderCell = true;
                that._lastFocusedHeaderInput.focus();
            });
            // jump back to current row
            keyboard.registerShortcut('Shift+Down', null, function () {
                if (that._lastFocusedRowIndex === -1)
                    that._lastFocusedRowIndex = 0;
                that._moveUpOrDown(true, that._bodyContainer.find('tbody tr').eq(that._lastFocusedRowIndex));
            });
            // sort currently focused column
            keyboard.registerShortcut('Alt+S', null, function() {
                that._lastFocusedHeaderInput.parent().find('.headerText').click();
            });
            // toggle group
            keyboard.registerShortcut('Space', null, function() {
                return that._handleKeyboardToggleGroup();
            });
            // expand group
            keyboard.registerShortcut('Right', null, function() {
                return that._handleKeyboardToggleGroup(true);
            });
            // collapse group
            keyboard.registerShortcut('Left', null, function () {
                return that._handleKeyboardToggleGroup(false);
            });
        },

        _handleKeyboardToggleGroup: function (expand) {
            var focusedRow = this._getFocusedRow();
            if (focusedRow !== undefined && focusedRow.hasClass('groupRow')) {
                if (expand === undefined ||
                (expand && focusedRow.data('expanded') === false) ||
                (!expand && focusedRow.data('expanded') === true)) {
                    focusedRow.children().eq(0).click();
                    return false;
                }
            }
            return true;
        },

        _removeKeyboardControl: function () {
            keyboard.unregisterShortcuts(['Up', 'Down', 'Shift+Up', 'Shift+Down', 'Alt+S', 'Space', 'Right', 'Left']);
        },

        _moveUpOrDown: function (down, row) {
            // don't override select up down
            if (document.activeElement && document.activeElement.nodeName.toUpperCase() === 'SELECT')
                return true;
            var focusedRow = this._getFocusedRow();
            // we are probably in the header when there is not focused row. when going up -> do nothing
            if (focusedRow === undefined) {
                if (down) {
                    if (row === undefined)
                        this._lastFocusedRowIndex = -1;
                    else
                        this._lastFocusedRowIndex -= 1;
                } else
                    return;
            }
            // search next row or just use the first row after leaving header or the row has not been provided from the caller already
            if (row === undefined) {
                if (this._isInHeaderCell || focusedRow === undefined)
                    row = this._tableBody.find('tbody tr').eq(0);
                else
                    row = down ? focusedRow.nextAll('tr:visible').first() : focusedRow.prevAll('tr:visible').first();
            }
            
            // if reached top or bottom go back to header
            if (row.length > 0) {
                this._isInHeaderCell = false;
                this._lastFocusedRowIndex = this._lastFocusedRowIndex + (down ? 1 : -1);
                row.focus(); // this works because the rows get a tabindex on creation
            } else if (!down) {
                this._isInHeaderCell = true;
                this._lastFocusedRowIndex = -1;
                this._lastFocusedHeaderInput.focus();
            }
        },

        _createGroupRow: function (groupName, groupLength) {
            var originalLength = this._originalGroupSizes[groupName];
            if (originalLength === undefined) {
                originalLength = groupLength;
                this._originalGroupSizes[groupName] = originalLength;
            }
            var groupLengthText = originalLength !== groupLength ? (' / ' + originalLength) : '';
            var that = this;
            var toggleCell = $('<td>');
            toggleCell.attr('colspan', this._headerCells.length.toString());
            toggleCell.append(guiHelpers.getDiv(guiHelpers.classes.dialog.toggleIcon, undefined, icons.expanded));
            toggleCell.append(guiHelpers.getDiv(guiHelpers.classes.search.groupRowText, 
                groupName + ' (' + groupLength + groupLengthText + ')'));
            // group toggling
            toggleCell.click(function () {
                that._toggleGroup(this);
            });
            // add cell to row and return
            return guiHelpers.getElement('tr', guiHelpers.classes.search.groupRow)
                .data('expanded', true)
                .data('GroupName', groupName)
                .append(toggleCell);
        },

        _toggleGroup: function (cell) {
            var c = $(cell);
            var expanded = c.parent().data('expanded');
            expanded = !expanded;
            c.find('.' + guiHelpers.classes.dialog.toggleIcon)
                .html(expanded ? icons.expanded : icons.collapsed);
            c.parent().data('expanded', expanded);
            c.parent().nextUntil('tr.' + guiHelpers.classes.search.groupRow, 'tr.' + guiHelpers.classes.search.dataRow)
                .toggle(expanded);
            // store toggle state
            this._groupExpandings[c.parent().data('GroupName')] = expanded;
        },

        _selectRow: function (rowElement, chosen) {
            if (rowElement) {
                this._selectedRow = $(rowElement);
                var cl = guiHelpers.classes.search.searchSelected; 
                $('.' + cl)
                    .removeClass(cl);
                this._selectedRow.addClass(cl);

                // up/down buttons
                this._buttonUp.prop('disabled', this._selectedRow.prev().length === 0);
                this._buttonDown.prop('disabled', this._selectedRow.next().length === 0);

                // selected event
                if (chosen && this.options.rowChosen) {
                    this._removeKeyboardControl();
                    actionStack.clear(1);
                    this.options.rowChosen(this._selectedRow.attr('id'), this.options.dataClassId, this._selectedRow);
                }
            }
        },

        _calculateActualWidths: function () {
            var that = this;
            this._table.find('th').each(function (index, cell) {
                that._actualCellWidths[index] = $(cell).width();
            });
        },

        _setWidthToBodyCells: function () {
            var that = this;
            this._tableBody.find('th').each(function (index, cell) {
                // set the actual width in px for all cells
                if (index < that._actualCellWidths.length - 1) {
                    var width = that._actualCellWidths[index];
                    $(cell).css('max-width', width + 'px');
                    $(cell).css('width', width + 'px');
                    // except for the last one
                } else {
                    $(cell).css('width', '100%');
                    $(cell).css('max-width', undefined);
                }
            });
        },

        _isSearchFieldDisplayed: function(searchField) {
            return searchField.Width > 0 && !searchField.GroupIndex;
        },

        _filterTable: function () {
            var that = this;
            var searchTexts = [];
            var hasSearchTexts = false;
            // check for search texts in header cells
            $.each(that._searchInputs, function () {
                var text = $(this).val();
                if (text.length > 0)
                    hasSearchTexts = true;
                searchTexts.push(text);
            });

            // when not filtered rebuild original table
            if (!hasSearchTexts) {
                this._createTableBody(this._originalSearchResult);
                if (this._crystalReportInfos && this._crystalReportInfos.length > 0)
                    this._createPdfButtons(this._crystalReportInfos);
                return;
            }
            
            // filter the search data and rebuild the table
            var filteredData = [];
            // associative array to store which column (FieldId) is shown
            var displayMatrix = new Object();
            $.each(this._originalSearchResult, function (rowIndex, row) {
                var rowValid = true;
                var index = 0;
                $.each(row, function (col, value) {
                    // we cannot rely on indices here, because NG delivers more columns in the table than in the list view model
                    // only do this once
                    if (rowIndex === 0) {
                        var searchField = $.grep(that._originalSearchFields, function(f) {
                            return f.FieldId === col;
                        })[0];
                        // column not existing in list view model -> continue loop
                        if (searchField === undefined)
                            return true;
                        /// if the field is not displayed (width = 0 or grouping) -> continue loop
                        if (!that._isSearchFieldDisplayed(searchField)) {
                            return true;
                        }
                        displayMatrix[col] = true;
                    }
                    else if (!displayMatrix[col])
                        return true;

                    // handle date (all values are compared as string)
                    if (value instanceof Date)
                        value = globalize.format(value, 'd');
                    value = value.toString();

                    var searchText = searchTexts[index];
                    // if this column is filtered
                    if (searchText.length > 0) {
                        var searches = searchText.split('*');
                        // starts with 
                        if (searches.length === 1 && that._filterCompare(searches[0], value) !== 0)
                            rowValid = false;
                        // multiple *
                        else if (searches.length > 1) {
                            $.each(searches, function (i, s) {
                                var sIndex = that._filterCompare(s, value);
                                // start with word or *
                                if (i === 0 && sIndex !== 0)
                                    rowValid = false;
                                // between * or end
                                if (i > 0 && sIndex < 0)
                                    rowValid = false;
                                value = value.substring(sIndex + s.length);
                            });
                        }
                        // if not valid exit loop
                        if (!rowValid)
                            return false;
                    }
                    index++;
                    return true;
                });
                // if row is valid add to filtered data
                if (rowValid)
                    filteredData.push(row);
            });
            this._createTableBody(filteredData);
            if (this._crystalReportInfos && this._crystalReportInfos.length > 0)
                this._createPdfButtons(this._crystalReportInfos);
        },

        _filterCompare: function (search, text) {
            return text.toUpperCase().indexOf(search.toUpperCase());
        },

        _sortTable: function (columnIndex, asc) {
            if (this._searchResult === undefined)
                return;
            var factor = asc ? 1 : -1;
            var dataType = this._searchFields[columnIndex].TypeName;
            var name = this._searchFields[columnIndex].FieldId;

            this._searchResult.sort(function (a, b) {
                var valA = a[name];
                var valB = b[name];

                if (dataType === 'String') {
                    if (!valA)
                        return (valB ? -1 : 1) * factor;
                    if (!valB)
                        return factor;
                    return valA.toUpperCase().localeCompare(valB.toUpperCase()) * factor;
                }

                if (valA < valB)
                    return -1 * factor;
                if (valA > valB)
                    return 1 * factor;
                return 0;
            });
            this._createTableBody(this._searchResult);
            if (this.options.isOfflineMode && this._crystalReportInfos && this._crystalReportInfos.length > 0)
                this._createPdfButtons(this._crystalReportInfos);
        }
    });

    /**** FixedHeaderTable ************************************
    *
    *   Widget to display a table control with fixed header and scrollable content
    *   also adds sorting and keyboard navigation
    *
    **************************************************************/
    $.widget('clx.fixedHeaderTable', {
        options: {
            calculateHeight: false,
            fixedHeight: undefined,
            includeElementsAfterParentForCalculation: undefined,
            sortedColumns: [],
            sort: true,

            rowChosen: undefined
        },

        // body rows start their tabindex after this value 
        // this means that there could be 99 colums before tabindex is messed up
        _startBodyTabindex: 100,

        selectNextRow: function () {
            // set last tab index for dialog
            var current = storage.dialogSettings.currentTabId();
            storage.dialogSettings.lastTabId(current);

            if (this._selectedRow) {
                var nextRow = $(this._selectedRow).next();
                if (nextRow.length > 0)
                    this._selectRow(nextRow, true);
            }
        },

        selectPrevRow: function () {
            // set last tab index for dialog
            var current = storage.dialogSettings.currentTabId();
            storage.dialogSettings.lastTabId(current);

            if (this._selectedRow) {
                var prevRow = $(this._selectedRow).prev();
                if (prevRow.length > 0)
                    this._selectRow(prevRow, true);
            }
        },

        getButtonUp: function () {
            return this._buttonUp;
        },

        getButtonDown: function () {
            return this._buttonDown;
        },

        resize: function (deltaX, deltaY) {
            if (deltaX !== 0) {
                this._resizeTableEvenly(deltaX);
                this._calculateActualWidths();
                this._setWidthToBodyCells();
            }
            this._bodyContainer.height(this._bodyContainer.height() + deltaY);
        },

        refreshAfterDialogClosed: function () {
            if (this._selectedRow !== undefined)
                this._selectedRow.focus();
            else if (this._lastFocusedHeaderInput !== undefined)
                this._lastFocusedHeaderInput.focus();
            else
                this._headerCells[0].find('input, select').focus();
            this._applyKeyboardControl();
        },

        _create: function () {
            /// <summary>Construction of an fixed header table</summary>
            /// <param name="dataClassId" type="Method">The type of object to search for (CLX.Evento NG DataClassId)</param>
            /// <param name="designation" type="Method">The designation of the search definition to use</param>

            // Properties
            this._table = undefined;
            this._headerTable = undefined;
            this._bodyContainer = undefined;
            this._headerHeight = 0;
            this._tableBody = undefined;
            this._headerCells = [];
            this._actualCellWidths = [];
            this._sortDirections = [];
            this._currentSortedIndex = undefined;
            this._currentSortedAsc = undefined;
            this._selectedRow = undefined;
            this._buttonUp = guiHelpers.getButton(icons.buttonUp, 'btnUp');
            this._buttonDown = guiHelpers.getButton(icons.buttonDown, 'btnDown');
            // properties used for keyboard-control
            this._lastFocusedRowIndex = -1;
            this._isInHeaderCell = true;

            this._initTable();
            this._createTableBody(this.options.data);
        },

        _destroy: function () {
            this._removeKeyboardControl();
            if (this._table)
                this._table.remove();
            this._table = undefined;
            this._headerTable = undefined;
            if (this._bodyContainer)
                this._bodyContainer.remove();
            this._bodyContainer = undefined;
            this._tableBody = undefined;
            this._headerCells = undefined;
            this._actualCellWidths = undefined;
            this._sortDirections = undefined;
            this._currentSortedIndex = undefined;
            this._currentSortedAsc = undefined;
            this._selectedRow = undefined;
        },

        _initTable: function () {
            var that = this;

            this._table = this.element;

            if (this.options.calculateHeight) {
                $(window).resize(function() {
                    that._calculateBodyHeightAndSetSize();
                    that._calculateActualWidths();
                    that._setWidthToBodyCells(that._table);
                });
            }
        },

        _resizeHeaderCellEvenly: function (element, size, originalSize) {
            var el = $(element);
            var dataWidth = el.data('width');
            if (dataWidth === undefined)
                dataWidth = originalSize.width;

            var delta = dataWidth - size.width;
            var left = delta > 0;
            var neighbours = left ? el.prev('th') : el.next('th');
            var count = neighbours.length;

            if (count > 0) {
                var amount = Math.abs(delta);
                var evenAmount = amount / (count + 1);
                neighbours.each(function () {
                    var neighbour = $(this);
                    if (neighbour.data('resizable') === true)
                        neighbour.width(neighbour.width() - evenAmount);
                });
            }
            dataWidth = size.width;
            el.data('width', dataWidth);
        },

        _resizeTableEvenly: function (deltaX) {
            // resize all but the last one
            var count = this._headerCells.length - 1;
            var amount = deltaX / count;
            $.each(this._headerCells, function () {
                var cell = $(this);
                if (cell.data('resizable') === true)
                    cell.width(cell.width() - amount);
            });
        },

        _createBodyContainer: function () {
            this._bodyContainer = guiHelpers.getDiv(guiHelpers.classes.table.bodyContainer);
        },

        _calculateBodyHeightAndSetSize: function () {
            var height = undefined;
            if (this.options.calculateHeight) {
                height = $(window).height() - this._bodyContainer.offset().top - guiHelpers.defaultWindowPadding;
                // if there are follower elements, don't use default padding and try to substract their heights
                if (this.options.includeElementsAfterParentForCalculation) {
                    height += guiHelpers.defaultWindowPadding;
                    var followerHeights = 0;
                    this._bodyContainer.parent().nextAll(this.options.includeElementsAfterParentForCalculation).each(function () {
                        followerHeights += $(this).outerHeight();
                    });
                    height -= followerHeights;
                }
            } else if (this.options.fixedHeight !== undefined)
                height = this.options.fixedHeight - this._headerHeight;

            if (height !== undefined)
                this._bodyContainer.css('height', height + 'px');
        },

        _createTableBody: function () {

            // if not yet, create body container now (e.g. when offline mode)
            if (!this._bodyContainer)
                this._createBodyContainer();

            // because rem can cause that the hidden part will hang out 1px because of rounding (this will give a double border, which is ugly). 
            // 0.3 will fix that problem and in the worst case just decrease the first "padding" of the cell
            // by 1px
            this._headerHeight = this._table.find('th').first().outerHeight() + 0.3; // add a small amount

            // create a clone table and add it as the header. NOTE: Unlike most other tools for fix header tables
            // we can't use the copy to display in the body, because there can be different controls attached to events
            this._headerTable = this._table.clone(true, true)
                .insertBefore(this._table);

            // the original table will be in the body. with negative margin, we can hide the headers of the original table
            this._table.css('margin-top', '-' + this._headerHeight + 'px')
            // original table must be inside bodyContainer, without removing it from dom (events, ember)
                .wrap(this._bodyContainer);

            // we need to select the container again because jquery wrap() makes a copy of the element
            this._bodyContainer = $('.' + guiHelpers.classes.table.bodyContainer);

            // the clonetable does not need any body rows, because it only serves as table header. 
            this._headerTable.find('tbody').remove();

            this._calculateBodyHeightAndSetSize();

            // hide sorting triangles they can ruin the th height..
            this._table.find('.' + guiHelpers.classes.table.sortingDirection).remove();

            if (this.options.sort)
                this._createSortControls();
            this._createResizeControls();

            //recalculate cell width -> because of scrollbar, percent are not correct
            this._calculateActualWidths();

            this._setWidthToBodyCells(this._table);
        },

        _createResizeControls: function () {
            var that = this;
            this._headerTable.find('th').each(function(index, th) {
                var headerCell = $(th);
                // don't add resize for icon column and last column
                if (headerCell.hasClass(guiHelpers.classes.table.iconColumn))
                    return true;
                if (headerCell.next('th').length === 0)
                    return true;

                headerCell.resizable({
                    handles: 'e',
                    resize: function(event, ui) {
                        if (!keyboard.ctrl)
                            that._resizeHeaderCellEvenly(ui.element, ui.size, ui.originalSize);
                        that._calculateActualWidths();
                        that._setWidthToBodyCells(that._table);
                    }
                });
            });
        },

        _createSortControls: function () {
            var that = this;

            this._headerTable.find('th').each(function (index, th) {
                var headerCell = $(th);

                // check if sorted columns have been defined
                if (that.options.sortedColumns.length > 0) {
                    if ($.inArray(index, that.options.sortedColumns) === -1)
                        return true;
                }

                var headerText = guiHelpers.getDiv(guiHelpers.classes.table.headerText)
                    .addClass('sortAsc')
                    // actual header text div
                    .append(guiHelpers.getDiv(guiHelpers.classes.table.headerLabel)
                        .text(headerCell.text())
                        .attr('title', headerCell.text()));

                headerCell.text('');
                headerCell.append(headerText);


                headerText.click(function () {
                    var i = $(this).parent().prevAll().length;
                    // if there is an icon column reduce by 1
                    var asc = that._sortDirections[i];

                    that._sortTable(i, asc);
                    that._sortDirections[i] = !asc;

                    // set preview sorting direction again for those previously sorted and remove sorted class
                    if (i !== that._currentSortedIndex) {
                        that._headerTable.find('.' + guiHelpers.classes.table.sortingDirection)
                            .eq(that._currentSortedIndex)
                            .removeClass(guiHelpers.classes.table.allSortClasses)
                            .addClass(that._currentSortedAsc ? guiHelpers.classes.table.sortAsc : guiHelpers.classes.table.sortDesc);
                        that._sortDirections[that._currentSortedIndex] = that._currentSortedAsc;

                        that._currentSortedIndex = i;
                    }
                    that._currentSortedAsc = asc;

                    // remove classes and set again for current cell
                    $(this).children('.' + guiHelpers.classes.table.sortingDirection)
                        .removeClass(guiHelpers.classes.table.allSortClasses)
                        .addClass(asc ? guiHelpers.classes.table.sortedAsc : guiHelpers.classes.table.sortedDesc);

                    $(this).parent().children().mouseleave(function () {
                        $(this).children('.' + guiHelpers.classes.table.sortingDirection)
                            .addClass(asc ? guiHelpers.classes.table.sortDesc : guiHelpers.classes.table.sortAsc);
                        $(this).unbind('mouseleave');
                    });
                })
                    .css('cursor', 'pointer');

                guiHelpers.getDiv(guiHelpers.classes.table.sortingDirectionAsc)
                    .appendTo(headerText);
            });
        },

        _calculateActualWidths: function () {
            var that = this;
            this._headerTable.find('th').each(function (index, cell) {
                that._actualCellWidths[index] = $(cell).width();
            });
        },

        _setWidthToHeaderCells: function (table) {
            var that = this;
            table.find('th')
                .each(function(index, cell) {
                    // set the actual width in px for all cells
                    var width = that._actualCellWidths[index];
                    $(cell).css('max-width', width + 'px');
                    $(cell).css('width', width + 'px');
                    // except for the last one
                });
        },

        _setWidthToBodyCells: function (table) {
            var that = this;
            table.find('th').each(function (index, cell) {
                // set the actual width in px for all cells
                if (index < that._actualCellWidths.length - 1) {
                    var width = that._actualCellWidths[index];
                    $(cell).css('max-width', width + 'px');
                    $(cell).css('width', width + 'px');
                    // except for the last one
                } else {
                    $(cell).css('width', 'auto');
                }
            });
        },

        _sortTable: function (columnIndex, asc) {
            var factor = asc ? 1 : -1;

            var rows = this._table.find('tr:gt(0)').toArray().sort(function (a, b) {
                var valA = $(a).children('td').eq(columnIndex).text();
                var valB = $(b).children('td').eq(columnIndex).text();

                // handle no text
                if (!valA) 
                    return valB ? 1 : 0;
                if (!valB)
                    return -1;

                // numeric and string
                if ($.isNumeric(valA) && $.isNumeric(valB))
                    return (valA - valB) * factor;
                else
                    return valA.toString().localeCompare(valB.toString()) * factor;
            });

            for (var i = 0; i < rows.length; i++) {
                this._table.append(rows[i]);
            }
        }
    });


    //////////////////////// obsolete widgets

    // obsolete: use numberTextboxComponent (still here because of eventosearch
    $.widget('clx.numberTextbox',
    {
        // default options
        options: {
            minValue: 0,
            maxValue: framework.constants.intMax,
            allowDecimals: true,
            useStepping: false,
            maxDecimals: undefined,

            // events
            stepped: $.noop,
            changed: $.noop
        },
        // the constructor
        _create: function _create() {
            var that = this;
            this.isChanging = false;

            // auto-detect options
            var maxValue = this.element.data('max-value');
            if (maxValue)
                this.options.maxValue = maxValue;
            var minValue = this.element.data('min-value');
            if (minValue)
                this.options.minValue = minValue;

            this.element.keyup(function(event) {
                // wait a bit for the jstepper to correct the value
                if (!that.isChanging) {
                    that.isChangîng = true;
                    setTimeout(function() {
                            that._trigger('changed', event, { value: that.element.val() });
                            that.isChanging = false;
                        },
                        10);
                }
            }).jStepper({
                minValue: this.options.minValue,
                maxValue: this.options.maxValue,
                minLength: undefined,
                allowDecimals: this.options.allowDecimals,
                decimalSeparator: globalize.culture().numberFormat['.'],
                maxDecimals: this.options.maxDecimals,
                shiftStep: 10,
                ctrlStep: 100,
                disableSteps: !this.options.useStepping,
                onStep: function onStep(objTextField, bDirection, bLimitReached) {
                    that._trigger('stepped', undefined, { value: objTextField.val() });
                }
            });
        }
    });
});