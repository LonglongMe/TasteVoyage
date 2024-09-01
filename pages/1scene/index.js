
Page({

  data: {
    swiperList: [
      { type: 'image', url:  "cloud://wase-photo-8gmmp4pk09795617.7761-wase-photo-8gmmp4pk09795617-1325236930/1.png", zIndex: 1, mLeft: -2,index:1},
      { type: 'image', url:  "cloud://wase-photo-8gmmp4pk09795617.7761-wase-photo-8gmmp4pk09795617-1325236930/2.png",zIndex: 2, mLeft: -1 ,index:2},
      { type: 'image', url:  "/images/3.png" ,zIndex: 3, mLeft: 0,index:3},
      { type: 'image', url:  "cloud://wase-photo-8gmmp4pk09795617.7761-wase-photo-8gmmp4pk09795617-1325236930/4.jpg" ,zIndex: 2, mLeft: 1,index:4},
      { type: 'image', url:  "cloud://wase-photo-8gmmp4pk09795617.7761-wase-photo-8gmmp4pk09795617-1325236930/5.png",zIndex: 1, mLeft: 2 ,index:5}],
    middleImageUrl: '',
    Sort: '',
    SequenceNumber: '',
    selected:3,
  },

  onLoad: function (options) {

  },

  onShow: function () {
  },



  // tauchSwiper触摸开始
  tauchStart(e) {
    this.setData({
      tauchStart: e.touches[0].pageX
    })
  },
  // tauchSwiper计算方向
  tauchMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.tauchStart > 0 ? 'right' : 'left'
    })
  },
  // tauchSwiper计算滚动
  tauchEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } 
    else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    };
  // Find the item with zIndex 0 and set it as selected
  let selected = list.findIndex(item => item.zIndex === 3);
  this.setData({
    selected: selected + 1 // Adjusting index to match the original logic
  });
  },

//按钮逻辑部分
  button1: function() {
    console.log("hi");
    const app = getApp();
    app.globalData.scene = this.data.selected;  
    console.log(app.globalData.scene);
    wx.navigateTo({
      url: '/pages/2ingredient/index'
  })
  },


  
  

})
  


