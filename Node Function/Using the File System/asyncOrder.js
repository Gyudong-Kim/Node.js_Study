const fs = require("fs");

// 비동기이지만, 순차적으로 실행된다.
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
      fs.readFile("./readme.txt", (err, data) => {
        if (err) {
          throw err;
        }
        console.log("4번", data.toString());
      });
    });
  });
});
