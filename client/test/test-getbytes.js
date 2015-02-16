
// var fs = require('fs');

// var count = 0,
//     totalBytes = 0;

// function calculateByteSize() {
//     fs.readdir(".", function (err, filenames) {
//         var i;
//         count = filenames.length;

//         for (i = 0; i < filenames.length; i++) {
//             fs.stat("./" + filenames[i], function (err, stats) {
//                 totalBytes += stats.size;
//                 count--;
//                 if (count === 0) {
//                     console.log(totalBytes);
//                 }
//             });
//         }
//     });
// }

// calculateByteSize();

var fs = require('fs');

var path1 = "./",
    path2 = ".././",
    logCount;

function countFiles(path, callback_function) {
    fs.readdir(path, function (err, filenames) {
        callback_function(err, path, filenames.length);
    });
}

logCount = function (err, path, count) {
    console.log(count + " files in " + path);
};

countFiles(path1, logCount);
countFiles(path2, logCount);
