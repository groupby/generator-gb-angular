/*jslint node: true */
(function () { 'use strict';}());

var gbUtils = require('../gb-utils-required.js');
var buildFolder = 'dist/';

module.exports = {
  main: {
    options: {
      module: pkg.name,
      htmlmin: '<%= htmlmin.main.options %>'
    },
    src: [gbUtils.createFolderGlobs('*.html'), '!index.html', '!_SpecRunner.html'],
    dest: 'temp/templates.js'
  }
};
