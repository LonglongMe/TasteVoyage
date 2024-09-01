
Page({  
  data: {  
    UserID:'',
    blocks: [
      { i:0,ii:0,words:['冒险','我今天想保持安全和稳定','我今天愿意尝试新事物，但不要太离谱','我今天很乐意探索未知领域','我今天想要尽情冒险！'],x:0,color:[200,200,200],target:[[240,140,140],[140,240,140]],w:['','',''],k:0,hints:['',''],hintcolor:[[50,50,50,0.25],[50,50,50,0.25]]},  
      { i:0,ii:0,words:['宁静','我今天不想太安静','我今天需要一点时间来放松','我今天特别想要找一个安静的地方','我今天只想静静地享受时光'],x:0,color:[200,200,200],target:[[160,240,140],[50,50,240]],w:['','',''],k:0,hints:["",""],hintcolor:[[50,50,50,0.25],[50,50,50,0.25]]},  
      { i:0,ii:0,words:['社交','我今天更想独自一人','我今天可以跟人聊聊天，但不需要太多互动','我今天很想和朋友一起度过','我今天想结交新朋友！'] ,x:0,color:[200,200,200],target:[[240,190,40],[140,10,140]],w:['','',''],k:0,hints:["",""],hintcolor:[[50,50,50,0.25],[50,50,50,0.25]]},  
      { i:0,ii:0,words:['创新','我今天不想太费脑筋','我今天可以接受一些新的想法','我今天很想尝试一些创意活动','我今天想要激发我的创造力！'],x:0,color:[200,200,200],target:[[10,240,240],[40,140,130]],w:['','',''],k:0,hints:["",""],hintcolor:[[50,50,50,0.25],[50,50,50,0.25]]} 
    ]  ,
    imageSrc: '',
    animation: {},
    img: "",

  },  


  onLoad: function () {  
    const app = getApp();
    this.setData({  
      img: app.globalData.img
    });  

  
  },


  onBlockTouchEnd: function(e) {  
    const index = e.currentTarget.dataset.index;  
    const blocks =this.data.blocks;
    const x = Math.floor(e.detail.x);

    const targetcolor=[[[255,0,0],[140,240,140]],[[160,240,140],[50,50,240]],[[240,190,40],[140,10,140]],[[10,240,240],[40,140,130]]]


    blocks[index].x=x;
    if (x >=0) {  blocks[index].i = 2; 
      if(x>=50){blocks[index].ii=4;} 
      else{blocks[index].ii=3;}
    } 
    else {  blocks[index].i = 1; 
      if(x<=-45){blocks[index].ii=1;} 
      else{blocks[index].ii=2;} }  
    const i =blocks[index].i;


    blocks[index].color=[200+(targetcolor[index][i-1][0]-200)*(x/120),200+(targetcolor[index][i-1][1]-200)*(x/120),200+(targetcolor[index][i-1][2]-200)*(x/120)];
    blocks[index].hintcolor[0][3]=0.25-x/350;
    blocks[index].hintcolor[1][3]=0.25+x/320;

    
    this.setData({  
      blocks,
    });   
  },

  navigateToNextPage: function() {
      // 使用 wx.navigateTo API 跳转到下一页
    wx.navigateTo({
          url: '/pages/4result/index'
    })
    },
  button2: function() {
    const app = getApp();
    app.globalData.mbti = [this.data.blocks[0].ii,this.data.blocks[1].ii,this.data.blocks[2].ii,this.data.blocks[3].ii]; 
    this.navigateToNextPage();
  

    
  },
})
