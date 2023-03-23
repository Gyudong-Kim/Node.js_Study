const fs = require("fs").promises;

setInterval(() => {
  fs.unlink("./abcd.js").catch((err) => {
    console.error(err);
  });
}, 1000);
