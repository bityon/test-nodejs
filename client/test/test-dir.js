var fs = require('fs');

fs.readdir(".", function (err, filenames) {
    if (!err) {
        var i;
        for (i = 0; i < filenames.length; i++) {
            console.log(filenames[i]);
        }   
    }
    else {
        console.log(err);
    }
});

var processId = process.getuid();
console.log(processId);

