### 使用 plopjs 提高工作效率

`plopjs`是一个微生成器框架工具，提供了一种以一致性方式生成或者其他类型的纯文本文件的简单方法。我们都在代码中创建结构和模式（路由、控制器、组件、帮助程序等）。这些模式会随着时间的推移而变化和改进，因此当您需要在此处创建新的插入模式名称时，在代码库中找到代表当前“最佳实践”的文件并不总是那么容易。

当我们在处理一些重复性的工作时，如固定的文件引入，编写路由，引入组件，文件组合生成，除了用CV方式，要么就手动引入，这在工作中是极易犯错和低效率的。

使用 `plop`，您可以获得在 CODE 中创建任何给定模式的“最佳实践”方法。可以通过键入 `plop` 从终端轻松运行的代码。这不仅使您不必在代码库中寻找要复制的正确文件，而且还将“正确的方法”变成制作新文件的“最简单的方法”。

### Demo目录

```
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── plopfile.cjs
├── pnpm-lock.yaml
├── public
│  └── vite.svg
├── REDEMI.md
├── src
│  ├── App.css
│  ├── App.tsx
│  ├── assets
│  │  └── react.svg
│  ├── index.css
│  ├── main.tsx
│  ├── pages
│  │  ├── SuTable
│  │  │  ├── components
│  │  │  └── index.tsx
│  │  └── useForm.tsx
│  └── vite-env.d.ts
├── template
│  ├── Basic.hbs
│  ├── basicVue.hbs
│  ├── generator
│  │  └── basic.js
│  ├── layout
│  │  └── index.hbs
│  └── utils
│    └── verifyFileExist.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

**即我们将一系列重复性的工作，化繁为简，通过简单的指令和步骤去，通过询问和提示，基于自定义模板去实现。**

1. 安装

   ```shell
   npm install plop -D
   ```

2. 在目录中创建plopfile.cjs文件

   ```js
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
   }
   ```

   - 导出function函数，参数是plop实例，setGenerator方法生成器
   - description 生成器备注信息
   - prompts 询问、提示，对话流程
   - actions 基于询问结束后，读取模板，输出文件等一系列动作

   基于上述代码，执行 npm run plop，通过询问和提示后，读取 templateFile 路径下的 xxx.hbs模板 并将模板写入到 path 路径下

   ```shell
   npm run plop
   ```

   ![image-20230709200221521](C:\Users\a1852\AppData\Roaming\Typora\typora-user-images\image-20230709200221521.png)

​		可以同时存在多个生成器，分别在执行plop时候会枚举出来

#### 需要完成的Task功能

- [x] 生成单个页面文件
- [x] 生成带有目录文件的页面
- [x] 文件名大驼峰校验
- [x] 创建路由文件并自动映射到router文件中，即实现路由组件自动化
  - [x] 校验路由组件名不能为空
  - [x] 校验路由组件是否存在
  - [x] 校验路由组件名是否为大驼峰