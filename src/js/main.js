$(function () {
    var windowWidth = $(window).width();
    var auxiliaryVariableScroll = 0;
    var step = $(".step");
    var stepTop = step.offset().top - 200;
    if (windowWidth > 768) {
        var fired = false;

            if (fired === false) {
                fired = true;

                setTimeout(() => {
                    (function (m, e, t, r, i, k, a) {
                        m[i] =
                            m[i] ||
                            function () {
                                (m[i].a = m[i].a || []).push(arguments);
                            };
                        m[i].l = 1 * new Date();
                        (k = e.createElement(t)),
                            (a = e.getElementsByTagName(t)[0]),
                            (k.async = 1),
                            (k.src = r),
                            a.parentNode.insertBefore(k, a);
                    })(
                        window,
                        document,
                        "script",
                        "https://mc.yandex.ru/metrika/tag.js",
                        "ym"
                    );
                    ym(68056372, "init", {
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true,
                        trackHash: true,
                    });
                }, 1000);
            }
            console.log("больше 768");
        $(".step__item").removeAttr("data-aos");
        $(window).scroll(function () {
            

            var windowTop = $(this).scrollTop();
            if (windowTop > stepTop && auxiliaryVariableScroll === 0) {
                $(".step__item").removeClass("active");
                $(".contact__map").attr(
                    "src",
                    "https://yandex.ru/map-widget/v1/?um=constructor%3A3590fa3ad703dbe06a0791db2c2d8b7a9c21f9fa9b6db1855c37f3ac882169f6&amp;source=constructor"
                );
                auxiliaryVariableScroll = 1;
            }
        });
    } else {
        $(window).scroll(function () {
            if (fired === false) {
                fired = true;

                setTimeout(() => {
                    (function (m, e, t, r, i, k, a) {
                        m[i] =
                            m[i] ||
                            function () {
                                (m[i].a = m[i].a || []).push(arguments);
                            };
                        m[i].l = 1 * new Date();
                        (k = e.createElement(t)),
                            (a = e.getElementsByTagName(t)[0]),
                            (k.async = 1),
                            (k.src = r),
                            a.parentNode.insertBefore(k, a);
                    })(
                        window,
                        document,
                        "script",
                        "https://mc.yandex.ru/metrika/tag.js",
                        "ym"
                    );
                    ym(68056372, "init", {
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true,
                        trackHash: true,
                    });
                }, 1000);
            }

            var windowTop = $(this).scrollTop();
            if (windowTop > stepTop && auxiliaryVariableScroll === 0) {
                $(".contact__map").attr(
                    "src",
                    "https://yandex.ru/map-widget/v1/?um=constructor%3A3590fa3ad703dbe06a0791db2c2d8b7a9c21f9fa9b6db1855c37f3ac882169f6&amp;source=constructor"
                );
                auxiliaryVariableScroll = 1;
            }
        });
        $(".step__item").removeClass("active");
        $(".step__item--two").css({ transition: "0.5s" });
        $(".step__item--three").css({ transition: "0.5s" });
        $(".step__item--four").css({ transition: "0.5s" });
        $(".step__item--five").css({ transition: "0.5s" });
        console.log("меньше 768");
    }

    var fired = false;

    window.addEventListener("scroll", () => {
        if (fired === false) {
            fired = true;

            setTimeout(() => {
                (function (m, e, t, r, i, k, a) {
                    m[i] =
                        m[i] ||
                        function () {
                            (m[i].a = m[i].a || []).push(arguments);
                        };
                    m[i].l = 1 * new Date();
                    (k = e.createElement(t)),
                        (a = e.getElementsByTagName(t)[0]),
                        (k.async = 1),
                        (k.src = r),
                        a.parentNode.insertBefore(k, a);
                })(
                    window,
                    document,
                    "script",
                    "https://mc.yandex.ru/metrika/tag.js",
                    "ym"
                );
                ym(68056372, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    trackHash: true,
                });
            }, 1000);
        }
    });

    //fancybox=======================================================================
    $(
        ".header__button, .phone, .header__btn, .footer__btn, .step__popup"
    ).fancybox({
        baseClass: "popup__wrapper",
        beforeShow: function () {
            $(".phone").addClass("phone--offset");
        },
        afterClose: function () {
            $(".phone").removeClass("phone--offset");
        },
    });
    // end fancybox==================================================================

    //fixed buttonPhone==============================================================
    function buttonPhone() {
        var button = $(".phone");
        $(window).on("scroll", () => {
            if ($(this).scrollTop() >= 900) {
                button.removeClass("phone--offset");
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
