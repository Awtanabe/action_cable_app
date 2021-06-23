(function() {
  App.room = App.cable.subscriptions.create("RoomChannel", {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {
      const messages = document.getElementById('messages');
      messages.insertAdjacentHTML('beforeend', data['message']);
    },
    speak: function(message) {
      return this.perform('speak', {message: message});
    }
  });

  window.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {

      App.room.speak(e.target.value);
      e.target.value = '';
      e.preventDefault();
    }
  })

}).call(this);