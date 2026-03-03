define([
    'jquery',
    'ember',
    'application',
    'guiHelpers',
    'keyboard',
    'arrayHelpers'
], function ($, ember, app, guiHelpers, keyboard, arrayHelpers) {
    app.FixedHeaderTableComponent = ember.Component.extend({
        tagName: 'table',

        didInsertElement: function() {
            if (this.get('calculateHeight') === undefined)
                this.set('calculateHeight', false);
            if (this.get('sortedColumns') === undefined)
                this.set('sortedColumns', []);
            if (this.get('sort') === undefined)
                this.set('sort', true);

            this.set('sortDirections', []);
            this.set('actualCellWidths', []);

            this.initTable();
            this.createTableBody();

            // resize header according to body after render (if the content has an influence on the td with)
            this.adaptHeaderSizesToBody();
        },

        //rowChosen: undefined


        resize: function(deltaX, deltaY) {
            if (deltaX !== 0) {
                this.resizeTableEvenly(deltaX);
                this.calculateActualWidths();
                this.setWidthToBodyCells(this.$());
            }
            var bodyContainer = this.get('bodyContainer');
            bodyContainer.height(bodyContainer.height() + deltaY);
        },

        initTable: function() {
            var that = this;
            if (this.get('calculateHeight')) {
                $(window).resize(function() {
                    that.calculateBodyHeightAndSetSize();
                    that.calculateActualWidths();
                    that.setWidthToBodyCells(that.$());
                });
            }
        },

        adaptHeaderSizesToBody: function() {
            var table = this.$();
            var headerTable = this.get('headerTable');
            var firstRowCells = table.find('tr:first-child td');
            var headerCells = headerTable.find('th');
            $.each(headerCells,
                function(index, cell) {
                    var bodyCell = firstRowCells.eq(index);
                    $(cell).width(bodyCell.width());
                });
        },

        resizeHeaderCellEvenly: function(element, size, originalSize) {
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
                neighbours.each(function() {
                    var neighbour = $(this);
                    if (neighbour.data('resizable') === true)
                        neighbour.width(neighbour.width() - evenAmount);
                });
            }
            dataWidth = size.width;
            el.data('width', dataWidth);
        },

        resizeTableEvenly: function(deltaX) {
            // resize all but the last one
            var headerCells = this.$().find('th');
            var count = headerCells.length - 1;
            var amount = deltaX / count;
            $.each(headerCells,
                function() {
                    var cell = $(this);
                    if (cell.data('resizable') === true)
                        cell.width(cell.width() - amount);
                });
        },

        createBodyContainer: function() {
            var bodyCont = guiHelpers.getDiv(guiHelpers.classes.table.bodyContainer);
            if (this.get('noFixedHeader'))
                bodyCont.addClass('noFixedHeader');
            return bodyCont;
        },

        calculateBodyHeightAndSetSize: function() {
            var height = undefined;
            var bodyContainer = this.get('bodyContainer');
            if (this.get('calculateHeight')) {
                height = $(window).height() - bodyContainer.offset().top - guiHelpers.defaultWindowPadding;
                // if there are follower elements, don't use default padding and try to substract their heights
                var includeElementsAfterParentForCalculation = this.get('includeElementsAfterParentForCalculation');
                if (includeElementsAfterParentForCalculation) {
                    height += guiHelpers.defaultWindowPadding;
                    var followerHeights = 0;
                    bodyContainer.parent().nextAll(includeElementsAfterParentForCalculation).each(function() {
                        followerHeights += $(this).outerHeight();
                    });
                    height -= followerHeights;
                }
            } else if (this.get('fixedHeight') !== undefined)
                height = this.options.fixedHeight - this.get('headerHeight');

            if (height !== undefined)
                bodyContainer.css('height', height + 'px');
        },

        createTableBody: function() {
            var bodyContainer = this.get('bodyContainer');
            var table = this.$();
            // if not yet, create body container now (e.g. when offline mode)
            if (!bodyContainer)
                bodyContainer = this.createBodyContainer();

            // because rem can cause that the hidden part will hang out 1px because of rounding (this will give a double border, which is ugly). 
            // 0.3 will fix that problem and in the worst case just decrease the first "padding" of the cell
            // by 1px
            var headerHeight = table.find('th').first().outerHeight() + 0.3; // add a small amount

            // create a clone table and add it as the header. NOTE: Unlike most other tools for fix header tables
            // we can't use the copy to display in the body, because there can be different controls attached to events
            var headerTable = table.clone(true, true)
                .insertBefore(table);

            // the original table will be in the body. with negative margin, we can hide the headers of the original table
            table.css('margin-top', '-' + headerHeight + 'px')
                // original table must be inside bodyContainer, without removing it from dom (events, ember)
                .wrap(bodyContainer);

            // it might be, that the bodyContainer has visible overflow. therefor make the headers of the original table invisible
            headerTable.find('th').css('color', 'transparent');

            // we need to select the container again because jquery wrap() makes a copy of the element
            bodyContainer = table.closest('.' + guiHelpers.classes.table.bodyContainer);

            // the clonetable does not need any body rows, because it only serves as table header. 
            headerTable.find('tbody').remove();

            this.set('bodyContainer', bodyContainer);
            this.set('headerHeight', headerHeight);
            this.set('headerTable', headerTable);

            this.calculateBodyHeightAndSetSize();

            // hide sorting triangles they can ruin the th height..
            table.find('.' + guiHelpers.classes.table.sortingDirection).remove();

            if (this.get('sort'))
                this.createSortControls();
            this.createResizeControls();

            //recalculate cell width -> because of scrollbar, percent are not correct
            this.calculateActualWidths();

            this.setWidthToBodyCells(table);
        },

        createResizeControls: function() {
            var that = this;
            this.get('headerTable').find('th').each(function(index, th) {
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
                            that.resizeHeaderCellEvenly(ui.element, ui.size, ui.originalSize);
                        that.calculateActualWidths();
                        that.setWidthToBodyCells(that.$());
                    }
                });
            });
        },

        createSortControls: function() {
            var that = this;
            this.headerTable.addClass('sorting-header');
            this.headerTable.find('th[is-sortable]').each(function(index, th) {
                var headerCell = $(th);

                // check if sorted columns have been defined
                var sortedColumns = that.get('sortedColumns');
                if (sortedColumns.length > 0) {
                    if ($.inArray(index, sortedColumns) === -1)
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
                        var $triggerer = $(this).parent();
                        var i = $triggerer.prevAll().length;
                        // if there is an icon column reduce by 1
                        var sortDirections = that.get('sortDirections');
                        var currentSortedIndex = that.get('currentSortedIndex');
                        var currentSortedAsc = that.get('currentSortedAsc');
                        var asc = sortDirections[i];

                        that.sortTable(i, asc, $triggerer.data('sort-property'));
                        sortDirections[i] = !asc;

                        // set preview sorting direction again for those previously sorted and remove sorted class
                        if (i !== currentSortedIndex) {
                            that.get('headerTable').find('.' + guiHelpers.classes.table.sortingDirection)
                                .removeClass(guiHelpers.classes.table.allSortClasses)
                                .addClass(currentSortedAsc
                                    ? guiHelpers.classes.table.sortAsc
                                    : guiHelpers.classes.table.sortDesc);
                            sortDirections[currentSortedIndex] = currentSortedAsc;

                            that.set('currentSortedIndex', i);
                        }
                        that.set('currentSortedAsc', asc);

                        // remove classes and set again for current cell
                        $(this).children('.' + guiHelpers.classes.table.sortingDirection)
                            .removeClass(guiHelpers.classes.table.allSortClasses)
                            .addClass(asc
                                ? guiHelpers.classes.table.sortedAsc
                                : guiHelpers.classes.table
                                .sortedDesc);

                        $(this).parent().children().mouseleave(function() {
                            $(this).children('.' + guiHelpers.classes.table.sortingDirection)
                                .addClass(asc
                                    ? guiHelpers.classes.table.sortDesc
                                    : guiHelpers.classes.table
                                    .sortAsc);
                            $(this).unbind('mouseleave');
                        });
                    })
                    .css('cursor', 'pointer');

                guiHelpers.getDiv(guiHelpers.classes.table.sortingDirectionAsc)
                    .appendTo(headerText);

                // classify initial sorted column
                $('th[initial-sort] .sortingDirection', that.headerTable).addClass(guiHelpers.classes.table.sortedAsc);
            });

        },

        calculateActualWidths: function() {
            var that = this;
            this.get('headerTable').find('th').each(function(index, cell) {
                that.get('actualCellWidths')[index] = $(cell).width();
            });
        },

        setWidthToBodyCells: function(table) {
            var that = this;
            table.find('th').each(function(index, cell) {
                // set the actual width in px for all cells
                if (index < that.get('actualCellWidths').length - 1) {
                    var width = that.get('actualCellWidths')[index];
                    $(cell).css('max-width', width + 'px');
                    $(cell).css('width', width + 'px');
                    // except for the last one
                } else {
                    $(cell).css('width', 'auto');
                }
            });
        },

        getColumnContent: function($tdElement) {
            var container = $('input, select, textarea', $tdElement);
            var value = container.val();

            return value !== undefined ? value : $tdElement.text();
        },

        sortTable: function (columnIndex, asc, sortByPropety) {

            // sort underlying data source instead
            if (this.get('useCustomSort') === true) {
                // trigger sort with components specific sort implementation
                this.sendAction('onSort', columnIndex, asc, sortByPropety);
            } else {
            // sort the table row elements directly
                var $table = this.$();
                var tableRows = $table.find('tr:gt(0)').toArray();
                var sortedTableRows = arrayHelpers.sortByComputedProperty(tableRows, asc, this.getColumnContent);


                // improve reflow and redraw performance
                $table.css('visibility', 'hidden');

                for (var i = 0; i < sortedTableRows.length; i++) {
                    $table.append(sortedTableRows[i]);
                }

                $table.css('visibility', 'visible');
            }
        }
    });
});
