var fs = require('fs');

var oldFilename = "./processId.txt";
var newFilename = "./processIdOld.txt";

fs.chmod(oldFilename, 777, function (err) {   
    if (!err) {
        fs.rename(oldFilename, newFilename, function (err) {
            fs.lstat(newFilename, function (err, stats) {
                var isSymLink = stats.isSymbolicLink();
                console.log("The file is symbolic link? "+isSymLink);
            });
        });
    } else {
        console.log(err);
    }
});
