$(document).ready(function () {
    /**
     * Sticky navegation
     */
    $('.js--features-section').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '60px'
    });

    $('.js--features-wp').waypoint(function (direction) {
        $('.js--features-wp').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })

    $('.js--steps-wp').waypoint(function (direction) {
        $('.js--steps-wp').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })

    $('.js--cities-wp').waypoint(function (direction) {
        $('.js--cities-wp').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })

    $('.js--plans-wp').waypoint(function (direction) {
        $('.js--plans-wp').addClass('animated pulse');
    }, {
        offset: '50%'
    })

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');

        var icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);


        icon.attr('name', icon.attr('name') == 'menu' ? 'close' : 'menu')

    })
});