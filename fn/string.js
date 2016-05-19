'use strict';

var UtilString = {};

UtilString.insertion = function(a, p, n) {
  var prefix = a.slice(0, n);
  var suffix = a.slice(n);

  return prefix + p + suffix;
};

module.exports = UtilString;
