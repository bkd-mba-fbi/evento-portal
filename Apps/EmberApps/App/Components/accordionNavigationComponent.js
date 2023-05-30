define([
    'application',
    'jquery',
    'ember',
    'uiSettings'
], function (app, $, ember, uiSettings) {
    app.AccordionNavigationComponent = ember.Component.extend({
        tagName: 'div',
        classNames: ['accordionNavigation'],

        didInsertElement: function () {
            var element = this.$();
            var that = this;
            ember.run.scheduleOnce('afterRender',
                function() {
                    // init click behavior
                    element.find('a')
                        .click(function(e) {
                            var link = $(this);
                            if (!that.get('forceOpenActive'))
                                that.openNewNavigation(link);

                            // in any case prevent the link-to action, because the content of the navigation might be something else already
                            if (link.hasClass('active')) {
                                e.preventDefault();
                                return false;
                            }
                        });

                    // open active link on page visit
                    element.find('a.active').next('.navigationContent').slideDown(uiSettings.defaultAnimationSpeed);
                });
        },

        forceOpenActiveTriggered: ember.observer('forceOpenActive',
            function () {
                var that = this;
                ember.run.scheduleOnce('afterRender',
                    function() {
                        var link = that.$().find('a.active');
                        if (link.length === 1)
                            that.openNewNavigation(link, true);
                    });
            }),

        openNewNavigation: function (link, forced) {
            var container = link.next('.navigationContent');
            // first close all open containers (should always be just one) and then open a new one
            var isVisible = container.is(':visible');
            var isActive = link.hasClass('active');
            var openContainers = $('.navigationContent:visible').toArray();
            var time = 1;
            if (openContainers.length > 0) {
                $.each(openContainers,
                    function () {
                        if (this !== container[0]) {
                            time = uiSettings.defaultAnimationSpeed;
                            $(this).slideUp(uiSettings.defaultAnimationSpeed);
                        }
                    });
            }

            if (!isVisible || !isActive || forced) {
                setTimeout(function() {
                    container.slideDown(uiSettings.defaultAnimationSpeed);
                }, time);
            }
        },

        openNavigationTriggered: ember.observer('openNavigation',
            function () {
                var that = this;
                ember.run.scheduleOnce('afterRender',
                    function() {
                        var index = that.get('openNavigation');
                        if (index > -1) {
                            var link = that.$().find('a').eq(index);
                            if (!link.hasClass('active')) {
                                that.openNewNavigation(link);
                            }
                        }
                    });

            }).on('init')
    });
});