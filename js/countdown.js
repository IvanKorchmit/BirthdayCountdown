const button = document.querySelector('.btn');

let currentDate = new Date();
currentDate.setTime(Date.now());
let birthDay = new Date();
birthDay.setTime(1606514400000);
const passed = `
<div class="background"></div>
    <div class="container">
        <div class="timer">
            <h2>It seems you're late</h2>
        </div>
        <div class="wishes">
            <a href="passed.html" class="link">Go to this link</a>
        </div>
    </div>`
let timer = document.querySelector('.clock');
function calculateBirthday() {
    currentDate.setTime(Date.now());
    console.log('called function');
    let div_days = ``;
    let div_hours = '';
    let div_minutes = '';
    let div_seconds = '';
    let diffSeconds = Math.floor((birthDay.getTime() - currentDate.getTime()) / 1000);
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (currentDate.getTime() < birthDay.getTime()) {
        // Birthday hasn't passed yet.
        // #region Calculating
        console.log('got inside');
        days = Math.floor(diffSeconds / (3600 * 24));
        diffSeconds -= days * 3600 * 24;
        hours = Math.floor(diffSeconds / 3600);
        diffSeconds -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds -= minutes * 60;
        seconds = diffSeconds;
        //#endregion
        div_days = `<div class="days">${days} Days</div>`;
        div_hours = `<div class="hours">${hours} Hours</div>`;
        div_minutes = `<div class="minutes">${minutes} Minutes</div>`;
        div_seconds = `<div class="seconds">${seconds} Seconds</div>`;
        timer.innerHTML = div_days + div_hours + div_minutes + div_seconds;
    }
    else {
        document.body.innerHTML = passed;
    }
}
button.addEventListener('click', (event) => {
    calculateBirthday();
    console.log('clicked');
    event.preventDefault();
});
calculateBirthday();
setInterval(function () { calculateBirthday() }, 1000);