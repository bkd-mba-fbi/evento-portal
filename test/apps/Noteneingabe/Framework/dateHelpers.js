define(['jquery'], function ($) {
    return {
        datesEqual: function (date1, date2) {
            date1 = this.getDate(date1);
            date2 = this.getDate(date2);
            if (!date1)
                return !date2;
            else if (!date2)
                return false;
            var milli1 = Math.floor(date1.getTime() / (24 * 3600 * 1000));
            var milli2 = Math.floor(date2.getTime() / (24 * 3600 * 1000));
            return milli1 === milli2;
        },

        isDateToday: function(date) {
            if (!date)
                return false;
            var today = new Date();
            return this.datesEqual(date, today);
        },

        getDate: function (date) {
            if (!date)
                return undefined;
            if (!(date instanceof Date)) {
                date = date.replace('.000Z', '');
                date = new Date(date + 'Z');
            }
            return date;
        },

        formatDate: function (dateString) {
            const parsedDate = new Date(dateString);
            if(parsedDate instanceof Date)
              return parsedDate.toLocaleDateString('dd');
            return null;
        }
    };
});
