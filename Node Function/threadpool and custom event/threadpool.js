const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

// Node는 기본적으로 4개가 백그라운드에서 동작
// UV_THREADPOOL_SIZE=num으로 스레드 개수 조절 가능
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("2:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("3:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("4:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("5:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("6:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("7:", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("8:", Date.now() - start);
});
