/*jslint node: true */

var gbUtils = require('../gb-utils-required.js');

module.exports = {
  main: {
    options: {
      jshintrc: '.jshintrc'
    },
    src: gbUtils.createFolderGlobs('*.js')
  }
};
