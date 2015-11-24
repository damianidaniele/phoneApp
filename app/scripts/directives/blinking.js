'use strict';

angular.module('phoneApp')
  .directive('blinking', function () {
    return {
      restrict: 'A',
      scope: {
        getAttention: '@',
        linkPath: '@',
        linkValue: '@'
      },
      replace: true,
      transclude: true,
      templateUrl: '/templates/nav-bar.html',
      link: function(scope, elements, attrs, controller, transclude) {
        transclude(function(transcludeEl){
          scope.linkPath = $(transcludeEl).first().attr('href');
          scope.linkValue = $(transcludeEl).first().html();
        });
      },
      controller: ['$scope', 'ChatService', function ($scope, ChatService) {
        console.log(1, $scope.anchor);

        $scope.chatLog = ChatService.chatLog;
        $scope.getAttention = false;

        $scope.$watchCollection(
          function() {
            return $scope.chatLog;
          },
          function(data){
            $scope.getAttention = true;
          }
        );

        $scope.viewContent = function() {
          if ($scope.getAttention) {
            $scope.getAttention = false;
          }
        };
      }]
    };
  });
