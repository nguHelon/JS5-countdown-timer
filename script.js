const items = document.querySelectorAll(".format h4");
const countdownDiv = document.querySelector(".countdown");

const recentDate = new Date();
const recentYear = recentDate.getFullYear();
const recentMonth = recentDate.getMonth();
const recentDay = recentDate.getDate();
const recentHour = recentDate.getHours();

const futureDate = new Date(recentYear, recentMonth, recentDay + 10, recentHour, 0);
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const currenDate = new Date();
    const today = currenDate.getTime();
    let time = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(time / oneDay);
    let hours = Math.floor((time % oneDay) / oneHour);
    let minutes = Math.floor((time % oneHour) / oneMinute);
    let seconds = Math.floor((time % oneMinute) / 1000);

    let timeArray = [days, hours, minutes, seconds];

    function format(time) {
        if (time < 10) {
            return time = `0${time}`;
        } else {
            return time;
        }
    }

    if (time < 0) {
        countdownDiv.innerHTML = `<h4>Sorry this time has passed</h4>`
    }

    items.forEach((item, index) => {
        item.innerHTML = format(timeArray[index]);
    });
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();