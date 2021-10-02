const clock = document.querySelector('.clock');
const hoursElement = clock.querySelector('.hours');
const minutesElement = clock.querySelector('.minutes');
const CALC_MINUTE = 1000 * 60;

const currentTime = function () {
  const present = new Date();
  const hours = String(present.getHours()).padStart(2, '0');
  const minutes = String(present.getMinutes()).padStart(2, '0');
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
};
currentTime();
setInterval(currentTime, CALC_MINUTE);
