// Add alarm
const alarm_add_button = document.querySelector('.alarm__add-button');
let arr_alarm = [];
alarm_add_button.addEventListener('click', add_alarm);

function add_alarm() {
  const alarm_hour = document.querySelector('.alarm__add-hour').value;
  const alarm_minute = document.querySelector('.alarm__add-minute').value;
  const alarm_second = document.querySelector('.alarm__add-second').value;
  const alarm_list = document.querySelector('.alarm__list');

  if (
    alarm_hour.length === 0 ||
    alarm_minute.length === 0 ||
    alarm_second.length === 0
  ) {
    alert('시/분/초 를 모두 입력해야 합니다.');
  } else if (isNaN(alarm_hour) || isNaN(alarm_minute) || isNaN(alarm_second)) {
    alert('숫자를 입력해야 합니다.');
  } else if (!alarmRange(alarm_hour, alarm_minute, alarm_second)) {
    alert('입력이 범위를 벗어났습니다.(0:0:0 ~ 23:59:59)');
  } else {
    if (alarm_list.childElementCount >= 3) {
      alert('알람은 최대 3개까지 추가할 수 있습니다.');
    } else {
      arr_alarm.push([alarm_hour, alarm_minute, alarm_second]);

      const alarm_item = document.createElement('li');
      alarm_item.setAttribute('class', 'alarm__item');
      const alarm_format = alarmFormat(alarm_hour, alarm_minute, alarm_second);
      const alarm_item_time =
        alarm_format[0] + ' : ' + alarm_format[1] + ' : ' + alarm_format[2];
      const delete_button = document.createElement('button');
      delete_button.setAttribute('class', 'alarm__delete-button');
      delete_button.innerHTML = "<i class='fa-solid fa-x'></i>";
      alarm_item.innerText = alarm_item_time;
      alarm_item.appendChild(delete_button);
      alarm_list.appendChild(alarm_item);

      delete_button.addEventListener('click', delete_alarm);
    }
  }
}

// 시/분/초 숫자 범위 정하기(0<=시<=24, 0<=분<=59, 0<=초<=59)
function alarmRange(hour, minute, second) {
  if (
    0 <= hour &&
    hour <= 23 &&
    0 <= minute &&
    minute <= 59 &&
    0 <= second &&
    second <= 59
  ) {
    return true;
  } else return false;
}
function alarmFormat(hour, minute, second) {
  const hourFormat = hour < 10 ? '0' + hour : hour;
  const minuteFormat = minute < 10 ? '0' + minute : minute;
  const secondFormat = second < 10 ? '0' + second : second;

  return [hourFormat, minuteFormat, secondFormat];
}

// delete alarm
function delete_alarm(event) {
  const delete_item = event.currentTarget.parentElement;
  delete_item.remove();
}
