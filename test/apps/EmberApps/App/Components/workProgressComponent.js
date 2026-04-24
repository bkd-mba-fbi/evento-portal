define([
    'jquery',
    'ember',
    'templates/components/workProgressComponent'
], function ($, ember) {
    ClxApp.WorkProgressComponent = ember.Component.extend({
        tagName: 'div',
        classNames: ['workProgressView'],

        actions: {
        
        },

        progresses: ember.computed('workProgresses', function () {
            var that = this;
            var correctedProgresses = this.get('correctedProgresses');
            if (correctedProgresses)
                return correctedProgresses;

            // initially create new progresses with additional informations
            correctedProgresses = [];
            var lastProgress = {};
            var lastStage = {
                name: '',
                distance: 2,
                progresses: []
            };
            var currentStage = {
                name: '',
                distance: 2,
                progresses: []
            };
            
            $.each(this.get('workProgresses'), function() {
                var progress = this;
                progress.IsAdjacent = false;
                progress.StageDistance = 2;
                progress.IsFirstOfStage = false;
                progress.IsLastOfStage = false;

                // the first progress defines the first stage
                if (currentStage.name === '') {
                    currentStage.name = progress.Stage;
                }

                // the stage changed
                if (progress.Stage !== currentStage.name) {
                    that.correctMembersOfStage(currentStage);

                    // create new stage and override last
                    var distance = currentStage.distance === 0 ? 1 : 2;
                    lastStage = currentStage;
                    currentStage = {
                        name: progress.Stage,
                        distance: distance,
                        progresses: []
                    }
                }

                // additional infos depending on work progress
                if (progress.IsCurrent) {
                    lastProgress.IsAdjacent = true;
                    currentStage.distance = 0;
                    if (lastStage.name !== '') {
                        lastStage.distance = 1;
                        that.correctMembersOfStage(lastStage);
                    }
                }
                if (lastProgress.IsCurrent)
                    progress.IsAdjacent = true;

                lastProgress = progress;
                correctedProgresses.push(progress);
                currentStage.progresses.push(progress);
            });

            // also update members for the last stage
            this.correctMembersOfStage(currentStage);

            this.set('correctedProgresses', correctedProgresses);

            return correctedProgresses;
        }),

        correctMembersOfStage: function(stage) {
            var count = 0;
            $.each(stage.progresses, function () {
                this.StageDistance = stage.distance;
                if (count > 0)
                    this.Stage = undefined;
                else
                    this.IsFirstOfStage = true;
                count++;
            });
            stage.progresses[stage.progresses.length - 1].IsLastOfStage = true;
        }
    });
});