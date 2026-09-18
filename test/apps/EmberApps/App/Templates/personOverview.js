define(['ember', 'text!htmlTemplates/personOverview.html', 'text!htmlTemplates/personOverviewIndex.html'], function (ember, personOverviewTemplate, personOverviewIndexTemplate) {
    ember.TEMPLATES['personOverview'] = ember.Handlebars.compile(personOverviewTemplate);
    ember.TEMPLATES['personOverview/index'] = ember.Handlebars.compile(personOverviewIndexTemplate);
});