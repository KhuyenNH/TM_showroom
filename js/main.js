/* Reponsive for meta
-------------------------------------- */
$(window).resize(function() {
    if (screen.width <= 1100 && screen.width > 767) {
        $('meta[name="viewport"]').attr('content', 'width=1100, user-scalable=no, shrink-to-fit=no');
    } else {
        $('meta[name="viewport"]').attr('content', 'width=device-width, user-scalable=no, shrink-to-fit=no');
    }
}).resize();
