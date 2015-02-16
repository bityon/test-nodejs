var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var fs = require("fs");
    var zlib = require("zlib");
    
    // Read File
    fs.createReadStream("text.txt")
        // Gzip
        .pipe(zlib.createGzip())
        // Write File
        .pipe(fs.createWriteStream("text.gz"));
    // var stream = fs.createReadStream(__dirname + '/text.txt');
    // stream.pipe(res);
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});


