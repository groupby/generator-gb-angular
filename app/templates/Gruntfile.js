/*jslint node: true */
'use strict';

var pkg = require('./package.json');
var gbUtils = require('./gb-utils-required.js');

module.exports = function (grunt) {

  // load all task files
  var config = require('load-grunt-config')(grunt);

  // NOTE: Do NOT add a "grunt.initConfig()" statement here!
  //      The configuration for each task is loaded from a file with the tasks name in the `grunt` directory.
  //      Use the command `yo gb-angular:grunt-config <task name>` to create a new task config file in the folder.
  //
  //      If there is really some need to add an initConfig statement
  //      here, read this: https://github.com/firstandthird/load-grunt-config/issues/87


  grunt.event.on('watch', function (action, filepath) {
    //https://github.com/gruntjs/grunt-contrib-watch/issues/156

    var tasksToRun = []; var files = [];

    // Load js paths for next time if they are undefined.
    if (typeof grunt.config('dom_munger.data.appjs') === "undefined") {
      tasksToRun.push('dom_munger:read');
    }

    // If a directive template changes, find it's JS test and run it
    if (filepath.lastIndexOf('.html') !== -1 && filepath.lastIndexOf('.html') === filepath.length - 5) {
      var directiveSpec = filepath.substring(0, filepath.length - 5) + '-spec.js';

      //if the spec exists then lets run it
      if (grunt.file.exists(directiveSpec)) {
        files = [].concat(grunt.config('dom_munger.data.appjs'));
        files.push('bower_components/angular-mocks/angular-mocks.js');
        files.push(directiveSpec);

        // Add the html partial
        files.push(filepath);

        grunt.config('karma.options.files', files);
        tasksToRun.push('karma:during_watch');
      }
    }

    // If a JS file changes, test it
    if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {

      //lint the changed js file
      grunt.config('jshint.main.src', filepath);
      tasksToRun.push('jshint');

      //find the appropriate unit test for the changed file
      var spec = filepath;
      var html;
      if (filepath.lastIndexOf('-spec.js') === -1 || filepath.lastIndexOf('-spec.js') !== filepath.length - 8) {
        spec = filepath.substring(0, filepath.length - 3) + '-spec.js';
        html = filepath.substring(0, filepath.length - 3) + '.html';
      } else {
        html = filepath.substring(0, filepath.length - 8) + '.html';
      }

      //if the spec exists then lets run it
      if (grunt.file.exists(spec)) {
        files = [].concat(grunt.config('dom_munger.data.appjs'));
        files.push('bower_components/angular-mocks/angular-mocks.js');

        // Add the html partial if it exists
        if (grunt.file.exists(html)) {
          files.push(html);
        }

        files.push(spec);
        grunt.config('karma.options.files', files);
        tasksToRun.push('karma:during_watch');
      }
    }

    //if index.html changed, we need to reread the <script> tags so our next run of karma
    //will have the correct environment
    if (filepath === 'index.html') {
      tasksToRun.push('dom_munger:read');
    }

    grunt.config('watch.main.tasks', tasksToRun);

  });
};
