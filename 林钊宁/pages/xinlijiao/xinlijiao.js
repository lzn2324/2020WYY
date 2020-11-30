Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      '../imgs/001.jpg',
      '../imgs/002.jpg',
      '../imgs/003.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentData : 0,
    imgwidth:0,
    imgheight:0,

    csitems: [
      { text:'焦虑自评量表',url:'/pages/xljcs/xljcs',image:'./image/pro_logo.png',color:'#99CC99'},
      { text:'情绪健康度测试',url:'/pages/xljcs/xljcs',image:'../imgs/008.png',color:'#99CCFF'},
      { text:'乐观性测试',url:'/pages/xljcs/xljcs',image:'../imgs/007.png',color:'#FFCC00'},
      { text:'成熟度测试',url:'/pages/xljcs/xljcs',image:'../imgs/006.png',color:'#FFFF66'},
      //测试
    ]


  },  

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange:function(e){
      const that  = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    //点击切换，滑块index赋值
    checkCurrent:function(e){
      const that = this;
      if (that.data.currentData === e.target.dataset.current){
          return false;
      }else{
        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },
  }
  
})


