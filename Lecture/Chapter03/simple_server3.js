const http = require("http");

http.createServer((req, res) => {
    console.log("req: " + req);
    console.log("res: " + res);
}).listen(8080, () => {
    console.log("8080포트에서 서버 연결 중..");
});
