/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  main: {
    files: [
      {
        expand: true, cwd: 'dist/',
        src: ['**//*{*.png,*.jpg}'],
        dest: buildFolder
      }
    ]
  }
};
