$(window).on("load", function() {
    $(".loader").fadeOut(500);

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "FGCU Student.", "Learning Assistant."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    $('.skills-slide').owlCarousel({
        autoPlay: true,
        items: 4,
        itemsDesktop:[1000,4],
        itemsDesktopSmall:[900,3],
        itemsTablet:[600,2],
        itemsMobile:[480,1],
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var achievementsTopOffset = $(".achievementsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: true,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countUpFinished && window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $(".counter").each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());
        
                element.countup(endVal);
            });
            countUpFinished = true;
        }
    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
        filter: selector,
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    return false;

});

$("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
});

const nav = $("#navigation");
const navTop = nav.offset().top;

$(window).on("scroll", stickyNavigation);

function stickyNavigation() {

    var body = $("body");

    if ($(window).scrollTop()-5 >= navTop) {
        body.css("padding-top", nav.outerHeight() + "px");
        body.addClass("fixedNav");
    } else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
    }
}

});
