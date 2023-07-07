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
  // 生成文件夹目录
  plop.setGenerator("Folders", {
    description: "生成节点模板",
    prompts: [
      {
        type: "input",
        name: "nodeName",
        message: "请输入文件夹名称[eg:fls-contract]",
        default: "fls-demo",
        validate: function (val) {
          if (/.+/.test(val)) {
            if (val.length < 6 || val.length > 20) {
              return "文件夹名称长度[6-20]的小写英文单词";
            }
            return true;
          } else {
            return "文件夹名称不能为空!";
          }
        },
      },
      {
        type: "input", // 交互类型,字符输入
        name: "funCode", //参数名称
        message: "请输入节点编码[eg:fls0001]", // 交互提示
        default: "fls0000",
        validate: function (val) {
          if (!!val && val.length == 7) {
            return true;
          } else {
            return "请保持节点编码长度为7";
          }
        },
      },
      {
        type: "list", // 交互类型: 上下键选择
        name: "server", //参数名称
        message: "请选择后端服务:", // 交互提示
        choices: [
          "imfbp-fls-before-web",
          "imfbp-fls-after-web",
          "imfbp-crm-web",
          "imfbp-invoice-web",
        ],
        default: "imfbp-fls-before-web",
      },
    ],
    actions: (data) => {
      const nodeName = "{{ nodeName }}";
      return [
        {
          type: "addMany", // 增加多个文件
          base: "template/layout/", // 生成,目标路径会去掉这写路径
          stripExtensions: true,
          destination: `ucf-apps/${nodeName}/`, // 目标路径
          templateFiles: "template/layout/src/**/**", // 配置的模板文件路径.
        },
      ];
    },
  });
}
