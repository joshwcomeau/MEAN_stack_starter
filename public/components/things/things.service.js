angular.module('mainApp.things').factory("Thing", function() {
  return function Thing(name) {
    this.name = name;
  };
});