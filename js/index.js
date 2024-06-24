// 轮播图js代码
window.onload = function () {
    var slide = document.getElementsByClassName("slide")[0];
    var imgs = document
        .getElementsByClassName("slide")[0]
        .getElementsByTagName("img");
    var slick_dots = document
        .getElementsByClassName("slick-dots")[0]
        .getElementsByTagName("label");
    // 切换图片的速度
    var margin_left = 0;
    //定义定时器timer
    var timer;
    //屏幕的宽度,根据屏幕的宽度自适应图片的宽度，（即自适应轮播图）
    var winWidth =
        document.documentElement.scrollWidth || document.body.scrollWidth;
    run();
    // 绑定轮播图图片鼠标移入移出事件
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onmousemove = function () {
            clearTimeout(timer);
            margin_left = -i * 100;
            slide.style.marginLeft = margin_left + "%";
        };
        imgs[i].onmouseleave = function () {
            run();
        };
    }
    // 绑定轮播图小圆点鼠标移入移出事件
    for (let i = 0; i < slick_dots.length; i++) {
        slick_dots[i].onmousemove = function () {
            clearTimeout(timer);
            margin_left = -i * 100;
            slide.style.marginLeft = margin_left + "%";
            changeDots(i);
        };
        slick_dots[i].onmouseleave = function () {
            run();
        };
    }
    // 运行轮播图滚动
    function run() {
        var n = -margin_left % 100 === 0 ? 1500 : 10;
        timer = setTimeout(run, n);
        if (margin_left === -300) {
            margin_left = 0;
            slide.style.marginLeft = 0;
        }
        var index = Math.floor(-margin_left / 100);
        if (index < 3) {
            changeDots(index);
        }
        slide.style.marginLeft = margin_left + "%";
        margin_left -= 1;
    }
    // 小圆点的背景色随轮播图滚动而滚动
    function changeDots(m) {
        // 改代码用于初始化所有原点长度
        for (let i = 0; i < slick_dots.length; i++) {
            slick_dots[i].style.width = "10px";
        }
        slick_dots[m].style.width = "25px";
    }
};

// vue.js
const app = new Vue({
    el: "#app",
    data: {
        country: 0, // 0,为首页，1为中国,2为Côted'Ivoire，3为Niger，4为Nigeria
        // 轮播图图片信息
        indexBanner: [
            {
                country: 0,
                flag: "./images/首页中心2.png" ,
                title: "Finding Your Perfect Things",
                name: "Finding Your Perfect Things",
                text: "",
                banner: [
                    {
                        id: 1,
                        img: "./images/Chinascenery.jpg",
                    },
                    {
                        id: 2,
                        img: "./images/keteScenery_3.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/niger-3.jpg",
                    },
                    {
                        id: 4,
                        img: "./images/nigeria-1.jpg",
                    },
                ],
            },
            {
                country: 1,
                name: "China",
                flag: "./images/chinaFlag.jpg",
                title: "这是A国的标题",
                // chineseName: 'China',
                text: "Chinese culture is characterized by its profound historical depth, vastness, and dazzling diversity. Serving as the cultural progenitor within the East Asian cultural sphere, it occupies a significant position within the global system of cultures. Due to variations in geographical locations and natural conditions across the land, distinctive regional features have emerged in both humanistic and economic aspects.\n" +
                    "Traditional forms of art and literature include poetry, operatic drama, calligraphy, and ink wash painting. Notable among China's major traditional festivals are the Spring Festival, Lantern Festival, Tomb-Sweeping Day, Dragon Boat Festival, Mid-Autumn Festival, and Double Ninth Festival.",
                banner: [
                    {
                        id: 1,
                        img: "./images/Chinascenery.jpg",
                    },
                    {
                        id: 2,
                        img: "./images/Chinascenery2.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/Chinascenery3.jpg",
                    },
                    // {
                    //     id: 4,
                    //     img: "./images/chinaScenery_4.webp",
                    // },
                ],
            },
            {
                country: 2,
                name: "Côte d'Ivoire",
                // chineseName: '科特迪瓦',
                flag: "./images/keteFlag.jpg",
                title: "这是B国的标题",
                text: "\n" +
                    "Cote d'Ivoire means \"Cote d'Ivoire\" in French, and at the request of the government, the People's Republic of China is called Cote d'Ivoire. The United Nations has been using this name since December 31, 1985. It is a country in West Africa, adjacent to Ghana, Liberia, Guinea, Mali, and Burkina Faso. The capital city of Yamoussoukro has a coastline of about 500 kilometers, an area of 322463 square kilometers, and a population of 27 million (2022). The country has 69 ethnic groups, divided into four main ethnic groups: Aken about 42%, Mandi about 27%, Volta about 16%, and Kru about 15%.",
                banner: [
                    {
                        id: 1,
                        img: "./images/keteScenery_1.jpg",
                    },
                    {
                        id: 2,
                        img: "./images/keteScenery_2.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/keteScenery_3.jpg",
                    },

                ],
            },
            {
                country: 3,
                name: "Niger",
                // chineseName: '尼日尔',
                flag: "./images/nigerFlag.jpg",
                title: "这是C国的标题",
                text: "The country is located in central western Africa, abbreviated as Niger, and is a landlocked country on the southern edge of the Sahara Desert. It borders Algeria and Libya to the north, Nigeria and Benin to the south, Mali and Burkina Faso to the west, and Chad to the east. It covers an area of 1267000 square kilometers and has a population of 27.07 million (as of 2023). The country has five main ethnic groups: Hausa, Jelmasanghai, Fulani, Tuareg, and Kanuri, The capital city of Niamey is divided into 7 regions and 1 regional city",
                banner: [
                    {
                        id: 1,
                        img: "./images/niger-1.jpg",
                    },
                    {
                        id: 2,
                        img: "./images/niger-2.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/niger-3.jpg",
                    },
                ],
            },
            {
                country: 4,
                name: "Nigeria",
                // chineseName: '尼日利亚',
                flag: "./images/nigeriaFlag.jpg",
                title: "这是D国的标题",
                text: "Nigeria is located in 6 ° 27'N, 3 ° 24'E, a country in southeastern West Africa, at the peak of the west coast of the Gulf of Guinea in Africa. Neighboring countries include Benin to the west and Niger to the north, it borders Chad across Lake Chad to the northeast, Cameroon to the east and southeast, and the Gulf of Guinea in the Atlantic Ocean to the south. The country covers an area of 923768 square kilometers, has a population of 227 million (as of 2024), and has over 250 ethnic groups. The capital is Abuja, and the country is divided into one federal capital area and 36 states.\n",
                banner: [
                    {
                        id: 1,
                        img: "./images/nigeria-1.jpg",
                    },
                    {
                        id: 2,
                        img: "./images/nigeria-2.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/nigeria-3.jpg",
                    },
                ],
            },
        ],
    },
    methods: {},
});
