'use strict';

var moment = require('moment');

var UtilDate = {};

UtilDate.getBeginToEndDay = function(date, format) {
  if (!format) format = 'YYYY-MM-DD';
  var moDate = moment(date);
  return {
    begin: moDate.startOf('month').format(format),
    end: moDate.endOf('month').format(format)
  };
};

UtilDate.getMonthDays = function(date) {
  var day = this.getBeginToEndDay(date);
  var diff = 1 + moment(day.end).diff(moment(day.begin), 'day');
  var count = diff;

  var cal = {
    days: [],
    len: count,
    on: 0
  };
  for (var i = 0;i < diff;i++) {
    var current = moment(day.begin).add(i, 'days').format('YYYY-MM-DD');
    var dotw = moment(current).format('d');
    var dayOff = false;
    if (dotw == 0 || dotw == 6) {
    // if ((dotw == 0 || dotw == 6)|| publicHoliday.indexOf(current) >= 0) {
      dayOff = true;
      count--;
    }
    cal.days.push({date: current, w: dotw, off: dayOff});
  }
  cal.on = count;

  return cal;
};

module.exports = UtilDate;
