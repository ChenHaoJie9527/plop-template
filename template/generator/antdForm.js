const path = require("path");
const fs = require("fs");

const baseFile = path.resolve(__dirname, "../../src");

module.exports = {
  description: "Generate a new Form component",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "输入Form组件的名称:",
    },
    {
      type: "input",
      name: "label",
      message: "输入表单字段的标签文本:",
    },
    {
      type: "input",
      name: "numberOfItems",
      message: "输入要生成的表单项的数量:",
      validate: (value) => {
        const parsedValue = parseInt(value);
        if (isNaN(parsedValue) || parsedValue <= 0) {
          return "请输入一个大于0的有效数字";
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "src/components/{{pascalCase componentName}}/index.tsx",
        templateFile: "template/antdForm.hbs",
      },
    ];
    // const numberOfItems = parseInt(data.numberOfItems);
    // for (let i = 0; i < numberOfItems; i++) {
    //   actions.push({
    //     type: "add",
    //     path: `src/components/{{pascalCase componentName}}${i}.tsx`,
    //     templateFile: "template/antdForm.hbs",
    //   });
    // }
    return actions;
  },
};
