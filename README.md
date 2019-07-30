# quiz-app-test
Uses protractor to test a very simple quiz app


# How to setup protractor in your machine

Protractor supports Node.js.To run, you will need to have Node.js installed. You will download the Protractor package using npm, which comes with Node.js. 
Check the version of Node.js you have by running node --version. 

### One time setup for your machine 

- Install Protractor with -g Globally

`npm install -g protractor`

- Now try to run below command it will return protractor version

`protractor --version`

- webdriver-manager is a helper tool to get an instance of Selenium Server and download necessary libraries.

`webdriver-manager update`

- Start Selenium server with

`webdriver-manager start`

- After running this command you can check status about the server here `http://localhost:4444/wd/hub.`

- 4444 is a default port for selenium standalone server but you can change using this.

`webdriver-manager start — seleniumPort XXXX`

```

Protractor needs two files to run,
a. spec file
b. configuration file

```

### Project specific setup that you need to repeat for every Protractor project

The configuration file of protractor is called protractor.conf.js, and this is the root file of the protractor. 

```


// An example configuration file.

exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome' //firefox,chrome
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['e2e/*spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    }
};


```

