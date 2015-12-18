var demoAppControllers = angular.module('demoAppControllers', []);

demoAppControllers.controller('DirectoryController', ['$scope', '$http', '$q',
  function ($scope, $http, $q ) {

    var getDemos = $http({method: 'GET', url: './db/demos.json', cache: 'true'});
    var getTags = $http({method: 'GET', url: './db/tags.json', cache: 'true'});

    $q.all([getDemos, getTags]).then( function( data ){

      $scope.demos = data[0].data;
      $scope.tags = data[1].data;

      var oneGroup = [];
      var groupedDemos = [];
      angular.forEach( $scope.demos, function( demo ){
        if( oneGroup.length < 4){
          oneGroup.push( demo )
        } else {
          groupedDemos.push( oneGroup );
          oneGroup = [];
        }
      })
      $scope.groupedDemos = groupedDemos

    })

  }
]);

demoAppControllers.controller('DemoCreatorController', ['$scope', '$http', '$q',
  function ($scope, $http, $q ) {

    var getMedia = $http({method: 'GET', url: './db/media.json', cache: 'true'});
    var getTags = $http({method: 'GET', url: './db/tags.json', cache: 'true'});
    var getCategories = $http({method: 'GET', url: './db/categories.json', cache: 'true'});

     $q.all([getMedia, getTags, getCategories]).then( function( data ){

      $scope.media = data[0].data;
      $scope.tags = data[1].data;
      $scope.categories = data[2].data;

    })

  }
]);
