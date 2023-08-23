// Add alarm
const alarm_add_button = document.querySelector('.alarm__add-button');
let cnt_alarm = 0;
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
    alert('숫자를 입력해야 합니다!');
  } else {
    if (cnt_alarm >= 3) {
      alert('알람은 최대 3개까지 추가할 수 있습니다.');
    } else {
      cnt_alarm++;

      const alarm_item = document.createElement('li');
      alarm_item.setAttribute('class', 'alarm__item');

      const alarm_item_time =
        alarm_hour + '시 ' + alarm_minute + '분 ' + alarm_second + '초';
      const delete_button = document.createElement('button');
      delete_button.setAttribute('class', 'alarm__delete-button');
      delete_button.innerHTML = "<i class='fa-solid fa-x'></i>";

      alarm_item.innerText = alarm_item_time;
      alarm_item.appendChild(delete_button);

      alarm_list.appendChild(alarm_item);
    }
  }
}

// delete alarm
