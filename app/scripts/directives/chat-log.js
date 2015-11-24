'use strict';

angular.module('phoneApp')
  .directive('chatLog', function () {
    return {
      restrict: 'EA',
      templateUrl: '/templates/chat-log.html',
      controller: ['$scope', function ($scope) {

        var chatArea = $('.chat-area');
        chatArea[0].scrollTop = chatArea[0].scrollHeight;

        $scope.$watchCollection(
          function() {
            return $scope.chatLog;
          },
          function(data){
            chatArea[0].scrollTop = chatArea[0].scrollHeight;
            $scope.chat = data;
          });
      }]
    };
  });
