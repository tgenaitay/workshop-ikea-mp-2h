// pages/map/map.js
Page({

  /**
   * Page initial data
   */
  data: {
    latitude: "31.232711",
    longitude: "121.47575499999994",
    scale: '13',
    markers: []
  },
  markertap(e) {
    console.log(e.markerId)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    const endpoint = 'https://easy-mock.com/mock/5ca59a237296342b5e1e2c1d/ikea/stores'

    var page = this

    wx.request({
      url: endpoint,
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log('success!' + res.statusCode);
        console.log(res);
        page.setData({ markers: res.data.stores })

      },
      fail: function (res) {

      },
      complete: function (res) {

      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})