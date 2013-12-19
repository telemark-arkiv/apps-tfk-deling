'use strict';

describe('Controller: DatakilderCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkDelingApp'));

  var DatakilderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatakilderCtrl = $controller('DatakilderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
