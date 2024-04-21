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
                name: "Explorez la culture africaine ",
                name1: "Découvrez des produits intéressants",
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
                name: "La Chine",
                flag: "./images/chinaFlag.jpg",
                title: "这是A国的标题",
                // chineseName: '中国',
                text: "La Chine a une longue histoire, large et profonde, splendide et colorée, est la suzeraineté culturelle du cercle culturel de l’Asie de l’Est, occupe une position importante dans le système culturel mondial, en raison de la situation géographique et des conditions naturelles de différents endroits, les sciences humaines et les aspects économiques ont également leurs propres caractéristiques. Les formes d’art culturel traditionnelles comprennent la poésie, l’opéra, la calligraphie, la peinture chinoise, etc., tandis que la fête du printemps, la fête des lanternes, la fête de Qingming, la fête des bateaux-dragons, la fête de la mi-automne, la fête de Chongyang, etc. sont des festivals traditionnels importants en Chine.",
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
                text: "La Côte d'Ivoire signifie « Côte d'Ivoire » en français et, à la demande du Gouvernement, la République populaire de Chine s'appelle Côte d'Ivoire. L'ONU utilise ce nom depuis le 31 décembre 1985. Est un pays d'Afrique de l'Ouest, adjacent au Ghana, au Libéria, à la Guinée, au Mali et au Burkina Faso. Avec un littoral d’environ 500 km de long et une superficie de 322 463 km2, Yamoussoukro, la capitale, une population de 27 millions d’habitants (2022), le pays compte 69 ethnies réparties en 4 grandes familles ethniques: Akon avec environ 42%, Mandi avec environ 27%, Volta avec environ 16% et Kru avec environ 15%.",
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
                name: "Le Niger",
                // chineseName: '尼日尔',
                flag: "./images/nigerFlag.jpg",
                title: "这是C国的标题",
                text: "Situé dans le Centre - ouest de l'Afrique, ou simplement Niger, est un pays enclavé à la limite sud du désert du Sahara, le pays est bordé au nord par l'Algérie et la Libye, au Sud par le Nigeria et le Bénin, à l'Ouest par le Mali et le Burkina Faso et à l'est par Le Tchad, a une superficie de 1 267 000 km2, une population de 27,07 millions d'habitants (2023), le pays compte 5 groupes ethniques principaux: les Haoussas, les zherma sanhai, les Peuls, les Touaregs et les Kanouri, la capitale Niamey, le pays est divisé en 7 régions, 1 municipalité régionale",
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
                name: "Le Nigeria",
                // chineseName: '尼日利亚',
                flag: "./images/nigeriaFlag.jpg",
                title: "这是D国的标题",
                text: "Situé par 6°27′ N, 3°24′ e, pays du Sud - est de l’afrique de l’ouest, point culminant de la Rive occidentale du Golfe de Guinée en Afrique, pays voisin dont le Bénin à l’ouest, le Niger au Nord, une petite frontière avec le Tchad au nord - est par le lac Tchad, contigu au Cameroun à l’est et au Sud - Est et bordé par le golfe de Guinée Atlantique au Sud, le Nigeria a une superficie de 923 768 km2, une population de 227 millions d’habitants (2024), plus de 250 groupes ethniques, la capitale Abuja, le pays est divisé en 1 District fédéral de la capitale, 36 États.",
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
