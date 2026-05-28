define(['jquery'], function ($) {
    return {
        intersectArrays: function(arr1, arr2, comparer) {
            /// <summary>intersects array 1 and array 2 and returns all matching elements from array 1 (array 2 will be looped more often)</summary>
            /// <param name="className" type="String">the main array of the intersection</param>
            /// <param name="property" type="String">the second array of the intersection</param>
            /// <returns type="Array">an array of items from arr1 fitting the condition</returns>
            return $.grep(arr1, function (a1) {
                return $.grep(arr2, function (a2) {
                    return comparer(a1, a2);
                }).length > 0;
            });
        },

        eachKeyValue: function(array, keyValueDelegate) {
            $.each(array, function (key, value) {
                if (array.hasOwnProperty(key)) {
                    return keyValueDelegate(key, value);
                }
            });
        },

        getValueByKey: function(array, key) {
            var ret = null;
            $.each(array,
                function(index, item) {
                    if (item.Key === key) {
                        ret = item.Value;
                        return false;
                    }
                    return true;
                });
            return ret;
        },

        getKeyByValue: function (array, value) {
            var ret = null;
            $.each(array,
                function (index, item) {
                    if (item.Value === value) {
                        ret = item.Key;
                        return false;
                    }
                    return true;
                });
            return ret;
        },

        base64ToArrayBuffer: function(base64) {
            var binaryString = window.atob(base64);
            var len = binaryString.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        },

        removeSpecific: function (array, value) {
            // it's an ember array
            if (array.removeObject) {
                array.removeObject(value);
            }
            // normal array
            var index = $.inArray(value, array);
            if (index > 0)
                array.splice(index);
        },

        addSpecific: function(array, value) {
            // it's an ember array
            if (array.pushObject) {
                array.pushObject(value);
            }
            // normal array
            array.push(value);
        },

        sortByComputedProperty: function(collection, sortOrder, propertyComputer) {
            var factor = sortOrder ? 1 : -1;

            return collection.sort(function (objectA, objectB) {

                var valA = propertyComputer(objectA);
                var valB = propertyComputer(objectB);

                // handle no text
                if (!valA)
                    return (valB ? -1 : 0) * factor;
                if (!valB)
                    return 1 * factor;

                // numeric and string
                if ($.isNumeric(valA) && $.isNumeric(valB))
                    return (valA - valB) * factor;
                else
                    return valA.toString().localeCompare(valB.toString()) * factor;
            });
        },

        sortByProperty: function (collection, sortOrder, property) {

            return this.sortByComputedProperty(collection,
                sortOrder,
                function (object) {
                    return object[property];
                });
        }

    };
});