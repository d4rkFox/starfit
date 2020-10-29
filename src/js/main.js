window.addEventListener("DOMContentLoaded", () => {
    const windowWidth = $(window).width(),
        stepItem = document.querySelectorAll(".step__item"),
        step = document.querySelector(".step"),
        contactMap = document.querySelector(".contact__map"),
        phoneButton = document.querySelector(".phone"),
        phoneIcon = phoneButton.querySelector(".phone__icon"),
        popupInner = document.querySelector(".popup__inner"),
        notification = document.querySelector(".notification"),
        form = document.querySelector(".form");

    let auxiliaryVariableScroll = 0,
        stepTop = step.getBoundingClientRect().top - 200,
        windowTop;

    if (windowWidth > 768) {
        stepItem.forEach((item) => {
            item.removeAttribute("data-aos");
        });
        window.addEventListener("scroll", () => {
                windowTop = $(this).scrollTop();

            if (windowTop > stepTop && auxiliaryVariableScroll === 0) {
                stepItem.forEach((item) => {
                    item.classList.remove("active");
                });
                contactMap.setAttribute (
                    "src",
                    "https://yandex.ru/map-widget/v1/?um=constructor%3A3590fa3ad703dbe06a0791db2c2d8b7a9c21f9fa9b6db1855c37f3ac882169f6&amp;source=constructor"
                );
                auxiliaryVariableScroll = 1;
            }
        });
    } else {
        window.addEventListener("scroll", () => {
               windowTop = $(this).scrollTop();
               
            if (windowTop > stepTop && auxiliaryVariableScroll === 0) {
                contactMap.setAttribute (
                    "src",
                    "https://yandex.ru/map-widget/v1/?um=constructor%3A3590fa3ad703dbe06a0791db2c2d8b7a9c21f9fa9b6db1855c37f3ac882169f6&amp;source=constructor"
                );
                auxiliaryVariableScroll = 1;
            }
        });

        stepItem.forEach((item) => {
            item.classList.remove("active");
        });

        for (let stepElement in stepItem) {
            if (stepElement < 1){
                continue;
            }
            stepItem[stepElement].style.transition = "0.5s";
        }
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

    //fixed buttonPhone==============================================================
    function buttonPhone() {
        window.addEventListener("scroll", () => {
            if ($(this).scrollTop() >= 900) {
                phoneButton.classList.remove("phone--offset"); 
            }
        });
    }
    buttonPhone();
    //end fixed buttonPhone===========================================================
    //E-mail Ajax Send=================================================================
    form.addEventListener("submit", function (event) {
        //Change
        event.preventDefault();
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize(),
        }).done(function () {
            popupInner.classList.toggle("popup__inner--off");
            notification.classList.toggle("notification--on");
            phoneButton.classList.add("phone--off"); 
            phoneIcon.classList.add("phone__icon--off"); 
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    //end E-mail Ajax Send=================================================================
});
