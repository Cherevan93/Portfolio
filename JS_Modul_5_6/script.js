var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var split = document.getElementById('split');
var clock = document.getElementById('clock');
var splitArea = document.getElementById('splitArea');
var h=0,m=0,s=0,ms=0,timerID;

function startClock() {
    start.classList.add('invisible');
    stop.classList.remove('invisible');
    function counterClock() {
        ms++;
        if (ms == 100){
            ms=0;
            s++;
        }
        if (s == 60){
            s=0;
            m++;
        }
        if (m == 60){
            m=0;
            h++;
        }
        if (h == 24){
            h=0;
        }
        clock.innerHTML = h+':'+m+':'+s+':'+ms;
    }

    timerID = setInterval(counterClock,10);
}
function stopClock() {
    start.classList.remove('invisible');
    stop.classList.add('invisible');
    clearInterval(timerID);
}
function resetClock() {
    start.classList.remove('invisible');
    stop.classList.add('invisible');
    h=m=s=ms=0;
    clock.innerHTML = h+':'+m+':'+s+':'+ms;
    clearInterval(timerID);
    splitArea.innerHTML = '';
}
function splitClock() {
    var splitList = document.createElement('p');
    splitList.innerHTML = h+':'+m+':'+s+':'+ms;
    splitArea.appendChild(splitList);
}

start.addEventListener('click',startClock);
stop.addEventListener('click',stopClock);
reset.addEventListener('click',resetClock);
split.addEventListener('click',splitClock);