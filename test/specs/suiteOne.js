describe('first suite', function () {
	it('test 1', function () {
		browser.url('http://google.com');
		browser.waitForVisible('#bug', 2000)
	});
});