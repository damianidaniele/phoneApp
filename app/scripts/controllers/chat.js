'use strict';

angular.module('phoneApp')
  .controller('ChatCtrl', ['$scope', '$filter', 'socket', 'settings', function ($scope, $filter, socket, settings) {

    var chatLine = {};

    $scope.currentUser = settings.userName();
    $scope.chatLog = [];

    $scope.sendMessage = function(message) {
      $scope.chatLog.push({ method: 'sent', user: '', message: message});
      socket.emit('message', { user: $scope.currentUser, message: message});
    };

    socket.on('message', function (data) {
      console.log('data: ', data);
      chatLine.method = 'received';
      chatLine.user = $filter('extract')(data.message, 'user', $scope.currentUser);
      chatLine.message = $filter('extract')(data.message, 'message', $scope.currentUser);
      $scope.chatLog.push(chatLine);
      chatLine = {};
      console.log('test', $scope.chatLog);
    });

  }]);
