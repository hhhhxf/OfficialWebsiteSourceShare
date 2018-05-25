#注意事项
----
* 开发在app/文件夹目录下
* app/components/目录下写jsx文件
 * todoList供参考代码书写格式
 * 模拟数据参考简书数据接口
 * app/style/components/目录下写对应jsx文件的样式
* 开发前看一下
 * 百度前端编码规范 [https://github.com/fex-team/styleguide](https://github.com/fex-team/styleguide)
 * gitflow工作流协作 [http://blog.jobbole.com/76843/](http://blog.jobbole.com/76843/)
* 关于图标，我们使用在线的字体图标库Font Awesome
 * 申请的CDN已经引入index.html了，请直接按照Font Awesome官方文档[http://fontawesome.io/icons/](http://fontawesome.io/icons/)来使用
 * 使用时直接按官网引用```<i>```标签和相应class即可使用，因为是字体图标，可以直接使用css中的font-size改变大小，color改变颜色等等
 * 图标绝对够我们使用，请耐心在其中寻找```_(:З／∠)_```

 ----
 * 开发流程
  * 确定是 components/container，在对应文件夹建立 jsx 文件
  * style 文件夹建立对应 scss 样式文件
  * 在 `index.jsx` 文件中引入你的组件进行调试

 ----
 * 版本迭代（2017/03/28）
  * pull request 过来的代码没必要的注释尽量删掉
  * 修改 style 文件夹中 components scss 文件夹的结构
  * 新增协会概况侧边栏
  * 出现问题：使用了原生 DOM 操作，Virtual DOM 中不应出现 DOM 操作，使用 state 进行设置。比如侧边栏当前活跃状态可以从路由参数获取。

----
* 版本迭代（2017/04/03）
 * 新增 react-router，`package.json` 文件有改动，建议运行前删除 `node_modules` 文件夹（`rm -rf node_modules`）重新安装（`cnpm install`）
 * 参照 `index.jsx` 的 router 设置自己负责的组件的路由（容器已设置，缺的话私聊我）
 * CSS 选择器 **不要** 用 **驼峰命名法**，使用中划线分割 （比如 `home-container`）
 * 为方便调试，请使用 localhost:1234 端口访问（如 localhost:1234/abouts/about），因为 webpack-dev-server 跳转 router 时地址栏不会更新（实际有改动到 router）

 ---- 
 * 版本迭代（2017/04/18）
  * 新增 `navigator` 组件，样式存在差异，上传时存在缺漏或错误，已 `git push` 到仓库，修改后 `pull request` 上来
  * `navigator` 组件 `scss` 文件缺乏顶层 `class`，需要加上去，避免与其他组件冲突


  ----
  * 版本迭代（2017/04/18）
   * 新增 `AboutRfa` ，`CurrentDirsItem` 组件
   * `html` 代码缩进按层次缩进，一个 `tab`键（四个空格），除了部分内联元素，一般不同层次的都要 **Enter** 键
   * 关于 `scss` 文件，两个文件均增加顶层 `class`，需要加上去，避免与其他组件冲突。另外，**不要使用** 驼峰式命名 ，改为中划线划分的 写法（如 `btn-small`）。没特殊情况不要加注释，通过 **Enter** 键分代码块即可
   * `jsx` 文件参考 `navigator` 组件进行书写，模拟数据接口 `const` 放置最上方，数据接口格式从后端接口 `res` 复制过来，接口在简书 `满堂风来`（陈建），如果接口缺漏，群里@一下后端同学
   * `React.Component` 不是 `React.component` ，父类不存在的时候，`webpack` 编译出错可能会影响整个项目出错。

----
* 版本迭代（2017/04/19）
* `index.jsx` 文件引入 `common.scss` （`style/common.scss`）；


----
* 版本迭代（2017/04/20）
* `navigator.jsx`，`navigator.scss` ，修改了导航栏样式，仍存在一些需要修改的地方；

----
* 版本迭代（2017/04/23）
* `navigator.jsx`，`navigator.scss`，修改了导航栏样式及交互，Done；

----
* 版本迭代（2017/04/24）
* 修改了所有 *container* 样式，活动报道、文章详情、textarea；

----
* 版本迭代（2017/04/28）
* `Carousel.jsx`,`Carousel.scss`,增加轮播图
* `footer.jsx`,'footer.scss',增加了底部
* `workCollectionItem.jsx`,`workCollection.jsx`,`workCollectionItem.scss`,`workCollection.scss`,增加了作品锦集
* `pageBar.jsx`,`pageBar.scss`,增加了分页器
* `repairApply.jsx`,`repairApply.scss`,增加了维修预约
* `QuestionModel.jsx`,`QuestionModel.scss`,增加了“我要提问”模态框