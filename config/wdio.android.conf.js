const {config} = require('./wdio.shared.conf.js');
const  path = require('path');

    config.specs = [
        // ToDo: define location for spec files here
        '../test/specs/android/add-note.screen.spec.js'
    ];
    config.capabilities = [{
        platformName: 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Pixel 7a',
        'appium:automationName': 'UiAutomator2',
        'appium:app':path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions':true
    }];
 
    config.port = 4723;

   // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['appium'],

exports.config = config;
