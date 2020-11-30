// pages/xljcs/xljcs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    list: [{
      name: '我觉得比平时容易紧张和着急',
      select_title: ["A ｜ 没有或很少时间", "B ｜ 少部分时间", "C ｜ 相当多时间", "D ｜ 绝大部分或全部时间"],
      select_answer:0,
    }, {
      name: '我无缘无顾感到害怕',
      select_title: ["A ｜ 没有或很少时间", "B ｜ 少部分时间", "C ｜ 相当多时间", "D ｜ 绝大部分或全部时间"],
      select_answer:0,
    },{
      name: '我做噩梦',
      select_title: ["A ｜ 没有或很少时间", "B ｜ 少部分时间", "C ｜ 相当多时间", "D ｜ 绝大部分或全部时间"],
      select_answer:0,
    }],
    idx: 0,//题目下标
    num: [],

  },

  jumpBackTitle(e){
    var that = this
    var idx = that.data.idx//第几题
    var idz = that.data.idz//选择答案
    console.log("k",idx)
      this.setData({
        idx: idx - 1,
        idz: -1,//重置本题答案
      })
  },
  jumpNavTitle(e){
    var that = this
    var idx = that.data.idx
    var idz = that.data.idz
    console.log("k",idx)
      this.setData({
        idx: idx + 1,
        idz: -1,
      })
  },
  selectTitle(e){
    var index = e.currentTarget.dataset.index
    this.setData({
      idz: index,
    })
  },

  jumpjieguo:function() {
    wx.navigateTo({
      url: 'pages/jieguo/jieguo',
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

  },


  viewClick: function(e) { 
    var select = e.target.answeritems.id 
    // 选项没被选择时将执行 
    if (!this.data.isSelect) { 
     // 将选项设置为“已被选择” 
     this.setData({ 
      isSelect: true,
      view:'selection2'
     }) 
    
    } 
   }, 
   view2Click: function(e) { 
    var select = e.target.id 
    // 选项没被选择时将执行 
    if (!this.data.isSelect) { 
     this.setData({ 
      isSelect: true,
      view2: 'selection2'
     })     
    } 
   }, 
   view3Click: function(e) { 
    var select = e.target.id 
    // 选项没被选择时将执行 
    if (!this.data.isSelect) { 
     this.setData({ 
      isSelect: true,
      view3: 'selection2'
     }) 
    } 
   }, 
   view4Click: function(e) { 
    var select = e.target.id 
    // 选项没被选择时将执行 
    if (!this.data.isSelect) { 
     this.setData({ 
      isSelect: true,
      view4: 'selection2'
     }) 
    
    } 
   }, 
   

})