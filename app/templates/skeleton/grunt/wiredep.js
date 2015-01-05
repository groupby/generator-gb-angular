/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  task: {
    // Point to the files that should be updated when
    // you run `grunt wiredep`
    src: [
      '*.html'   // .html support...
    ]

    //options: {
    // See wiredep's configuration documentation for the options
    // you may pass:

    // https://github.com/taptapship/wiredep#configuration
  }
};
