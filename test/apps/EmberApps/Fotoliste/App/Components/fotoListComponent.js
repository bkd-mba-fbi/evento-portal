define([
    'ember',
    'application',
    'api',
    'jquery',
    'App/Templates/Components/fotoListComponent'
], function (ember, app, api, $) {
    app.FotoListComponent = ember.Component.extend({
        tagName: 'div',

        event: ember.A,

        columnCount: null,
        resizeHandler: null,

        didInsertElement: function () {
            // show a placeholder image when the image fails to load
            this.$('img').on('error', function (event) {
                $(event.target).attr('src', require.toUrl('../images/Custom/placeholder.svg'));
            });
        },

        didRender: function () {
            this.send('updateColumnWidth');
        },

        init: function () {
            this._super.apply(this, arguments);
            var that = this;

            var idEvent = this.get('idEvent');
            var getEventPromise = api.ember.getEvent(idEvent);
            var getGradingItemsPromise = api.ember.getGradingItems(idEvent);

            ember.RSVP.Promise.all([getEventPromise, getGradingItemsPromise]).then(function (responses) {
                var eventResponse = responses[0];
                var gradingItemsResponse = responses[1];

                var event = {
                    idEvent: eventResponse.ID,
                    designation: eventResponse.Designation,
                    management: eventResponse.Management,
                    students: gradingItemsResponse.map(function (item) {
                        return {
                            fullname: item.PersonFullname,
                            idPerson: item.IdPerson,
                            photo: api.getPersonPictureUrl(item.IdPerson)
                        };
                    })
                };

                that.set('event', event);
            });

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

        willDestroyElement: function () {
            $(window).off('resize', this.get('resizeHandler'));
        },

        actions: {
            studentClick: function (studentId) {
                this.sendAction('changeStudent', studentId);
            },

            updateColumnWidth: function() {
                ember.run.scheduleOnce('afterRender', this, function () {
                    // test how many items are in one row
                    // this is needed to place the details panel correctly
                    var students =  this.$('.photolist__student');
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
            }
        }
    });
});