// pages/ser/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_tabs: {
      jj_active: "active"
    }
  },
  /**导航栏点击事件 */
  nav_click: function (event) {
    var active = event.currentTarget.dataset.name;
    var t_data = this.data.nav_tabs;
    for (var k in t_data) {
      t_data[k] = "";
    }
    t_data[active] = "active";
    this.setData({
      nav_tabs: t_data
    })
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