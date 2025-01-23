$(function () {

  //-----------------------------------------------------
  // スムーススクロール
  //-----------------------------------------------------
  function smooth() {
    const $btn = $('.js-smooth-scroll');
    $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();
      const speed = 500;
      const href = $(this).attr('href');
      const target = $(href === '#' || href === '' ? 'html' : href);
      const positon = target.offset().top;
      $('body,html').animate({ scrollTop: positon }, speed, 'swing');
      return false;
    });
  }
  smooth();

  //-----------------------------------------------------	}
  // スクロール位置の更新
  //-----------------------------------------------------
  function updateScrollPosition() {
    const documentHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footerHeight = $(".js-footer").innerHeight();
    const containerWidth = 1200;
    const windowWidth = $(window).width();
    const rightOffset = Math.max(0, (windowWidth - containerWidth) / 2);
    const $scrollButton = $('.js-smooth-scroll');
    if (documentHeight - scrollPosition <= footerHeight) {
      $scrollButton.css({
        position: "absolute",
        bottom: footerHeight,
        right: 0
      });
    } else {
      $scrollButton.css({
        position: "fixed",
        bottom: 10,
        right: rightOffset
      });
    }
  }
  //-----------------------------------------------------
  // スクロールボタンの表示制御
  //-----------------------------------------------------
  function scrollDisplay() {
    const $scrollButton = $('.js-smooth-scroll');
    if ($(window).scrollTop() > 100) {
      $scrollButton.fadeIn();
    } else {
      $scrollButton.fadeOut();
    }
  }

  $(window).on("scroll", function () {
    scrollDisplay();
    updateScrollPosition();
  });
  //-----------------------------------------------------
  // スライダー
  //-----------------------------------------------------
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
        slidesPerGroup: 3,
      }
    },
  });
  //-----------------------------------------------------
  // アコーディオン
  //-----------------------------------------------------
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


