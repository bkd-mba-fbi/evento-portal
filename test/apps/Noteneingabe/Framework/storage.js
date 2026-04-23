// storage object. All access to localStorage or sessionStorage must be over this object
define(function () {
    var storage = {
        // will be called on application initialisation (reload)
        clearTempData: function() {
            this.removeTempInvoice();
        },

        access_token: function(value) {
            return storage.localStoreItem('CLX.LoginToken', value);
        },
        refresh_token: function(value) {
            return storage.localStoreItem('CLX.RefreshToken', value);
        },
        token_expire: function(value) {
            return storage.localStoreItem('CLX.TokenExpire', value);
        },
        clearTokenInformation: function() {
            localStorage.removeItem('CLX.LoginToken');
            localStorage.removeItem('CLX.RefreshToken');
            localStorage.removeItem('CLX.TokenExpire');
        },
        //TODO aneu: maybe those all should be sessionStorage
        dimension: {
            weekdayTextboxWidth: function(value) {
                return storage.localStoreItem('weekdayTextboxWidth', value);
            },
            timeTextboxWidth: function(value) {
                return storage.localStoreItem('timeTextboxWidth', value);
            }
        },

        language: {
            weekdaysShort: function(value) {
                return storage.localStoreItem('weekdaysShort', value);
            }
        },

        userSettings: {
            userId: function(value) {
                return storage.localStoreItem('userId', value);
            },
            uiCulture: function(value) {
                return storage.localStoreItem('uiCulture', value);
            },
            applicationScope: function(value) {
                return storage.localStoreItem('applicationScope', value);
            },
            personId: function(value) {
                return storage.localStoreItem('personId', value);
            }
        },

        searchSettings: {
            lastSearch: function(value) {
                return storage.localStoreItem('searchSettings.lastSearch', value);
            },

            clearSettings: function() {
                localStorage.removeItem('searchSettings.lastSearch');
            }
        },

        dialogSettings: {
            lastTabId: function(value) {
                return storage.sessionStoreItem('dialogSettings.lastTabId', value);
            },
            currentTabId: function(value) {
                return storage.sessionStoreItem('dialogSettings.currentTabId', value);
            }
        },

        tempInvoice: function (value) {
            return storage.sessionStoreItem('tempInvoice', value);
        },
        removeTempInvoice: function(value) {
            storage.removeSessionStoreItem('tempInvoice');
        },

        validationResults: function(value) {
            return storage.sessionStoreItem('validationResults', value);
        },

        dialogHistory: function (value) {
            return storage.sessionStoreItem('dialogHistory', value);
        },

        errorInfo: function(value) {
            return storage.sessionStoreItem('errorInfo', value);
        },

        selectedIdSubscription: function(value) {
            return storage.sessionStoreItem('selectedIdSubscription', value);
        },

        selectedEventDesignation: function (value) {
            return storage.sessionStoreItem('selectedEventDesignation', value);
        },

        removeSelectedSubscriptionInfo: function(value) {
            storage.removeSessionStoreItem('selectedIdSubscription');
            storage.removeSessionStoreItem('selectedEventDesignation');
        },

        entryPointUrl: function (value) {
            return storage.sessionStoreItem('entryPointUrl', value);
        },

        removeEntryPointUrl: function (value) {
            storage.removeSessionStoreItem('entryPointUrl');
        },

        localStoreItem: function (key, value) {
            if (value !== undefined) {
                localStorage.setItem(key, JSON.stringify(value));
                return value;
            } else {
                var item = localStorage.getItem(key);
                if (item !== undefined)
                    return JSON.parse(item);
                else
                    return null;
            }
        },

        sessionStoreItem: function (key, value) {
            if (value !== undefined) {
                sessionStorage.setItem(key, JSON.stringify(value));
                return value;
            } else {
                var item = sessionStorage.getItem(key);
                if (item !== undefined)
                    return JSON.parse(item);
                else
                    return null;
            }
        },

        removeSessionStoreItem: function(key) {
            sessionStorage.removeItem(key);
        }
    };

    return storage;
});