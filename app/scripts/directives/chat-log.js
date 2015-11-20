'use strict';

angular.module('phoneappApp')
  .directive('chatLog', function () {
    return {
      restrict: 'EA',
      template: '<span>{{lastMessage}}</span>',
      controller: ['$scope', 'socket', function ($scope, socket) {

        socket.on('message', function (data) {
          console.log('data: ', data);
          $scope.chatLog.push(data);
        });

      }]
    };
  });
