'use strict';

angular.module('phoneApp')
  .filter('extract', function(){
    return function(input, mode, currentUser) {

      var splittedInput,
        echoedMessage = input.indexOf('sended a message with content:');

      var getUser = function() {
        if(echoedMessage > -1) {
          splittedInput = input.split(' ');
          return splittedInput[0];
        }
        return '';
      };

      var getMessage = function() {
        if(echoedMessage > -1) {
          splittedInput = input.split(' ');
          splittedInput.splice(0, echoedMessage - 1);
          return splittedInput.join(' ');
        }
        return input;
      };

      if(mode === 'user') {
        return getUser() === currentUser ? '' : getUser();
      }

      if(mode === 'message') {
        return getUser() === currentUser ? '' : getMessage();
      }
    };
  });
