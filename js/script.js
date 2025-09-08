gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
jQuery(function ($) {

  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $(".l-pagetop");
  topBtn.hide();
  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $(".l-header__bar").click(function () {
    $(".l-header").toggleClass("is-open");
    $(".l-offcanvas").toggleClass("is-open");
  });

  //ヘッダーカラー
  $('.l-header__inner').midnight();

  const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1800,
    slidesPerView: "3.7",
    spaceBetween: 20,
    breakpoints: {
      767: {
        slidesPerView: "3.7",
      },
    },
    pagination: {
      el: ".swiper-pagination",
      //type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      //prevEl: ".swiper-button-prev",
    },
    autoplay: {
      disableOnInteraction: false,
    },
  });
});

$(function () {
  setTimeout(function () {
    // フェードインアニメーション
    let mm = gsap.matchMedia();
    mm.add("(max-width: 821px)", () => {
      // ここに1024px以下のときのコードを書きます
      gsap.utils.toArray(".js__fadein").forEach((target) => {
        gsap.to(target, {
          scrollTrigger: {
            trigger: target,
            start: "top center+=70%",
          },
          opacity: 1,
          y: 0,
        });
      });
    });

    mm.add("(min-width: 821px)", () => {
      // ここに1025px以上のときのコードを書きます
      gsap.utils.toArray(".js__fadein").forEach((target) => {
        gsap.to(target, {
          scrollTrigger: {
            trigger: target,
            start: "top center+=40%",
          },
          opacity: 1,
          y: 0,
        });
      });
    });
  }, 1900);
});

// アコーディオンメニュー
$(".c-accordion__ttl").click(function () {
  $(this).siblings(".c-accordion__content").stop().slideToggle();
  $(".c-accordion__ttl")
    .not($(this))
    .siblings(".c-accordion__content")
    .slideUp();
  $(this).toggleClass("active");
  $(".c-accordion__ttl").not($(this)).removeClass("active");
});
