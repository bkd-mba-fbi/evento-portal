define([], function () {
    var regexHelpers = {
        escapeRegExp: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        }
    };
    return regexHelpers;
});