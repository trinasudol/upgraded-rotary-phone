var minutes = 17;
var seconds = 20;
var set = 1;
var timer;
var secondsPassed = 0;

var clock = document.getElementById("clock");
var start = document.getElementById("start");

start.addEventListener("click", startTimer);
clock.addEventListener("click", pauseTimer);

function startTimer() {
    start.style.display = "none";
    clock.style.display = "block";
    timer = setInterval(tick, 1000);
}

function pauseTimer() {
    currentTime = minutes + ":";
    if (seconds<10) {
        currentTime = currentTime + "0";
    }
    currentTime = currentTime + seconds;
    document.getElementById("start-time-left").innerHTML = currentTime;
    clock.style.display = "none";
    start.style.display = "block";
    clearInterval(timer);
}

function tick() {
    seconds = seconds - 1;
    secondsPassed = secondsPassed + 1;
    if (seconds<0) {
        seconds = 59;
        minutes = minutes - 1;
        if (minutes<0) {
            clearInterval(timer);
        }
    }
    highlightInterval();
    currentTime = minutes + ":";
    if (seconds<10) {
        currentTime = currentTime + "0";
    }
    currentTime = currentTime + seconds;
    document.getElementById("go-time-left").innerHTML = currentTime;
}

function highlightInterval() {
    var interval = secondsPassed%260;
    console.log(minutes + ":" + seconds + " " + interval);
    if (interval==241) {
        document.getElementById("i241").style.color = "rgb(64, 64, 64)";
    }
    else if (interval%30==20) {
        navigator.vibrate(1000);
        document.getElementById("i" + (interval-19)).style.color = "rgb(200, 201, 170)";
        document.getElementById("i" + (interval-19)).style.backgroundColor = "rgb(200, 201, 170)";
    }
    else if (interval%30==21) {
        document.getElementById("i" + (interval)).style.color = "rgb(64, 64, 64)";
    }
    else if (interval%30==0) {
        navigator.vibrate(1000);
        document.getElementById("i" + (interval-9)).style.color = "rgb(253, 157, 154)";
        document.getElementById("i" + (interval-9)).style.backgroundColor = "rgb(253, 157, 154)";
    }
    else if (interval%30==1) {
        document.getElementById("i" + (interval)).style.color = "rgb(64, 64, 64)";
    }
}