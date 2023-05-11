define([
    'ember',
    'application',
    'api',
    'translate',
    'constants'
], function (ember, app, api, translate, constants) {
    app.ValidationHelpersService = ember.Service.extend({
        // returns true if value is a possible value for type
        // this could be extended to work with more datatypes
        checkDatatype: function (type, value) {
            switch (type) {
                case constants.vssType.IntField:
                    return /^\d+$/.test(value);

                case constants.vssType.Text:
                    return true;

                case constants.vssType.MemoText:
                    return true;

                default:
                    return false;
            }
        },

        // this function will be able to use the
        // api.ember.getPerson api function when it gets implemented
        getName: function (personId) {

            return api.ember.getPerson(personId).then(function(data){
                return data.LastName + ' ' + data.FirstName;
            });

        },

        // this function validates a subscriptionDetail and translates ids into strings
        // (e.g. personId 12345 => 'John Doe')
        // in case there is an error the error property is set
        // a promise is returned
        validateSubscriptionDetail: function (cache, subscriptionDetail) {

            if (subscriptionDetail.get('checked') === true) {
                // this item has already been checked
                return ember.RSVP.Promise.resolve();
            }

            var that = this;

            var personId = subscriptionDetail.get('personId');
            var eventId = subscriptionDetail.get('eventId');
            var subscriptionDetailId = subscriptionDetail.get('subscriptionDetailId');
            var newValue = subscriptionDetail.get('newValue');


            return new ember.RSVP.Promise(function (resolve, reject) {

                // Step 1: check if the event exists
                if (cache.events[eventId] !== undefined) {
                    resolve(cache.events[eventId]);
                    return;
                }

                api.ember.getEvent(eventId).then(function (response) {
                    cache.events[eventId] = response;
                    resolve(response);
                });

            }).then(function (response) {
                if (response == null) {
                    subscriptionDetail.set('error', translate.getString('eventDoesNotExist'));
                    throw Error('event does not exist');
                } else if (response.hasError) {
                    subscriptionDetail.set('error', translate.getString('eventDoesNotExist'));
                    throw Error('event does not exist');
                }

                subscriptionDetail.set('event', response.Number);

                eventPersonId = eventId + '_' + personId
                // Step 2: get the subscription for the event
                if (cache.subscriptionDetails[eventPersonId] !== undefined) {
                    
                    if(cache.subscriptionDetails[eventPersonId].name == undefined) {
                        that.getName(personId).then(function (personResponse) {
                            subscriptionDetail.set('name', personResponse);
                        }); 
                    }                     
                    return cache.subscriptionDetails[eventPersonId];
                }

                return api.ember.getSubscriptionByIdEventPerson(eventId, personId).then(function (response) {

                    if (response.length === 0) {
                        // the student does not exist or is not subscribed to the event
                        subscriptionDetail.set('error', translate.getString('noSubscription'));
                        throw Error('student is not subscribed to the event');
                    } else {
                        cache.subscriptionDetails[eventPersonId] = response;
                        // Step 3: get the name of the person
                        that.getName(personId).then(function (personResponse) {
                            subscriptionDetail.set('name', personResponse);
                        });
                    }

                    return response;
                });

            }).then(function (response) {

                var idSubscription = response[0].IdSubscription;
                if (cache.subscriptionDetails[idSubscription] !== undefined) {
                    return cache.subscriptionDetails[idSubscription];
                }
               
                return api.ember.SubscriptionDetailsByIdSubscription(idSubscription).then(function (response) {
                    cache.subscriptionDetails[idSubscription] = response;
                    return response;
                });

            }).then(function (response) {
                var subscriptionDetailsByEvent = {};

                // transform the response into the following format:
                // {
                //   <subscriptionDetailId>: {
                //     name : string,
                //     students: {
                //       <studentId>: {
                //         value : string,
                //         type : int, (dataType)
                //         raw : object (returned by api
                //       },
                //       ...
                //     }
                //   },
                //   ...
                // }
                response.forEach(function (item) {
                    if (subscriptionDetailsByEvent[item.IdAnmeldeVSS] === undefined) {
                        subscriptionDetailsByEvent[item.IdAnmeldeVSS] = {
                            name: item.VssBezeichnung,
                            students: {}
                        };
                    }

                    subscriptionDetailsByEvent[item.IdAnmeldeVSS].students[item.IdPerson] = {
                        value: item.Value,
                        type: item.VssTypEx,
                        raw: item
                    };
                });

                var subscriptionDetailByEvent = subscriptionDetailsByEvent[subscriptionDetailId];

                if (subscriptionDetailByEvent === undefined) {
                    // the event doesn't have that subscriptionDetail
                    subscriptionDetail.set('error', translate.getString('subscriptionDetailDoesNotExist'));
                    throw Error('subscriptionDetail does not exist');
                }

                var subscriptionDetailName = subscriptionDetailByEvent.name;
                subscriptionDetail.set('subscriptionDetail', subscriptionDetailName);

                var subscriptionDetailForStudent = subscriptionDetailByEvent.students[personId];

                var raw = subscriptionDetailForStudent.raw;

                if (raw.VssStyle !== 'TX' || (
                    raw.VssTypEx !== constants.vssType.IntField &&
                    raw.VssTypEx !== constants.vssType.Text &&
                    raw.VssTypEx !== constants.vssType.MemoText
                )) {
                    // the subscriptiondetails is not (yet) meant to be edited on the internet
                    subscriptionDetail.set('error', translate.getString('notEditable'));
                    throw Error('subscriptionDetail not editable');
                }

                subscriptionDetail.set('oldValue', subscriptionDetailForStudent.value);
                subscriptionDetail.set('raw', subscriptionDetailForStudent.raw);

                if (!that.checkDatatype(subscriptionDetailForStudent.type, newValue)) {
                    // the new value is invalid
                    subscriptionDetail.set('error', translate.getString('invalidSubscriptionDetailValue'));
                    throw Error('the new value is invalid');
                }


 

            }).catch(ember.K /* ignore rejections */).then(function () {

                // done
                subscriptionDetail.set('checked', true);

            });
        }
    });
});