'use strict';

angular.module('phoneApp')
  .controller('ChatCtrl', ['$scope', 'ChatService', 'settings', function ($scope, ChatService, settings) {

    $scope.currentUser = settings.userName;

    ChatService.getMessages($scope.currentUser);

    $scope.chatLog = ChatService.chatLog;

    $scope.sendMessage = function(message) {
      ChatService.newMessage($scope.currentUser, message);
    };

  }]);
