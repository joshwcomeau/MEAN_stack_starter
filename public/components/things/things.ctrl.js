function ThingController($scope) {
  this.tagline = "I'm such a Thing.";
}

ThingController.prototype.someMethod = function() {};

ThingController.$inject = ['$scope'];
angular.module('mainApp.things').controller('ThingController', ['$scope', ThingController]);