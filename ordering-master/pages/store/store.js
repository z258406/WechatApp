Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex: 0,
    addressMain:'石家庄',
    meunIfo: [
      { title: "石家庄信息工程职业学院", eare: "美少女战士", address: "河北省石家庄市长安区中山东路583号(石家庄长安万达广场) · 2.6 千米", tel: '19761384694', lu: 'F4', hao: "1053", time: '9:00-22:00', canuse: true },
      { title: "石家庄信息工程职业学院", eare: "美少女战士", address: "河北省石家庄市裕华区建华南大街136号(石家庄裕华万达广场", tel: '17269731684', lu: 'City一楼', hao: "L10-012号", time: '9:00-22:00', canuse: false },
      { title: "石家庄信息工程职业学院", eare: "美少女战士", address: "河北省石家庄市桥西区自强路与黎明街交叉口西50米", tel: '19378462597', lu: '', hao: "F2", time: '9:00-22:00', canuse: false },
      { title: "石家庄信息工程职业学院", eare: "美少女战士", address: "河北省石家庄市新华区桥西区中山西路139号", tel: '0322-2577-7946', lu: 'F5', hao: "1123", time: '9:00-22:00', canuse: false },

    ]

  },
  showMenu: function(e) {
    console.log(e)
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
  },
  gotoMenu: function() {
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  },
  gomap:function(){
    let that=this
    wx.chooseLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        this.addressMain= res.address
        console.log(this.addressMain,78)
        that.setData({
          addressMain: res.address
        })
      }
    })
  },
  onLoad:function(){
    
  }
})