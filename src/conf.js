// Tests for the Quiz App
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],
  
  onPrepare: function () {
    browser.ignoreSynchronization = true;
  },

  capabilities: {
    'browserName': 'chrome'
  },
};