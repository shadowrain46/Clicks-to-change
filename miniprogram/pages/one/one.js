Page({
  data: {

  },
  jian: function (options) {
    wx.navigateTo({
      url: '../home/home',
    })
  },
  lose: function (options) {
    wx.navigateTo({
      url: '../test/test',
    })
  }
})