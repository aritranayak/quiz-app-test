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
  
  it('should display the heading', function() {
	  var startButton = element(by.id('js-start-button'));
	  expect(startButton.getText()).toEqual('START');
  });
  
});