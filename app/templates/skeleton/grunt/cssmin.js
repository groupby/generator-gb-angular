/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  main: {
    src: ['temp/app.css', '<%= dom_munger.data.appcss %>'],
    dest: buildFolder + 'app.full.min.css'
  }
};
