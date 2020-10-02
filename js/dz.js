$('body').append('<a href="#" id="go-top"><i class="fas fa-angle-double-up fa-3x"></i></a>');
$.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "800")
        $(this).fadeIn("slow");
    var scrollDiv = $(this);
    $(window).scroll(function () {
        if ($(window).scrollTop() <= "800")
            $(scrollDiv).fadeOut("slow");
        else
            $(scrollDiv).fadeIn("fast");
    });
    $(this).click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
}
$("#go-top").scrollToTop();