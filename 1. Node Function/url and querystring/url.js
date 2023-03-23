const url = require("url");

// WHATWG
const { URL } = url;
const myURL = new URL(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
console.log("-----------------");
// 기존 node
console.log("url.format():", url.format(myURL));
const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));
// host가 생략되어 넘어오는 경우 WHATWG 방식으로는 해석이 되지 않아 기존 Node 방식을 사용해야한다.
