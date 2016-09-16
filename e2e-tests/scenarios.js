'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /materialView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/materialView");
  });


  describe('materialView', function() {

    beforeEach(function() {
      browser.get('index.html#!/materialView');
    });


    it('should render materialView when user navigates to /materialView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for material view/);
    });

  });
});
