const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

// http server
const expressServer = app.listen(9000);
// socket io is listening on express server
const io = socketio(expressServer);

// every time someone connects to server, this code will run
io.on('connection', (socket) => {
  // server send(emit) message to client
  socket.emit('messageFromServer', { data: "Welcome to the socketio server" });
  // server listen message from client
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient);
  });
});