// battery
let battery = 100;
function setBattery() {
  const battery_value = document.querySelector('.battery__value');
  const clock_container = document.querySelector('.clock__container');

  if (battery > 0) {
    battery--;
    battery_value.innerText = battery;
  } else {
    clearInterval(clock_interval);
    clock_container.style.backgroundColor = 'rgb(0, 0, 0)';
    clock_container.style.color = 'rgb(0, 0, 0)';
  }
}

// clock
function setClock() {
  const today = new Date();
  const todayFormat = timeFormat(today);

  const clock_container = document.querySelector('.clock__container');
  clock_container.innerText =
    todayFormat[0] + ' : ' + todayFormat[1] + ' : ' + todayFormat[2];
}

function timeFormat(date) {
  const hourFormat =
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minuteFormat =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const secondFormat =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return [hourFormat, minuteFormat, secondFormat];
}

const clock_interval = setInterval(setClock, 1000);
setInterval(setBattery, 1000);
