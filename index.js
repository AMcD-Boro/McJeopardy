var express = require('express');
var socket = require('socket.io');

const PORT = process.env.PORT || 3000;

// App setup
var app = express();
var server = app.listen(PORT, function(){
  console.log('listening to requests on port ' + PORT);
});

// Static Files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection', socket.id);

  socket.on('join', function(data){
      socket.broadcast.emit('join', data);
    });


  socket.on('buzz', function(data){
      socket.broadcast.emit('buzz', data);
    });

});
