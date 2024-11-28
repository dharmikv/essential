var announcement_bar = new Swiper(".inner-header-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 500,
    effect: 'fade', // Enables fade effect
    fadeEffect: {
        crossFade: true, // Smooth fading between slides
    },
    autoplay: {
        delay: 1500,
    },     
});
