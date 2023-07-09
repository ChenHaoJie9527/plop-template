// import fs from "fs";
const fs = require("fs");

module.exports = (dirName, dirPath, tail = "") => {
  const dir = fs.readdirSync(dirPath);
  return dir.includes(dirName + tail);
};
