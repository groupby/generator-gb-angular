describe('<%= _.camelize(name) %>', function() {

	beforeEach(module('<%= appname %>'));

	it('should ...', inject(function($filter) {

        var filter = $filter('<%= _.camelize(name) %>');

		expect("this filter").toBe('fully tested');

	}));

});
