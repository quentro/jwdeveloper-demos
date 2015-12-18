var jwdeveloperDemo = angular.module('jwdeveloperDemo', [
  'ngRoute',
  'demoAppControllers'
]);

jwdeveloperDemo.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/directory.html',
        controller: 'DirectoryController'
      }).
      when('/new', {
        templateUrl: 'partials/create_demo.html',
        controller: 'DemoCreatorController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
