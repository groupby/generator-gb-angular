describe('<%= _.camelize(name) %>', function() {
  var mockService, $httpBackend;

  beforeEach(module('<%= appname %>'));

  // This mocks out the ui-router to a noop so it doesn't effect this testing.
  // Must be included AFTER 'webapp' to overwrite those dependencies
  var mod = angular.module('uiRouterNoop', []);
  mod.service('$state', function () {
    return {};
  });
  mod.service('$urlRouter', function () {
    return {};
  });
  beforeEach(module('uiRouterNoop'));

  /**
   * Mock out modules as needed
   */
  beforeEach(module('<%= appname %>', function ($provide) {
    createTokenResponse = {id: "231098ddfd"};

    mockService = {};

    $provide.value('serviceToMock', mockService);
  }));

  /**
   * Get references to needed services
   */
  beforeEach(inject(function ($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should ...', inject(function(<%= _.camelize(name) %>) {
    expect("this service").toBe('fully tested');
  }));

});
