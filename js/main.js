var wBrowser = $(window).width();
if (wBrowser < 768) {
    var posScroll = 0;
} else {
    var posScroll = 100;
}
/* Reponsive for meta
-------------------------------------- */
$(window).resize(function() {
    if (screen.width <= 1100 && screen.width > 767) {
        $('meta[name="viewport"]').attr('content', 'width=1100, user-scalable=no, shrink-to-fit=no');
    } else {
        $('meta[name="viewport"]').attr('content', 'width=device-width, user-scalable=no, shrink-to-fit=no');
    }
}).resize();

var heightHead = $('.header').height();
$('.page-body').css("padding-top", heightHead);
$('.toggle_nav').click(function(event) {
    $('.nav').stop().slideToggle();
});

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
