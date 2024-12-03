var announcement_bar = new Swiper(".inner-header-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 1500,
    },     
});

var heroSlider = new Swiper('.hero-slider', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




document.addEventListener("DOMContentLoaded", () => {
    function updateHeroStyles() {
        const innerHeader = document.querySelector('.innerheader');
        const heroSection = document.querySelector('.hero-section');
    
        if (innerHeader && heroSection) {
            const innerHeaderHeight = innerHeader.offsetHeight;
            heroSection.style.marginTop = `${innerHeaderHeight}px`;
            heroSection.style.height = `calc(100vh - ${innerHeaderHeight}px)`;
        }
    }
    
    window.addEventListener('load', updateHeroStyles);
    
    window.addEventListener('resize', updateHeroStyles);
});

jQuery(document).ready(function ($) { 
    if ($(window).scrollTop() >= 70) {
        $('.header').addClass('is-sticky');
        $('.innerheader').addClass('hidden');
    }
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 70) {
            $('.header').addClass('is-sticky');
            $('.innerheader').addClass('hidden');
        } else {
            $('.header').removeClass('is-sticky');
            $('.innerheader').removeClass('hidden');
        }
    })
});