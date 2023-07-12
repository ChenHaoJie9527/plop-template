// import fs from "fs";
const fs = require("fs");

module.exports = (dirName, dirPath, tail = "") => {
  const dir = fs.readdirSync(dirPath);
  console.log(dir);
  return dir.includes(dirName + tail);
};
