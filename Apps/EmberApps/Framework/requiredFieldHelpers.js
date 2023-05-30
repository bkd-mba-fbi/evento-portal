define(['jquery', 'eventoHelpers', 'arrayHelpers', 'constants'], function ($, eventoHelpers, arrayHelpers, constants) {
    return {
        setPersonRequiredFields: function (person) {
            arrayHelpers.removeSpecific(person.RequiredFields, 'HomeTown');
            arrayHelpers.removeSpecific(person.RequiredFields, 'StayPermit');
            arrayHelpers.removeSpecific(person.RequiredFields, 'StayPermitExpiry');
            arrayHelpers.removeSpecific(person.RequiredFields, 'SocialSecurityNumber');

            if (!person.IsEditable)
                return;

            if (eventoHelpers.person.isSwiss(person)) {
                arrayHelpers.addSpecific(person.RequiredFields, 'SocialSecurityNumber');
            }

            if (eventoHelpers.person.isSwissOrLI(person)) {
                arrayHelpers.addSpecific(person.RequiredFields, 'HomeTown');
            } else {
                arrayHelpers.addSpecific(person.RequiredFields, 'StayPermit');
                if (eventoHelpers.person.hasStayPermit(person))
                    arrayHelpers.addSpecific(person.RequiredFields, 'StayPermitExpiry');
            }
        }
    };
});