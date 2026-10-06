define([
    'jquery',
    'ember',
    'uiSettings'
], function ($, ember, uiSettings) {
    ClxApp.AutoScrollContainerComponent = ember.Component.extend({
        tagName: 'div',
        classNames: ['autoScrollContainer'],

        dataCollectionChanged: ember.observer('dataCollection',
            function() {
                var dataCollection = this.get('dataCollection');
                if (dataCollection && (dataCollection.length === undefined || typeof dataCollection === 'string'))
                    console
                        .error('auto-save-controller: if "dataCollection" is set, it must be an Array or an equivalent ember object');
            }).on('init'),

        underlyingDataCollectionChanged: ember.observer('dataCollection.@each',
            function() {
                var that = this;
                ember.run.scheduleOnce('afterRender',
                    function () {
                        if (that.get('waitForOtherAnimation'))
                            setTimeout(function() {
                                that.checkScrolling();
                            }, uiSettings.defaultAnimationSpeed + 100);
                        else
                            that.checkScrolling();
                    });
            }),

        activeElementIdChanged: ember.observer('activeElementId', function() {
            var that = this;
            ember.run.scheduleOnce('afterRender', function () {
                if (that.get('waitForOtherAnimation'))
                    setTimeout(function() {
                        that.scrollTo(that.get('activeElementId'));
                    }, uiSettings.defaultAnimationSpeed + 100);
                else
                    that.scrollTo(that.get('activeElementId'));
            });
        }),

        checkScrolling: function() {
            var element = this.$();
            var last = element.children().last();
            var height = element.outerHeight();
            var top = last.offset().top;
            var bottom = top + last.outerHeight();
            var elementTop = element.offset().top;
            if (bottom > height) // hangs out lower bound
                this.scrollTo(undefined, top);
            if (top < elementTop) // hangs out upper bound
                this.scrollTo(undefined, top);
        },

        scrollTo: function (idElement, elementTop) {
            var container = this.$();
            var containerTop = container.offset().top;
            if (elementTop === undefined) {
                if (!idElement)
                    return;
                var el = $('#' + idElement);
                if (el.length > 0)
                    elementTop = el.eq(0).offset().top;
            }

            var scrollTop = container.scrollTop() - containerTop + elementTop;
            container
                .animate({
                    scrollTop: scrollTop
                },
                    uiSettings.defaultAnimationSpeed);
        }
    });
});