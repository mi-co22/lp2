$(function () {


    //-----------------------------------------------------
    // スクロールボタンの表示制御
    //-----------------------------------------------------
    function checkScroll() {
        const $scrollButton = $('.js-pagetop');
        if ($(window).scrollTop() > 100) {
            $scrollButton.addClass('pagetop__button--visible');
        } else {
            $scrollButton.removeClass('pagetop__button--visible');
        }
    }

    $(window).on("scroll resize", checkScroll);
    checkScroll(); // 初回実行（ページ読み込み時の状態を反映）

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
    $('[aria-controls^="accordion"]').stop().on('click', function (e) {
        const $self = $(e.currentTarget);
        const expanded = $self.attr('aria-expanded') === 'true';
        const $target = $('#' + $self.attr('aria-controls'));

        if (!expanded) {
            $self.attr({
                'aria-expanded': true,
                'aria-label': '回答パネルを閉じる'
            });
            $target.attr('aria-hidden', false).slideDown();
        } else {
            $self.attr({
                'aria-expanded': false,
                'aria-label': '回答パネルを開く'
            });
            $target.attr('aria-hidden', true).slideUp();
        }
    });

});


