const http = require("http");

const server = http
  .createServer((req, res) => {
    res.write("<h1>Hello Node!</h1>");
    res.write("<p>Hello Server</p>");
  })
  .listen(8080, () => {
    // 서버 연결
    console.log("8080번 포드에서 서버 대기 중입니다.");
  });

// 에러 처리
server.on("error", (error) => {
  console.error(error);
});
