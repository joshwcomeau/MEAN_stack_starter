describe("Thing service", function() {
  var thingService, httpBackend, mockResponse;

  beforeEach(module("mainApp"));

  beforeEach(inject(function(_thingService_, $httpBackend) {
    thingService = _thingService_;
    httpBackend  = $httpBackend;
    mockResponse     = [ { _id: '5483182e400235e24d0b819c', name: 'Table', __v: 0 } ];
  }));

  it('should send a request to say hello', function () {
    httpBackend.expect('GET', '/api/things').respond(200, mockResponse);
    things = thingService.query();
    console.log(things);
    httpBackend.flush();
    console.log(things);
    expect(things[0].name).to.equal(mockResponse[0].name);
    expect(things[0] instanceof thingService).to.equal(true);
  });


});