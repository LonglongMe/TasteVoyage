Page({
  data: {
    name:"",
    img: "",
    brief: "",
    cultural: "",
    cook: "",
    able:""
  },
  onLoad: function (options) {
    const app = getApp();
    console.log(app.globalData.name);
    this.setData({
      name: app.globalData.name,
      able:app.globalData.usedtimes,
      img: app.globalData.img,
      brief: app.globalData.brief,
      cultural: app.globalData.cultural,
      cook: app.globalData.cook
    });
  },
  
  navigateToNextPage: function() {
    const app = getApp();
    app.globalData.ingredient = this.data.selected;
    app.globalData.scene = 3;
    app.globalData.ingredient= 5;
    app.globalData.result = 5;
    app.globalData.img = "";
    app.globalData.brief = "";
    app.globalData.cultural = "";
    app.globalData.cook = "";
    app.globalData.name = "";
    app.globalData.usedtimes +=1;

    wx.reLaunch({
      url: '/pages/index/index',
      success: function(res) {
        const page = getCurrentPages().find(page => page.route === '/pages/index/index');
        if (page) {
          page.resetSelection();
        }
      }
    });
    
  
  
  },

})
