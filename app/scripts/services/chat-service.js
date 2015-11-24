'use strict';

angular.module('phoneApp')
  .service('ChatService', ['$filter', 'socket', function ($filter, socket) {


    this.chatLog = [];

    this.newMessage = function(user, message) {
      this.chatLog.push({ method: 'sent', user: '', message: message});
      socket.emit('message', { user: user, message: message});
    };

    this.getMessages = function(user) {
      var chatLine = {};

      socket.on('message', function (data) {
        chatLine.method = 'received';
        chatLine.user = $filter('extract')(data.message, 'user', user);
        chatLine.message = $filter('extract')(data.message, 'message', user);
        if(chatLine.message) {
          this.chatLog.push(chatLine);
        }
        chatLine = {};
      }.bind(this));
    };

  }]);
