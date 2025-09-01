gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
jQuery(function ($) {
  // ローディング
  //テキストのカウントアップ+バーの設定
  var bar = new ProgressBar.Line(splash_text, {
    //id名を指定
    easing: "easeInOut", //アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000, //時間指定(1000＝1秒)
    strokeWidth: 0.2, //進捗ゲージの太さ
    color: "#555", //進捗ゲージのカラー
    trailWidth: 0.2, //ゲージベースの線の太さ
    trailColor: "#bbb", //ゲージベースの線のカラー
    text: {
      //テキストの形状を直接指定
      style: {
        margin: "-30px 0 0 0", //バーより上に配置
        color: "#fff",
      },
      autoStyleContainer: false, //自動付与のスタイルを切る
    },
    step: function (state, bar) {
      bar.setText(Math.round(bar.value() * 100) + " %"); //テキストの数値
    },
  });

  //アニメーションスタート
  bar.animate(1.0, function () {
    //バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800); //アニメーションが終わったら#splashエリアをフェードアウト
  });

  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".pagetop");
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
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $(".l-header__bar").click(function () {
    $(".l-header").toggleClass("is-open");
    $(".l-offcanvas").toggleClass("is-open");
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1800,
    //slidesPerView: "1.3",
    spaceBetween: 20,
    breakpoints: {
      767: {
        slidesPerView: "1.3",
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
$(".section-accordion__ttl").click(function () {
  $(this).siblings(".section-accordion__content").stop().slideToggle();
  $(".section-accordion__ttl")
    .not($(this))
    .siblings(".section-accordion__content")
    .slideUp();
  $(this).toggleClass("active");
  $(".section-accordion__ttl").not($(this)).removeClass("active");
});

//サムネイルスライダー
var sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var slider = new Swiper(".slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});
