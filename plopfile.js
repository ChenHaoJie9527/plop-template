export default function (plop) {
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
}
