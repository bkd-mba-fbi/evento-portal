define([
    'ember',
    'application',
    'api',
    'globalize',
    'translate',
    'App/helpers'
], function (ember, app, api, globalize, translate, helpers) {

    //console.log(helpers);
    // returns first non empty argument
    var firstNonEmptyValue = function () {
        for (var key in arguments) {
            if (!ember.isEmpty(arguments[key])) {
                return arguments[key];
            }
        }
        return null;
    };

    // removes empty details
    var removeEmptyValues = function (array) {
        return ember.$.grep(array, function (element) {
            return !ember.isEmpty(element.value);
        });
    };

    var getAdressString = function (personPropertys) {
        var addressLine1 = personPropertys.AddressLine1 === null ? '' : personPropertys.AddressLine1 + '\n';
        var addressLine2 = personPropertys.AddressLine2 === null ? '' : personPropertys.AddressLine2 + '\n';
        var zip = personPropertys.Zip === null ? '' : personPropertys.Zip; 
        var location = personPropertys.Location === null ? '' : personPropertys.Location;
        var adresse = zip === '' ? addressLine1 + addressLine2 + '' + location : addressLine1 + addressLine2 + zip + ' ' + location;
        return adresse;
    }


    app.CacheService = ember.Service.extend({
        cache: {events: {}, people: {}, subscriptions: {}},


        // returns an ember object with the property isLoading set to true
        // and fetches an event
        // when the event is loaded, isLoading is set to false
        getEvent: function (idEvent) {
            var cache = this.get('cache').events;    
            var cacheSubscriptions = this.get('cache').subscriptions;       
            if (cache[idEvent] !== undefined) {
                return cache[idEvent];
            }
                
            var event = ember.Object.create();
            var students = ember.Object.create();

            var getReports = api.ember.GetReports(idEvent);
            var getExcel = api.ember.GetExcel(idEvent);
            var getEventPromise = api.ember.getCourses(idEvent);
            var getSubscriptionByEventPromise = api.ember.getSubscriptionByEvent(idEvent);

            ember.RSVP.Promise.all([getReports,getExcel]).then(function (responses) {
                var reports = responses[0];
                var noReports = false;
                if (reports !== null){
                    reports.forEach(function(element) {
                        element.HRef = element.HRef.replace('/CrystalReports/'+element.Id,'/Files/CrystalReports/Anlass/'+element.Id) + '?ids='+ idEvent + '&token=' + api.getLoginToken();
                     }); 
                } else {
                    noReports = true;
                }

                var excel = responses[1];
                if(excel !== null) {
                    excel[0].HRef = '/restApi/Files/ExcelReports/Anlass/'+excel[0].Id + '?ids='+ idEvent + '&token=' + api.getLoginToken(); 
                } else {
                    excel = false;
                }

                event.setProperties({
                    reports: reports,
                    noReports: noReports,
                    excel: excel
                });
            });

            ember.RSVP.Promise.all([getSubscriptionByEventPromise,getEventPromise]).then(function (responses) {
                var subscriptionByEvent = responses[0];                

                if(responses[1].EventTypeId !== 1) {
                    subscriptionByEvent = subscriptionByEvent.filter(ok => ok.IsOkay === true);
                }
                            
                if(subscriptionByEvent.length === 0) {
                    return event.setProperties({
                        idEvent: idEvent,
                        designation: translate.getString('noSubscriptionFound'),
                        isLoading: false
                    });
                }
                
                event.setProperties({
                    idEvent: subscriptionByEvent[0].EventId,
                    designation: responses[1].Designation,
                    //leadership: responses[1].Leadership,
                    //dateString: responses[1].DateString
                });

                //console.log(event);
                //Get Personsdata by Subscription Data
                //Return students Object vor cache
                var filterPersons = '';
                subscriptionByEvent.forEach(function(item) {
                    filterPersons = filterPersons + ';' + item.PersonId;
                });

                var getStudentPromise = api.ember.getPerson('?filter.Id='+filterPersons +'&sort=Lastname.asc&sort=Firstname.asc');
               
                ember.RSVP.Promise.all([getStudentPromise]).then(function (response) {
                    studentResponse = response[0];

                    //console.log(response);
                    //Create fullname property with LastName and FirstName. Also create the Email to Students string
                    var emailsTo = '';
                    studentResponse.forEach(function(item) {
                        var middleName = item.MiddleName === null ? '' : ' ' + firstNonEmptyValue(item.MiddleName)
                        var fullname = item.LastName + ' ' + item.FirstName + middleName;
                        item.Fullname = fullname;

                        //set IdSubscription
                        subscriptionByEvent.forEach(function(subscription) {
                            if(subscription.PersonId == item.Id) {
                                item.IdSubscription = subscription.IdSubscription;
                            } 
                        });

                        cacheSubscriptions[item.Id] = item;
                        var email = firstNonEmptyValue(item.DisplayEmail,item.Email,item.Email2) !== null ? firstNonEmptyValue(item.DisplayEmail,item.Email,item.Email2) : 'MailNotFound';
                        emailsTo = emailsTo + ';' + fullname + ' <'+ email + '>';
                    });
                    //console.log(emailsTo);

                    //sort Object to fullname property
                    studentResponse = studentResponse.sort(helpers.sortByProperty('Fullname'));

                    //console.log(studentResponse);
                    //return studentResponse;
                    students.set('data',studentResponse);
                    event.setProperties({
                        isLoading: false,
                        emailsToStudents: 'mailto:'+ emailsTo,
                        representativeMailTo: '',             
                        students: studentResponse.map(function (item) {  
                            //console.log(item);
                            var student = ember.Object.create(); 
                            student.setProperties(
                                {
                                idPerson: item.Id,
                                photo: api.getPersonPictureUrl(item.Id),
                                fullname: item.Fullname,
                            });  
                            return student;
                        }),  
                    })
                });
            
            });

            //Workaround
            setTimeout(function(){
                if(event.idEvent === undefined) {
                    return event.setProperties({
                        idEvent: idEvent,
                        designation: translate.getString('eventTypeNotSupported'),
                        isLoading: false
                    });
                }
            },3000);
           

            event.set('isLoading', true);
            cache[idEvent] = event;
            return event;
        },

        // returns an ember object with the property isLoading set to true
        // and fetches data about a student its parents and an employer
        // when the event is loaded, isLoading is set to false
        getStudentData: function (idPerson) {
            var cache = this.get('cache').people;
            var studentData = this.get('cache').subscriptions[idPerson];
            //console.log(studentData);

            //Its important, if student ist not in cache
            if (studentData === undefined) {
                location =  location.href.substring(0,location.href.lastIndexOf('/'));
            }
            //console.log(this.get('cache')); 
            //console.log(event);
            //console.log(studentData);
            if (cache[idPerson] !== undefined) {
                return cache[idPerson];
            }

            var data = ember.Object.create({student: {data: []}, parents: {data: []}, employer: {data: []}, details: {data: []}});

            // titles
            data.student.title = studentData.Gender === 'M' ? translate.getString('studentM') : translate.getString('studentF');
            data.parents.title = translate.getString('legalRepresentatives');
            data.employer.title = translate.getString('apprenticeship');
            data.details.title = translate.getString('subscriptionDetails');

            data.student.data = removeEmptyValues([
                {value: studentData.Fullname + ' ('+ studentData.Gender +')' + '\n' + globalize.format(new Date(studentData.Birthdate), 'dd.MM.yyyy')},
                {value: ' '},
                {value: getAdressString(studentData)},
                {href: 'tel', value: firstNonEmptyValue(studentData.PhoneMobile, studentData.PhonePrivate)},
                {href: 'mailto', value: firstNonEmptyValue(studentData.Email, studentData.Email2)},
                {value: ' '},
            ]);            

            //ember.Object.create({legalRepresentativesIds: [], apprenticeship: [], trainee: []});
            var subscriptionDetailsBySubscriptionPromise = api.ember.getSubscriptionDetailsBySubscription(studentData.IdSubscription);    
            var LegalRepresentativesPromise =  api.ember.LegalRepresentativesByStudent(idPerson);
            var ApprenticeshipContractsCurrentPromise =  api.ember.ApprenticeshipContractsCurrent(idPerson);

            ember.RSVP.Promise.all([subscriptionDetailsBySubscriptionPromise]).then(function (responses) {
                data.set('hasSubscriptionDetails',false)
                if (responses[0].length > 0) {
                    responses[0].forEach(function(subscriptionDetail) {
                        if(subscriptionDetail.Value !== null || subscriptionDetail.VssStyle === 'HE') {

                            subscriptionDetail.Value = subscriptionDetail.VssStyle === 'HE' ? '' : subscriptionDetail.Value;
                            
                            data.details.data = ember.$.merge(data.details.data, (
                                removeEmptyValues([
                                {   label: subscriptionDetail.VssDesignation,
                                    value: helpers.subscriptionDetailGetValue(subscriptionDetail), 
                                    isHeader: subscriptionDetail.VssStyle === 'HE' ? true : false,
                                    isFile: helpers.subscriptionDetailGetFile(subscriptionDetail) === null ? false : true, 
                                    file: helpers.subscriptionDetailGetFile(subscriptionDetail) 
                                } 
                                ])
                            ));
                            data.set('hasSubscriptionDetails',true)
                            
                        }
                    });

                }
            });

            ember.RSVP.Promise.all([LegalRepresentativesPromise,ApprenticeshipContractsCurrentPromise]).then(function (responses) {
                //console.log(responses);

                var relationshipModel = {representativeIds: [], apprenticeship: [] }; 
                responses[0].forEach(function(representative) {
                    relationshipModel.representativeIds.push(representative.RepresentativeId);
                });
                responses[1].forEach(function(apprenticeship) {
                var apprenticeshipModel = apprenticeship.CompanyId + '|' +  apprenticeship.CompanyName + '|' + apprenticeship.JobTrainer + '|' +  globalize.format(new Date(apprenticeship.ContractDateFrom), 'dd.MM.yyyy') + ' - ' +  globalize.format(new Date(apprenticeship.ContractDateTo), 'dd.MM.yyyy');
                    relationshipModel.apprenticeship.push(apprenticeshipModel);             
                })
                //console.log(relationshipModel);
                data.set('hasRepresentative', false); 
                var filterPersons = '';
                relationshipModel.representativeIds.forEach(function(representative) {
                    filterPersons = filterPersons + ';' + representative;
                    data.set('hasRepresentative', true); 
                });
                data.set('hasApprenticeship', false); 
                relationshipModel.apprenticeship.forEach(function(apprenticeship) {
                    var companyId = apprenticeship.split('|')[0] === undefined || apprenticeship.split('|')[0] === 'null' ? 0 : apprenticeship.split('|')[0];
                    var jobTrainer = apprenticeship.split('|')[2] === undefined || apprenticeship.split('|')[2] === 'null' ? 0 : apprenticeship.split('|')[2];
                    filterPersons = filterPersons + ';' + companyId + ';' + jobTrainer;
                    data.set('hasApprenticeship', true); 
                })

                //console.log(filterPersons);               
                if (filterPersons !== '') {
                    api.ember.getPerson('?filter.Id='+filterPersons).then(function (response){
                        //sort Personen because Firma first in foreach
                        response = response.sort(function(a, b){return (a.FormOfAddressId > b.FormOfAddressId) ? 1 : -1});    
                        //console.log(relationshipModel);
                        response.forEach(function(person) {
    
                            // parents
                            relationshipModel.representativeIds.forEach(function(representative) {
    
                                if(person.Id === representative) {
                                    //console.log(parent);
                                    data.parents.data = ember.$.merge(data.parents.data, (
                                        removeEmptyValues([
                                            {value:  person.LastName + ' ' + person.FirstName },
                                            {value: getAdressString(person)},
                                            {href: 'tel', value: firstNonEmptyValue(person.PhoneMobile, person.PhonePrivate)},
                                            {href: 'mailto', value: firstNonEmptyValue(person.Email, person.Email2)},
                                            {value: ' '}
                                        ])
                                    ));
                                }
                            });
    
                            // apprenticeship and trainee
                            relationshipModel.apprenticeship.forEach(function(apprenticeship) {
    
                                var companyId = apprenticeship.split('|')[0] === undefined ? null : apprenticeship.split('|')[0];
                                var CompanyName = apprenticeship.split('|')[1] === undefined ? null : apprenticeship.split('|')[1];
                                var jobTrainer = apprenticeship.split('|')[2] === undefined ? null : apprenticeship.split('|')[2];
                                var contractDateFromTo = apprenticeship.split('|')[3] === undefined ? null : apprenticeship.split('|')[3];
    
                                // apprenticeship
                                if(person.Id === parseInt(companyId)) {
                                    data.employer.data = ember.$.merge(data.employer.data, (
                                        removeEmptyValues([
                                            {value: CompanyName},
                                            {value: getAdressString(person)},
                                            {href: 'tel', value: firstNonEmptyValue(person.TelG, person.Mobile)},
                                            {href: 'mailto', value: firstNonEmptyValue(person.Email, person.Email2)},
                                            {value: ' '},
                                            {value: contractDateFromTo === null ? '' : translate.getString('contractDateFromTo')  + '\n' + contractDateFromTo},
                                            {value: ' '}
                                            
                                        ])
                                    ));
                                }
    
                                // trainee
                                if(person.Id === parseInt(jobTrainer)) {
                                    data.employer.data = ember.$.merge(data.employer.data, (
                                        removeEmptyValues([
                                            {value:  translate.getString('trainee') },
                                            {value:  person.LastName + ' ' + person.FirstName },
                                            {href: 'tel', value: firstNonEmptyValue(person.TelG, person.Mobile)},
                                            {href: 'mailto', value: firstNonEmptyValue(person.Email, person.Email2)},
                                        ])
                                    ));
                                }
                            })
                          
    
    
                        });
                        data.set('isLoading', false); 
                    });
                } else {
                    data.set('isLoading', false); 
                }
            });

            // return the object
            // when the api requests are finished the object properties are set
            data.set('isLoading', true);
            cache[idPerson] = data;
            return data;
        },

        representativeMailTo: function (idEvent) {
            var cache = this.get('cache').events[idEvent];
            console.log(cache);
            
            if (cache.representativeMailTo !== '') {
                return cache.representativeMailTo;
            }
            cache.representativeMailTo = 'mailto:'
            
            var cacheStudents = this.get('cache').events[idEvent].students;    

            var filterStudents = '';
            cacheStudents.forEach(function(students){
                filterStudents = filterStudents + ';' + students.idPerson;
            });
            //console.log(filterStudents);


            var legalRepresentativesPromise = api.ember.LegalRepresentatives('?filter.StudentId='+filterStudents);
            //console.log(data);

            ember.RSVP.Promise.all([legalRepresentativesPromise]).then(function (responses) {
                console.log(responses);
                var legalRepresentatives = [];
                responses[0].forEach(function(representative) {
                    legalRepresentatives.push(representative.RepresentativeId);
                });
                                
                var filterPersons = '';
                legalRepresentatives.forEach(function(representative) {
                    filterPersons = filterPersons + ';' + representative;
                });
             
                //var PersonlegalRepresentativesPromise = api.ember.getPerson('?fields=LastName,FirstName,Email,Email2&filter.Id='+filterPersons);
                //ember.RSVP.Promise.all([PersonlegalRepresentativesPromise]).then(function (responses) {
                var data = ember.Object.create();
                data.mailto = api.ember.getPerson('?fields=LastName,FirstName,Email,Email2&filter.Id='+filterPersons).then(function (response){
                //console.log(response);
                //var response = responses[0];
                var emailsTo = 'mailto:';
                response.forEach(function(item) {
                    var fullname = item.LastName + ' ' + item.FirstName;
                    var email = firstNonEmptyValue(item.DisplayEmail,item.Email,item.Email2) !== null ? firstNonEmptyValue(item.DisplayEmail,item.Email,item.Email2) : 'MailNotFound';
                    emailsTo = emailsTo + ';' + fullname + ' <'+ email + '>';
                });
                //console.log(emailsTo);
                //data.mailto = emailsTo;
                //console.log(data);
                cache.setProperties({representativeMailTo: emailsTo}); 
                return emailsTo;

                });
                console.log(data);
                return data.mailto;
            });

            //console.log(data.mailto);
            //cache.representativeMailTo = data.mailto;
            console.log(cache);
            //sarwtz.set('isLoading', true);
            return cache.representativeMailTo;
            
        }
    });
});