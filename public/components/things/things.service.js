angular
  .module('mainApp.things')
  .service("thingService", ['$resource', function($resource) {
    return $resource('/api/things');
}]);