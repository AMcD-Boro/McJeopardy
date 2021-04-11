$(document).ready(function(){

  //Make socket connection
  var socketFE = io.connect();

  //Query DOM
  var buzzlist = $('#player-buzz');
  var playerlist = $('#player-list');

  //Emit events

  //Listen for events
  socketFE.on('buzz', function(data){
    buzzlist.append('<li>' + data + ' buzzed in</li>');
  });

  socketFE.on('join', function(data){
    playerlist.append('<li>' + data + '</li>');
  });

});
