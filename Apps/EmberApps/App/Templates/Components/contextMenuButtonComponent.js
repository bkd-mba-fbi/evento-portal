define(['ember', 'text!htmlTemplates/components/contextMenuButtonComponent.html'], function (ember, contextMenuButtonComponent) {
    ember.TEMPLATES['components/context-menu-button'] = ember.Handlebars.compile(contextMenuButtonComponent);
});