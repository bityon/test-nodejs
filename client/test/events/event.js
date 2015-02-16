var EventEmitter = require("events").EventEmitter;

var ee = new EventEmitter();

/* create listener */
ee.on("myEvent", function (arg1, arg2) {
    console.log("event has occured!");
    console.log("here are the arg1: "+arg1);
    console.log("here are the arg2: "+arg2);
    
    
});

/*activating the event */

var o = {
    a: "a",
    b: ["a", "c", "d"],
    func: function () {
        b.sort();
    }
}

ee.emit("myEvent", o,'arg2');

var util = require('util');
var http = require('http');

console.log(util.inspect(http, { showHidden: false, depth: null, colors: true }));