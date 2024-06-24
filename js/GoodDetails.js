// const URL = "http://localhost:8080/";  // windows后端网址
const URL = "/api/"; // linux后端网址
Vue.config.devtools = true

const app = new Vue({
  el: "#app",
  data(){
    return {
    flag: false,
    // 商品id
    id: 54,
    // 商品数量
    count: 1,
    // 大图的相对地址
    bigImg: "",
    // 返回顶部按钮是否显示
    showBackToTop: false,
    // goods: {id，name,salesVolume, price, detail, producer, classification}
    goods: {},
    // goodsImgs: {img_id,goods_id,imageName}
    goodsImgs: [],
    recommends: [
    
    //   {
    //     id: 1,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {
    //     id: 2,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {
    //     id: 3,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {
    //     id: 4,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {
    //     id: 5,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {
    //     id: 6,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {
    //     id: 7,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {
    //     id: 8,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },
    //   {id: 9,
    //   imageName: "/uploads/ChinaGood3.webp",
    //   name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //   price: 41.4,
    // }, 
    //   {
    //     id: 10,
    //     imageName: "/uploads/ChinaGood3.webp",
    //     name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
    //     price: 41.4,
    //   },  
      
    ],
    comments: [
      {
        id: 1,
        img: "/uploads/user1.jpg",
        name: "姓姜名龙",
        content:
          "为总书记点赞！中法是重要合作伙伴，不仅有力推动了两国各自发展振兴，也为地区国家树立了标杆。愿中法深化合作，共享机遇，互利共赢。",
        time: "2019-06-12 12:00:00",
        likes: 100,
        liked: false,
      },
      {
        id: 2,
        img: "/uploads/user1.jpg",
        name: "燕赤老祖",
        content:
          "中法友谊源远流长，两国关系发展一直走在地区国家前列，祝中法两国友谊天长地久。",
        time: "2019-06-12 12:00:00",
        likes: 314,
        liked: false,
      },
      {
        id: 3,
        img: "/uploads/user1.jpg",
        name: "旮旯电影",
        content:
          "推动中法新时代友好合作，两国关系不断迈上新台阶。行稳致远的中法友谊将为两国和地区繁荣发展注入新动力！",
        time: "2019-06-12 12:00:00",
        likes: 100,
        liked: false,
      }, 
    ],
    }
    
  },
  // vue生命周期函数，页面创建时

  created: function () {},

  beforeMount: async function () {
    this.getUrlParam();
    this.goods = await this.getGoodsData(this.id);
    this.goodsImgs= await this.getImgData(this.id);
    this.bigImg = await this.showBigImg(1);
    this.recommends = await this.getRecommendData();
    // this.recommends[7] = 
    // {
    //   id:0,
    //   imageName:"",
    //   name:"",
    //   price:0.0
    // };
    this.flag = true;
    console.log(this.recommends);
    // 监听是否下滚，返回按钮是否显示
    window.addEventListener("scroll", this.handleScroll);
  },

  mounted: async function () {
    
  },
  methods: {
    // 获取“猜你喜欢”的数据并将图片和数据进行合并
    async getRecommendData() {
      const start = 50;
      const end = 90;
      let validPromises = [];
      let imageData = [];
      for (let index = start; index <= end && validPromises.length < 10; index++) {
        const goodsData = await this.getGoodsData(index);
        if (goodsData !== undefined) {
          imageData = await this.getImgData(index);
          goodsData.imageName = imageData[0].imageName;
          validPromises.push(goodsData);
        }
      }
      recommendsData = await Promise.all(validPromises);
      console.log("recommends");
      console.log(this.recommends);
      return recommendsData;
    },
    // // 获取url参数，并传入id
    getUrlParam() {
      const query = new URLSearchParams(window.location.search);
      this.id = parseInt(query.get("id") || "", 10); // 解析并转换成整数
      console.log("id=" + this.id);
    },
    // 从后端获取商品文字详情
    async getGoodsData(id) {
      const result = await axios({
        url: URL + "goods",
        params: {
          id,
        },
      });
      console.log(result.data.data[0]);
      return result.data.data[0];
    },
    // 从后端获取商品图片详情
    async getImgData(id) {
      const result = await axios({
        url: URL + "img",
        params: {
          id,
        },
      });
      imgList = result.data.data;
      // 将名字变成相对路径
      imgList.forEach((item) => {
        item.imageName = "./uploads/img/" + item.imageName;
      });
      console.log("imgList: ");
      console.log(imgList);
      return imgList;
      // imgId为1的是默认大图
    },

    // 操作商品数量
    countChange(e) {
      // console.log(this);
      value = e.target.value;
      console.log(Number.isNaN(+value));
      this.count =
        !Number.isNaN(+value) && value > 0 && value < 100 ? +e.target.value : 1;
      e.target.value = this.count;
    },

    // 鼠标点击缩略图改变成大图
    showBigImg(id) {
      console.log(id);
      console.log(this.goodsImgs[0].imgId);
      bigImg = this.goodsImgs.find((goodImg) => goodImg.imgId == id).imageName;
      console.log(bigImg);
      return bigImg;
    },

    // 鼠标点击评论中的like触发
    likeComment(c) {
      console.log(c.id);
      this.comments.find((comment) => comment.id === c.id).liked = !c.liked;
      if (c.liked) {
        this.comments.find((comment) => comment.id === c.id).likes += 1;
      } else {
        this.comments.find((comment) => comment.id === c.id).likes -= 1;
      }
    },

    // 返回顶部是否显示
    handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      this.showBackToTop = scrollTop > 300; // 当滚动超过300px时显示按钮（阈值可自定义）
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
});
