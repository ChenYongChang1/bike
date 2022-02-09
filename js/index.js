((w, d) => {
  function Index() {
    const themeColor = "#1e90ff";
    this.indexId = 1;
    const list = [
      {
        id: 1,
        firstName: "Smart Glass",
        name: "Smart Glass 远程专家指导平台",
        text: "ERP作为一个高度集成的信息系统，为企业内部架起了信息沟通的桥梁，充分整合了企业资源，从根本上解决了信息孤岛现象，改善了业务流程，使企业在市场竞争中获得优势。在",
        img: "https://cyc-save.oss-cn-shanghai.aliyuncs.com/bike/imgs/r1.png",
      },
      {
        id: 2,
        firstName: "制造业",
        name: "制造业解决方案",
        text: "ERP作为一个高度集成的信息系统，为企业内部架起了信息沟通的桥梁，充分整合了企业资源，从根本上解决了信息孤岛现象，改善了业务流程，使企业在市场竞争中获得优势。在",
        img: "https://cyc-save.oss-cn-shanghai.aliyuncs.com/bike/imgs/r2.png",
      },
      {
        id: 3,
        firstName: "汽车行业",
        name: "汽车行业解决方案",
        text: "汽车制造厂RFID项目设计的规律，结合制造企业物料拉动的具体特点，确定了系统规划设计的几大原则： 先进性：本项目提供的RFID相关设备选用了全球最新技术。 成熟性：RFID相关设备成功运用于全球多大项目。 开放性：设备提供原厂的SDK及API,方便开发者调用。",
        img: "https://cyc-save.oss-cn-shanghai.aliyuncs.com/bike/imgs/r3.png",
      },
      {
        id: 4,
        firstName: "医疗行业",
        name: "医疗行业解决方案",
        text: "条码在医疗行业的应用主要有：病房管理、病历管理、诊断和处方管理、化验管理和药品管理等几个主要部分，医院信息管理系统分为：移动查房子系统、移动护理子系统、药品管理",
        img: "https://cyc-save.oss-cn-shanghai.aliyuncs.com/bike/imgs/r4.png",
      },
    ];
    this.initPageText = () => {
      // allText[j].style["transition-delay"] = j * 0.05 + "s";
      // allText[j].classList.add("dd-animation-active-show");

      const { show } = this.showPageDom(".dd-animation-show");
      setTimeout(() => {
        show();
        setTimeout(() => {
          d.querySelector(".banner-video").style.background = themeColor;
        }, 500);
      }, 100);
    };
    this.renderPage = () => {
      const html = d.querySelector(".app-list");
      const applitionList = [
        {
          img: "one.png",
          icon: "./imgs/1.png",
          name: "数字化标识",
          title:
            "实时高效获取榜单提升较快、市场下载和收入飙升、特定开发者新品趋势、品类新产品提醒",
        },
        {
          img: "two.png",
          icon: "./imgs/2.png",
          name: "智能IOT硬件",
          title: "通过各种数据榜单报表研究，发现新的市场机会",
        },
        {
          img: "three.png",
          icon: "./imgs/3.png",
          name: "IOT软件及平台",
          title:
            "对接各大应用市场，应用评分、评论内容。通过评论主题、星级、版本、设备，提炼核心反馈，指导产品科学决策",
        },
        {
          img: "four.png",
          icon: "./imgs/4.png",
          name: "专业的服务与支持",
          title:
            "对接应用覆盖关键词总数、TOP3、TOP10覆盖情况，对核心关键词排名进行高频监控，异常变动及时提醒",
        },
      ];
      html.innerHTML = "";
      applitionList.forEach((item) => {
        html.innerHTML += `
        <div class="app-item-row dd-pointer">
        <div class="modal-hover">
          <div class="modal-bg">
            <img src="${item.icon}" class="dd-img-cover dd-img-contain num" alt="" />
            <div class="num-text modal-text-margin">${item.name}</div>
            <div class="text-desc font-500">
            ${item.title}
            </div>
          </div>
        </div>
        <div class="filter message">
          <img src="https://cyc-save.oss-cn-shanghai.aliyuncs.com/bike/imgs/${item.img}" class="dd-img-cover app-img" alt="" />
          <div class="img-desc">
            <img src="${item.icon}" class="dd-img-cover dd-img-contain num" alt="" />
            <div class="num-text">${item.name}</div>
          </div>
        </div>
      </div>
        `;
      });
    };
    this.initEcharts = () => {
      var myChart = echarts.init(document.querySelector(".chart"));
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    };
    // 数字滚动
    this.numberScroll = ({
      id,
      className,
      startVal = 0,
      endVal = 0,
      decimals = 0,
      duration = 1,
    }) => {
      if (!className && !id) return;
      const dom = d.querySelector(id ? `#${id}` : `.${className}`);
      id = dom.getAttribute("id");
      const stop = dom.getAttribute("stop");
      if (stop) return;
      startVal = startVal || dom.getAttribute("start") || 0;
      endVal = endVal || dom.getAttribute("end") || 100;
      new CountUp(id, startVal, endVal, decimals, duration, {
        useEasing: true, //效果
        separator: "", //数字分隔符
      }).start();
      dom.setAttribute("stop", true);
    };

    this.isElementInViewport = (el, offset = 0) => {
      // 是否在可视区域内
      const box = el.getBoundingClientRect(),
        top = box.top >= 0,
        left = box.left >= 0,
        bottom =
          box.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) +
            offset,
        right =
          box.right <=
          (window.innerWidth || document.documentElement.clientWidth) + offset;
      return top && left && bottom && right;
    };

    this.showPageDom = (selector) => {
      // selector 出现
      const allText = d.querySelectorAll(selector);
      const allPages = [];
      w.allText = allText;
      for (let j = 0; j < allText.length; j++) {
        const text = (allText[j].getAttribute("data") || "").trim();
        allText[j].innerHTML = allText[j].innerHTML;
        for (const t in text) {
          allText[j].innerHTML += `<span
            class="dd-animation-item"
            style="
              transition-delay: ${t * 0.05}s;
            "
            >${text[t]}</span
          >`;
          allPages.push(allText[j]);
        }
      }
      const show = () => {
        for (const t of allPages) {
          t.classList.add("dd-animation-active");
        }
      };
      return { allPages, show };
    };
    this.getAllScrollNumber = () => {
      const all = d.querySelectorAll(".dd-num-scroll");
      return all;
    };
    this.setCommonVar = (name, value) => {
      // 改变css变量
      d.querySelector("#app").style.setProperty(name, value);
    };
    this.handleScroll = () => {
      const top =
        w.pageYOffset || d.documentElement.scrollTop || d.body.scrollTop; //兼容不同的浏览器
      if (top) {
        this.setCommonVar("--head_font_color", "#333");
        this.setCommonVar("--head_bg_color", "white");
        d.querySelector(".header").classList.add("header-fixed");
      } else {
        this.setCommonVar("--head_font_color", "white");
        this.setCommonVar("--head_bg_color", "rgba(0,0,0,0)");
        d.querySelector(".header").classList.remove("header-fixed");
      }
    };
    this.initSwiper = () => {
      const row = list.find((item) => item.id === this.indexId);
      const swiper = d.querySelector(".swiper-nav");
      const swiperBody = d.querySelector(".swiper-body");
      swiper.innerHTML = "";
      for (const i of list) {
        swiper.innerHTML += ` 
          <div class="swiper-item dd-flex dd-align-center dd-pointer" onmouseover="changeIndex(${
            i.id
          })">
          <div class="nav-item-animation-circle"></div>
          <div class="transition-opacity-bg ${
            i.id === this.indexId ? "active" : ""
          }"></div>
          <div class="swiper-font dd-text-center ${
            i.id === this.indexId ? "active" : ""
          }">${i.firstName}</div>
        </div>`;
      }
      swiperBody.innerHTML = `
          <div class="swiper-title wow fadeInUp" data-wow-duration="0.5s">${row.name}</div>
            <div class="swiper-text swiper-width wow fadeInUp" data-wow-duration="0.5s">${row.text}
            </div>
            <div class="swiper-more swiper-width wow fadeInUp" data-wow-duration="0.5s">了解更多</div>
            <div class="swiper-img">
              <img src="${row.img}" class="dd-img-cover" alt="">
            </div>
      `;
      setTimeout(() => {
        d.querySelector(".swiper-img img").style.transform = "scale(1)";
      }, 100);
    };
    this.initSwiper2 = () => {
      const all = document.querySelectorAll(".swiper-head-item");
      for (const i of all) {
        if (i.getAttribute("data") == this.indexId) {
          i.classList.add("active");
        } else {
          i.setAttribute("class", "swiper-head-item dd-pointer");
        }
      }
      // .classList.add("active");
      const row = list.find((item) => item.id === this.indexId);
      const swiperBody = d.querySelector(".swiper-body-r");
      swiperBody.innerHTML = `
      <div class="left-text wow rollIn" data-wow-duration="0.5s">
      ${row.text}
    </div>
    <div class="right-img wow bounceInRight" data-wow-duration="0.5s" data-wow-delay="0.2s">
      <img src="${row.img}" class="dd-img-cover" alt="">
    </div>
      `;
    };
  }
  const index = new Index();
  index.initPageText();
  index.initEcharts();
  index.renderPage();
  // 一开始的轮播图
  // index.initSwiper();
  // index.initSwiper2();
  // w.changeIndex = (i) => {
  //   if (index.indexId !== i) {
  //     index.indexId = i;
  //     // index.initSwiper();
  //     // index.initSwiper2();
  //     return false;
  //   }
  // };
  w.videoStatusChang = (flag) => {
    const video = d.querySelector(".video");
    console.log(video.currentTime);
    //false 点击了播放  true 点击了暂停
    console.log(video.paused);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  const allScrollNumber = index.getAllScrollNumber();
  w.onload = () => {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  };
  w.addEventListener("scroll", (e) => {
    for (let i = 0; i < allScrollNumber.length; i++) {
      const item = allScrollNumber[i];
      if (!item) continue;
      const flag = index.isElementInViewport(item, w.scrollY - 500);
      if (flag) {
        setTimeout(() => {
          index.numberScroll({ id: item.getAttribute("id") });
        }, 700);
        item.setAttribute("stop", "");
      } else {
        item.setAttribute("stop", true);
      }
    }
    index.handleScroll();
  });
  // index.numberScroll({className: 'dd-num-scroll'});
  lock = false;
  // bgColor = ["rgb(179, 189, 196)","rgb(180, 183, 166)","rgb(140, 152, 187)"]; //背景色
  var swiper1 = new Swiper(".swiper1", {
    speed: 1300,
    allowTouchMove: false, //禁止触摸滑动
    // parallax : true,  //文字位移视差
    init: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    autoplay: {
      delay: 4500,
      stopOnLastSlide: false,
      // 当设置为false时，用户操作之后autoplay不会被禁掉
      disableOnInteraction: false,
    },
    on: {
      transitionStart: function () {
        // if ($(window).width() > 768) {
        lock = true; //锁住按钮
        slides = this.slides;
        imgBox = slides.eq(this.previousIndex).find(".pc"); //图片包装器
        imgPrev = slides.eq(this.previousIndex).find(".pc img"); //当前图片
        imgActive = slides.eq(this.activeIndex).find(".pc img"); //下一张图片
        derection = this.activeIndex - this.previousIndex;
        // this.$el.css("background-color",bgColor[this.activeIndex]);//背景颜色动画
        imgBox.transform("matrix(0.95, 0, 0, 0.95, 0, 0)");
        imgPrev.transition(1000).transform("matrix(1.1, 0, 0, 1.1, 0, 0)"); //图片缩放视差
        this.slides
          .eq(this.previousIndex)
          .find("h3")
          .transition(1000)
          .css("color", "rgba(255,255,255,0)"); //文字透明动画
        imgPrev.transitionEnd(function () {
          imgActive
            .transition(1300)
            .transform("translate3d(0, 0, 0) matrix(1.1, 0, 0, 1.1, 0, 0)"); //图片位移视差
          imgPrev
            .transition(1300)
            .transform(
              "translate3d(" +
                60 * derection +
                "%, 0, 0)  matrix(1.1, 0, 0, 1.1, 0, 0)"
            );
        });
        // }
      },
      transitionEnd: function () {
        // if ($(window).width() > 768) {
        this.slides
          .eq(this.activeIndex)
          .find(".pc")
          .transform(" matrix(1, 0, 0, 1, 0, 0)");
        imgActive = this.slides.eq(this.activeIndex).find("img");
        imgActive.transition(1000).transform(" matrix(1, 0, 0, 1, 0, 0)");
        this.slides
          .eq(this.activeIndex)
          .find("h3")
          .transition(1000)
          .css("color", "rgba(255,255,255,1)");
        // }
      },
      init: function () {
        this.emit("transitionEnd"); //在初始化时触发一次transitionEnd事件
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      },
      slideChangeTransitionStart: function () {
        var index = this.activeIndex;
      },
    },
    breakpoints: {
      768: {
        allowTouchMove: true, //禁止触摸滑动
        // loop: true
      },
    },
  });
  // $(".swiper1").show();
  swiper1.init();
})(window, document);
