define(['constants'], function (constants) {
    return {
        gradingRedirectUrl: '/apps/webapp-schulverwaltung/index.html#/events',
        applicationScope: 'Tutoring',
        querystringName: 'idanlass',
        // define reports to display here with context as property name. those reports will be used for list and dialog.
        // if you wish to define different reports for list or dialog, define a new property
        // with context + List as name (e.g. person:[123], personList: [456]). you can also prevent reports 
        // from beeing displayed either in the list or the dialog by setting the equivalent property to empty array
        // (e.g. person: [123, 456], personList: [])
        reports: {
            person: [290026],
            personList: [290050,290039],
            personzeugnis: [220004, 230046, 220072, 230070, 230071, 220074],
            anlass: [290045], //Definieren FBI
            finalizeGrading: 290045 //Definieren FBI
        },

        // substitutes for dialog sections in this form: <DialogType:Int>: <EmberContext:String>
        dialogSubstitutes: {
            3: 'commentary'
        },

        // subscription details shown in table (adColumns) or in detail view (adRange) for grading module (Noteneingabe)
        grading: {
            adColumns: [3902, 3903, 3710, 3720, 3740, 3950, 3958, 3959],
            adRange: [3904, 3905, 3906, 3907, 3908, 3909,
                3911, 3912, 3913, 3914, 3915, 3916, 3917, 3918, 3919,
                3921, 3922, 3923, 3924, 3925, 3926, 3927, 3939, 3929,
                3930, 3931, 3932, 3933, 3934, 3935, 3936, 3937, 3938, 3939,
                3940, 3941, 3942, 3943, 3944, 3945, 3946, 3947, 3948, 3949,
                3951, 3952, 3953, 3954, 3955, 3956, 3957, 3960,
                3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609,
                3610, 3611, 3612, 3613, 3614, 3615, 3616, 3617, 3618, 3619,
                3621, 3622, 3623, 3624, 3625, 3626, 3627, 3639, 3629,
                3630, 3631, 3632, 3633, 3634, 3635,
                9831, 9832, 9833, 9834, 9835, 9836, 9837, 9838, 9839,
				9840, 9841
            ],
            adRequired: [3902, 3903, 3904, 3905, 3906, 3907, 3908, 3909,
                3911, 3912, 3913, 3914, 3915, 3916, 3917, 3918, 3919,
                3921, 3922, 3923, 3924, 3925, 3926, 3927, 3939, 3929,
                3930, 3931, 3932, 3933, 3934, 3935, 3936, 3937, 3938, 3939,
                3940, 3941, 3942, 3943, 3944, 3945, 3946, 3947, 3948, 3949,
                3958, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608,
                9831, 9841
            ],
            adColumnsOnlyShowWhenGradeFail: [3959],
            showExcelButton: false,
            showReportButton: true,
            showInfoTextAtFooter: true
        },

        // obsolete: the types of entity that are allowed to open from a list inside a dialog. don't change this, or the application
        // might behave unexpected
        allowedEntityTypes: ['Person']
    };
});
