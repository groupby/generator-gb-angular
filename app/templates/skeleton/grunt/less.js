/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  production: {
    options: {
    },
    files: {
      'temp/app.css': 'app.less'
    }
  }
};
