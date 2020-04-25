Webpack Dll 和 DllReference 插件可以帮助我们拆分大型 JavaScript 项目，拆分后的每一块都可以单独编译。将不频繁更新的代码划分为公共库，提前单独编译好，以便于缩小构建时间，优化缓存。

# 示例
假设某个项目依赖 jquery，react 和 antd。由于在项目开发中，我们不回去修改这些库的源代码，所以没必要将项目代码和这些库混合在一起构建。这里我们可以分别将这三个库提前编译构建好，构建命令如下所示（dd 是开发环境，pd 是生产环境）：

1. `npm run dd:jquery` / `npm run pd:jquery`：预先构建 jquery
2. `npm run dd:react` / `npm run pd:react`：预先构建 react
3. `npm run dd:antd` / `npm run pd:antd`：预先构建 antd
4. `npm run dev` / `npm run product`：构建项目

# 对比 CommonsChunkPlugin
...

# 问题
如果简单使用 DLL 指定第三方库，那么对于 Antd 这种重量级的第三方库，在构建后会产生非常大的打包文件（开发环境 1.7M，生产环境 700KB），而我们在项目中不需要完全使用到这个库的每一个组件。为了减小打包文件的大小，必须结合实际项目来构建，下面有两种方案解决该问题：

1. 使用 CommonsChunkPlugin 将 Antd 从项目中拆分出来，这样实时编译，可以结合项目中使用到的 Antd 来打包；
2. 预先定义好有被引入到项目的 Antd 组件，如果使用 DLL 打包。
