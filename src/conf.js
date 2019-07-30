// Tests for the Quiz App
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],
  
  onPrepare: function () {
	// this will help run protractor in non-angular pages also 
    browser.ignoreSynchronization = true;
  },

  capabilities: {
    'browserName': 'chrome'
  },
};