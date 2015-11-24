'use strict';

angular.module('appSettings',[])
  .factory('settings', function(){

    var generated = false;

    var userNameGenerator = function() {
      if (!generated) {
        return 'user' + Math.floor(Math.random()*100 + 1);
      }
      return userName;
    };

    var userName = userNameGenerator();

    return {
      server: 'http://185.13.90.140:8081',
      userName : userName
    };
  });
