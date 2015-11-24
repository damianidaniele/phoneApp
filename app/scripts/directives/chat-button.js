'use strict';

angular.module('phoneApp')
  .directive('chatButton', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '/templates/chat-button.html',
      controller: ['$scope', function ($scope) {

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
