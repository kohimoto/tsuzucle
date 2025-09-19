gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $(".l-pagetop");
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

  // ページ内リンク
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.hash);
    if (target.length) {
      $('html, body').animate(
        { scrollTop: target.offset().top- 80 }, // 移動先の位置
        600, // スクロール時間（ミリ秒）
        'swing'
      );
    }
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
    slidesPerView: "1.5",
    spaceBetween: 30,
    breakpoints: {
      500: {
        slidesPerView: "2.5",
        spaceBetween: 20,
      },
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
  $(this).toggleClass("active");
});

// モーダル
$(function() {
  // カードクリックでモーダル表示
  const $modal = $(".p-member__list__card__modal");
  $(".p-member__list__card-wrap li > a").on("click", function(e) {
    e.preventDefault();

    $modal.fadeIn();
  });
  // モーダル内の閉じるボタンで非表示
  $(".p-member__list__card__modal__close").on("click", function() {
    $(".p-member__list__card__modal").fadeOut();
  });
  // モーダル背景クリックで閉じる（任意）
  $(".p-member__list__card__modal").on("click", function(e) {
    if ($(e.target).is(".p-member__list__card__modal")) {
      $(this).fadeOut();
    }
  });
});

jQuery(function($){
  $(".l-header__list__havchild").hover(
    function() {
      $(this).children(".child__menu")
        .stop(true, true)
        .slideDown(200);
    },
    function() {
      $(this).children(".child__menu")
        .stop(true, true)
        .slideUp(200);
    }
  );
});
jQuery(function($){
  $('.js-term-jump').on('change', function(){
    var url = $(this).val();
    if(url){
      window.location.href = url;
    }
  });
});
