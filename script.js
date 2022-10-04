const items = document.querySelectorAll(".format h4");
const countdownDiv = document.querySelector(".countdown");

// get the date on page load by any device
const recentDate = new Date();
const recentYear = recentDate.getFullYear();
const recentMonth = recentDate.getMonth();
const recentDay = recentDate.getDate();
const recentHour = recentDate.getHours();

// this a date that wont ever stop, b/c 10 days is added in the date in question.
const futureDate = new Date(recentYear, recentMonth, recentDay + 10, recentHour, 0);
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const currenDate = new Date();
    // get the time in miliseconds from current time to deadline 
    const today = currenDate.getTime();
    let time = futureTime - today;

    // to get the days, hours, minutes in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate the amout of days in that time space
    let days = Math.floor(time / oneDay);

    // ** get the remaining hours in one specific day.
    let hours = Math.floor((time % oneDay) / oneHour);

    // ** get the remaining minues in one specific hour.
    let minutes = Math.floor((time % oneHour) / oneMinute);

    // ** get the remaining seconds in one specific minute.
    let seconds = Math.floor((time % oneMinute) / 1000);

    // using an array to store the days, hours, mins and secs because it has the same amount an index with the item nodelist above.
    let timeArray = [days, hours, minutes, seconds];

    // adding a "0" if the time variable has 1 digit;
    function format(time) {
        if (time < 10) {
            return time = `0${time}`;
        } else {
            return time;
        }
    };

    if (time < 0) {
        countdownDiv.innerHTML = `<h4>Sorry this time has expired</h4>`;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(timeArray[index]);
    });
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();