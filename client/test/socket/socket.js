var net = require('net');
var server = net.createServer(function(socket) { //'connection' listener
    console.log('server connected');
    socket.on('end', function() {
        console.log('server disconnected');
    });
    socket.write('hello\r\n');
    socket.pipe(socket);
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
