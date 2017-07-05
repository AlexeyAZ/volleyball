/*global $*/

$(function () {

    $(".js-main-news-list").mCustomScrollbar();

    $(".js-main-news-gallery").slick({
        //arrows: false,
        prevArrow: ".js-main-news-gallery-arrow-left",
        nextArrow: ".js-main-news-gallery-arrow-right",
        dots: true,
        appendDots: ".js-main-news-gallery-dots"
    });

    $(".js-gallery-imgs").slick({
        prevArrow: ".js-gallery-block-arrow-left",
        nextArrow: ".js-gallery-block-arrow-right",
        slidesToShow: 6,
        swipeToSlide: true
    });
});
//# sourceMappingURL=app.js.map
