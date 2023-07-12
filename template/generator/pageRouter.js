const path = require("path");
const fs = require("fs");
const verifyFileExist = require("../utils/verifyFileExist");

const baseFile = path.resolve(__dirname, "../../src/pages");
module.exports = {
  description: "Generate a new route component",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "输入路由组件的名称[eg: 大驼峰命名]",
      validate: (dirName) => {
        if (!dirName || dirName.trim === "") {
          return "路由组件名不能为空";
        }
        if (verifyFileExist(dirName, baseFile)) {
          return "路由组件已存在";
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    const basePath = path.join(baseFile, `./${data.componentName}`);
    console.log("basePath", basePath);
    // 新建一个组件文件夹
    fs.mkdirSync(basePath);
    // 新建一个组件文件夹下的通用文件夹
    fs.mkdirSync(path.join(baseFile, `./${data.componentName}/components`));
    return [
      {
        type: "add",
        path: "src/pages/{{pascalCase componentName}}/index.tsx",
        templateFile: "template/routerComponents.hbs",
      },
      {
        type: "modify",
        path: "src/routers/index.ts",
        pattern: /(\/\/ -- ADD ROUTE COMPONENTS HERE --)/gi,
        force: true,
        template:
          "import {{pascalCase componentName}} from '../pages/{{pascalCase componentName}}';\n$1",
      },
      {
        type: "modify",
        path: "src/routers/index.ts",
        pattern: /(\/\/ -- ADD ROUTES HERE --)/gi,
        force: true,
        template:
          "{ path: '/{{pascalCase componentName}}', Component: {{pascalCase componentName}} },\n$1",
      },
    ];
  },
};
