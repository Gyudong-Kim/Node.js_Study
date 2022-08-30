const crypto = require("crypto");

// md5, sha1, sha256, sha512 등이 가능하지만, md5와 sha1은 이미 취약점이 발견됨
// base64, hex, latin1이 주로 사용되는데, 그 중 base64가 결과 문자열이 가장 짧아 애용됨
console.log(
  "base64:",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
console.log(
  "hex:",
  crypto.createHash("sha512").update("비밀번호").digest("hex")
);
console.log(
  "base64:",
  crypto.createHash("sha512").update("다른 비밀번호").digest("base64")
);
