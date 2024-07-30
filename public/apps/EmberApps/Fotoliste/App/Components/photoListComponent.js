define([
    'ember',
    'application',
    'api',
    'jquery', 
    'App/Services/cacheService',
    'App/Components/studentPhotoComponent',
    'App/Templates/Components/photoListComponent'
], function (ember, app, api, $) {
    app.PhotoListComponent = ember.Component.extend({
        tagName: 'div',

        columnCount: null, // how many columns there are, this used to position the details panel
        resizeHandler: null,
        cache: ember.inject.service(),

        init: function () {
            this._super.apply(this, arguments);
            var that = this;

            // create and register a resizeHandler
            // for the columnCount property
            var resizeHandler = function () {
                // the value of this changes when the function gets called
                // but the value of that stays the same
                that.send('updateColumnWidth');
            };

            // store the resizeHandler so we can destroy it
            // in willDestroyElement
            this.set('resizeHandler', resizeHandler);

            $(window).on('resize', resizeHandler);
        },

        didRender: function () {
            // calculate the columnCount
            this.send('updateColumnWidth');
            //console.log(this);

            //this.get('cache').representativeMailTo(this.event.idEvent);
            //setTimeout(this.set('representativeMailTo'), 20000);
        },

        willDestroyElement: function () {
            // remove the eventListener on the window
            $(window).off('resize', this.get('resizeHandler'));
            
        },

        keyUp: function() {
            var listItems = document.getElementsByClassName('photolist__student');
            console.log(listItems);
            var displayNone = Array.from(listItems).filter(f => f.innerText.toLowerCase().search(event.target.value.toLowerCase()) < 0)
            setDisplayStyle(displayNone,'none');
            var displayBlock = Array.from(listItems).filter(f => f.innerText.toLowerCase().search(event.target.value.toLowerCase()) >= 0)
            setDisplayStyle(displayBlock,'block');
        },

        actions: {
            // calculate how many columns there are and set
            // the 'columnCount' property
            // this is needed to place the details panel correctly
            updateColumnWidth: function () {
                ember.run.scheduleOnce('afterRender', this, function () {

                    var students = this.$('.photolist__student');
                    var columnCount = null;

                    if (students.length > 0) {
                        var studentWidth = students.first().outerWidth(true);
                        var containerWidth = this.$('.photolist__container').outerWidth();

                        columnCount = Math.floor(containerWidth / studentWidth);

                        if (columnCount < 1) {
                            columnCount = 1;
                        }
                    }

                    this.set('columnCount', columnCount);
                });
            },
            representativeMailTo: function() {
                location.href = this.get('cache').representativeMailTo(this.event.idEvent);
            },
            jobTrainerMailTo: function() {
                console.log(this.event.idEvent);
                location.href = 'mailto:jobTrainerMailTo@test.ch';
            }
        }
    });

    function setDisplayStyle(elements, disableStyle){

        for (const item of elements) {
          item.style.display = disableStyle;
        }
        }
});