var time = 0;
var sec = 0;
var min = 0;
var hour = 0;
var day = 0;
var disp = "";

var timedet = function () {
    day = Math.floor(time / 86400);
    hour = Math.floor((time - (day * 86400)) / 3600);
    min = Math.floor((time - (day * 86400) - (hour * 3600)) / 60);
    sec = time - (day * 86400) - (hour * 3600) - (min * 60);

    zero = "0";

    if (day < 10)
        day = zero.concat(day.toString());
    if (hour < 10)
        hour = zero.concat(hour.toString());
    if (min < 10)
        min = zero.concat(min.toString());
    if (sec < 10)
        sec = zero.concat(sec.toString());

    disp = (day + ":" + hour + ":" + min + ":" + sec);

    console.log(disp);

    document.getElementById("MyClockDisplay").innerText = disp;
    document.getElementById("MyClockDisplay").textContent = disp;
}