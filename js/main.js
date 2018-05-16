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

var h_section01 = $('.section_01').outerHeight(true);
$('.paralax1').height(h_section01);

var heightHead = $('.header').outerHeight(true);
$('.page-body').css("padding-top", heightHead);
$('.main_visual').css("top", heightHead);

/* Scrool bookmark
-------------------------------------- */
$('a[href^="#"]').click(function() {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top - heightHead
    }, 1000);
    return false;
});

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
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 0) {
                $(this).addClass('ef-slide');
            }
        });

        var posThis = $(this).scrollTop();
        if (posThis > 800) {
            $('.main_visual').addClass('removeBg');
        } else {
            $('.main_visual').removeClass('removeBg');
        }

    }).trigger("scroll");
}
