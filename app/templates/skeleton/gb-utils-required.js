/*jslint node: true */

module.exports = {
    //Using exclusion patterns slows down Grunt significantly
    //instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
    //this method is used to create a set of inclusive patterns for all subdirectories
    //skipping node_modules, bower_components, dist, and any .dirs
    //This enables users to create any directory structure they desire.
    createFolderGlobs: function (fileTypePatterns, ignoreContains) {
      fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];

      var alwaysIgnore = ['node_modules', 'bower_components', 'dist', 'temp', 'lib', 'grunt'];

      var ignore = [];
      if (Array.isArray(ignoreContains)) {
        ignore = alwaysIgnore.concat(ignoreContains);
      }
      else {
        ignore = alwaysIgnore;
      }

      var fs = require('fs');
      return fs.readdirSync(process.cwd())
        .map(function (file) {
          if (ignore.indexOf(file) !== -1 ||
            file.indexOf('.') === 0 || !fs.lstatSync(file).isDirectory()) {
            return null;
          } else {
            return fileTypePatterns.map(function (pattern) {
              return file + '/**/' + pattern;
            });
          }
        })
        .filter(function (patterns) {
          return patterns;
        })
        .concat(fileTypePatterns);
    }
};
