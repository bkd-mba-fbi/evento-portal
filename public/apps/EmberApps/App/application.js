define([
    'ember'
], function (ember) {

    var app = {
        rootElement: '#CLX_Root',
        Router: ember.Router.extend(),
        automaticTemplateLoading: true
    };

    // tracking with piwik, if the piwik object has been defined
    if (typeof _paq === 'object')
        app.Router.reopen({
            notifyPiwik: function () {
                _paq.push(['trackPageView']);
            }.on('didTransition')
        });

    // tracking with google analytics, if the ga method has been defined
    if (typeof ga === 'function')
        app.Router.reopen({
            notifyGoogleAnalytics: function () {
                return ga('send',
                    'pageview',
                    {
                        'page': this.get('url'),
                        'title': this.get('url')
                    });
            }.on('didTransition')
        });

    // initialize ember reopens
    ember.Route.reopen({
        beforeModel: function (transition) {
            if (!app.automaticTemplateLoading)
                return undefined;

            return new ember.RSVP.Promise(function (resolve, reject) {
                var modules = [];
                $.each(transition.handlerInfos,
                    function () {
                        if (this.name
                            .indexOf('.index') ===
                            -1 &&
                            this.name !== 'index' &&
                            this.name !== 'application' &&
                            this.name.indexOf('EntryPoint') === -1) {
                            modules.push('templates/' + this.name);
                        }
                    });

                require(modules,
                    function () {
                        resolve();
                    });
            });
        }
    });

    return app;
});
