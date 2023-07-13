// import basicGenerator from "./template/generator/basic.js";
const basicGenerator = require("./template/generator/basic");
const pageRouter = require("./template/generator/pageRouter.js");
const antdForm = require("./template/generator/antdForm");

module.exports = function (plop) {
  // Add your generators here
  plop.setGenerator("example", {
    description: "This is an example generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "请输入你要新建的文件名称",
      },
      {
        type: "input",
        name: "path",
        message: "请输入你要新建的文件存放的路径",
      },
      {
        type: "input",
        name: "componentName",
        message: "请输入你组件的名称",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{path}}/{{name}}.tsx",
        templateFile: "template/Basic.hbs",
      },
    ],
  });
  // // 生成组件目录文件
  plop.setGenerator("basic", basicGenerator);

  plop.setGenerator("配置路由组件", pageRouter);

  plop.setGenerator("自定义Atnd Form组件", antdForm);

  plop.setHelper("capitalize", function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  });

  plop.addHelper("directory", (comp) => {
    try {
      fs.accessSync(`src/components/${comp}`, fs.F_OK);
      return `components/${comp}`;
    } catch (e) {
      return `components`;
    }
  });
};
