Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordered: [
      { address: "石家庄",store:'长安万达店', types:'好好吃啊',num:1,price:105 },
      { address: "石家庄", store: '天山海世界店', types: '好好吃啊，好吃的不得了啊', num: 1, price: 89 },
      { address: "石家庄",store:'裕华万达店', types:'好好吃啊',num:1,price:35 },
      { address: "石家庄",store:'欢乐汇店', types:'好好吃啊',num:1,price:79.9 },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  godetials(){
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail',
    })
  },
  
})