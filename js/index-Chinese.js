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
                flag: "./images/首页中心2.png",
                title: "Finding Your Perfect Things",
                name: "探索非洲文化",
                name1: "发现奇趣商品",
                // text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
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
                name: "中国",
                flag: "./images/chinaFlag.jpg",
                title: "这是A国的标题",
                // chineseName: '中国',
                text: "中国文化渊远流长、博大精深、绚烂多彩，是东亚文化圈的文化宗主国，在世界文化体系内占有重要地位，由于各地的地理位置、自然条件的差异，人文、经济方面也各有特点。传统文化艺术形式有诗词、戏曲、书法、国画等，而春节、元宵、清明、端午、中秋、重阳等则是中国重要的传统节日。",
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
                name: "科特迪瓦",
                // chineseName: '科特迪瓦',
                flag: "./images/keteFlag.jpg",
                title: "这是B国的标题",
                text: "科特迪瓦在法语的意思是“象牙海岸”，应该国政府要求，中华人民共和国用音译名为科特迪瓦。联合国自1985年12月31日起使用此音译名。是西非国家，与加纳、利比里亚、几内亚、马里和布基纳法索相邻。海岸线长约500公里，国土面积322463平方公里，首都亚穆苏克罗，人口2700万（2022年），全国有69个民族，分为4大族系：阿肯族系约占42％，曼迪族系约占27％，沃尔特族系约占16％，克鲁族系约占15％。",
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
                    {
                        id: 4,
                        img: "./images/keteScenery_4.jpg",
                    },
                ],
            },
            {
                country: 3,
                name: "尼日尔",
                // chineseName: '尼日尔',
                flag: "./images/nigerFlag.jpg",
                title: "这是C国的标题",
                text: "位于非洲中西部，简称尼日尔，是撒哈拉沙漠南缘的内陆国，该国北与阿尔及利亚和利比亚接壤，南同尼日利亚和贝宁交界，西与马里和布基纳法索毗连，东同乍得相邻，国土面积1267000平方公里，人口2707万（2023年），全国有5个主要民族：豪萨族、哲尔马-桑海族、颇尔族、图阿雷格族和卡努里族，首都尼亚美，全国划分为7个大区、1个大区级市。",
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
                    {
                        id: 4,
                        img: "./images/niger-4.jpg",
                    },
                ],
            },
            {
                country: 4,
                name: "尼日利亚",
                // chineseName: '尼日利亚',
                flag: "./images/nigeriaFlag.jpg",
                title: "这是D国的标题",
                text: "尼日利亚，位于6°27′N，3°24′E，处于西非东南部的国家，非洲几内亚湾西岸的顶点，邻国包括西边的贝宁，北边的尼日尔，东北方隔乍得湖与乍得接壤一小段国界，东和东南与喀麦隆毗连，南濒大西洋几内亚湾，国土面积923768平方公里，人口2.27亿（2024年） [11]，有250多个民族，首都阿布贾，全国划分为1个联邦首都区、36个州。",
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
                    {
                        id: 4,
                        img: "./images/nigeria-4.jpg",
                    },
                ],
            },
        ],
    },
    methods: {},
});
