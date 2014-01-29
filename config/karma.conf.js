module.exports = function (config) {

    config.set({

        basePath: '../',

        frameworks: ['jasmine'],

        files: [
          'test/lib/angular/angular.js',
          'test/lib/angular-mocks/angular-mocks.js',
          'angular-segmentio.js',
          'test/unit/**/*.js'
        ],

        reporters: ['junit'],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        port: 9876,
        runnerPort: 9100,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true
    });

};