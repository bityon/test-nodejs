{"filter":false,"title":"test-async.js","tooltip":"/client/test/test-async.js","undoManager":{"mark":71,"position":71,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":8,"column":53},"action":"insert","lines":["var fs = require('fs');","","oldFilename = \"./processId.txt\";","newFilename = \"./processIdOld.txt\";","","fs.chmodSync(oldFilename, 777);","fs.renameSync(oldFilename, newFilename);","isSymLink = fs.lstatSync(newFilename).isSymbolicLink();","console.log(\"The file is symbolic link? \"+isSymLink);"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":8,"column":53},"action":"remove","lines":["var fs = require('fs');","","var oldFilename = \"./processId.txt\";","var newFilename = \"./processIdOld.txt\";","","fs.chmodSync(oldFilename, 777);","fs.renameSync(oldFilename, newFilename);","var isSymLink = fs.lstatSync(newFilename).isSymbolicLink();","console.log(\"The file is symbolic link? \"+isSymLink);"]},{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["var fs = require('fs');","","oldFilename = \"./processId.txt\";","newFilename = \"./processIdOld.txt\";","","fs.chmod(oldFilename, 777, function (err) {   ","    fs.rename(oldFilename, newFilename, function (err) {","        fs.lstat(newFilename, function (err, stats) {","            var isSymLink = stats.isSymbolicLink();","            console.log(\"The file is symbolic link? \"+isSymLink);","        });","    });","});",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":7},"end":{"row":6,"column":9},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":11},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":13,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"remove","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":7},"end":{"row":13,"column":8},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":12},"end":{"row":15,"column":5},"action":"insert","lines":["","        ","    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":14,"column":13},"action":"remove","lines":["conso"]},{"start":{"row":14,"column":8},"end":{"row":14,"column":15},"action":"insert","lines":["console"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":19},"end":{"row":14,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":21},"end":{"row":14,"column":22},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":[";"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":11},"end":{"row":9,"column":11},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424029760632,"hash":"d0d131933238d0b241353e4cee2779b899709569"}