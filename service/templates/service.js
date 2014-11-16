(function () { 'use strict';}());

angular.module('<%= appname %>').service('<%= _.camelize(name) %>',function() {
  this.<%= _.camelize(name) %> = {};
});
