// ----------------------------HELLO WORLD-----------------------------
// console.log("HELLO WORLD");

// ----------------------------BABY STEPS-------------------------------
// var args = process.argv;
// args = args.splice(2, args.length);

// var result = args.reduce(function (a, b) {
//   return +a + +b;
// });

// console.log(result);

// ----------------------------MY FIRST I/O!-------------------------------
// var fs = require("fs");
// var file = process.argv[1];
// var buf = fs.readFileSync(process.argv[2], "utf8");
// var lines = buf.split("\n");
// console.log(lines.length - 1);

// ----------------------------MY FIRST ASYNC I/O!-------------------------------
// var fs = require("fs");
// var file = process.argv[1];
// fs.readFile(process.argv[2], "utf8", function (err, data) {
//   if (err) throw err;
//   var lines = data.split("\n");
//   console.log(lines.length - 1);
// });

// ----------------------------FILTERED LS-------------------------------
// var fs = require("fs");
// fs.readdir(process.argv[2], function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   var regexTest = new RegExp(".+." + process.argv[3] + "$");
//   data
//     .filter(function (elem) {
//       return regexTest.test(elem);
//     })
//     .forEach(function (elem) {
//       console.log(elem);
//     });
// });

// ----------------------------HTTP CLIENT-------------------------------
// var http = require("http");
// http.get(process.argv[2], function (response) {
//   response.setEncoding("utf8");
//   response.on("error", function (err) {
//     console.log(err);
//   });
//   response.on("data", function (data) {
//     console.log(data);
//   });
// });
