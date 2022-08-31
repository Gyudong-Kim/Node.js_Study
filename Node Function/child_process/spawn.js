const spawn = require("child_process").spawn;

// Node가 Python을 실행할 수는 없고 Python에 요청 하는 것이다.
const process = spawn("python", ["test.py"]);

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
