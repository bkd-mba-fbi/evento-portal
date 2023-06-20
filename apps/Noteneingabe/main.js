(function (root) {
    require(['config', 'customConfig'], function (mainConfig, customConfig) {
        requirejs.config(mainConfig);
        requirejs.config(customConfig);
        require([
            'application',
            'ember',
            'framework',
            'applicationHelpers',
            'router',
            'App/Templates/index', 
            'controllers/gradingController',
            'controllers/statisticController',
        ], function (app, ember, framework, applicationHelpers) {
            app.IndexController = ember.Controller.extend({ 
                actions: {
                    seeDetails: function (item) {
                        if(item && item.Id)
                            this.transitionToRoute('grading', item.Id);
                    } 
                },
        
                hasItems: ember.computed('model', {
                    get: function() {
                        const model = this.get('model') || null;
                        if(!model) return false;
        
                        return model.toGrade && model.toGrade.length;
                    }
                }),
        
                events: ember.computed('model.toGrade', {
                    get: function() {
                        const model = this.get('model') || null;
                        if(!model) return [];
         
                        return model.toGrade;
                    }
                }),
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