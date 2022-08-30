const path = require("path");

const filename = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("-------------------------------");
console.log("path.dirname():", path.dirname(filename));
console.log("path.extname():", path.extname(filename));
console.log("path.basename():", path.basename(filename));
console.log(
  "path.basename - extname:",
  path.basename(filename, path.extname(filename))
);
console.log("-------------------------------");
console.log("path.parse():", path.parse(filename));
console.log(
  "path.format():",
  path.format({
    dir: "/Users/gyudong/Desktop/Folder/Files/Study/Node.js_Study/Node Function/os and path",
    name: "path",
    ext: ".js",
  })
);
console.log(
  "path.normalize():",
  path.normalize(
    "/Users////gyudong/Desktop///Folder/Files//StudyNode.js_Study//Node Function/os and path//path.js"
  )
);
console.log("-------------------------------");
console.log("path.isAbsolute(/):", path.isAbsolute("/"));
console.log("path.isAbsolute(./gyudong)", path.isAbsolute("./gyudong"));
console.log("-------------------------------");
console.log(
  "path.relative():",
  path.relative(
    "/Users////gyudong/Desktop///Folder/Files//StudyNode.js_Study//Node Function/os and path//path.js",
    "/"
  )
);
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/Users", ".", "/gyudong")
);
