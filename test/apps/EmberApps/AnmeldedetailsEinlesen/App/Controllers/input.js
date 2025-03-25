define([
    'ember',
    'application'
], function (ember, app) {

    // Dependencies of the computed properties:
    //
    // +-------------+
    // |TextareaValue|
    // +-----+-------+
    //       |
    // +-----v----------------+
    // | strippedTextareaValue|
    // +-----+-------------+--+
    //       |             |
    // +-----v---------+ +-v-----------------+
    // |textareaIsEmpty| |subscriptionDetails|
    // +-----+---------+ +-+-----------------+
    //       |             |
    // +-----v---+         |
    // |showError<---------+
    // +---------+
    app.InputController = ember.Controller.extend({

        // the content of the textarea
        textareaValue: '',

        // textareaValue without whitespace
        strippedTextareaValue: ember.computed('textareaValue', function () {
            var textareaValue = this.get('textareaValue');

            // remove empty lines
            textareaValue = textareaValue.replace(/(?:(?:^|\n)[\t ]*)+(?:$|\n)/g, '\n');

            // remove first and last newline (if they exist)
            textareaValue = textareaValue.replace(/^\n|\n$/g, '');

            return textareaValue;
        }),

        // this property is true when the textarea is empty
        textareaIsEmpty: ember.computed('strippedTextareaValue', function () {
            return this.get('strippedTextareaValue') === '';
        }),

        // this property contains the parsed subscriptionDetails of the textarea
        subscriptionDetails: ember.computed('strippedTextareaValue', function () {
            var rows = this.get('strippedTextareaValue').split('\n');
            var subscriptionDetails = [];

            for (var i = 0; i < rows.length; i++) {
                var result = rows[i].match(/^(\d+)\t(\d+)\t(\d+)\t([^\t]+)$/);

                if (result === null) {
                    return null;
                }

                subscriptionDetails.push(ember.Object.create({
                    eventId: result[1],
                    personId: result[2],
                    subscriptionDetailId: result[3],
                    newValue: result[4]
                }));
            }

            return subscriptionDetails;
        }),

        // the textarea is not empty and cannot be parsed
        showError: ember.computed('textareaIsEmpty', 'subscriptionDetails', function () {
            return this.get('textareaIsEmpty') === false && this.get('subscriptionDetails') === null;
        }),

        // it's not possible to go to the next step when no subscriptionDetail can be parsed
        cannotContinue: ember.computed('subscriptionDetails', function () {
            return this.get('subscriptionDetails') === null;
        })
    });
});