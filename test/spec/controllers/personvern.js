'use strict';

describe('Controller: PersonvernCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkDelingApp'));

  var PersonvernCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonvernCtrl = $controller('PersonvernCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
