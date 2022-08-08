$(function () {
    $('.user-nav__btn').click(function (){
        $('.user-nav__btn').toggleClass('user-nav__btn--active')
        $('.menu').toggleClass('menu--active')
    });

    $('.related__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.related__control'),
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-grey.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow-grey.svg" alt=""></button>',
    });

    $('.tabs__top-link').click(function (e) {
        e.preventDefault();
        $('.tabs__top-link').removeClass('tabs__top-link--active');
        $(this).addClass('tabs__top-link--active');

        $('.tabs__content-item').removeClass('tabs__content-item--active');
        $($(this).attr('href')).addClass('tabs__content-item--active');
    });

    $('.product-detalis__form-input').styler();

    $('.product-detalis__slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        fade: true,
        arrows: false,
        asNavFor: '.product-detalis__slider-bar',
    });
    $('.product-detalis__slider-bar').slick({
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        vertical: true,
        asNavFor: '.product-detalis__slider-main',
    });


    $('.star').rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $('.price-filters__input').ionRangeSlider({
        prefix: "$",
        prettify_enabled: true,
        onStart: function (data) {
            $(".price-filters__from").text(data.from);
            $(".price-filters__to").text(data.to);
        },
        onChange: function (data) {
            $(".price-filters__from").text(data.from);
            $(".price-filters__to").text(data.to);
        },
    });

    $('.header-slider__top').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    mixitup('.product__inner', {
        controls: {
            scope: 'local'
        }
    });
    mixitup('.design__inner', {
        controls: {
            scope: 'local'
        }
    });
});