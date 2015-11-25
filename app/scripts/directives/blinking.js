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
      templateUrl: '/templates/blinking.html',
      link: function(scope, elements, attrs, controller, transclude) {
        transclude(function(transcludeEl){
          scope.linkPath = $(transcludeEl).first().attr('href');
          scope.linkValue = $(transcludeEl).first().html();
        });
      },
      controller: ['$scope', '$element', 'ChatService', function ($scope, $element, ChatService) {

        $scope.isThereANewMessage = false;

        $scope.$watchCollection(
          function() {
            return $scope.chatLog;
          },
          function(data){
            $scope.isThereANewMessage = !($element.hasClass('active')) && data;
          }
        );

        $scope.chatLog = ChatService.chatLog;

      }]
    };
  });
