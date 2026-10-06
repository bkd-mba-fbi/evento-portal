(function (root) {
    require(['../config', '../customConfig'], function (mainConfig, customConfig) {
        requirejs.config(mainConfig);
        requirejs.config(customConfig);
        require([
            'application',
            'ember',
            'framework',
            'applicationHelpers',
            'text!App/HtmlTemplates/Application.html',
            'text!App/HtmlTemplates/Persons.html',
            'text!App/HtmlTemplates/DialogGroup.html',
            'text!App/HtmlTemplates/Dialog.html',
            'text!App/HtmlTemplates/HierarchyNode.html',
            'text!App/HtmlTemplates/Commentary.html',
            'text!App/HtmlTemplates/DialogTabComponent.html',
            'text!App/HtmlTemplates/DialogFieldComponent.html',
            'text!App/HtmlTemplates/LoadingDialog.html',
            'jquery-ui',
            'eventoWidgets',
            'App/controllers',
            'App/router',
            'App/components',
            'components/detailDialogComponent',
            'de-CH',
            'fr-CH',
            'de-DE',
            'en-US'
        ], function (app, ember, framework, applicationHelpers, applicationTemplate, personsTemplate, dialogGroupTemplate, dialogTemplate, hierarchyNodeTemplate, commentaryTemplate, dialogTabComponentTemplate, dialogfieldComponentTemplate, loadingDialogTemplate) {

            app.automaticTemplateLoading = false;

            applicationHelpers.initializeApplication(function () {
                framework.Helpers.loadCss('/CSS/jquery-ui.custom.css');
                var appName = 'CLX.Evento Schulleiter';
                var application = ember.Application.create(app);
                root[appName] = application;
            });

            ember.TEMPLATES['application'] = ember.Handlebars.compile(applicationTemplate);
            ember.TEMPLATES['persons'] = ember.Handlebars.compile(personsTemplate);
            ember.TEMPLATES['dialogGroup'] = ember.Handlebars.compile(dialogGroupTemplate);
            ember.TEMPLATES['dialog'] = ember.Handlebars.compile(dialogTemplate);
            ember.TEMPLATES['components/hierarchy-node'] = ember.Handlebars.compile(hierarchyNodeTemplate);
            ember.TEMPLATES['commentary'] = ember.Handlebars.compile(commentaryTemplate);
            ember.TEMPLATES['persons/loading'] = ember.Handlebars.compile(loadingDialogTemplate);
            ember.TEMPLATES['personDialog/loading'] = ember.Handlebars.compile(loadingDialogTemplate);
            ember.TEMPLATES['components/dialog-tab'] = ember.Handlebars.compile(dialogTabComponentTemplate);
            ember.TEMPLATES['components/dialog-field'] = ember.Handlebars.compile(dialogfieldComponentTemplate);
            
        });
    });
// ReSharper disable once ThisInGlobalContext
})(this);