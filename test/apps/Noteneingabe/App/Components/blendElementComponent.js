define([
    'application',
    'jquery',
    'ember',
    'uiSettings'
], function (app, $, ember, uiSettings) {
    app.BlendElementComponent = ember.Component.extend({
        tagName: 'div',
        classNames: ['blendElement'],
        classNameBindings: ['blendType'],

        validBlendTypes: ['fadeIn', 'slideIn', 'slideDown'],

        initialize: function() {
            var blendType = this.get('blendType');
            if (!blendType) {
                blendType = uiSettings.defaultBlendType;
                if (!blendType)
                    blendType = 'fadeIn';
                this.set('blendType', blendType);
            }
            if ($.inArray(blendType, this.validBlendTypes) === -1) {
                console.error('blend-element: blend type "' + blendType + '" is not valid. Valid are: ' + this.validBlendTypes.join(', '));
            }
        }.on('init'),

        didInsertElement: function () {
            var that = this;
            var element = this.$();

            if (this.get('waitForOtherAnimation'))
                element.hide();
            ember.run.scheduleOnce('afterRender', function () {
                if (that.get('waitForOtherAnimation')) {
                    setTimeout(function() {
                            element.show();
                            setTimeout(function() {
                                    that.applyEffect(element, true);
                                },
                                10);
                        },
                        uiSettings.defaultAnimationSpeed);
                } else
                    setTimeout(function () {
                        if (!that.get('isDestroying') && ! that.get('isDestroyed'))
                            that.applyEffect(element, true);
                    }, 10);
            });
        },

        willDestroyElement: function () {
            var that = this;
            var element = this.$();
            var clone = element.clone();
            var prev = element.prev().eq(0);
            var parent = element.parent();

            this.$().hide();
            if (prev.length === 0)
                parent.append(clone);
            else
                prev.after(clone);

            setTimeout(function () {
                that.applyEffect(clone, false);
            }, 10);
            setTimeout(function () {
                clone.remove();
            }, uiSettings.defaultAnimationSpeed);
        },

        applyEffect: function (element, show) {
            var blendType = this.get('blendType');
            switch (blendType) {
                case 'slideDown':
                    if (show)
                        element.slideDown(uiSettings.defaultAnimationSpeed);
                    else
                        element.slideUp(uiSettings.defaultAnimationSpeed);
                    break;
                default:
                    if (show)
                        element.removeClass(blendType);
                    else
                        element.addClass(blendType);
                    break;
            }
        }
    });
});