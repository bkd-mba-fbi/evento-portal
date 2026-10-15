define(['ember', 'text!htmlTemplates/statistic.html'], function (ember, statisticTemplate) {
    ember.TEMPLATES['statistic'] = ember.Handlebars.compile(statisticTemplate);
});