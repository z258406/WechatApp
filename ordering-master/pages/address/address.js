Page({

  /**
   * 页面的初始数据
   */
  data: {
      address:[
        {address:"石家庄信息工程职业学院",name:"美少女战士",sex:"female",tel:'17265428966',eare:"大学"},
        { address: "羊村", name: "喜羊羊", sex: "male", tel: '1897652349', eare: "大学"}
      ]

  },
  go_addAdress: function() {
    wx.navigateTo({
      url: '/pages/addAdress/addAdress',
    })
  },
  addressAdd: function (e) {
    let thisIndex=e.currentTarget.id;
    let that=this
    console.log(this.data.address[thisIndex])
    wx:wx.navigateTo({
      url: '/pages/addAdress/addAdress?address=' + JSON.stringify(this.data.address[thisIndex])
    })
  },
  deleteBtn:function(){
    wx:wx.showModal({
      title: '确认删除收货地址？',
      titleFontSize:'28rpx',
      content: '',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#333',
      confirmText: '确定',
      confirmColor: '',
      success: function(res) {
        if(res.confirm){
          //用户点击确定
        }else if(res.cancel){

        }
      }
    })
  }

  
})