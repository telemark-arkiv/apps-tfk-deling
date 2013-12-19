'use strict';

describe('Controller: RessurserCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkDelingApp'));

  var RessurserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RessurserCtrl = $controller('RessurserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
