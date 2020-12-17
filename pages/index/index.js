//index.js
//获取应用实例
const app = getApp()
var contents = {
  whole: [{
    name: "劳斯莱斯系列 ￥999", //名称
    price: 999.00, //价格
    company: "小时", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  },{
    name: "所有超跑 ￥299", //名称
    price: 299.00, //价格
    company: "小时", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa5da55d4f59a5a3d&appid=122"//图片地址
  },{
    name: "兰博基尼 Huracan", //名称
    price: 5000.00, //价格
    company: "天", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi01piccdn.sogoucdn.com%2F2aed78ff49b6e819&appid=122"//图片地址
  },{
    name: "劳斯莱斯 库利南", //名称
    price: 11888.00, //价格
    company: "天", //单位
    image_url: "https://img02.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2F3e246fec8392b1c0&appid=122"//图片地址
  }],
  car: [{
      name: "所有超跑 ￥299", //名称
      price: 299.00, //价格
      company: "小时", //单位
      image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa5da55d4f59a5a3d&appid=122"//图片地址
  }],
  sportsCar: [
    {
      name: "劳斯莱斯 库利南", //名称
      price: 11888.00, //价格
      company: "天", //单位
      image_url: "https://img02.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2F3e246fec8392b1c0&appid=122"//图片地址
    }
  ],
  businessPurposeVehicle: [
    {
      name: "兰博基尼 Huracan", //名称
      price: 5000.00, //价格
      company: "天", //单位
      image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi01piccdn.sogoucdn.com%2F2aed78ff49b6e819&appid=122"//图片地址
    }
  ]
}
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    images: ["https://i03piccdn.sogoucdn.com/79c3b6992a7d0f54","https://i04piccdn.sogoucdn.com/2a12fe7142349e5b","https://i04piccdn.sogoucdn.com/7392d60d75e6ecaf","https://i01piccdn.sogoucdn.com/691bfb8693b5e8a5","https://i03piccdn.sogoucdn.com/132925a810740438"],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circula: true,
    nav_tabs: [{id:0,text:"全部",icon:"icon-quanbuguanli",active:"active",name:"whole"},
    {id:1,text:"轿车",icon:"icon-icon-test1",name:"car"},
    {id:2,text:"跑车",icon:"icon-icon-test",name:"sportsCar"},
    {id:3,text:"商务车",icon:"icon-shangwuyongche",name:"businessPurposeVehicle"}],
    goods: contents['whole'],
  },
  //事件处理函数
  //点击导航栏的响应事件
  tab_active: function(event){
    var nav_tabs = this.data.nav_tabs;
    //console.log(event.currentTarget);
    for(var i in nav_tabs){
      nav_tabs[i].active = "";
    }
    var id = event.currentTarget.id;
    nav_tabs[id].active = "active";
    var goods = contents[nav_tabs[id].name];
    this.setData({
      nav_tabs: nav_tabs,
      goods: goods
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
