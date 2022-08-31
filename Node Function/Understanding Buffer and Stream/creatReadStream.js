const fs = require("fs");
const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 }); // 기본적으로 64KB 단위로 읽어들임 (16Byte 단위로 변경)

const data = [];
readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data:", chunk, chunk.length);
});
readStream.on("end", () => {
  console.log("end:", Buffer.concat(data).toString());
});
readStream.on("error", (err) => {
  console.error("error:", err);
});
