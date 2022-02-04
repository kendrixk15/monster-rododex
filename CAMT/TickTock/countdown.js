const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('seconds');

const newYears = '25 dec 2021';

function countdown() {
    const newyearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newyearDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds % 60);

    const mins = Math.floor(totalSeconds / 60) % 60;

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const days = Math.floor(totalSeconds / 3600 / 24);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);

//var ds = d.toString('MM/dd/yy HH:mm:ss');
/*const d = new Date();
document.getElementById('days').innerHTML = d.getFullYear();*/