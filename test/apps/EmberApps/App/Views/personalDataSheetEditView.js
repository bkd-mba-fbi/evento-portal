define([
    'jquery',
    'ember',
    'framework',
    'uiSettings',
    'guiHelpers'
], function ($, ember, framework, uiSettings, guiHelpers) {
    ClxApp.PersonalDataSheetEditView = framework.OverlayView.extend({
        usePrintButton: false,
        dragHandle: '.dialogHeader',
        dialogSelector: '#ovlPersonalDataSheetEdit',
        dialogType: '',
        baseTransition: function () {
            this.get('controller').send('closeRoute');
        },

        initTooltipButton: function () {
            var that = this;
            this.$().find('.tooltipButton').click(function () {
                var button = $(this);
                var idElement = button.attr('id');
                if (idElement) {
                    var id = idElement.substring(12);
                    that.set('controller.newQuestionId', id);
                }
                $('#pnlInfos').removeClass('inactive');
                $('#pnlQuestions').removeClass('active');
                $('#pnlInfos').addClass('active');
                $('#pnlQuestions').addClass('inactive');
            });
        },

        loadWidgets: function () {
            this._super();
            this.initTooltipButton();
            this.$().find('#btnCloseInfos').click(function() {
                $('#pnlInfos').removeClass('active');
                $('#pnlQuestions').removeClass('inactive');
                $('#pnlInfos').addClass('inactive');
                $('#pnlQuestions').addClass('active');
            });

            ember.run.scheduleOnce('afterRender', function () {
                $('.startPosition').removeClass('startPosition');
            });
        },

        questionAdded: function () {
            var that = this;
            ember.run.scheduleOnce('afterRender', function () {
                that.initTooltipButton();
            });
        }.observes('controller.questionAdded'),

        fieldErrors: function () {
            var that = this;
            ember.run.scheduleOnce('afterRender', function() {
                $('[name]').removeClass('validationError showError');
                var fields = that.get('controller.fieldErrors');
                for (var i = 0; i < fields.length; i++) {
                    $("[name*='" + fields[i] + "']").addClass('validationError showError');
                }
            });
        }.observes('controller.validated')
    });
});