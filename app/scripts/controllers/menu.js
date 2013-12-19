'use strict';

angular.module('appsTfkDelingApp')
  .controller('MenuCtrl', function ($scope, $location) {

    $scope.thispath = '';

    $scope.$watch(function () {
        return $location.path();
      }, function () {
        $scope.thispath = $location.path();
      }, true
    );

  });
