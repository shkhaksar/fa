$(function () {
    "use strict";
    /*=========================================================================
            One Page Nav
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    /*=========================================================================
            Hamburger Menu & Mobile Push menu
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on('click', function () {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();

    /*=========================================================================
            Carousels / Resume, Testimonials, Customers /
    =========================================================================*/

    $(".customer-carousel").owlCarousel({
        rtl: true,
        items: 4
    });

    $(".resume-carousel, .testimonial-carousel").owlCarousel({
        rtl: true,
        singleItem: true
    });


    /*=========================================================================
            Magnific Popup Functions
    =========================================================================*/
    $('.work-image').magnificPopup({
        type: 'image'
    });

    $('.work-video').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',

            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',

                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }

            },

            srcAction: 'iframe_src',
        }
    });

});