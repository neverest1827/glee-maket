$(function () {
    $(".star").rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $(".price-filters__input").ionRangeSlider({
        prefix: "$",
        prettify_enabled: true,
        prettify_separator: ".",
        onStart: function (data) {
            $(".price-filters__from").text(data.from);
            $(".price-filters__to").text(data.to);
        },
        onChange: function (data) {
            $(".price-filters__from").text(data.from);
            $(".price-filters__to").text(data.to);
        },
    });

    $(".header-slider__top").slick({
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