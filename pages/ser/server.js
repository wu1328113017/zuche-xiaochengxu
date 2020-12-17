// pages/ser/server.js
var contents =  [[{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    attribute: "黑色/17/3.0T",//属性
    company: "辆", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  },{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    attribute: "黑色/17/3.0T",//属性
    company: "辆", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  },{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    attribute: "黑色/17/3.0T",//属性
    company: "辆", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  },{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    attribute: "黑色/17/3.0T",//属性
    company: "辆", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  }],[{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    company: "天", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  },{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    company: "天", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  },{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    company: "天", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  },{
    name: "奔驰凌特", //名称
    price: 999.00, //价格
    company: "天", //单位
    image_url: "https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi04piccdn.sogoucdn.com%2Fa07d57bc70e65aac&appid=122"//图片地址
  }]];
var te_page = [{
  car_model_default: "全部",
  price_ranking_default: "默认",
  pic_class: "picker1",
  good_class: "good1",
  contents: contents[0],
  url: "detail/detail"
},{
  car_model_default: "全部类型",
  price_ranking_default: "价格排序",
  pic_class: "picker2",
  good_class: "good2",
  contents: contents[1],
  name_class: "name2",
  price_class: "price2",
  url: "../goods/detail/detail"
}]
var defaults = {
  pickUpService: {
    tem: te_page[0]
  },
  service2:{
    tem: te_page[0]
  },
  service3:{
    tem: te_page[1]
  },
  service4:{
    tem: te_page[1]
  }
}  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    car_model: {
      value: ["全部","跑车","轿车","商务车"],
      default: "全部"
    },
    price_ranking: {
      value: ["默认","价格由高到低","价格由低到高"],
      default: "默认"
    },
  },
  p_change:function(event){ 
    this.setData({
      "price_ranking.default":  this.data.price_ranking.value[parseInt(event.detail.value)]
    })
  },
  c_change:function(event){
    this.setData({
        "car_model.default": this.data.car_model.value[parseInt(event.detail.value)]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type;//获取页面跳转传过来的参数，根据type来渲染页面
    this.setData({
      "price_ranking.default": defaults[type].tem.price_ranking_default ,
      "car_model.default": defaults[type].tem.car_model_default,
      "pic_class": defaults[type].tem.pic_class,
      "good_class": defaults[type].tem.good_class,
      "goods": defaults[type].tem.contents,
      "name_class": defaults[type].tem.name_class,
      "price_class": defaults[type].tem.price_class,
      "url": defaults[type].tem.url
    })
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