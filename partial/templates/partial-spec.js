describe('<%= ctrlname %>', function () {

  beforeEach(module('<%= appname %>'));

  var scope, ctrl, mockService;

  beforeEach(inject(function ($rootScope, $controller, RealService) {
    scope = $rootScope.$new();

    mockService = RealService;
    ctrl = $controller('<%= ctrlname %>', {$scope: scope, RealService: mockService});
  }));

  it('should ...', inject(function () {

    expect("This controller").toBe("fully tested");

  }));

});
