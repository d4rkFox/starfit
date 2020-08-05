$(function () {
    //fancybox=======================================================================
    $(".header__button, .phone, .header__btn, .footer__btn, .step__popup").fancybox({
        baseClass: "popup__wrapper",
        beforeShow  : function() {
            $('.phone').addClass('phone--offset');
           },
           afterClose  : function(){
             $('.phone').removeClass('phone--offset');
           }
    });
    // end fancybox==================================================================
    //fixed buttonPhone==============================================================
    function buttonPhone() {
        let button = $(".phone");
        $(window).on("scroll", () => {
            if ($(this).scrollTop() >= 900) {
                button.fadeIn();
            }
        });
    }
    buttonPhone();
    //end fixed buttonPhone===========================================================
    //E-mail Ajax Send=================================================================
    $(".form").submit(function () {
        //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize(),
        }).done(function () {
            $(".popup__inner").toggleClass("popup__inner--off");
            $(".notification").toggleClass("notification--on");
            $(".phone").addClass("phone--off");
            $(".phone__icon").addClass("phone__icon--off");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    //end E-mail Ajax Send=================================================================
    //start animation AOS==================================================================
    AOS.init({
        duration: 1000,
        once: true,
    });
    //end animation AOS====================================================================
});
