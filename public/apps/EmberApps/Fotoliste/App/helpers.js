define(['constants', 'translate', 'appConfig', 'api'], function (constants, translate, appConfig, api) {
    var subscriptionDetail = {

        subscriptionDetailGetValue: function(subscriptionDetail) {

            var value = subscriptionDetail.Value;
            var vssType = subscriptionDetail.VssType;
            if (!value)
                return ' ';

            if (vssType === 'isYes' || vssType === 'isYesNo') {
                if (subscriptionDetail.ShowAsRadioButtons) {
                    if (value === 'Ja')
                        return translate.getString('yes');
                    else if (value === 'Nein')
                        return translate.getString('no');
                } else
                    return undefined;

            } else if (subscriptionDetail.DropdownItems !== null && subscriptionDetail.VssStyle !== "CB") {
                var key = value;
                var items = subscriptionDetail.DropdownItems;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].Key === key.toString()) {
                        return items[i].Value;
                    }
                }
                return ' ';
            }

            return value;
        },

        subscriptionDetailGetFile: function(subscriptionDetail) {
            if(subscriptionDetail.VssStyle === 'PD' || subscriptionDetail.VssStyle === 'PF' || subscriptionDetail.VssStyle === 'DA' ) {
                return appConfig.apiUrl + '/Files/SubscriptionDetails/' + subscriptionDetail.Id +'?token=' + api.getLoginToken();
            }
            return null;
        },

        // https://medium.com/@asadise/sorting-a-json-array-according-one-property-in-javascript-18b1d22cd9e9
        // https://www.jstips.co/en/javascript/sorting-strings-with-accented-characters/
        sortByProperty: function(property){  
            return function(a,b){  
               if(a[property].localeCompare(b[property]) > b[property].localeCompare(a[property]))  
                  return 1;  
               else if (a[property].localeCompare(b[property]) < b[property].localeCompare(a[property]))  
                  return -1;  
           
               return 0;  
            }  
         }

    }

    return subscriptionDetail;
});