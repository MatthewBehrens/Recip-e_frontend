angular.module('userSessions.controller', [])

  .controller('UserSessionsCtrl', ['$scope', '$state', '$ionicHistory', '$rootScope', function ($scope, $state, $ionicHistory, $rootScope) {
    $scope.$on('auth:login-success', function() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('app.pantry');
    });

    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.errors = reason.errors;
    });

    $rootScope.$on('auth:logout-success', function() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('app.sign_in');
    });

    $rootScope.$on('auth:logout-error', function(ev, reason) {
      alert('logout failed because ' + reason.errors[0]);
    });


  }]);
