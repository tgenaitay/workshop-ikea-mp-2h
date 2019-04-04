//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hello: "Start today",
    newbie: "Allen"
  },
  onLoad: function () {
    
  },
  start: function (e) {

    wx.navigateTo({
      url: '/pages/map/map'
    })
   
  }
})
