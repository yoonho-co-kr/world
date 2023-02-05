$(document).ready(function () {
    for (let i = 0; i < $(".country").length; i++) {
        let country_name = $(".country").eq(i).attr("class").split(" ")
        country_name = country_name[0]
        for (let j = 0; j < photo_list.length; j++) {
            if (country_name == photo_list[j].id) {
                let put_photo = `<div class="swiper-slide"><img src ="./img/photo/${country_name}/${photo_list[j].src}.jpg" class="${photo_list[j].src}"></div>`
                $(".swiper-wrapper").eq(i).append(put_photo)


            }
            // else if (country_name != photo_list[j].id) {
            //     let put_error = `<div class="swiper-slide"><div class="error">사진이 없습니다.</div></div>`
            //     $(".swiper-wrapper").eq(i).append(put_error)
            // }

        }
    }
    let make_link = $(".title").html;
    console.log(make_link);
    $(".inner")
    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(".inner").click(function () {
        event.preventDefault();
        let href = $(this).attr('href');
        let pos = $(href).offset().top;
        $("html, body").animate({
            scrollTop: pos - 50
        }, 300)
        if (window.innerWidth < 670) {
            $(".menu").animate({
                top: "100vh"
            })
            $(".menu_btn").css({
                backgroundColor: "#4e4e50"
            })
            menu_chk = false;
        }
    })

    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > $(".croatia").offset().top - 100) {
            menu_color(10)
        }
        else if (pos >= $(".serbia").offset().top - 100) {
            menu_color(9)
        }
        else if (pos >= $(".montenegro").offset().top - 100) {
            menu_color(8)
        }
        else if (pos >= $(".poland").offset().top - 100) {
            menu_color(7)
        }
        else if (pos >= $(".spain").offset().top - 100) {
            menu_color(6)
        }
        else if (pos >= $(".italy").offset().top - 100) {
            menu_color(5)
        }
        else if (pos >= $(".taiwan").offset().top - 100) {
            menu_color(4)
        }
        else if (pos >= $(".vietnam").offset().top - 100) {
            menu_color(3)
        }
        else if (pos >= $(".indonesia").offset().top - 100) {
            menu_color(2)
        }
        else if (pos >= $(".malaysia").offset().top - 100) {
            menu_color(1)
        }
        else {
            menu_color(0)
        }
    })
    function menu_color(now) {
        $(".list").css({
            color: "#4e4e50"
        })
        $(".list").eq(now).css({
            color: "#950740",
        })
    }

    let menu_chk = false;
    $(".menu_btn").click(function () {
        if (menu_chk != true) {
            $(".menu").animate({
                top: "0"
            })
            $(".menu_btn").css({
                backgroundColor: "#c3073f"
            })
            menu_chk = true;
        }
        else {
            $(".menu").animate({
                top: "100vh"
            })
            $(".menu_btn").css({
                backgroundColor: "#4e4e50"
            })
            menu_chk = false;
        }
    })
})