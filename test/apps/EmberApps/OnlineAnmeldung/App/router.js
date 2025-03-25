define([
    'jquery',
    'ember',
    'application',
    'api',
    'storage',
    'settings',
    'eventoHelpers',
    'constants',
    'requiredFieldHelpers',
    'translate',
    'dateHelpers'
], function ($, ember, app, api, storage, settings, eventoHelpers, constants, requiredFieldHelpers, translate, dateHelpers) {

    app.Router.map(function () {
        this.resource('personOverview', { path: '/person' }, function () {
            this.resource('personEdit', { path: '/edit' }, function () { });
            this.resource('addressEdit', { path: '/address/:type/:idAddress' });
            this.resource('addressNew', { path: '/address/:type/new/:idAddressKind' });
        });
        this.resource('subscriptions', { path: '/subscriptions' }, function () {
            this.resource('subscription', { path: '/:eventDesignation/:idSubscription' }, function () {
                this.resource('subscriptionInput', { path: '/input/:idWorkProgress' }, function () {
                    this.resource('payment', { path: '/payment/:invoiceId' });
                    this.resource('paymentResult', { path: '/payment/:invoiceId/:result' });
                    this.resource('subscriptionPayment', { path: '/subscriptionPayment/:idSubscriptionForPayment' });
                });
            });
        });
        this.resource('invoiceLoading', { path: 'invoiceLoading/:invoiceId/:kindOfPaymentId' });
        this.resource('subscriptionNew', { path: 'subscriptions/new' }, function () {
            this.resource('subscriptionNewEntryPoint', { path: '/:idEvent' });
        });
        this.resource('personalDataSheet', { path: '/personalienblatt' }, function() {
            this.resource('personalDataSheetEdit', { path: '/edit' }, function() { });
        });
    });

    app.PersonOverviewRoute = ember.Route.extend({

        renderTemplate: function () {
            this.render({ outlet: 'person' });
        },
        model: function () {
            return ember.RSVP.hash({
                addresses: ember.A(api.ember.getAddresses(storage.userSettings.personId())),
                person: api.ember.getPerson(storage.userSettings.personId()),
                onlaConfigurations: api.ember.getConfigurations('onla')
            });
        },
        afterModel: function (model, transition) {
            if (!eventoHelpers.person.isComplete(model.person)) {
                this.container.lookup('controller:application').toggleProperty('transitionForced');
                this.transitionTo('personEdit');
            } else if (storage.entryPointUrl()) {
                var url = storage.entryPointUrl();
                storage.removeEntryPointUrl();
                location.href = url;
                location.reload();
            }
        }
    });

    app.PersonOverviewIndexRoute = ember.Route.extend({
        model: function () {
            var parentModel = this.modelFor('personOverview');
            var homeAddressKinds = $.grep(parentModel.onlaConfigurations,
                function (pair) {
                    return pair.Key === constants.idConfigurations.homeAddressIdAddressKind;
                });

            var correspondenceAddressKinds = $.grep(parentModel.onlaConfigurations,
                function (pair) {
                    return pair.Key === constants.idConfigurations.correspondenceAddressIdAddressKind;
                });

            var correstondanceDirectAddressKinds = $.grep(parentModel.onlaConfigurations,
                function (pair) {
                    return pair.Key === constants.idConfigurations.correspondenceDirectAddressIdAddressKind;
                });

            var billingAddressKinds = $.grep(parentModel.onlaConfigurations,
                function (pair) {
                    return pair.Key === constants.idConfigurations.billingAddressIdAddressKind;
                });

            var homeAddressKind = homeAddressKinds.length > 0 ? homeAddressKinds[0].Value : undefined;
            var correspondenceAddressKind = correspondenceAddressKinds.length > 0
                ? correspondenceAddressKinds[0].Value
                : undefined;
            var correspondenceDirectAddressKind = correstondanceDirectAddressKinds.length > 0
                ? correstondanceDirectAddressKinds[0].Value
                : undefined;
            var billingAddressKind = billingAddressKinds.length > 0
                ? billingAddressKinds[0].Value
                : undefined;

            var homeAddressMutations = $.grep(parentModel.addresses,
                function (addr) {
                    return addr.IdAddressKind === homeAddressKind;
                });

            var correspondenceAddressMutations = $.grep(parentModel.addresses,
                function (addr) {
                    return addr.IdAddressKind === correspondenceAddressKind;
                });

            // only allow direct editing of address when correspondence is the same person
            var isSameCorrespondence = parentModel.person.CorrespondenceIdPerson === parentModel.person.Id;
            var correspondenceDirectAddressMutations = undefined;
            if (isSameCorrespondence) {
                correspondenceDirectAddressMutations = $.grep(parentModel.addresses,
                function (addr) {
                    return addr.IdAddressKind === correspondenceDirectAddressKind;
                });
            }
            var corrDirectAdrMut = correspondenceDirectAddressMutations &&
                correspondenceDirectAddressMutations.length > 0
                ? correspondenceDirectAddressMutations[0]
                : undefined;
            // only when the address has been created today -> else make a new one and let the server calculate expire date
            if (!corrDirectAdrMut || !dateHelpers.isDateToday(corrDirectAdrMut.ValidFrom))
                corrDirectAdrMut = undefined;

            var billingAddressMutations = $.grep(parentModel.addresses,
                function (addr) {
                    return addr.IdAddressKind === billingAddressKind;
                });

            return new ember.RSVP.hash({
                addresses: parentModel.addresses,
                person: parentModel.person,

                homeAddressMutation: homeAddressMutations && homeAddressMutations.length > 0
                    ? homeAddressMutations[0]
                    : undefined,
                homeAddressKind: homeAddressKind,

                correspondenceAddressMutation: correspondenceAddressMutations &&
                    correspondenceAddressMutations.length > 0
                    ? correspondenceAddressMutations[0]
                    : undefined,
                correspondenceAddressKind: correspondenceAddressKind,

                canChangeCorrespondence: isSameCorrespondence && correspondenceDirectAddressKind,
                correspondenceDirectAddressMutation: corrDirectAdrMut,
                correspondenceDirectAddressKind: correspondenceDirectAddressKind,

                billingAddressMutation: billingAddressMutations && billingAddressMutations.length > 0
                    ? billingAddressMutations[0]
                    : undefined,
                billingAddressKind: billingAddressKind
            });
        },
        afterModel: function (model) {
            ember.set(model.person, 'NativeLanguageTranslated', eventoHelpers.multilanguage.translateNativeLanguage(model.person.NativeLanguage));
            ember.set(model.person, 'StayPermitTranslated', eventoHelpers.multilanguage.translateStayPermit(model.person.StayPermit));
        }
    });

    app.PersonEditRoute = ember.Route.extend({
        actions: {
            closeEdit: function () {
                this.set('personIsComplete', undefined);
                this.transitionTo('personOverview');
                var route = this.container.lookup('route:personOverview');
                route.refresh();
            },

            willTransition: function(transition) {
                if (this.get('personIsComplete') === false)
                    transition.abort();
            },
            didTransition: function () {
                this.container.lookup('controller:application').toggleProperty('transitionedPerson');
            }
        },
        model: function () {
            var person = this.modelFor('personOverview').person;
            ember.set(person, 'RequiredFields', ember.A(person.RequiredFields));
            requiredFieldHelpers.setPersonRequiredFields(person);
            return new ember.RSVP.hash({
                person: person,
                languages: api.ember.getLanguages(),
                countries: api.ember.getCountries(),
                statisticCountries: api.ember.getStatisticCountries(),
                nationalities: api.ember.getNationalities(),
                stayPermits: api.ember.getStayPermits(),
                formsOfAddress: api.ember.getFormsOfAddresses(false)
            });
        },
        afterModel: function (model) {
            $.each(model.languages,
                function() {
                    this.Value = eventoHelpers.multilanguage.translateNativeLanguage(this.Key);
                });
            $.each(model.stayPermits,
                function() {
                    this.Value = eventoHelpers.multilanguage.translateStayPermit(this.Key);
                });
            this.set('personIsComplete', eventoHelpers.person.isComplete(model.person));
        },
        setupController: function (controller, model) {
            controller.set('model', model);

            for (property in model.person)
                controller.addObserver('model.person.' + property, controller, 'modelChanged');
        }
    });

    app.AddressEditRoute = ember.Route.extend({
        model: function (params) {
            var parentModel = this.modelFor('personOverview');
            var currentAddresses = $.grep(parentModel.addresses, function (addr) {
                return addr.Id === parseInt(params.idAddress);
            });
            var address = currentAddresses ? currentAddresses[0] : undefined;
            if (address)
                ember.set(address, 'RequiredFields', ember.A(address.RequiredFields));

            return new ember.RSVP.hash({
                address: address,
                addressType: params.type,
                languages: api.ember.getLanguages(),
                countries: api.ember.getCountries(),
                formsOfAddress: api.ember.getFormsOfAddresses(true)
            });
        }
    });

    app.AddressNewRoute = ember.Route.extend({
        actions: {
            refreshParent: function () {
                var route = this.container.lookup('route:personOverview');
                route.refresh();
            }
        },
        model: function (params) {
            var parentModel = this.modelFor('personOverview');
            this.set('currentAddressKind', params.idAddressKind);
            return new ember.RSVP.hash({
                allAddresses: parentModel.addresses,
                address: api.ember.getAddressSchema(),
                addressType: params.type,
                languages: api.ember.getLanguages(),
                countries: api.ember.getCountries(),
                formsOfAddress: api.ember.getFormsOfAddresses(true)

            });
        },
        afterModel: function (model) {
            if (model) {
                var parentModel = this.modelFor('personOverview');
                model.address.IdAddressKind = this.get('currentAddressKind');
                model.address.IdPerson = storage.userSettings.personId();
                model.address.FirstName = parentModel.person.FirstName;
                model.address.LastName = parentModel.person.LastName;
                model.address.FormOfAddress_Id = parentModel.person.FormOfAddress_Id;
                model.address.Country_Id = parentModel.person.Country_Id;
            }
        }
    });

    app.SubscriptionNewRoute = ember.Route.extend({
        actions: {
            subscriptionCreated: function (subscription, eventDesignation) {
                this.transitionTo('subscriptionInput',
                    encodeURIComponent(eventDesignation),
                    subscription.IdSubscription,
                    subscription.CurrentWorkProgressId);
            }
        },
        model: function(params, transition) {
            var idEvent = transition.params.subscriptionNewEntryPoint
                ? transition.params.subscriptionNewEntryPoint.idEvent
                : undefined;
            var parent = this.modelFor('application');
            if (parent == null)
                parent = this.modelFor('personOverview');
            return new ember.RSVP.hash({
                SelectedIdEvent: idEvent,
                person: parent != null ? parent.person : api.ember.getPerson(storage.userSettings.personId())
            });
        },
        afterModel: function (model, transition) {
            if (!eventoHelpers.person.isComplete(model.person)) {
                storage.entryPointUrl(location.href);
                this.transitionTo('personEdit');
            }
        },
        renderTemplate: function () {
            this.container.lookup('controller:application').set('openSubscriptions', true);
            this.render({ outlet: 'subscriptions' });
        }
    });
    app.SubscriptionsRoute = ember.Route.extend({
        actions: {
            noDataFound: function () {
                this.transitionTo('subscriptionNew');
            },
            subscriptionSelected: function (designation, idSubscription) {
                this.transitionTo('subscription', encodeURIComponent(designation), idSubscription);
            }
        },
        renderTemplate: function () {
            storage.removeSelectedSubscriptionInfo();
            this.render({ outlet: 'subscriptions' });
        },
        model: function() {
            var parent = this.modelFor('application');
            if (parent == null)
                parent = this.modelFor('personOverview');

            return new ember.RSVP.hash({
                person: parent != null ? parent.person : api.ember.getPerson(storage.userSettings.personId())
        });
        },
        afterModel: function (model, transition) {
            if (!eventoHelpers.person.isComplete(model.person)) {
                storage.entryPointUrl(location.href);
                this.transitionTo('personEdit');
            }
        }
    });
    app.SubscriptionRoute = ember.Route.extend({
        actions: {
            openWorkProgressForEdit: function (idProgress) {
                this.transitionTo('subscriptionInput', idProgress);
            }
        },
        model: function (params) {
            // used for parent subscriptions
            var idSubscription = params.idSubscription;
            var eventDesignation = decodeURIComponent(params.eventDesignation);
            if (idSubscription)
                storage.selectedIdSubscription(idSubscription);
            if (eventDesignation)
                storage.selectedEventDesignation(eventDesignation);

            return api.ember.getSubscription(params.idSubscription).then(function (subscription) {
                return new ember.RSVP.hash({
                    WorkProgresses: api.ember.getOnlaWorkProgresses(subscription.IdEvent),
                    SubscriptionDetails: api.ember.getSubscriptionDetails(params.idSubscription),
                    Subscription: subscription,
                    EventDesignation: decodeURIComponent(params.eventDesignation),
                    SubscriptionReports: settings.reports.anmeldung
                });
            });
        },
        afterModel: function (model) {
            var isPast = true;
            $.each(model.WorkProgresses,
                function (index, progress) {
                    if (progress.Id === model.Subscription.CurrentWorkProgressId) {
                        isPast = false; // all following work progresses and the current are not in the past
                        progress.IsCurrent = true;
                    }
                    progress.IsPast = isPast;
                    progress.IsLast = index === model.WorkProgresses.length - 1;
                });
        }
    });
    app.SubscriptionInputRoute = ember.Route.extend({
        actions: {
            openSubscriptionPayment: function (idSubscription) {
                this.transitionTo('subscriptionPayment', idSubscription);
            },
            openInvoicePayment: function (invoiceId) {
                this.transitionTo('payment', invoiceId);
            },
            refreshRoute: function () {
                this.container.lookup('route:subscriptionInput').refresh();
            },
            refreshAll: function () {
                var that = this;
                setTimeout(function() {
                        that.container.lookup('route:subscription').refresh();
                    },
                    100);
            },
            closeRoute: function() {
                this.transitionTo('subscription');
                this.container.lookup('route:subscription').refresh();
                this.container.lookup('route:subscriptions').refresh();
            }
        },

        model: function (params) {
            var parentModel = this.modelFor('subscription');
            var selectedWorkProgressId = parseInt(params.idWorkProgress);
            var selectedWorkProgress = $.grep(parentModel.WorkProgresses, function (progress) {
                return progress.Id === selectedWorkProgressId;
            });
            var workProgresses = [];

            $.each(parentModel.WorkProgresses, function (i, v) {
                var isValid = v.IsPast;
                ember.set(v, 'IsSubsequent', false);
                ember.set(v, 'IsError', false);
                if (v.SubscriptionDetailGroups) {
                    $.each(eventoHelpers.subscriptionDetails.getSubscriptionGroups(v.SubscriptionDetailGroups, parentModel.SubscriptionDetails),
                        function (index, group) {
                            if (!eventoHelpers.subscriptionDetails.isValidStatus(group.validationStatus))
                                isValid = false;
                            if (eventoHelpers.subscriptionDetails.isSubsequentStatus(group.validationStatus))
                                ember.set(v, 'IsSubsequent', true);
                            if (eventoHelpers.subscriptionDetails.isErrorStatus(group.validationStatus))
                                ember.set(v, 'IsError', true);
                        });
                }
                ember.set(v, 'IsValid', isValid);
                if (v.IsError)
                    ember.set(v, 'IsSubsequent', false);
                workProgresses.push(v);
            });
            return new ember.RSVP.hash({
                WorkProgresses: workProgresses,
                SubscriptionDetails: parentModel.SubscriptionDetails,
                Subscription: parentModel.Subscription,
                EventDesignation: parentModel.EventDesignation,
                SelectedWorkProgress: selectedWorkProgress[0],
                SubscriptionPayment: selectedWorkProgress[0].IsPayment ? api.ember.getSubscriptionPayment(parentModel.Subscription.IdSubscription) : undefined,
                NextStatus: api.ember.getStatusProcesses('forward', parentModel.Subscription.IdStatus, true, true).then(function (processes) {
                    if (!processes)
                        return undefined;

                    var successors = $.grep(processes, function (process) {
                        return process.Direction === 'forward';
                    });

                    if (!successors || successors.length === 0) {
                        console.error('no status to process to');
                    }
                    var successor = successors[0]; // always take the first one

                    //load status history to check if the status has been visited already
                    return new ember.RSVP.Promise(function (resolve) {
                        api.getStatusHistory(parentModel.Subscription.IdSubscription,
                            parentModel.Subscription.IdPerson,
                            'PersonenAnmeldung',
                            successor.IdStatus,
                            function (result) {
                                successor.HasBeenVisited = result !== null;
                                resolve(successor);
                            });
                    });
                }),
                SubscriptionDetailDependencies: api.ember.getSubscriptionDetailDependencies(parentModel.Subscription.IdEvent),
                EligibilitySubscriptions: selectedWorkProgress[0].IsEligibilityTest ? api.ember.getEligiblitySubscriptions(parentModel.Subscription.IdSubscription).then(function (subscriptions) {
                    if (!subscriptions || subscriptions.length === 0)
                        return [];

                    var eligibilities = [];
                    return new ember.RSVP.Promise(function(resolve) {
                        $.each(subscriptions,
                            function() {
                                var subscription = this;
                                api.ember.getSubscriptionPayment(subscription.IdSubscription)
                                    .then(function(payment) {
                                        api.ember.getSubscriptionDetails(subscription.IdSubscription)
                                            .then(function(sds) {
                                                var subscriptionDetails = payment.SubscriptionDetailsForPayment.slice();

                                                $.each(sds,
                                                    function (i, sdNew) {
                                                        var alreadyInList = false;
                                                        $.each(subscriptionDetails,
                                                            function (i, sd) {
                                                                if (sd.IdAnmeldeVSS === sdNew.IdAnmeldeVSS) {
                                                                    alreadyInList = true;
                                                                    return false;
                                                                }
                                                                return true;
                                                            });
                                                        if (!alreadyInList) {
                                                            subscriptionDetails.push(sdNew);
                                                        }
                                                    });

                                                subscriptionDetails.sort(function (a, b) {
                                                    return (a.Sort.toUpperCase() > b.Sort.toUpperCase())
                                                        ? 1
                                                        : ((b.Sort.toUpperCase() > a.Sort.toUpperCase())
                                                            ? -1
                                                            : 0);
                                                });
                                                
                                                eligibilities.push({
                                                    SubscriptionPayment: payment,
                                                    Subscription: subscription,
                                                    SubscriptionDetails: subscriptionDetails
                                                });

                                                eligibilities.sort(function (a, b) {
                                                    return (a.Subscription.EventDesignation.toUpperCase() > b.Subscription.EventDesignation.toUpperCase())
                                                        ? 1
                                                        : ((b.Subscription.EventDesignation.toUpperCase() > a.Subscription.EventDesignation.toUpperCase())
                                                            ? -1
                                                            : 0);
                                                });

                                                if (eligibilities.length === subscriptions.length)
                                                    resolve(eligibilities);
                                            });
                                    });
                            });
                    });
                }) : undefined
            });
        },

        afterModel: function(model) {
            $.each(model.WorkProgresses, function(i, p) {
                ember.set(p, 'IsSelected', p.Id === model.SelectedWorkProgress.Id);
            });
        }
    });

    app.SubscriptionPaymentRoute = ember.Route.extend({
        actions: {
            closeRoute: function () {
                this.transitionTo('subscriptionInput');
            },
            openInvoicePayment: function (invoiceId) {
                this.transitionTo('payment', invoiceId);
            }
        },

        model: function (params) {
            var parentModel = this.modelFor('subscriptionInput');
            var idSubscriptionForPayment = params.idSubscriptionForPayment;
            if (parentModel.Subscription.IdSubscription === idSubscriptionForPayment)
                return parentModel;
            else {
                // find from eligibility tests
                if (parentModel.EligibilitySubscriptions && parentModel.EligibilitySubscriptions.length) {
                    var model = undefined;
                    $.each(parentModel.EligibilitySubscriptions, function() {
                        if (this.Subscription.IdSubscription === idSubscriptionForPayment) {
                            model = this;
                            return false;
                        }
                        return true;
                    });
                    if (model)
                        return model;
                }
                // nothing found -> get from server
                return new ember.RSVP.hash({
                    SubscriptionPayment: api.ember.getSubscriptionPayment(idSubscriptionForPayment)
                });
            }
        }
    });

    app.PaymentRoute = ember.Route.extend({
        actions: {
            closeRoute: function (doRefresh) {
                this.transitionTo('subscriptionInput');
                if (doRefresh)
                    this.container.lookup('route:subscriptionInput').refresh();
            }
        },
        model: function (params) {
            this.set('workProgressId', this.paramsFor('subscriptionInput').idWorkProgress);
            var op = storage.tempInvoice();

            return new ember.RSVP.hash({
                invoice: op ? op : api.ember.getOpenInvoice(params.invoiceId),
                fields: api.ember.getOnlinePaymentFormData(params.invoiceId, true),
                payment: api.ember.getKindOfPaymentByIdOpenInvoice(params.invoiceId),
                selectedPayment: {},
                selectedPaymentId: 0
            });
        },
        afterModel: function (model, transition) {
            for (var i = 0; i < model.payment.length; i++) {
                if (model.invoice.IdKindOfPayment && model.invoice.IdKindOfPayment >= 1) {
                    if (model.invoice.IdKindOfPayment === model.payment[i].IdOpa) {
                        ember.set(model, 'selectedPaymentId', model.payment[i].IdOpa);
                        ember.set(model, 'selectedPayment', model.payment[i]);
                        break;
                    }
                }
                else
                {
                    if (model.payment[i].IstDefaultOnlr || model.payment.length === 1) {
                        ember.set(model, 'selectedPaymentId', model.payment[i].IdOpa);
                        ember.set(model, 'selectedPayment', model.payment[i]);
                        break;
                    }
                }
            }

            if (model.fields.hasError) {
                ember.set(model, 'error', true);
                ember.set(model, 'errorMessage', model.fields.errorMessage ? model.fields.errorMessage : translate.getString('paymentNotPossible'));
                return;
            }

            if (model.invoice.errorMessage) {
                ember.set(model, 'error', true);
                ember.set(model, 'errorMessage', model.invoice.errorMessage);
                return;
            }

            if (!model.invoice) {
                ember.set(model, 'error', true);
                ember.set(model, 'errorMessage', translate.getString('errorInvoiceNotExistent'));
                return;
            }

            if (model.invoice.Balance >= 0.0) {
                ember.set(model, 'error', true);
                ember.set(model, 'errorMessage', translate.getString('errorInvoidePaidOrStorno'));
                return;
            }

        }
    });

    app.PaymentResultRoute = ember.Route.extend({
        actions: {
            closeRoute: function () {
                this.transitionTo('subscriptionInput');
            }
        },
        model: function (params) {
            return new ember.RSVP.hash({
                success: params.result === 'success',
                exception: params.result === 'exception',
                signerr: params.result === 'signerr',
                invoice: api.ember.getOpenInvoice(params.invoiceId),
                payment: api.ember.getKindOfPaymentByIdOpenInvoice(params.invoiceId)
            });
        },
        afterModel: function (model) {
            model.success = model.success && model.invoice.Balance >= 0;
            for (var i = 0; i < model.payment.length; i++) {
                if (model.payment[i].PDFDownload) {
                    model.pdfinvoice = true;
                    break;
                }
            }
        }
    });

    //set kind of payment and open the PDF-report afterwards (workaround for pop-up blocker)
    app.InvoiceLoadingRoute = ember.Route.extend({
        model: function (params) {
            this.set('kindOfPaymentId', params.kindOfPaymentId);
            return new ember.RSVP.hash({
                invoice: api.ember.getOpenInvoice(params.invoiceId)
            });
        },

        afterModel: function(model) {
            ember.set(model.invoice, 'IdKindOfPayment', this.get('kindOfPaymentId'));
            api.updateOpenInvoice(model.invoice,
                function() {
                    location.replace('#/reports/Rechnung/' + model.invoice.InvoiceReportId + '/' + model.invoice.Id);
                },
                function() {
                    console.error('Could not set payment on invoice ID ' + model.invoice.Id);
                });
        }
    });

    app.FundingRoute = ember.Route.extend({
        renderTemplate: function () {
            this.render({ outlet: 'funding' });
        }
    });

    app.PersonalDataSheetRoute = ember.Route.extend({
        actions: {
            closeRoute: function() {
                this.transitionTo('personalDataSheet');
            },
            openEditDataSheet: function () {
                this.transitionTo('personalDataSheetEdit');
            }
        },
        renderTemplate: function () {
            this.render({ outlet: 'personalDataSheet' });
        },
        model: function() {
            return new ember.RSVP.hash({
                DataSheet: api.ember.getPersonalDataSheets(storage.userSettings.personId()),
                Person: api.ember.getPerson(storage.userSettings.personId())
            });
        },
        afterModel: function (model) {
            if (!eventoHelpers.person.isComplete(model.Person)) {
                storage.entryPointUrl(location.href);
                this.transitionTo('personEdit');
            }
        }
    });

    app.PersonalDataSheetEditRoute = ember.Route.extend({
        actions: {
            closeRoute: function () {
                this.transitionTo('personalDataSheet');
            }
        },
        model: function () {
            var parentModel = this.modelFor('personalDataSheet');
            
            return new ember.RSVP.hash({
                Person: parentModel.Person,
                DataSheet: parentModel.DataSheet,
                EventContactInformation: parentModel.DataSheet.CourseIdEvent? api.ember.getEventContactInformation(parentModel.DataSheet.CourseIdEvent, storage.userSettings.personId()): null,
                EventSchoolDesignation: parentModel.DataSheet.CourseIdEvent ? api.ember.getEventSchoolDesignation(parentModel.DataSheet.CourseIdEvent) : null,
                Questions: api.ember.getPersonalDataQuestions(),
                Answers: api.ember.getPersonalDataAnswers(parentModel.DataSheet.Id),
                Nationalities: api.ember.getNationalities(),
                Cities: api.ember.getCities(),
                Cantons: api.ember.getCantons(),
                ParagraphDCantonId: null,
                QuestionAnswerItems: null
            });

            
        },

        setupController: function (controller, model) {
            controller.set('model', model);
            return new ember.RSVP.Promise(function(resolve) {
                controller.initializeModel(model, resolve);
            });
        }
       
    });
});