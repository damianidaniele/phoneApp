'use strict';

angular.module('phoneappApp')
  .directive('chatButton', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '/templates/chat-button.html',
      controller: ['$scope', 'socket', function ($scope, socket) {

        $scope.send = function(){
          event.preventDefault();
          var message = $("[name='message']").val();
          if(message) {
            $scope.sendMessage(message);
          }
        };
      }]
    };
  });
