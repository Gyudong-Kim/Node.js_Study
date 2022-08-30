const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 deprecated 되었으니 더 이상 사용하지 마세요!");
dontUseMe(1, 2);

// 콜백 패턴을 프로미스 패턴으로 바꿔준다.
// 바꿀 함수를 인자로 제공하면 되며, async/await 패턴까지 사용할 수 있어 좋음 (단, (error, data) => {} 형식이어야함)
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
