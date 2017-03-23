var server = require('http').createServer();
var io = require('socket.io')(server);

const PORT= process.env.PORT || 8000;

io.on('connection', function(client){
  client.on('message', function(data){
    //console.log('message', data);
    client.emit('message', data);
  });
  client.on('disconnect', function(){
  });
});
server.listen(PORT, function() {
  console.log('listening:', PORT);
});
