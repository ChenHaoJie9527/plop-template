const fs = require("fs");
const path = require("path");

const baseFile = path.resolve(__dirname, "../../src/pages");

// 引入便于验证文件夹是否存在相同文件的工具函
const verifyFileExist = require("../utils/verifyFileExist");

// 引入校验大驼峰命名校验函数
const bigHumpCheck = require("../utils/bigHumpCheck");

module.exports = {
  description: "创建pages组件",
  // 编写命令行交互逻辑，可在命名中获取参数
  prompts: [
    {
      name: "pageName",
      type: "input",
      message: "请输入页面名称[eg: 大驼峰命名]",
      validate: (dirName) => {
        if (!dirName || dirName.trim === "") {
          return "组件名称不能为空";
        }
        console.log("dirName => ", dirName);
        // 验证文件名是否存在 即是否已经创建了
        if (verifyFileExist(dirName, baseFile)) {
          return "组件已经存在";
        }
        // 校验命名
        if (!bigHumpCheck(dirName)) {
          return "请使用大驼峰命名";
        }
        return true; // true 执行下一步
      },
    },
  ],
  // data 接受上一步传递的参数
  actions: (data) => {
    console.log("data =>", data);
    const basePath = path.join(baseFile, `./${data.pageName}`);
    // 新建一个组件文件夹
    fs.mkdirSync(basePath);
    // 新建一个组件文件夹下的通用文件夹
    fs.mkdirSync(path.join(baseFile, `./${data.pageName}/components`));

    // 最后返回一个action
    return [
      {
        type: "add",
        path: path.join(basePath, "index.tsx"),
        templateFile: path.join(__dirname, "../layout/index.hbs"),
        force: true,
      },
    ];
  },
};
