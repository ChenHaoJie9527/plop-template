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
      },
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/pages/{{pascalCase componentName}}.tsx",
      templateFile: "template/routerComponents.hbs",
    },
    {
      type: "modify",
      path: "src/routers/index.ts",
      pattern: /(\/\/ -- ADD ROUTE COMPONENTS HERE --)/gi,
      template:
        "import {{pascalCase componentName}} from '../pages/{{pascalCase componentName}}';\n$1",
    },
    {
      type: "modify",
      path: "src/routers/index.ts",
      pattern: /(\/\/ -- ADD ROUTES HERE --)/gi,
      template:
        "{ path: '/{{pascalCase componentName}}', Component: {{pascalCase componentName}} },\n$1",
    },
  ],
};
