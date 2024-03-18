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
                flag: "./images/hero_1.png",
                title: "Finding Your Perfect Things",
                name: "Finding Your Perfect Things",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.",
                banner: [
                    {
                        id: 1,
                        img: "./images/chinaScenery_1.webp",
                    },
                    {
                        id: 2,
                        img: "./images/keteScenery_1.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/nigerScenery_1.jpg",
                    },
                    {
                        id: 4,
                        img: "./images/nigeriaScenery_1.jpg",
                    },
                ],
            },
            {
                country: 1,
                name: "China",
                flag: "./images/chinaFlag.jpg",
                title: "这是A国的标题",
                chineseName: '中国',
                text: "中国文化渊远流长、博大精深、绚烂多彩，是东亚文化圈的文化宗主国，在世界文化体系内占有重要地位，由于各地的地理位置、自然条件的差异，人文、经济方面也各有特点。传统文化艺术形式有诗词、戏曲、书法、国画等，而春节、元宵、清明、端午、中秋、重阳等则是中国重要的传统节日。",
                banner: [
                    {
                        id: 1,
                        img: "./images/chinaScenery_1.webp",
                    },
                    {
                        id: 2,
                        img: "./images/chinaScenery_2.webp",
                    },
                    {
                        id: 3,
                        img: "./images/chinaScenery_3.webp",
                    },
                    {
                        id: 4,
                        img: "./images/chinaScenery_4.webp",
                    },
                ],
            },
            {
                country: 2,
                name: "Côte d'Ivoire",
                chineseName: '科特迪瓦',
                flag: "./images/keteFlag.jpg",
                title: "这是B国的标题",
                text: "中世纪时期境内曾建立过一些小王国。11世纪，塞努弗人在北部建立的宫格城为当时西非南北贸易中心之一。15世纪后半叶，葡萄牙、荷兰、法国殖民者相继入侵。1893年沦为法自治殖民地。1958年12月，成为“法兰西共同体”内的“自治共和国”。1960年8月7日独立，但仍留在“法兰西共同体”内。翌年4月脱离共同体。",
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
                name: "Niger",
                chineseName: '尼日尔',
                flag: "./images/nigerFlag.jpg",
                title: "这是C国的标题",
                text: "位于非洲中西部，简称尼日尔，是撒哈拉沙漠南缘的内陆国,尼日尔以农牧业为主。2022年尼日尔国内生产总值139.7亿美元，人均国内生产总值533美元，国内生产总值增长率11.5%。",
                banner: [
                    {
                        id: 1,
                        img: "./images/nigerScenery_1.jpg",
                    },
                    {
                        id: 2,
                        img: "./images/nigerScenery_2.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/nigerScenery_3.jpg",
                    },
                    {
                        id: 4,
                        img: "./images/nigerScenery_4.jpg",
                    },
                ],
            },
            {
                country: 4,
                name: "Nigeria",
                chineseName: '尼日利亚',
                flag: "./images/nigeriaFlag.jpg",
                title: "这是D国的标题",
                text: "尼日利亚是非洲最大的石油生产国和世界第六大石油出口国，是联合国、不结盟运动、77国集团、世界贸易组织、石油输出国组织、非洲联盟和西非国家经济共同体等国际组织成员国，为非洲第一大经济体，2022年尼日利亚国内生产总值4773亿美元，人均国内生产总值2237美元，国内生产总值增长率3.3%。",
                banner: [
                    {
                        id: 1,
                        img: "./images/nigeriaScenery_1.jpg",
                    },
                    {
                        id: 2,
                        img: "./images/nigeriaScenery_2.jpg",
                    },
                    {
                        id: 3,
                        img: "./images/nigeriaScenery_3.jpg",
                    },
                    {
                        id: 4,
                        img: "./images/nigeriaScenery_4.jpg",
                    },
                ],
            },
        ],
    },
    methods: {},
});
