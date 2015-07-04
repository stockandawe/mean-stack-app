'use strict';

describe('Controller: MovieEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieEditCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    MovieEditCtrl = $controller('MovieEditCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieEditCtrl.awesomeThings.length).toBe(3);
  });
});
