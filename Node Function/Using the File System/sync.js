const fs = require("fs");

// 동기로 순차적으로 실행된다.
let data = fs.readFileSync("./readme.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme.txt");
console.log("2번", data.toString());
data = fs.readFileSync("./readme.txt");
console.log("3번", data.toString());
data = fs.readFileSync("./readme.txt");
console.log("4번", data.toString());
