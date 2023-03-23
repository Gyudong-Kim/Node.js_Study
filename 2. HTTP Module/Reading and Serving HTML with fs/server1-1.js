const http = require("http");

const server = http.createServer((req, res) => {
  // HTML인지 문자열인지 인식하지 못할 경우와 한글 출력을 위해 writeHead에 다음과 같이 작성함
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node!</h1>");
  res.write("<p>Hello Server</p>");
});
// 콜백을 아래 listening으로 뺄 수 있음
server.listen(8080);

server.on("listening", () => {
  console.log("8080번 포드에서 서버 대기 중입니다.");
});

// 에러 처리
server.on("error", (error) => {
  console.error(error);
});

// 서버를 동시에 여러 개를 돌릴 수 있음
const server2 = http.createServer((req, res) => {
  // HTML인지 문자열인지 인식하지 못할 경우와 한글 출력을 위해 writeHead에 다음과 같이 작성함
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>Hello Node!</h1>");
  res.write("<p>Hello Server</p>");
});
// 콜백을 아래 listening으로 뺄 수 있음
server2.listen(8081);

server2.on("listening", () => {
  console.log("8081번 포드에서 서버 대기 중입니다.");
});

// 에러 처리
server2.on("error", (error) => {
  console.error(error);
});
