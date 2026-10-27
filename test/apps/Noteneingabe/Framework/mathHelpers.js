define(['jquery'], function ($) {
    var mathHelpers = {
        avg: function (numbers) {
            if (!(numbers instanceof Array))
                return numbers;
            
            var sum = 0;
            for (var i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            };
            return sum / numbers.length;
        },

        round: function (number, decimals) {
            if (decimals === undefined)
                decimals = 0;
            var multiplicator = Math.pow(10, decimals);
            return Math.round(multiplicator * number) / multiplicator;
        },

        standardDeviation: function (numbers) {
            if (!(numbers instanceof Array) || numbers.length === 1) {
                return 0;
            }

            var average = this.avg(numbers);
            var sum = 0;
            var count = 0;
            for (var i = 0; i < numbers.length; i++) {
                var number = numbers[i];
                if (!isNaN(number)) {
                    sum += Math.pow(number - average, 2);
                    count++;
                }
            }
            if (count === 0)
                return 0;
            return Math.sqrt(sum / count);
        }
    };
    return mathHelpers;
});