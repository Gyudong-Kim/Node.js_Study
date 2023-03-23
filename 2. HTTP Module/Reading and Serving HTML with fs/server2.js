const http = require("http");
const fs = require("fs").promises;

const server = http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./server2.html");
      // HTML인지 문자열인지 인식하지 못할 경우와 한글 출력을 위해 writeHead에 다음과 같이 작성함
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (error) {
      console.error(error);
      // plain은 문자열을 나타냄
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })

  .listen(8080, () => {
    console.log("8080번 포드에서 서버 대기 중입니다.");
  });
