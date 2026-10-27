define(function () {
    return {
        // defines the amount of milliseconds to wait for user input until the save call to the api will be performed on auto save
        // note that any key press event in the auto save scenario will request a save call. the debouncing is what keeps the application 
        // from sending that save call to the server until the defined time has elapsed.
        defaultDebouncing: 500,

        // the default time in milliseconds to do an animation movement (should be the same than default transition time in css)
        defaultAnimationSpeed: 300,

        // the default blend type. All elements that are blended will follow this blend type except when set explicitely to another blend type.
        // Different blend types are:
        // fadeIn: the element will fade in from invisible to solidly visible (depending on css definition of .fadeIn)
        // slideIn: the element will slide in from the left (depending on css defintion .slideIn)
        defaultBlendType: 'fadeIn',

        // set this to false to use single click instead of double click. this applies to different components 
        // (e.g. EventoSearch, DetailDialog)
        useDoubleClick: false,

        // the languages used in the application. This setting will not be considered, if the login and the language is handled by a webserver.
        // the language will then be set in the user token only.
        usedLanguages: [
            {
                key: 'de-CH',
                designation: 'Deutsch (Schweiz)'
            },
            {
                key: 'fr-CH',
                designation: 'Français (Suisse)'
            }
        ],

        flotSettings: {
            colors: {
                sufficientGrade: '#5fd35f',
                unsufficientGrade: '#da5252',
                color1: '#005189',
                color2: '#f7a300',
                color3: '#7f7f7f'
            },
            showGridlines: false,
            borderColor: '#666',
            barsHoverable: false
        }
    };
});