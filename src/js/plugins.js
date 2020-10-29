$(function () {
    //start animation AOS==================================================================
    AOS.init({
        duration: 1000,
        once: true,
    });
    //end animation AOS====================================================================
    //fancybox=======================================================================
    $(".popup-on").fancybox({
        baseClass: "popup__wrapper",
        beforeShow: function () {
            $(".phone").addClass("phone--offset");
        },
        afterClose: function () {
            $(".phone").removeClass("phone--offset");
        },
    });
    // end fancybox==================================================================
});