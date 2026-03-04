define(function() {
    return {
        getUrlParameter: function(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                results = regex.exec(location.search);
            return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        },
        addUrlParam: function(key, val) {
            var search = window.location.search;
            var hash = window.location.hash;
            var newParam = key + '=' + val,
                params = '?' + newParam;

            // If the "search" string exists, then build params from it
            if (search) {
                // Try to replace an existance instance
                params = search.replace(new RegExp('[\?&]' + key + '[^&]*', 'i'), '$1' + newParam);

                // If nothing was replaced, then add the new param to the end
                if (params === search) {
                    params += '&' + newParam;
                } else
                    params = params.replace('$1' + newParam, '');
            }
            return window.location.pathname + params + hash;
        },
        getParamIfSet: function (key) {
            var val = this.getUrlParameter(key);
            if (val)
                return key + '=' + encodeURIComponent(val);

            return null;
        }
    };
});