describe('second suite', function () {
	it('test 2', function () {
		browser.url('http://google.com');
		browser.waitForVisible('#bug', 2000)
	});
});