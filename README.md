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

The configuration file of protractor is called `conf.js`, and this is the root file of the protractor. 

```
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

```

Now, consider the root of your project folder is `quiz-app-test`. You create a folder called `src`, and you can keep the above `conf.js` file under the `src` folder.
Now, you can create your `package.json` file inside your root folder, and ensure your configuration file is correctly referenced, like this:

```
{
  "name": "quiz-app-test",
  "version": "1.0.0",
  "description": "Protractor test for testing Harry Potter Quiz App",
  "main": "src/conf.js",
  "scripts": {
    "test": "node_modules/.bin/protractor src/conf.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/aritranayak/quiz-app-test.git"
  },
  "keywords": [
    "protractor",
    "jasmine-framework"
  ],
  "author": "Aritra Nayak",
  "license": "ISC",
  "dependencies": {
    "express": "~3.4.0",
    "protractor": "5.4.2",
    "mkdirp": "~0.3.5",
    "q": "1.0.0",
    "firefox-profile": "0.3.4"
  },
  "bugs": {
    "url": "https://github.com/aritranayak/quiz-app-test/issues"
  },
  "homepage": "https://github.com/aritranayak/quiz-app-test#readme"
}

```
Note the `"main": "src/conf.js"`, that tells your test project to find the conf file correctly.

h4. Now will be a good time to run `npm install` from your root folder. This will install your `node_modules` directory as well as `protractor`, as they are mentioned in your dependencies.

h4. Finally, tell `npm` how to run the test automation adding the below code snippet in your package.json file:

```
"scripts": {
    "test": "node_modules/.bin/protractor src/conf.js"
  }
```

So, everytime you run `npm test` from your project folder, your selenium server will start and protractor tests will run.

## Running your first test

Look back again in your `src/conf.js` file, and find the file that holds your tests
```
specs: [
    'spec.js'
  ],
```

So, you need to create a `spec.js` file in the same directory as `conf.js` file. Below are very basic tests, that you can add to get your UI test automation up and running:

<spec.js>
```
describe('First Page', function() {
  beforeEach(function() {
    browser.get('https://anamika8.github.io/Harry-Potter-Quiz-App/');
  });

  it('should open the home page', function() {
	  expect(browser.getTitle()).toContain("Harry Potter's quiz app");
  });
  
  it('should display the heading', function() {
	  var heading = element(by.id('heading'));
	  expect(heading.getText()).toEqual('Welcome to Wizarding World');
  });
  
  it('should display the start button', function() {
	  var startButton = element(by.id('js-start-button'));
	  expect(startButton.getText()).toEqual('START');
  });
  
});

```

The above file holds three tests:
1. Test that the Home page has a certain title
2. Test that a certain element (detected by its id) in that home page, has a certain text
3. Test that a button element (detected by its id) in that home page, has a certain text

##### Trigger test
Just run `npm test` from your project root. If everything works fine, you will see a chrome browser opening automatically and closing on its own. The console will have the below details, indicating tests' status

```
> quiz-app-test@1.0.0 test /Users/aritranayak/Documents/workspace/quiz-app-test
> protractor src/conf.js

[00:13:11] I/launcher - Running 1 instances of WebDriver
[00:13:11] I/direct - Using ChromeDriver directly...
Started
...


3 specs, 0 failures
Finished in 1.314 seconds

[00:13:14] I/launcher - 0 instance(s) of WebDriver still running
[00:13:14] I/launcher - chrome #01 passed

```
