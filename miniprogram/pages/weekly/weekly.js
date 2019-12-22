Page({
  data: {
    //存储计时器
    setInter: '',
    setInter2: '',
    num: 1,
    num2: 1,
    weekday: '',
    week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  },
  startSetInter: function () {
    var that = this;
    //将计时器赋值给setInter
    that.data.setInter = setInterval(
      function () {
        var numVal = that.data.num + 1;
        that.setData({ num: numVal });
        console.log('setInterval==' + that.data.num);
      }
      , 1000);
    that.data.setInter2 = setInterval(
      function () {
        var numVa2 = that.data.num2 + 1;
        that.setData({ num2: numVa2 });
        console.log('setInterval2==' + that.data.num2);
      }
      , 60000);
  },
  endSetInter: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
    clearInterval(that.data.setInter2)
  },
  onHide: function () {

  },
  onUnload: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
  },
  onShow: function () {
    var today = new Date().getDay();
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    switch (today) {
      case 0:
        this.setData({
          weekday: this.week[0]
        })
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        this.setData({
          weekday: this.data.week[today]
        })
        break;
    }
  },
  formSubmit(e) {

    //检查基础库版本

    if (!wx.cloud) {

      console.error('请使用 2.2.3 或以上的基础库以使用云能力')

    } else {

      wx.cloud.init({

        traceUser: true,

      })

    }

    //保存this变量

    var _this = this;

    //调用云函数

    wx.cloud.callFunction({

      // 云函数名称

      name: 'search',

      // 传给云函数的参数

      data: {

        content: e.detail.value.former,     //要更新的值为输入框里的值
        content: e.detail.value.latter,
        tag: 1

      },

      success: function (res) {

        console.log(res.result)
      },

      fail: console.error
    })
  },
})