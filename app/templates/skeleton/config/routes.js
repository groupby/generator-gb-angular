<% if (!uirouter) { %>
angular.module('<%= _.camelize(appname) %>').config(function($routeProvider) {
  /* Add New Routes Above */
  $routeProvider.otherwise({redirectTo:'/home'});
});
<% } %><% if (uirouter) { %>
/**
 * $urlRouterProvider must be defined before the routes for the redirections to work properly.
 */
angular.module('<%= _.camelize(appname) %>').config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});

angular.module('<%= _.camelize(appname) %>').config(function($stateProvider) {
  /* Add New States Above */
});
<% } %>
