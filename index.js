var myClients = {};

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
    var keyid = socket.id;
    socket.broadcast.emit('join', {'name':data, 'id':keyid});
  });

  socket.on('disablebuzz', function(data){
    socket.broadcast.emit('disablebuzz', data);
  });

  socket.on('enablebuzz', function(data){
    socket.broadcast.emit('enablebuzz', data);
  });

  socket.on('buzz', function(data){
    socket.broadcast.emit('buzz', data);
  });

  socket.on("disconnect", (reason) => {
    socket.broadcast.emit('leave', socket.id);
  });
});
