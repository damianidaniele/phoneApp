'use strict';

angular.module('phoneappApp')
  .controller('ChatCtrl', ['$scope', 'socket', function ($scope, socket) {

    $scope.user = 'testUser';
    $scope.chatLog = [];

    $scope.sendMessage = function(message) {
      socket.emit('message', { user: $scope.user, message: message});
    }

  }]);
