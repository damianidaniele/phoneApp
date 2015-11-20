'use strict';

angular.module('appSettings',[])
  .factory('settings', function(){
    return {
      server: 'http://185.13.90.140:8081'
    };
  });
