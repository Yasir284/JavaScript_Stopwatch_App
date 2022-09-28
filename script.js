let counter = document.querySelector(".counter");
let [miliSec, sec, min, hour] = [0, 0, 0, 0];
let int = null;

function start() {
  if (int !== null) {
    clearInterval(int);
  }

  int = setInterval(getCountDown, 10);
}

function stop() {
  clearInterval(int);
}
function reset() {
  clearInterval(int);
  [miliSec, sec, min, hour] = [0, 0, 0, 0];
  counter.textContent = "00 : 00 : 00 : 000";
}

function getCountDown() {
  miliSec += 10;

  if (miliSec == 1000) {
    miliSec = 0;
    sec++;
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hour++;
  }

  let h = hour < 10 ? "0" + hour : hour;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let ms =
    miliSec < 10 ? "00" + miliSec : miliSec < 100 ? "0" + miliSec : miliSec;
  counter.textContent = `${h} : ${m} : ${s} : ${ms}`;
}
