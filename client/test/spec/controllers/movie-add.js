'use strict';

describe('Controller: MovieAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieAddCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    MovieAddCtrl = $controller('MovieAddCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieAddCtrl.awesomeThings.length).toBe(3);
  });
});
