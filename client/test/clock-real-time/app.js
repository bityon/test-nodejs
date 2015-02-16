var http = require('http');

var server = http.createServer(function(serverRequest, serverResponse) {
   var currentTicks = 1;
   var maximumTicks = 20;
   serverResponse.setHeader("Content-Type", "text/html; charset=utf-8");
   
    var currentTime = "";
    var interval = setInterval(function(){
        if (currentTicks <= maximumTicks){
            currentTime = getCurrentTime();
            serverResponse.write(currentTime);
            currentTicks++;
        }
        else{
            clearInterval(interval);
            serverResponse.end();
        }
    }, 1000);
    
    
});

server.listen(8080);

function getCurrentTime(){
    var currentDate = new Date();
    var currentHours = addZeroToOneDigit(currentDate.getHours());
    var currentMinutes = addZeroToOneDigit(currentDate.getMinutes());
    var currentSeconds = addZeroToOneDigit(currentDate.getSeconds());
    var currentTime = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    var html = parseHtml(currentTime);
    return html;
}
 
function addZeroToOneDigit(digits){
    var result = ((digits).toString().length === 1) ? "0" + digits : digits;
    return result;
}
 
function parseHtml(currentTime){
    var result = '<p style="direction: rtl; font: 12px Tahoma">';
    result += 'השעה כרגע היא: ' + currentTime;
    result += '.</p>';
    return result;
}

