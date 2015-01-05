/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  main: {
    src: ['<%= dom_munger.data.appjs %>', '<%= ngtemplates.main.dest %>'],
    dest: 'temp/app.full.js'
  }
};
