'use strict';

angular.module('phoneApp')
  .directive('chatButton', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '/templates/chat-button.html',
      controller: ['$scope', function ($scope) {

        var inputArea = $("[name='message']");

        $(inputArea).focus();

        $scope.send = function(){
          event.preventDefault();
          var message = inputArea.val();
          if(message) {
            inputArea.val('');
            $scope.sendMessage(message);
          }
          $(inputArea).focus();
        };
      }]
    };
  });
