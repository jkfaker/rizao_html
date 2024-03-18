const URL = "http://localhost:8080/";  // windows后端网址
// const URL = "/api/";  // linux后端网址
const app = new Vue({
  el: "#app",
  data: {
    // 商品数量
    count: 1,
    bigImg: "",
    // 返回顶部按钮是否显示
    showBackToTop: false,
    goods: {
      id: 1,
      name: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐形绳",
      sale: 8000,
      price: 41.4,
      producer: "中国",
      detail:
        "生长在中国的东北大米,主要种植于黑龙江省、吉林省、辽宁省的广大平原地区，种植在极其肥沃的黑土地中，阳光雨露充足，保证了东北大米独有的高品质。",
    },
    goodsImgs: [
      {
        id: 1,
        img: "/uploads/ChinaGood1.webp",
      },
      {
        id: 2,
        img: "/uploads/ChinaGood2.webp",
      },
      {
        id: 3,
        img: "/uploads/ChinaGood3.webp",
      },
      {
        id: 4,
        img: "/uploads/ChinaGood4.webp",
      },
      {
        id: 5,
        img: "/uploads/ChinaGood1.webp",
      },
      {
        id: 6,
        img: "/uploads/ChinaGood2.webp",
      },
    ],
    recommends: [
      {
        id: 1,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 2,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 3,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 4,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 5,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 6,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 7,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 8,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 9,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
      {
        id: 10,
        img: "/uploads/ChinaGood3.webp",
        title: "卡贝免打孔伸缩晾衣架不锈钢室内卫生间浴室壁挂可收缩隐",
        price: 41.4,
      },
    ],
    comments: [{
      id: 1,
      img: "/uploads/user1.jpg",
      name: "姓姜名龙",
      content: "为总书记点赞！中法是重要合作伙伴，不仅有力推动了两国各自发展振兴，也为地区国家树立了标杆。愿中法深化合作，共享机遇，互利共赢。",
      time: "2019-06-12 12:00:00",
      likes: 100,
      liked: false,
    },
    {
      id: 2,
      img: "/uploads/user1.jpg",
      name: "燕赤老祖",
      content: "中法友谊源远流长，两国关系发展一直走在地区国家前列，祝中法两国友谊天长地久。",
      time: "2019-06-12 12:00:00",
      likes: 314,
      liked: false,
    },
    {
      id: 3,
      img: "/uploads/user1.jpg",
      name: "旮旯电影",
      content: "推动中法新时代友好合作，两国关系不断迈上新台阶。行稳致远的中法友谊将为两国和地区繁荣发展注入新动力！",
      time: "2019-06-12 12:00:00",
      likes: 100,
      liked: false,
    },
  ],
  },
  // vue生命周期函数，页面创建时

  created: function () {},

  mounted: function () {
    this.bigImg = this.goodsImgs[0].img;
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    // axios GET请求
    getData(){
      axios({
        URL: ""
      })
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
      this.bigImg = this.goodsImgs.find((goodImg) => goodImg.id == id).img;
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
    }
  },
});


