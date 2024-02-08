var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("second");
var session = document.getElementById("ampm")

function updateTime() {
    var date = new Date();

    h.innerHTML = date.getHours();
    m.innerHTML = date.getMinutes();
    s.innerHTML = date.getSeconds();

    if (h.innerHTML >= 12) {
        //h.innerHTML = h.innerHTML - 12;
        session.innerHTML = "PM";
    }

    if (m.innerHTML < 10) {
        m.innerHTML = "0" + m.innerHTML;
    }

    if (s.innerHTML < 10) {
        s.innerHTML = "0" + s.innerHTML;
    }

}

setInterval(updateTime, 1000);
