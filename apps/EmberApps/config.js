define({
    // add the version here to force cache to reload files
    urlArgs: 'bust=EVT2022.R2.P2.20230420165207',
    //baseUrl: '../JSModules',
    app_name: 'CLX.Evento Modules',
    shim: {
        // application
        'api': {
            deps: ['jquery', 'appConfig']
        },
        'App/views': {
            deps: ['jquery-ui', 'eventoWidgets']
        },
        // lib
        'jquery': {
            deps: ['json2'],
            exports: '$'
        },
        'jquery-ui': {
            deps: ['jquery'],
            exports: '$'
        },
        'jquery.plugin': {
            deps: ['jquery'],
            exports: '$'
        },
        'ember': {
            deps: ['handlebars', 'jquery', 'ember-template-compiler'],
            exports: 'Ember'
        },
        'jstepper': {
            deps: ['jquery', 'jquery.plugin'],
            exports: '$'
        },
        'tristate': {
            deps: ['jquery', 'jquery.plugin', 'jquery-ui'],
            exports: '$'
        },
        'flot': {
            deps: ['jquery', 'jquery.plugin'],
            exports: '$'
        },
        'flot.symbol': {
            deps: ['jquery', 'jquery.plugin', 'flot'],
            exports: '$'
        },
        'maskedinput': {
            deps: ['jquery'],
            exports: '$'
        },
        'globalize': {
            exports: 'Globalize'
        },
        'de-CH': {
            deps: ['globalize']
        },
        'de-DE': {
            deps: ['globalize']
        },
        'fr-CH': {
            deps: ['globalize']
        },
        'en-US': {
            deps: ['globalize']
        },
        // module dependencies
        'templates/grading': {
            deps: [
                'components/gradingItemComponent',
                'controllers/gradingController'
            ]
        },
        'templates/statistic': {
            deps: [
                'controllers/statisticController',
                'components/gradingItemComponent',
                'components/flotGraphicComponent'
            ]
        },
        'templates/subscriptions': {
            deps: [
                'views/subscriptionsView',
                'components/subscriptionDetailGroupComponent',
                'components/onlaWorkProgressComponent',
                'components/crystalReportComponent'
            ]
        },
        'templates/subscriptionInput': {
            deps: [
                'views/subscriptionInputView',
                'controllers/subscriptionInputController',
                'controllers/openInvoiceController',
                'components/crystalReportComponent',
                'components/showPaymentComponent',
                'components/workProgressComponent'
            ]
        },
        'templates/personOverview': {
            deps: [
                'components/addressLabelComponent',
                'controllers/personOverviewIndexController'
            ]
        },
        'templates/personEdit': {
            deps: [
                'controllers/personEditController',
                'views/personEditView',
                'components/formControlComponent'
            ]
        },
        'templates/addressEdit': {
            deps: [
                'controllers/addressEditController',
                'components/formControlComponent'
            ]
        },
        'templates/addressNew': {
            deps: [
                'controllers/addressNewController',
                'components/formControlComponent'
            ]
        },
        'templates/subscription': {
            deps: [
                'controllers/subscriptionController'
            ]
        },
        'templates/subscriptionNew': {
            deps: [
                'controllers/subscriptionNewController',
                'views/subscriptionNewView'
            ]
        },
        'templates/payment': {
            deps: [
                'views/paymentView',
                'controllers/paymentController',
                'components/radioButtonComponent'
            ]
        },
        'templates/paymentResult': {
            deps: [
                'views/paymentResultView',
                'components/crystalReportComponent'
            ]
        },
        'templates/subscriptionPayment': {
            deps: [
                'views/subscriptionPaymentView',
                'controllers/subscriptionPaymentController'
            ]
        },
        'templates/personalDataSheet': {
            deps: [
                'controllers/personalDataSheetController',
                'components/crystalReportComponent'
            ]
        },
        'templates/personalDataSheetEdit': {
            deps: [
                'views/personalDataSheetEditView',
                'controllers/personalDataSheetEditController',
                'components/radioButtonComponent',
                'components/formControlComponent',
                'components/autoScrollContainerComponent'
            ]
        }
    },
    paths: {
        'main_settings': '../settings',
        'main_uiSettings': '../uiSettings',
        // application
        'application': '../App/application',
        'icons': '../icons',
        'framework': '../Framework/framework',
        'eventoWidgets': '../Framework/eventoWidgets',
        'storage': '../Framework/storage',
        'appConfig': '../appConfig',
        'loginHelpers': '../Framework/loginHelpers',
        'api': '../Framework/api',
        'keyboard': '../Framework/keyboard',
        'actionStack': '../Framework/actionStack',
        'applicationHelpers': '../Framework/applicationHelpers',
        'guiHelpers': '../Framework/guiHelpers',
        'urlHelpers': '../Framework/urlHelpers',
        'arrayHelpers': '../Framework/arrayHelpers',
        'mathHelpers': '../Framework/mathHelpers',
        'flotHelpers': '../Framework/flotHelpers',
        'eventoHelpers': '../Framework/eventoHelpers',
        'dateHelpers': '../Framework/dateHelpers',
        'regexHelpers': '../Framework/regexHelpers',
        'requiredFieldHelpers': '../Framework/requiredFieldHelpers',
        'componentCaller': '../Framework/componentCaller',
        'translate': '../Framework/translate',
        'locale': '../Locale',
        'templates': '../App/Templates',
        'htmlTemplates': '../App/HtmlTemplates',
        'controllers': '../App/Controllers',
        'components': '../App/Components',
        'views': '../App/Views',
        'constants': '../Framework/constants',
        /*libs*/
        'json2': '../Lib/json2',
        'jquery-ui': '../Lib/jquery-ui-1.10.4',
        'jquery': '../Lib/jquery-2.2.4',
        'handlebars': '../Lib/handlebars-2.0.0',
        'ember-template-compiler': '../Lib/ember-template-compiler-2.11.2',
        'ember': '../Lib/ember-2.11.1',
        'text': '../Lib/text-2.0.10',
        'modernizr': '../Lib/modernizr.custom',
        'jquery.plugin': '../Lib/jquery-plugins/jquery.plugin',
        'jstepper': '../Lib/jquery-plugins/jstepper-1.5.3',
        'tristate': '../Lib/jquery-plugins/jquery.tristate',
        'flot': '../Lib/jquery-plugins/jquery.flot-0.8.3.min',
        'flot.symbol': '../Lib/jquery-plugins/jquery.flot.symbol-0.8.3.min',
        'maskedinput': '../Lib/jquery-plugins/jquery.maskedinput.min',
        //globalization
        'globalize': '../Lib/globalize/globalize-0.1.1',
        'de-CH': '../Lib/globalize/cultures/globalize.culture.de-CH',
        'de-DE': '../Lib/globalize/cultures/globalize.culture.de-DE',
        'fr-CH': '../Lib/globalize/cultures/globalize.culture.fr-CH',
        'en-US': '../Lib/globalize/cultures/globalize.culture.en-US'
    }
});
