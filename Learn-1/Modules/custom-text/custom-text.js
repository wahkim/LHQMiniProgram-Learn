// Modules/custom-text/custom-text.js
Component({

  // 组件接受的外部样式类
  externalClasses: ['red-class', 'blue-class'],

  // 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）
  options: {

  },
  // 组件间关系定义
  relations: {

  },

  // 定义段过滤器，用于自定义组件扩展
  definitionFilter: {

  },
  
  // 组件的对外属性，是属性名到属性设置的映射表
  properties: {

  },

 // 组件的内部数据，和 properties 一同用于组件的模板渲染
  data: {

  },

  // 组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，
  methods: {

  },

  // 组件数据字段监听器，用于监听 properties 和 data 的变化，
  observers : {

  },

  // 类似于mixins和traits的组件间代码复用机制
  behaviors : {

  },
  
  /** 组件所在页面的生命周期函数 */
  pageLifetimes: {
    // 页面显示/切入前台时触发。
    show: function() {
      console.log("show")
    },
    // 页面隐藏/切入后台时触发
    hide: function() {
      console.log("hide")
    },
    // 所在页面尺寸变化时执行
    resize: function() {
      console.log("resize")
    },

  },

  /** 组件生命周期声明对象 */
  lifetimes: {
    // 在组件实例刚刚被创建时执行
    created: function(){
      console.log('created')
    },

    // 在组件实例进入页面节点树时执行
    attached: function() {
      console.log('attached')
    },
    // 在组件在视图层布局完成后执行
    ready: function() {
      console.log('ready')
    },
    // 在组件实例被移动到节点树另一个位置时执行
    moved: function() {
      console.log('moved')
    },
    // 在组件实例被从页面节点树移除时执行
    detached: function() {
      console.log('detached')
    },
    // 每当组件方法抛出错误时执行
    error: function() {
      console.log('error')
    }
  }
})

module.exports = Behavior({
  
})
