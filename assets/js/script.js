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

var heroSlider = new Swiper('.hero-slider', {
    loop: true, // Enables looping
    slidesPerView: 1, // Show one slide at a time
    effect: 'fade', // Enables fade effect
    fadeEffect: {
        crossFade: true, // Smooth fading between slides
    },
    pagination: {
        el: '.swiper-pagination', // Pagination bullets
        clickable: true,
    },
});




document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header"); // Select the header tag
    const sliderContents = document.querySelectorAll(".slider-content"); // Select all slider-content elements
    
    if (header && sliderContents.length > 0) {
        // Function to set padding-top dynamically for each slider-content
        const updatePadding = () => {
            const headerHeight = header.offsetHeight; // Get the header height
            const isMobile = window.innerWidth <= 768; // Check if the screen width is 768px or below
            const paddingTop = isMobile ? headerHeight : headerHeight - 7; // Adjust padding based on screen width
            
            sliderContents.forEach(sliderContent => {
                sliderContent.style.paddingTop = `${paddingTop}px`; // Set the calculated padding-top
            });
        };
    
        // Initial call to set padding
        updatePadding();
    
        // Adjust padding on window resize
        window.addEventListener("resize", updatePadding);
    }
    

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