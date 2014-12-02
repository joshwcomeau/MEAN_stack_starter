function DashboardController($scope) {
  this.tagline = "Welcome to the dashboard.";
}

DashboardController.prototype.someMethod = function() {};

DashboardController.$inject = ['$scope'];
angular.module('mainApp.dashboard').controller('DashboardController', ['$scope', DashboardController]);