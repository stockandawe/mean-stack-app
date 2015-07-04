'use strict';

describe('Controller: MovieViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieViewCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    MovieViewCtrl = $controller('MovieViewCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieViewCtrl.awesomeThings.length).toBe(3);
  });
});
