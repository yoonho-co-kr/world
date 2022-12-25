// #1a1a1d / #4e4e50 / #6f2232 / #950740 / #c3073f
$(document).ready(function () {
    let time_sec = document.getElementsByClassName("time")
    setInterval(dpTime, 1000);
    function dpTime() {
        var now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let time_diffrence = [3, 1, 2, 2, 1, 8, 8, 8, 8, 8, 8]
        for (let i = 0; i < time_diffrence.length; i++) {
            hours = now.getHours();
            minutes = now.getMinutes();
            seconds = now.getSeconds();
            hours -= time_diffrence[i];
            if (hours > 12) {
                hours -= 12;
                ampm = "PM ";
            } else {
                ampm = "AM ";
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            time_sec[i].innerHTML = ampm + hours + ":" + minutes + ":" + seconds;
        }
    }
    if (window.innerWidth < 600) {

    }

    // $(window).scroll(function () {
    //     let s_top = $(window).scrollTop();
    //     let phil = $(".phillipines").offset().top;
    //     console.log(s_top)
    // })
    let year = document.getElementsByClassName("year");
    let area = document.getElementsByClassName("area");
    let popu = document.getElementsByClassName("popu");
    let code = document.getElementsByClassName("code");
    let number = document.getElementsByClassName("number");

    let country_arr = ["phillipines", 'malaysia', 'indonesia', 'vietnam', 'taiwan', 'italy', 'spain', 'poland', 'montenegro', 'serbia', 'croatia']
    let year_arr = [2003, 2017, 2018, 2019, 2007, 2019, 2019, 2020, 2022, 2022, 2022]
    let area_arr = [343448, 329847, 1904569, 330341, 36197, 302068, 92090, 312679, 13812, 77474, 56594]
    let popu_arr = [113238345, 33938221, 280865099, 98721275, 23893394, 59169131, 47431256, 37887768, 628262, 8651278, 4043666]
    let code_arr = [63, 20, 62, 84, 886, 39, 34, 48, 382, 381, 385,]

    let personal_rate = [[6, 8, 4, 5, 3], [6, 9, 5, 4, 10], [8, 7, 3, 3, 9], [10, 8, 6, 7, 8], [10, 6, 8, 7, 10], [9, 9, 8, 6, 7], [8, 8, 6, 7, 8], [7, 9, 8, 9, 10], [5, 9, 5, 3, 10], [5, 8, 7, 7, 8], [6, 10, 6, 7, 9]]
    for (let i = 0; i < country_arr.length; i++) {
        let insert_section = `<section class="section information ${country_arr[i]}">
            <div class="country_img_box">
                <div class="name">${country_arr[i].toUpperCase()}
                <div class="name_hide"></div>
                </div>
                <div class="img_px"><img src="./img/${country_arr[i]}.svg" alt=""></div>
            </div>
            <div class="country_txt_box">
                <div class="info_box">
                    <ul class="key">
                        <li>YEAR OF VISIT</li>
                        <li>LAND AREA</li>
                        <li>POPULATION</li>
                        <li>COUNTRY CODE</li>
                        <li>TIME</li>


                    </ul>
                    <ul class="value">
                        <li class="year"></li>
                        <li class="area"></li>
                        <li class="popu"></li>
                        <li class="code"></li>
                        <li class="time"></li>


                    </ul>
                </div>
                <div class="rate_box">
                    <div class="box_title">PERSONAL RATE</div>
                    <div class="rate_bar">
                        <div class="bar_box">
                            <div class="bar_name">FOOD</div>
                            <div class="bar">
                                <div class="progress">
                                    <div class="number"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bar_box">
                            <div class="bar_name">NATURE</div>
                            <div class="bar">
                                <div class="progress">
                                    <div class="number"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bar_box">
                            <div class="bar_name">BUILDING</div>
                            <div class="bar">
                                <div class="progress">
                                    <div class="number"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bar_box">
                            <div class="bar_name">TRANSPORT</div>
                            <div class="bar">
                                <div class="progress">
                                    <div class="number"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bar_box">
                            <div class="bar_name">SECURITY</div>
                            <div class="bar">
                                <div class="progress">
                                    <div class="number"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="img_jpg"></div>
            </div>
        </section>`

        $('#wrap_contain').append(insert_section)
    }







    function increase_year(i) {
        let counter = Math.floor(year_arr[i] * 0.99);
        setInterval(() => {
            if (counter == year_arr[i]) {
                clearInterval();
            }
            else {
                counter += 1;
                year[i].innerHTML = counter
            }
        }, 100)
    }
    function increase_area(i) {
        let counter = Math.floor(area_arr[i] * 0.99);
        setInterval(() => {
            if (counter >= area_arr[i]) {
                clearInterval();
            }
            else {
                counter += Math.floor(area_arr[i] * 0.0001);
                area[i].innerHTML = counter.toLocaleString("kr") + " km2"
            }
        }, 50)
    }
    function increase_popu(i) {
        let counter = Math.floor(popu_arr[i] * 0.99);
        setInterval(() => {
            if (counter >= popu_arr[i]) {
                clearInterval();
            }
            else {
                counter += Math.floor(popu_arr[i] * 0.0001);
                popu[i].innerHTML = counter.toLocaleString('kr')
            }
        }, 50)
    }
    function increase_code(i) {
        let counter = Math.floor(code_arr[i] * 0.98);
        setInterval(() => {
            if (counter >= code_arr[i]) {
                clearInterval();
            }
            else {
                counter += 1;
                code[i].innerHTML = "+" + counter
            }
        }, 100)
    }
    function increase_number(i, j) {
        let counter = 0;
        setInterval(() => {

            if (counter == personal_rate[i][j]) {
                clearInterval();
            }
            else {
                counter += 1;
                // number[(i * 5) + j].innerHTML = "★" + counter;
                $(".number").eq((i * 5) + j).html("★" + counter);
            }

        }, 100)
    }

    function active_progress(i, j) {
        let counter = 0;
        setInterval(() => {

            if (counter == personal_rate[i][j]) {
                clearInterval();
            }
            else {
                counter += 1;
                $(".rate_box").eq(i).find($(".progress")).eq(j).css({
                    width: (counter * 10) + "%"
                })
            }

        }, 100)

    }
    function menu_change(i) {
        $(".menu div").css({
            color: "#4e4e50"
        })
        $(".menu div").eq(i).css({
            color: "#950740"
        })
    }

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let phillipines = $(".phillipines").offset().top;
        let malaysia = $(".malaysia").offset().top;
        let indonesia = $(".indonesia").offset().top;
        let vietnam = $(".vietnam").offset().top;
        let taiwan = $(".taiwan").offset().top;
        let italy = $(".italy").offset().top;
        let spain = $(".spain").offset().top;
        let poland = $(".poland").offset().top;
        let montenegro = $(".montenegro").offset().top;
        let serbia = $(".serbia").offset().top;
        let croatia = $(".croatia").offset().top;

        let margin = 30;

        if (s_top >= croatia && s_top < croatia + margin) {
            increase_year(10)
            increase_area(10)
            increase_popu(10)
            increase_code(10)
            for (let j = 0; j < personal_rate[10].length; j++) {
                active_progress(10, j)
                increase_number(10, j)
            }
            menu_change(11)
            $(".name_hide").eq(10).animate({
                left: "100%"
            })
        }
        else if (s_top >= serbia && s_top < serbia + margin) {
            increase_year(9)
            increase_area(9)
            increase_popu(9)
            increase_code(9)
            increase_number(9)
            for (let j = 0; j < personal_rate[9].length; j++) {
                active_progress(9, j)
                increase_number(9, j)
            }
            menu_change(10)
            $(".name_hide").eq(9).animate({
                left: "100%"
            })
        }
        else if (s_top >= montenegro && s_top < montenegro + margin) {
            increase_year(8)
            increase_area(8)
            increase_popu(8)
            increase_code(8)
            increase_number(8)
            for (let j = 0; j < personal_rate[8].length; j++) {
                active_progress(8, j)
                increase_number(8, j)
            }
            menu_change(9)
            $(".name_hide").eq(8).animate({
                left: "100%"
            })
        }
        else if (s_top >= poland && s_top < poland + margin) {
            increase_year(7)
            increase_area(7)
            increase_popu(7)
            increase_code(7)
            increase_number(7)
            for (let j = 0; j < personal_rate[7].length; j++) {
                active_progress(7, j)
                increase_number(7, j)
            }
            menu_change(8)
            $(".name_hide").eq(7).animate({
                left: "100%"
            })
        }
        else if (s_top >= spain && s_top < spain + margin) {
            increase_year(6)
            increase_area(6)
            increase_popu(6)
            increase_code(6)
            increase_number(6)
            for (let j = 0; j < personal_rate[6].length; j++) {
                active_progress(6, j)
                increase_number(6, j)
            }
            menu_change(7)
            $(".name_hide").eq(6).animate({
                left: "100%"
            })
        }
        else if (s_top >= italy && s_top < italy + margin) {
            increase_year(5)
            increase_area(5)
            increase_popu(5)
            increase_code(5)
            increase_number(5)
            for (let j = 0; j < personal_rate[5].length; j++) {
                active_progress(5, j)
                increase_number(5, j)
            }
            menu_change(6)
            $(".name_hide").eq(5).animate({
                left: "100%"
            })
        }
        else if (s_top >= taiwan && s_top < taiwan + margin) {
            increase_year(4)
            increase_area(4)
            increase_popu(4)
            increase_code(4)
            increase_number(4)
            for (let j = 0; j < personal_rate[4].length; j++) {
                active_progress(4, j)
                increase_number(4, j)
            }
            menu_change(5)
            $(".name_hide").eq(4).animate({
                left: "100%"
            })
        }
        else if (s_top >= vietnam && s_top < vietnam + margin) {
            increase_year(3)
            increase_area(3)
            increase_popu(3)
            increase_code(3)
            increase_number(3)
            for (let j = 0; j < personal_rate[5].length; j++) {
                active_progress(3, j)
                increase_number(3, j)
            }
            menu_change(4)
            $(".name_hide").eq(3).animate({
                left: "100%"
            })
        }
        else if (s_top >= indonesia && s_top < indonesia + margin) {
            increase_year(2)
            increase_area(2)
            increase_popu(2)
            increase_code(2)
            increase_number(2)
            for (let j = 0; j < personal_rate[2].length; j++) {
                active_progress(2, j)
                increase_number(2, j)
            }
            menu_change(3)
            $(".name_hide").eq(2).animate({
                left: "100%"
            })
        }
        else if (s_top >= malaysia && s_top < malaysia + margin) {
            increase_year(1)
            increase_area(1)
            increase_popu(1)
            increase_code(1)
            increase_number(1)
            for (let j = 0; j < personal_rate[1].length; j++) {
                active_progress(1, j)
                increase_number(1, j)
            }
            menu_change(2)
            $(".name_hide").eq(1).animate({
                left: "100%"
            })
        }
        else if (s_top >= phillipines && s_top < phillipines + margin) {
            increase_year(0)
            increase_area(0)
            increase_popu(0)
            increase_code(0)
            increase_number(0)
            for (let j = 0; j < personal_rate[0].length; j++) {
                active_progress(0, j)
                increase_number(0, j)
            }
            menu_change(1)
            $(".name_hide").eq(0).animate({
                left: "100%"
            })
        }
        else if (s_top < phillipines) {
            menu_change(0)
            // $(".name_hide").animate({
            //     left: "0"
            // })
        }

    })

    let menu_set_pos = "fixed";
    let menu_set_left = "0";
    let menu_set_top = "0";
    let menu_set_dir = "column";
    let menu_set_wid = "auto";
    let menu_set_hei = "100vh";
    let menu_set_pad = "0 20px";


    let menu_reset_pos = "static";
    let menu_reset_dir = "row";
    let menu_reset_hei = "auto";
    let menu_reset_pad = "20px 0";

    if (window.innerWidth < 1100) {
        menu_set_pos = "fixed";
        menu_reset_dir = "column";
        menu_set_pad = "0 20px";
        menu_reset_pos = "fixed";
        menu_reset_hei = "100vh";
        menu_reset_pad = "0 20px";
    }

    if (window.innerWidth < 600) {
        menu_set_wid = "100%";
        menu_set_top = "100vh";
    }

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let header = $(".menu").offset().top;
        // console.log(s_top, header)

        if (s_top >= 207.8125) {
            $(".menu").css({
                position: menu_set_pos,
                left: menu_set_left,
                top: menu_set_top,
                flexDirection: menu_set_dir,
                width: menu_set_wid,
                height: menu_set_hei,
                padding: menu_set_pad
            })
        }
        else if (s_top < 207.8125) {
            $(".menu").css({
                position: menu_reset_pos,
                flexDirection: menu_reset_dir,
                height: menu_reset_hei,
                padding: menu_reset_pad,

            })
        }
    })

    $(".menu a").click(function () {
        event.preventDefault();
        let href = $(this).attr('href');
        let pos = $(href).offset().top;
        $("html, body").animate({
            scrollTop: pos
        }, 300)

        $(".menu").animate({
            top: "100vh"
        })
        menu_chk = false;

    })

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
});