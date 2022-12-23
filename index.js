$(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right'
    });
})


$(document).ready(function () {
    let time_sec = document.getElementsByClassName("time")
    setInterval(dpTime, 1000);
    function dpTime() {
        var now = new Date();
        hours = now.getHours();
        minutes = now.getMinutes();
        seconds = now.getSeconds();
        let time_diffrence = [3]
        for (let i = 0; i < time_diffrence.length; i++) {
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
});