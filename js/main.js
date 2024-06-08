const welcomeSectionSwiper = new Swiper('.new-product__swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    pagination: {
        el: ".new-product__swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    pagination: {
        el: ".reviews__swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});