import path from "path"

// console.log(path.basename("./index.js")); //To get the last file from the path
// console.log(path.basename("./index.js",  ".js")); //To get the last file from the path ignoring the extension if matches
// console.log(path.dirname("./Demo/BAt/Supes")); // To get the path except the basename
// console.log(path.extname("./package.json")); // To get the extension of the file

// console.log(path.join("..", "01 Module Wrapper")); // To get a relative path string from the given parts
// console.log(path.resolve("..", "01 Module Wrapper")); // To get an absolute path string from the given parts

// console.log(path.format(path.parse("./Demo/BAt/Supes"))); // Parse method will return a path object from the path string, and format method will convert the path object to path string.

// console.log(path.relative("./Demo","./Demo/BAt")); // To generate a relative path to get from the first path(from) to second path(to)
// console.log(path.normalize("e:/programming languages")); // To return a valid path string depending on the systen from a path

// console.log(path.isAbsolute("e:\\programming languages\\hello")); // Returns true if the path string is an absolute path