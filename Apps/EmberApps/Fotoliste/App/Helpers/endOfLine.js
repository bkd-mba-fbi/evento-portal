define([
    'ember',
    'application'
], function (ember, app, api, globalize) {
    // this helper is used to mark the students that are at the end of a line
    // so the detailDialog can be placed after those students
    app.EndOfLineHelper = ember.Helper.helper(function (params) {
        // params[0] = index
        // params[1] = columnCount
 
        if (params[1] === null) {
            return false;
        }

        return params[0] % params[1] === params[1] - 1;
    });
});
