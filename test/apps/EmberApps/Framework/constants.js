define([], function() {
    var constants = {

        inputSizes: {
            subscriptionDetailValue: 255,
            gradeRemark: 255
        },

        applicationScope: {
            grading: 'Grading',
            onla: 'Onla',
            onlr: 'Onlr'
        },

        idStatus: {
            evaluationUntil: 10240, // Beurteilung bis
            controlOfEvaluation: 10250, // ueberpruefung der Beurteilung
            intermediateEvaluation: 10300, // Zwischenbewertung
            intermediateEvaluationDefinite: 10305, // Zwischenbeurteilung definitiv
            lowestModuleEventStatus: 10215, // a.In Planung
            highestModuleEventStatus: 10310 // a.Zwischenbeurteilung abschliessen
        },

        vssType: {
            IntField: 277,
            Currency: 279,
            Text: 290,
            YesNo: 291,
            Yes: 292,
            MemoText: 293,
            Date: 295
        },

        vssStyle: {
            Header: 'HE',
            Remark: 'BE',
            File: 'PD',
            Foto: 'PF',
            Combobox: 'CB'
        },

        vssValidationStatus: {
            ONLA_new: 340, // ONLA (neu)
            toValidate_new: 341, // zu prüfen (neu)
            uncomplete: 342, // unvollständig
            ONLA_uncomplete: 343, // ONLA (unvollständig)
            toValidate_uncomplete: 344, // zu prüfen (unvollständig)
            isSubsequent: 345, // wird nachgereicht
            ONLA_isSubsequent: 346, // ONLA (wird nachgereicht)
            toValidate_isSubsequent: 347, // zu prüfen (wird nachgereicht)
            isValid: 348 // gültig
        },

        vssDependencyOperator: {
            contains: 349, // enthält
            containsNot: 350, // enthält nicht
            empty: 351, // leer
            notEmpty: 352 // nicht leer
        },

        vssInternet: {
            ReadOnly: 'R',
            required: 'M',
            hidden: 'H',
            edit: 'E'
        },

        statistics: {
            IDLFS_CH: 2008100,
            IDLFS_FL: 2008222
        },

        lookupfields: {
            ausstehend: 'ausstehend'
        },

        idConfigurations: {
            homeAddressIdAddressKind: 'ONLA_AdressartWohnsitzAdrMutation',
            correspondenceAddressIdAddressKind: 'ONLA_AdressartKorrespondenzAdrMutation',
            correspondenceDirectAddressIdAddressKind: 'ONLA_AdressartKorrespondenzAdr',
            billingAddressIdAddressKind: 'ONLA_AdressartRechnungsAdrMutation',
            fotoWidth: 'PersonenfotoWidth',
            fotoHeight: 'PersonenfotoHeight'
        },
        payment: {
            pspEndPointKey: 'PaymentURL'
        },
        responseHeaders: {
            clxRefreshToken: 'CLX-RefreshToken'
        },

        reportContext: {
            anlass: 'anlass'
        }
    };

    constants.vssValidationStatus.allValid = [
        constants.vssValidationStatus.isValid, constants.vssValidationStatus.toValidate_new,
        constants.vssValidationStatus.toValidate_isSubsequent, constants.vssValidationStatus.toValidate_uncomplete,
        constants.vssValidationStatus.ONLA_new
    ];

    constants.vssValidationStatus.allDisable = [
    constants.vssValidationStatus.isValid, constants.vssValidationStatus.toValidate_new,
    constants.vssValidationStatus.toValidate_isSubsequent, constants.vssValidationStatus.toValidate_uncomplete
    ];

    constants.vssValidationStatus.allSubsequent = [
        constants.vssValidationStatus.isSubsequent, constants.vssValidationStatus.ONLA_isSubsequent
    ];

    constants.vssValidationStatus.allErrors = [
        constants.vssValidationStatus.uncomplete, constants.vssValidationStatus.ONLA_uncomplete
    ];

    return constants;
});