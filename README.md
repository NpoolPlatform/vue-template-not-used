# vue-template (vue-template)

block chain vue-template

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

###

项目修改步骤

Jenkinsfile

+ vue-template-webui -> your_project_name

nginx.template.conf

+ vue_template_error.log -> your_project_name_error.log

k8s

+ 01-vue-template-webui.yaml -> your_project_name.yaml
+ vue-template-webui -> your_project_name

02-ingress.yaml

+ vue-template-webui -> your_project_name

### 组件开发需要修改的文件

1. 拓展插件安装

[安装地址](https://devtools.vuejs.org/guide/installation.html)

2. 组件开发

```ts
<script setup lang="ts"></script>
```

具体的示例可以参考**src/components/CompositionComponent.vue**组件

3. 状态管理

相关的代码都在 **src/store/user**目录下
配置的相关步骤在**src/store/index.ts**内标注了步骤

4. 插件 Notify
Quasar Notify 的相关配置文件在**src/boot/notify-defaults.ts**文件中
具体使用方法在**src/store/user/action.ts**中做了标注

5. 导入模块
如果需要导入一些模块，例如图片等，需要在**src/shims-vue.d.ts**文件中添加模块声明

6. 类型声明
在声明对象数组类型时，需要用到**Array<Object>**写法

7. 组件调用
在需要调用组件的地方，需要使用defineAsyncComponent，具体用法见**src/layouts/MayLayout.vue**文件中的用法

8. vscode 插件
   + Vue 3 Snippets
   + Vue Language Features (Volar)
   + import-cost
   + eslint
      > 在任意 vue 组件文件中， ctrl+sheft+p 输入 format document with 然后选择 eslint


## 注

现在的功能相对来说比较简单，后期会加入更多的功能

+ 异步 API 的 pipe
+ 测试
+ actions/mutations 参数自定义
+ Notify 前端调用方法实现
+ use pinia replace vuex
+ ...
