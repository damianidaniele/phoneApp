'use strict';

angular.module('phoneApp')
  .directive('chatLog', function () {
    return {
      restrict: 'EA',
      templateUrl: '/templates/chat-log.html',
      controller: ['$scope', function ($scope) {

        $scope.$watchCollection(
          function() {
            return $scope.chatLog;
          },
          function(data){
            $scope.chat = data;
          });
      }]
    };
  });
