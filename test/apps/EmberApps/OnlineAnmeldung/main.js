(function (root) {
    requirejs.config({
        urlArgs: 'r=' + Math.random()
    });
    require(['../config', '../customConfig'], function (mainConfig, customConfig) {
        requirejs.config(mainConfig);
        requirejs.config(customConfig);
        require([
            'jquery',
            'application',
            'ember',
            'framework',
            'applicationHelpers',
            'App/router',
            'components/accordionNavigationComponent',
            'App/Templates/application',
            'App/Templates/loading'
        ], function ($, app, ember, framework, applicationHelpers) {

            app.ApplicationController = ember.Controller.extend({
                transitionForcedTriggered: ember.observer('transitionForced', function () {
                    this.set('forceStarted', true);
                }),

                transitionedPersonTriggered: ember.observer('transitionedPerson', function () {
                    if (this.get('forceStarted')) {
                        this.toggleProperty('refreshNavigation');
                    }
                    this.set('forceStarted', false);
                }),

                openNavigation: ember.computed('openSubscriptions', function () {
                    if (this.get('openSubscriptions')) {
                        this.set('openSubscriptions', false);
                        return 1;
                    }
                    return -1;
                })
            });

            // start application
            applicationHelpers.initializeApplication(function () {
                framework.Helpers.loadCss('/CSS/jquery-ui.custom.css');
                var appName = 'ClxApp';
                var application = ember.Application.create(app);
                root[appName] = application;
                applicationHelpers.afterStartApplication();
            });
        });
    });
// ReSharper disable once ThisInGlobalContext
})(this);