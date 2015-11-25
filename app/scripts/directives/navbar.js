'use strict';

angular.module('phoneApp')
  .directive('navbar', function () {
    return {
      restrict: 'A',
      controller: ['$scope', '$element', '$attrs', function ($scope, $element) {

        $element.on('click', function(e){
          $element.children('li').removeClass('active');
          $(e.target).parent().addClass('active');
        });
      }]
    };
  });
