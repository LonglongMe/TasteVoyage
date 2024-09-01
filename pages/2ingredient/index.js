Page({
  data: {
    selected:0,
    photoindex:[
      {index:1,number:0,url:  "/images/6.png",left:10,top:10,width:270,height:260,comment:"豚"},
      {index:2,number:0,url:  "/images/7.png",left:320,top:10,width:320,height:300,comment:"鱼"},
      {index:3,number:0,url:  "/images/8.png",left:10,top:280,width:200,height:250,comment:"米"},
      {index:4,number:0,url:  "/images/9.png",left:440,top:340,width:200,height:250,comment:"奶"},
      {index:5,number:0,url:  "/images/10.png",left:10,top:540,width:300,height:250,comment:"蘑菇"},
      {index:6,number:0,url:  "/images/11.png",left:340,top:600,width:300,height:270,comment:"水草"},
      {index:7,number:0,url:  "/images/12.png",left:10,top:800,width:320,height:280,comment:"蛋"},
      {index:8,number:0,url:  "/images/13.png",left:350,top:885,width:280,height:200,comment:"土豆"},
    ],
    init:"哪味食材您最喜欢？",
    word:"哪味食材您最喜欢？",
  },

  changeColor(e) {
    const target = e.currentTarget.dataset.index+1;
    console.log(target);
    let selected = this.data.selected;
    let word=this.data.word;
    selected= selected===target?0:target;
    console.log(selected);
    if (selected===0){
    word=this.data.init}
    else{word=this.data.photoindex[selected-1].comment}
    this.setData({
      word,
      selected
    });
  },

  navigateToNextPage: function() {
    const app = getApp();
    app.globalData.ingredient = this.data.selected;
    console.log(app.globalData.ingredient,app.globalData.scene);
    app.Mapping();
    wx.navigateTo({
        url: '/pages/3mbti/index'
    });
    
  
  
  },



})