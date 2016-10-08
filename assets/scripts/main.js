$(function() {
    'use strict';

    AOS.init({
        easing: 'ease-in-out-sine'
    });

    // Smooth Scrool
    $('a[href*="#"]:not([href="#"]):not([role="tab"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Dropdown Hover
    $('.dropdown').hover(function() {
        $('.dropdown-toggle', this).trigger('click');
    });

    // Sticky Menu
    var nav = $('.navigation');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            nav.addClass("not-in-top");
        } else {
            nav.removeClass("not-in-top");
        }
    });

    // On Resize Windows
    function onResize() {
        var w = $(window).width();
        if (w >= 768){
              // Mobile Viewport < 768px
        }
    }
    onResize();

    $(window).on('resize', onResize);

});
