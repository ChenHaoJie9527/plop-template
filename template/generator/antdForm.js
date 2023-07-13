const path = require("path");
const fs = require("fs");

const baseFile = path.resolve(__dirname, "../../src");

module.exports = {
  description: "Generate a new Form component",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "Enter the name of the Form component:",
    },
    {
      type: "input",
      name: "label",
      message: "Enter the label text for the form field:",
    },
  ],
  actions: (data) => {
    
    return [
      {
        type: "add",
        path: "src/components/{{pascalCase componentName}}/index.tsx",
        templateFile: "template/antdForm.hbs",
      },
    ];
  },
};
