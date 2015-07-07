# 简介
本例介绍如果在webpack中构建依赖echats的项目

# 准备
echarts支持好几种方式引入项目：
- 标签单文件引入：自1.3.5开始，ECharts提供标签式引入。如果项目本身并不是基于模块化开发，建议采用srcipt标签式引入，Srcipt标签引入echarts后将可以直接使用两个全局的命名空间：echarts，zrender。
- 模块化单文件引入：ECharts开发了专门的压缩合并工具echarts-optimizer，通过依赖关系分析同时去除与echarts.js的重复模块后为echarts的每一个图表类型单独打包生成一个独立文件，根据应用需求可实现图表类型按需加载。在build路径下包含了由echarts-optimizer生成的单文件：
    - build/dist/：经过合并、压缩的单文件
        - echarts.js : 这是包含AMD加载器的echarts主文件，需要通过script最先引入
        - chart/: echarts-optimizer通过依赖关系分析同时去除与echarts.js的重复模块后为echarts的每一个图表类型单独打包生成一个独立文件，根据应用需求可实现图表类型按需加载
            - echarts-line.js : 折线图（如需折柱动态类型切换，require时还需要echarts/chart/bar）
            - echarts-bar.js : 柱形图（如需折柱动态类型切换，require时还需要echarts/chart/line）
            - echarts-scatter.js : 散点图
            - echarts-k.js : K线图
            - echarts-pie.js : 饼图（如需饼漏斗图动态类型切换，require时还需要echarts/chart/funnel）
            - echarts-radar.js : 雷达图
            - echarts-map.js : 地图
            - echarts-force.js : 力导向布局图（如需力导和弦动态类型切换，require时还需要echarts/chart/chord）
            - echarts-chord.js : 和弦图（如需力导和弦动态类型切换，require时还需要echarts/chart/force）
            - echarts-funnel.js : 漏斗图（如需饼漏斗图动态类型切换，require时还需要echarts/chart/pie）
            - echarts-gauge.js : 仪表盘
            - echarts-eventRiver.js : 事件河流图
    - source/ : 经过合并，但并没有压缩的单文件，内容同dist，可用于调试
- 模块化包引入：如果项目本身是模块话的且遵循AMD规范，则只需要使用一个符合AMD规范的模块加载器，如RequireJS，配置好package路径指向src即可。由于echarts依赖底层zrendar，也需要配置好相应的package。

# 操作
echarts既然支持模块化包引入，符合AMD规范，那么我们稍加配置下webpack，便可以引入到webpack构建的项目中了，具体参考实例[webpack-echarts](https://github.com/zhbhun/WebpackStudyDemo/tree/master/echarts)
