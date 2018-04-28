const path = require('path');
module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      'test/**/*.test.js'
    ],
    preprocessors: {
      // './app/**/*.js': 'coverage'
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
  });
};
