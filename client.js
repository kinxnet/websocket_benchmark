var io = require('socket.io-client');

const PORT = process.env.PORT || 8000;

var socket = io('http://localhost:' + PORT);
socket.on('message', (data) => {
  console.log('message', data, ':', (new Date()).getTime() - data, 'ms');
});
setInterval(() => {
  socket.emit('message', (new Date()).getTime())
}, 1000);
