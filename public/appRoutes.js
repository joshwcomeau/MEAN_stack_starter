angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl:  '/dashboard/views/dashboard.index.html',
      controller:   'DashboardController'
    })

    // NERDS ===================================================================
    // GET :index
    .when('/nerds', {
      templateUrl:  '/nerds/views/nerds.index.html',
      controller:   'NerdController'
    });
    
    // GET :show
    .when('/nerds/:id', {
      templateUrl:  '/nerds/views/nerds.show.html',
      controller:   'NerdController'
    });


    $locationProvider.html5Mode(true);
}]);