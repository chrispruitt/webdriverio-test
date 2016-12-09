exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        login: [
            './test/specs/login/*.js'
        ],
        appointments: [
            './test/specs/appointments/*.js'
        ]
    },
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 12000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['phantomjs'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 99999999
    },
    before: function (capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    }
}
