describe("ThingController", function() {
  var controller, scope;

  beforeEach(module('mainApp'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('ThingController', {
      $scope: scope
    });
  }));

  it('assigns a tagline to the controller', function() {
    expect(controller.tagline).to.not.be.undefined;
  });  

});