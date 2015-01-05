/*jslint node: true */

var gbUtils = require('../gb-utils-required.js');

module.exports = {
  main: {
    options: {
      livereload: true,
      livereloadOnError: false,
      spawn: false
    },
    files: [gbUtils.createFolderGlobs(['*.js', '*.less', '*.html']), '!_SpecRunner.html', '!.grunt'],
    tasks: [] //all the tasks are run dynamically during the watch event handler
  }
};
