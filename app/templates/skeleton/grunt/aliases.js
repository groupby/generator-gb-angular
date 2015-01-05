/*jslint node: true */

module.exports = {
  'build': [
    'jshint',
    'clean:before',
    'less',
    'dom_munger',
    'ngtemplates',
    'cssmin',
    'concat',
    'ngAnnotate',
    'uglify',
    'copy',
    'htmlmin',
    'clean:after'
  ],
  'serve': [
    'dom_munger:read',
    'jshint',
    'connect',
    'watch'
  ],
  'test': [
    'dom_munger:read',
    'karma:all_tests'
  ]
};
