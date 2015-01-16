function ThingController($scope, thingService) {
  var thing = this;
  this.things = thingService.query();

  this.post = function() {
    new_thing = thingService.save({}, {name: thing.new_name}, function() {
      thing.things.push(new_thing);
    }, function() {
      alert("Thing not saved.");
    });
  }
}


ThingController.$inject = ['$scope', 'thingService'];
angular.module('mainApp.things').controller('ThingController', ['$scope', 'thingService', ThingController]);