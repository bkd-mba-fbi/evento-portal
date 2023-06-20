define([
    'ember',
    'App/application',
    'api',
    'globalize'
], function (ember, app, api, globalize) {

    // transforms a dialog to an associative array/object
    var orderByKey = function(data) {
        var obj = {};

        for (var key in data.Fields) {
            obj[data.Fields[key].FieldId] = data.Fields[key].Value;
        }

        return obj;
    };

    // returns first non empty argument
    var firstNonEmptyValue = function() {
        for (var key in arguments) {
            if (!ember.isEmpty(arguments[key])) {
                return arguments[key];
            }
        }

        return null;
    };

    // removes empty details
    var removeEmptyValues = function(array) {
        return ember.$.grep(array, function(element) {
            return !ember.isEmpty(element.value);
        });
    }

    app.CacheService = ember.Service.extend({
        cache: {events: {}, people: {}},

        getEvent: function(idEvent) {
            var cache = this.get('cache').events;

            if (cache[idEvent] !== undefined) {
                return cache[idEvent];
            }

            return api.ember.getGrading(idEvent, '', '').then(function(data) {
                var event =  {
                    idEvent: data.Id,
                    designation: data.Designation,
                    management: data.Management,
                    students: ember.$.map(data.Items, function(item) {
                        return {
                            fullname: item.PersonFullname,
                            idPerson: item.IdPerson,
                            photo: api.getPersonPictureUrl(item.IdPerson)
                        };
                    })
                };

                cache[idEvent] = event;
                return event;
            });
        },

        getPerson: function(idPerson) {
            var cache = this.get('cache').people;

            if (cache[idPerson] !== undefined) {
                return cache[idPerson];
            }

            var data = {student: {data: []}, parents: {data: []}, employer: {data: []}};
            var student, parents, employer;

            return api.ember.getDialogGroup('person', idPerson).then(function(dialogGroup) {

                // items
                var itemsByDialogType = [];
                var key;

                for (key in dialogGroup.Items) {
                    var item = dialogGroup.Items[key];
                    itemsByDialogType[item.DialogType] = item;
                }

                // titles
                data.student.title = dialogGroup.DataTypeCaption;
                data.parents.title = itemsByDialogType[23].Caption;
                data.employer.title = itemsByDialogType[25].Caption;

                // dialogs
                var dialogsByDialogType = [];

                for (key in dialogGroup.Dialogs) {
                    var dialog = dialogGroup.Dialogs[key];
                    dialogsByDialogType[dialog.DialogType] = dialog;
                }

                // student
                var student = orderByKey(dialogsByDialogType[2]);

                data.student.data = removeEmptyValues([
                    {value: student.Geburtsdatum},
                    {value: student.Adresszeile1 + '\n' + (student.Adresszeile2 === null ?  '' : student.Adresszeile2 + '\n') + student.Plz + ' ' + student.Ort},
                    {href: 'tel', value: firstNonEmptyValue(student.Mobile, student.TelP, student.TelG)},
                    {href: 'mailto', value: firstNonEmptyValue(student.EMail, student.EMail2)}
                ]);

                // parents
                var parentsDialog = dialogsByDialogType[23];

                var parentsPromise = ember.RSVP.all(ember.$.map(parentsDialog.List, function(element) {
                    return api.ember.getDialog('person', element.IdChef, 2).then(function(dialog) {
                        return orderByKey(dialog);
                    });
                }));

                // employer
                var employerDialog = dialogsByDialogType[25];

                var employerPromise = ember.RSVP.all(
                    ember.$.map(ember.$.grep(employerDialog.List, function (element) {
                        // remove finished contracts
                        return (new Date(element.ENDE)) >= (new Date());
                    }), function (element) {
                        return api.ember.getDialog('person', element.IdChef, 2).then(function (dialog) {
                            var obj = orderByKey(dialog);
                            obj.start = globalize.format(new Date(element.BEGINN), 'dd.MM.yyyy');
                            obj.end = globalize.format(new Date(element.ENDE), 'dd.MM.yyyy');

                            return obj;
                        });
                    })
                );

                return ember.RSVP.hash({
                    parents: parentsPromise,
                    employer: employerPromise
                });

            }).then(function(dialogs) {

                // parents
                var i;
                for(i = 0; i < dialogs.parents.length; i ++) {
                    var parent = dialogs.parents[i];
                    data.parents.data = ember.$.merge(data.parents.data, (
                        removeEmptyValues([
                            {value: parent.KORRESPONDENZ_ANSCHRIFT},
                            {href: 'tel', value: firstNonEmptyValue(parent.Mobile, parent.TelP, parent.TelG)}
                        ])
                    ));
                }

                // employer
                for(i = 0; i < dialogs.employer.length; i ++) {
                    var employer = dialogs.employer[i];
                    data.employer.data = ember.$.merge(data.employer.data, (
                        removeEmptyValues([
                            {value: employer.start + ' - ' + employer.end},
                            {value: employer.KORRESPONDENZ_ANSCHRIFT},
                            {href: 'tel', value: firstNonEmptyValue(employer.Mobile, employer.TelP, employer.TelG)}
                        ])
                    ));
                }

                cache[idPerson] = data;
                return data;
            });
        }
    });
});