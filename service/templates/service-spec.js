describe('<%= _.camelize(name) %>', function() {
  beforeEach(module('<%= appname %>'));

  it('should ...', inject(function(<%= _.camelize(name) %>) {
    expect("this service").toBe('fully tested');
  }));

});
