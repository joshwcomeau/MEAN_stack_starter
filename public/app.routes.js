angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl:  '/components/dashboard/dashboard.index.html',
      controller:   'DashboardController',
      controllerAs: 'dash'
    })

    // THINGS ===================================================================
    // GET :index
    .when('/things', {
      templateUrl:  '/components/things/things.index.html',
      controller:   'ThingController',
      controllerAs: 'thing'
    })
    
    // GET :show
    .when('/things/:id', {
      templateUrl:  '/components/things/things.show.html',
      controller:   'ThingController',
      controllerAs: 'thing'
    });


    $locationProvider.html5Mode(true);
}]);