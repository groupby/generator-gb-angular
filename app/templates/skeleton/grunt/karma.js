/*jslint node: true */

var gbUtils = require('../gb-utils-required.js');

module.exports = {
  options: {
    frameworks: ['jasmine'],
    files: [  // this files data is also updated in the watch handler, if updated change there too
      '<%= dom_munger.data.appjs %>',
      'bower_components/angular-mocks/angular-mocks.js',
      gbUtils.createFolderGlobs('*-spec.js', ['e2e']),
      gbUtils.createFolderGlobs('directive/**/*.html')
    ],
    exclude: [
      'bower_components/less.js/dist/less-1.7.5.js' // Less.js seems to break without app.less included.
    ],
    logLevel: 'ERROR',
    reporters: ['mocha'],
    autoWatch: false, // watching is handled by grunt-contrib-watch
    singleRun: true
  },
  all_tests: {
    preprocessors: {
      "directive/**/*.html": 'ng-html2js'
    },
    browsers: ['PhantomJS']
  },
  during_watch: {
    preprocessors: {
      "directive/**/*.html": 'ng-html2js'
    },
    browsers: ['PhantomJS']
  }
};
