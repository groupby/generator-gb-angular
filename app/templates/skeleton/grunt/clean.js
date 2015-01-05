/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  before: {
    src: [buildFolder, 'temp']
  },
  after: {
    src: ['temp']
  }
};
