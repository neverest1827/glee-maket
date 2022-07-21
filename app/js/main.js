$(function (){
    $(".header-slider__top").slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    mixitup('.product__inner');
});