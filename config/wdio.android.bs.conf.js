const {config} = require('./wdio.shared.conf.js');
require('dotenv').config()


//Browserstack

config.user = process.env.BS_USER;
config.key = process.env.BS_KEY;

    config.specs = [
        // ToDo: define location for spec files here
        '../test/specs/android/add-note.screen.spec.js'
    ];
    config.capabilities = [{
        platformName: 'Android',
        'appium:platformVersion': '9.0',
        'appium:deviceName': 'Google Pixel 3',
        'appium:automationName': 'UiAutomator2',
        'appium:app':"bs://013833447dccd7f6f624393209855b984b792d29",
        'appium:autoGrantPermissions':true
    }];
 
   // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'],


exports.config = config;
