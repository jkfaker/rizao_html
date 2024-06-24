const URL = "/api/"; // linux后端网址

const app = new Vue({
  el: "#app",
  data: {
    totalPages: 5,
    currentPage: 1,
    search: {
      page: 1, // 分页查询   // 必选
      classification: "", // 查询种类
      priceMin: 0,
      priceMax: 0, // 价格区间
      name: "", // 商品名称查询
      producer: "", // 商品产地查询
      sort: 0, // 排序方式，0为默认，1为name正序，2为name逆序，3为price正序，4为price逆序
      number: 3, // 每页的商品显示个数
    },
    imgList: [],
    list: [],
  },
  // vue生命周期函数，页面创建时

  created: function () {},

  mounted: async function () {
    // await this.getUrlParam();
    await this.getGoodsSort();
    // await this.getAllImg();
    console.log("this.list==============================");
    console.log(this.list);
  },

  watch: {
    search: {
      handler(newSearch) {
        // 这里是当 search 对象的任何属性发生变化时执行的代码
        this.getGoodsSort();

        // 你可以在这里执行你的其他逻辑，比如根据搜索条件重新获取数据等
        // this.getDataBasedOnSearch();
      },
      deep: true, // 深度监听对象的变化
    },
  },

  methods: {
    getUrlParam() {
      const query = new URLSearchParams(window.location.search);
      this.search.classification = parseInt(query.get("classification") || "", 10); // 解析并转换成整数
      console.log("classification=" + this.classification);
    },
    // 页面刚开始加载时获取所有商品信息
    async getGoodsSort() {
      console.log(this.search);
      const result = await axios({
        url: URL + "goodsSort",
        params: this.search,
      });
      let list = result.data.data;
      this.getAllImg(list);
      console.log("this.list==============================");
      console.log(this.list);
    },
    // 页面开始加载时获取所有图片信息
    async getAllImg(list) {
      const promises = list.map(async (item) => {
        // 发送 Ajax 请求到后端，将 item.id 传递给后端
        const result = await axios({
          url: URL + "img",
          params: { id: item.id },
        });
        item.imageName = "/uploads/img/" + result.data.data[0].imageName;
        console.log(item.imageName);
        return item;
      });

      // 等待所有 Promise 对象都完成
      this.list = await Promise.all(promises);
      // 等待所有 Promise 对象都完成
      // await Promise.all(promises);
    },

    // async getRecommendData() {
    //   const start = 50;
    //   const end = 90;
    //   let validPromises = [];
    //   let imageData = [];
    //   for (
    //     let index = start;
    //     index <= end && validPromises.length < 10;
    //     index++
    //   ) {
    //     const goodsData = await this.getGoodsData(index);
    //     if (goodsData !== undefined) {
    //       imageData = await this.getImgData(index);
    //       goodsData.imageName = imageData[0].imageName;
    //       validPromises.push(goodsData);
    //     }
    //   }
    //   recommendsData = await Promise.all(validPromises);
    //   console.log("recommends");
    //   console.log(this.recommends);
    //   return recommendsData;
    // },
    changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
        this.currentPage = pageNumber;
        this.search.page = pageNumber;
        // 在这里执行获取对应页数据的操作，例如调用 API 请求数据等
        this.getGoodsSort();
        this.getAllImg();
        console.log(this.search.page);
      }
    },
  },
});
