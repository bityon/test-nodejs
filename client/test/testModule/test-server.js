http = require("http"); //The require

event = require("../events/event.js")

var MyServer = http.createServer(function(request, response) {
    response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("BLA BLA BLA");
    response.write("\n");
    response.write(request.httpVersion);
    response.end();
});

MyServer.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = MyServer.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});


