/*global $*/

$(function() {

    $(".js-main-news-list").mCustomScrollbar();

    $(".js-main-news-gallery").slick({
        arrows: false,
        dots: true,
        appendDots: ".js-main-news-gallery-dots"
    });

    $(".js-gallery-imgs").slick({
        slidesToShow: 6,
        swipeToSlide: true
    });

});

