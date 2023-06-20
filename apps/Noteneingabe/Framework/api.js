define([
    'jquery',
    'configService',
    'ember',
    'storage',
    'constants',
    'loginHelpers'
], function ($, appConfig, ember, storage, constants, loginHelpers) {
	var tryParseJson = function (str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    }
    /// <summary>module to handle all calls to the REST API that are not handled by Ember.js</summary>
    var api = {
        userWasActive: false,

        ember: {
            getEvent: function(id) {
                return api.getEmber('Events/' + id);
            },
            getPerson: function(id) {
                return api.getEmber('Persons/' + id);
            },
            getConfigurations: function(configType) {
                return api.getEmber('Configurations/' + configType);
            },
            getAddresses: function(idPerson) {
                return api.getEmber('Addresses/?idPerson=' + idPerson);
            },
            getAddressSchema: function(idPerson) {
                return api.getEmber('Addresses/schema/');
            },
            getLanguages: function() {
                return api.getEmber('EventoLookUps/Languages', true);
            },
            getFormsOfAddresses: function (isAddress) {
                isAddress = !isAddress ? false : isAddress;
                return api.getEmber('FormsOfAddress/?isAddress=' + isAddress, true);
            },
            getCountries: function() {
                return api.getEmber('Countries/', true);
            },
            getStatisticCountries: function () {
                return api.getEmber('Statistics/HomeCountries', true);
            },
            getNationalities: function () {
                return api.getEmber('Statistics/Nationalities', true);
            },
            getStayPermits: function () {
                return api.getEmber('Statistics/StayPermits', true);
            },
            getOnlaWorkProgresses: function(idEvent) {
                if (idEvent)
                    return api.getEmber('OnlaWorkProgresses/?IdEvent=' + idEvent);
                return api.getEmber('OnlaWorkProgresses/');
            },
            getSubscriptionDetails: function(idSubscription) {
                return api.getEmber('SubscriptionDetails/?IdSubscription=' + idSubscription);
            },
            getSubscriptionDetailsByEvent: function (idEvent) {
                return api.getEmber('SubscriptionDetails/?IdEvent=' + idEvent);
            },
            getSubscription: function(idSubscription) {
                return api.getEmber('Subscriptions/' + idSubscription);
            },
            getEligiblitySubscriptions: function(idSubscriptionStg) {
                return api.getEmber('Subscriptions/Eligibility/' + idSubscriptionStg);
            },
            getSubscriptionPayment: function(idSubscription) {
                return api.getEmber('SubscriptionPayments/' + idSubscription);
            },
            getStatusProcesses: function(direction, idStatus, onlyWorkStatus) {
                return api.getEmber('StatusProcesses/' +
                    direction +
                    '/?idStatus=' +
                    idStatus +
                    '&onlyWorkStatus=' +
                    onlyWorkStatus);
            },
            getSubscriptionDetailDependencies: function(idEvent) {
                return api.getEmber('SubscriptionDetailDependencies/?idEvent=' + idEvent);
            },
            getOpenInvoice: function(idOpenInvoice) {
                return api.getEmber('OpenInvoices/' + idOpenInvoice);
            },
            getOpenInvoiceByIdSubscription: function(idSubscription) {
                return api.getEmber('OpenInvoices/?idSubscription=' + idSubscription);
            },
            getKindOfPaymentByIdSubscription: function(idSubscription) {
                return api.getEmber('KindOfPayments/subscription/' + idSubscription);
            },
            getKindOfPaymentByIdOpenInvoice: function(idOpenInvoice) {
                return api.getEmber('KindOfPayments/invoice/' + idOpenInvoice);
            },
            getOnlinePaymentFormData: function(idOpenInvoice, handleUnhandled) {
                return api.getEmber('Payments/postfinance/' + idOpenInvoice, handleUnhandled);
            },
            getPersonalDataSheets: function (id) {
                return api.getEmber('PersonalDataSheets/?idPerson=' + id);
            },
            getPersonalDataQuestions: function() {
                return api.getEmber('PersonalDataQuestions/');
            },
            getPersonalDataAnswers: function (idSheet) {
                return api.getEmber('PersonalDataAnswers/?idSheet=' + idSheet);
            },
            getCantons: function() {
                return api.getEmber('EventoLookUps/Cantons');
            },
            getCities: function() {
                return api.getEmber('Statistics/Cities');
            },
            getEventContactInformation: function (idEvent, idPerson) {
                return api.getEmber('Texts/EventContactInformations/?idEvent=' + idEvent + '&idPerson=' + idPerson);
            },
            getEventSchoolDesignation: function (idEvent) {
                return api.getEmber('Texts/EventSchoolDesignations/?idEvent=' + idEvent);
            },
            getFileToken: function () {
                return api.getEmber('Tokens/fileToken');
            },
            getGradingItems: function(idEvent) {
                return api.getEmber('GradingItems/?idEvent=' + idEvent);
            },
            getGradingScale: function(idGradingScale) {
                return api.getEmber('GradingScales/' + idGradingScale);
            },
            getCoursesToEvaluate: function() {
                return api.getEmber('Courses/?expand=EvaluationStatus');
            },
            getEventsToBeGraded: function() {
                return api.getEmber('/Events/Gradings');
            },
        },

        //common urls
        getDialogGroupUrl: function(dataClassId, dataKey) {
            return appConfig.apiUrl + '/DialogGroups/' + dataClassId + '/' + dataKey;
        },

        getDialogUrl: function(dataClassId, dataKey, dialogType) {
            return appConfig.apiUrl + '/Dialogs/' + dataClassId + '/' + dataKey + '/' + dialogType;
        },

        // file urls
        getCrystalReportUrl: function (context, id, ids, token) {

            if (context.toLowerCase() === 'personzeugnis')
                context = 'zeugnis';

            return appConfig.apiUrl +
                '/Files/CrystalReports/' +
                context +
                '/' +
                id +
                '?ids=' +
                ids +
                '&token=' +
                (token ? token : api.getLoginToken());
        },

        getPersonPictureUrl: function(id) {
            return appConfig.apiUrl + '/Files/personPictures/' + id + '?token=' + api.getLoginToken();
        },

        getExcelGradingListUrl: function(idEvent, ads) {
            return appConfig.apiUrl +
                '/Files/ExcelGradingLists/' +
                idEvent +
                '?ads=' +
                ads +
                '&token=' +
                api.getLoginToken();
        },

        getSubscriptionDetailFileUrl: function(idObject, fileName, token) {
            return appConfig.apiUrl +
                '/Files/SubscriptionDetails/' +
                idObject +
                '?fileName=' +
                fileName +
                '&token=' +
                (token ? token : api.getLoginToken()) +
                '&random=' +
                Math.random();
        },

        // api calls
        getPreferredLanguages: function(success, error) {
            api.get('Helpers/PreferredLanguages', success, error, true);
        },

        getSubstituteEntity: function(dataClassId, dataKey, parentDataClassId, parentDataKey, success) {
            api.get('EntityInfos/' +
                dataClassId +
                '/' +
                dataKey +
                '/?parentDataClass=' +
                parentDataClassId +
                '&parentKey=' +
                parentDataKey,
                success);
        },

        addPersonCommentary: function(commentary, id, success) {
            api.post('Persons/Commentary/' + id, commentary, success);
        },

        getUserSettings: function (success) {
            var tokenPayload = loginHelpers.parseJwt(storage.access_token());
            tokenPayload['ApplicationScope'] = tokenPayload.scope;
            tokenPayload['UiCulture'] = tokenPayload.culture_info;
            tokenPayload['IdPerson'] = tokenPayload.id_person;
            tokenPayload['FullName'] = tokenPayload.fullname;
            tokenPayload['Id'] = tokenPayload.username;
            success(tokenPayload);
        },

        getSearchDefinition: function(dataClassId, designation, success, error) {
            api.get('Search/Definitions/' + dataClassId + '/' + designation, success, error);
        },

        getSearchResult: function(searchDefinition, success) {
            api.post('Search/', searchDefinition, success);
        },
        getStatusProcesses: function(direction, idStatus, onlyWorkStatus, success) {
            return api.get('StatusProcesses/' +
                direction +
                '/?idStatus=' +
                idStatus +
                '&onlyWorkStatus=' +
                onlyWorkStatus,
                success);
        },

        createAddress: function(address, success, error) {
            return api.post('Addresses/', address, success, error);
        },

        createSubscription: function(idPerson, idEvent, success, error) {
            var subscription = {
                IdPerson: idPerson,
                IdEvent: idEvent
            };
            api.post('Subscriptions/', subscription, success, error);
        },

        updateSubscriptionDetail: function(subscriptionDetail, success, error) {
            api.put('SubscriptionDetails/' + subscriptionDetail.IdObject, subscriptionDetail, success, error);
        },

        updateSubscriptionDetailFile: function(idObject, file, filename, merge, success, error) {
            return api.postFile('Files/SubscriptionDetails/' +
                idObject +
                '?filename=' +
                filename +
                '&merge=' +
                merge +
                '&token=' +
                api.getLoginToken(),
                file,
                success,
                error, 
                undefined);
        },

        deleteSubscriptionDetailFile: function(idObject) {
            return api.del('Files/SubscriptionDetails/' + idObject + '?token=' + api.getLoginToken());
        },

        getAvailableCrystalReports: function(context, ids, keys, success, error) {
            var idString = ids;
            if (ids instanceof Array)
                idString = ids.join();
            var keyString = keys;
            if (keys instanceof Array)
                keyString = keys.join();
            if (keyString === undefined)
                keyString = '';

            if (context.toLowerCase() === 'personzeugnis')
                context = 'zeugnis';

            api.get('CrystalReports/AvailableReports/' + context + '?ids=' + idString + '&keys=' + keyString, success, error);
        },

        existsLoginToken: function() {
            var stored = storage.access_token();
            return stored && stored.length > 0;
        },

        getLoginToken: function() {
            return storage.access_token();
        },

        getTokenExpiration: function() {
            return storage.token_expire();
        },

        updatePerson: function(person, success, error) {
            api.put('Persons/' + person.IdObject, person, success, error);
        },

        updateAddress: function (address, success, error) {
            api.put('Addresses/' + address.IdObject, address, success, error);
        },

        getStatusHistory: function(id1, id2, dataClassId, idStatus, success) {
            return api.get('StatusHistories/?id1=' +
                id1 +
                '&id2=' +
                id2 +
                '&dataClassId=' +
                dataClassId +
                '&idStatus=' +
                idStatus,
                success);
        },

        //Grading
        updateGradingItem: function(model, success, error) {
            api.put('GradingItems/' + model.IdSubscription, model, success, error);
        },

        updateGradingItems: function(idEvent, models, success, error) {
            api.put('GradingItems/?idEvent=' + idEvent, models, success, error);
        },

        updateExcelGradingList: function(file, idEvent, ads, success, error) {
            api.postFile('Files/ExcelGradingLists/' + idEvent + '?ads=' + ads + '&token=' + api.getLoginToken(),
                file,
                success, error);
        },

        //PersonalDataSheet
        createPersonalDataSheet: function (success, error) {
            api.post('PersonalDataSheets/', { IdPerson: storage.userSettings.personId() }, success, error);
        },

        updatePersonalDataSheet: function (model, success, error) {
            api.put('PersonalDataSheets/' + model.Id, model, success, error);
        },
        
        //PersonalDataAnswer
        createPersonalDataAnswer: function (idDataSheet, idQuestion, yesNo, cantonIdELK, nationalityIdLFS, personalDataAnswerParagraphD, success, error) {
            var answer = {
                IdPersonalDataSheet: idDataSheet,
                IdPersonalDataQuestion: idQuestion,
                YesNo: yesNo,
                CantonIdELK: cantonIdELK,
                NationalityIdLFS: nationalityIdLFS,
                PersonalDataAnswerParagraphD: personalDataAnswerParagraphD
        };
            api.post('PersonalDataAnswers/', answer, success, error);
        },

        updatePersonalDataAnswer: function (model, success, error) {
            api.put('PersonalDataAnswers/' + model.Id, model, success, error);
        },

        deletePersonalDataAnswer: function (idPda, success, error) {
            api.del('PersonalDataAnswers/' + idPda, success, error);
        },

        //Status
        processStatus: function(statusProcess, success, error) {
            api.post('StatusProcesses/', statusProcess, success, error);
        },

        //payment
        getPostfinance: function (idOpenInvoice, returnUrl, success, error) {
            var parts = returnUrl.split('#');
            var hashParts = parts[1].split('/');
            // re-encode all url segments of ember path because of bug in ember
            for (var i = 0; i < hashParts.length; i++)
                hashParts[i] = encodeURIComponent(decodeURIComponent(decodeURI(hashParts[i])));

            api.get('Payments/postfinance/' + idOpenInvoice,
                success,
                error,
                undefined,
                { 'CLX-Referrer': parts[0] + '#' + hashParts.join('/') });
        },

        updateOpenInvoice: function (openInvoice, success, error) {
            this.put('OpenInvoices/' + openInvoice.Id, openInvoice, success, error);
        },

        //Base functions
        init: function () {
            if (!api.existsLoginToken())
                return;

            var that = api;
            $.ajaxSetup({
                headers: that.getBaseHeaders(),
                converters: {
                    "text json": function (response) {
                        return (response == "") ? null : JSON.parse(response);
                    },
                }
            });
            $.support.cors = true;
        },

        getBaseHeaders: function() {
            return {
                'CLX-Authorization': 'token_type=' + appConfig.tokenType + ', access_token=' + this.getLoginToken()
            }
        },

        get: function (relativeUrl, success, error, ignoreToken, headers) {
            api.call('GET', relativeUrl, null, success, error, ignoreToken, headers);
        },
        getEmber: function (relativeUrl, doHandledUnhandled) {
            return new ember.RSVP.Promise(function(resolve, reject) {
                api.get(relativeUrl,
                    function(data) {
                        resolve(data);
                    },
                    function(jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status === 409) {
                            resolve({
                                hasError: true,
                                errorMessage: tryParseJson(jqXHR.responseJSON) || jqXHR.responseJSON
                            });
                            return false;
                        }
                        if (doHandledUnhandled)
                            resolve({
                                hasError: true
                            });
                        return true;
                    });
            });
        },
        post: function (relativeUrl, data, success, error, ignoreToken) {
            api.call('POST', relativeUrl, data, success, error, ignoreToken);
        },
        put: function (relativeUrl, data, success, error, ignoreToken) {
            api.call('PUT', relativeUrl, data, success, error, ignoreToken);
        },
        del: function (relativeUrl, success, error, ignoreToken) {
            api.call('DELETE', relativeUrl, null, success, error, ignoreToken);
        },
        putEmber: function () {
            
        },
        postFile: function (relativeUrl, file, success, error, ignoreToken) {
            if (file instanceof ArrayBuffer) {
                api.postFileBuffer(relativeUrl, file, success, error, ignoreToken);
                return;
            }

            var fr = new FileReader();
            if (FileReader && file) {
                fr.readAsArrayBuffer(file);
                fr.onload = function () {
                    var byteArray = fr.result;
                    api.postFileBuffer(relativeUrl, byteArray, success, error, ignoreToken);
                };
            }
        },

        postFileBuffer: function(relativeUrl, buffer, success, error, ignoreToken) {
            if (!ignoreToken) {
                loginHelpers.autoCheckForLogin();
            }
            api.userWasActive = true;
            $.ajax({
                type: 'POST',
                url: appConfig.apiUrl + '/' + relativeUrl,
                data: buffer,
                contentType: false,
                processData: false,
                success: success,
                error: function (jqXHR, textStatus, errorThrown) {
                    api.handleError('POST', appConfig.apiUrl + '/' + relativeUrl, error, success, jqXHR, textStatus, errorThrown);
                }
            });
        },

        call: function (method, relativeUrl, data, success, error, ignoreToken, headers) {
            if (!ignoreToken) {
                loginHelpers.autoCheckForLogin();
            }
            api.userWasActive = true;
            var url = appConfig.apiUrl + '/' + relativeUrl; 
            $.ajax({
                type: method,
                url: url,
                data: data ? JSON.stringify(data) : null,
                dataType: 'json',
                contentType: method === 'GET' ? 'text/javascript' : 'application/json',
                success: function (data, textStatus, request) {
                    var refreshTokenHeader = request.getResponseHeader(constants.responseHeaders.clxRefreshToken);
                    if (refreshTokenHeader) {
                        loginHelpers.refreshToken(storage.userSettings.uiCulture());
                    }
                    else if(success)
                        success(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    api.handleError(method, url, error, success, jqXHR, textStatus, errorThrown);
                },
                headers: headers
            });
        },

        handleError: function (method, url, error, success, jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 200) {
                if (success)
                    success();
                return;
            }
            var doInstrumentation = true;
            if (error)
                doInstrumentation = error(jqXHR, textStatus, errorThrown);

            if (jqXHR.status === 409) {
                if (doInstrumentation)
                    ember.Instrumentation.instrument('validationErrorOccurred', jqXHR);
            } else {
                storage.errorInfo({
                    statusCode: jqXHR.status,
                    message: tryParseJson(jqXHR.responseJSON) || jqXHR.responseText,
                    isGet: method === 'GET',
                    isPost: method === 'POST',
                    isPut: method === 'PUT',
                    isDelete: method === 'DELETE',
                    url: url
                });
                if (doInstrumentation)
                    ember.Instrumentation.instrument('errorOccurred');
            }
        }
    };

    api.init();
    return api;
});
