
var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
  socket.on('novo usuario', (usuario) => {
    console.log('novo usuario entrou: ', usuario)
    io.sockets.emit('novo usuario', usuario)
  })
});