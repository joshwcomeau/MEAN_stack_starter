function NerdController($scope) {
  this.tagline = "I'm such a nerd.";
}

NerdController.prototype.someMethod = function() {};

NerdController.$inject = ['$scope'];
angular.module('mainApp.nerds').controller('NerdController', ['$scope', NerdController]);