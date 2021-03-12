// pages/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize : 'default', 
    primarySize : 'default', 
    warnSize : 'default', 
    disable : false, // 是否禁用
    plain : false, // 按钮是否镂空，背景色透明
    loading : false, // 名称前是否带 loading 图标
  },

  default: function(e){
    // console.log(e)
    let buttonId = e.target.id
    var type = 'default'
    if (buttonId == 'button-1') {
      type = 'default'
  } else if (buttonId == 'button-2') {
      type = 'primary'
  } else {
      type = 'warn'
  }
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})