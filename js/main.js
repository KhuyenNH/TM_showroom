var wBrowser = $(window).width();
if (wBrowser < 768) {
    var posScroll = 0;
    $('img').each(function() {
        $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
    });
} else {
    var posScroll = 100;
    $('img').each(function() {
        $(this).attr("src", $(this).attr("src").replace('_sp', '_pc'));
    });
}

var h_section01 = $('.section_01').height();
$('.paralax1').height(h_section01);

var heightHead = $('.header').outerHeight();
$('.page-body').css("padding-top", heightHead);

/* Reponsive for meta
-------------------------------------- */
$(window).resize(function() {
    if (screen.width > 767 && screen.width <= 1100) {
        $('meta[name="viewport"]').attr('content', 'width=1100, user-scalable=no, shrink-to-fit=no');
    } else {
        $('meta[name="viewport"]').attr('content', 'width=device-width, user-scalable=no, shrink-to-fit=no');
    }
}).resize();

/* Fade scroll
-------------------------------------- */
window.onload = function() {
    $(window).scroll(function() {
        $('.fadeUp, .fadeLeft, .fadeIn').each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + posScroll) {
                $(this).addClass('ef-slide');
            }
        });
    }).trigger("scroll");
}
