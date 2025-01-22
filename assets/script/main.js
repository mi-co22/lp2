$(function () {

  //-----------------------------------------------------
  // スムーススクロール
  //-----------------------------------------------------
  function smooth() {
    const $btn = $('.js-smooth-scroll');
    $('a[href^="#"]').on('click', function () {
      const speed = 500;
      const href = $(this).attr('href');
      const target = $(href === '#' || href === '' ? 'html' : href);
      const positon = target.offset().top;
      $('body,html').animate({ scrollTop: positon }, speed, 'swing');
      return false;
    });
  }
  smooth();

  // $(window).on("scroll", function () {
  //   documentHeight = $(document).height();
  //   scrollPosition = $(this).height() + $(this).scrollTop();
  //   footerHeight = $(".js-footer").innerHeight();

  //   if (documentHeight - scrollPosition <= footerHeight) {
  //     $(".js-smooth-scroll").css({
  //       position: "absolute",
  //       bottom: footerHeight,
  //     });
  //   } else {
  //     $(".js-smooth-scroll").css({
  //       position: "fixed",
  //       bottom: 10
  //     });
  //   }
  // });

  function updateScrollPosition() {
    const documentHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop(); // $(this) を $(window) に変更
    const footerHeight = $(".js-footer").innerHeight();

    if (documentHeight - scrollPosition <= footerHeight) {
      $(".js-smooth-scroll").css({
        position: "absolute",
        bottom: footerHeight,
      });
    } else {
      $(".js-smooth-scroll").css({
        position: "fixed",
        bottom: 10,
      });
    }
  }


  function scrollDisplay() {
    const target = $(".js-smooth-scroll");
    if ($(window).scrollTop() > 100) {
      target.css({
        display: "block",
      });
    } else {
      target.css({
        display: "none",
      });
    }
  }

  $(window).on("scroll", function () {
    scrollDisplay();
    updateScrollPosition();
  });

  const mySwiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 39,
      }
    },
  });
  // アコーディオン
  //--------------------------------------------
  //ariaを利用した汎用的に使えるアコーディオン用スクリプトにしてあります。
  function accordion() {
    $('[aria-controls^="accordion"]').stop().on('click', function (e) {
      const $self = $(e.currentTarget);
      const expanded = $self.attr('aria-expanded');
      const $target = $('#' + $self.attr('aria-controls'));

      if (expanded === 'false') {
        $self.attr('aria-expanded', true);
        $target.attr('aria-hidden', false).slideDown();
      } else {
        $self.attr('aria-expanded', false);
        $target.attr('aria-hidden', true).slideUp();
      }
    });
  }
  accordion();

});


