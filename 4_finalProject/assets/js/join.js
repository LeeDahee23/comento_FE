'use strict';

const userArr = [
  {
    id: 'abc',
    password: '123546',
  },
  {
    id: 'bca',
    password: '123456a',
  },
];

const joinBtn = document.querySelector('.footer__submit');
const joinForm = document.querySelector('.form-join');
const dupButton = document.querySelector('.btn-check-id');

// 중복 검사(id)

// 필수 입력 검사
function isEnteredAll() {
  const id = document.querySelector('.id__input').value;
  const password = document.querySelector('.password__input').value;
  const phone = document.querySelector('.phone__input').value;

  if (isNull(id) || isNull(password) || isNull(phone)) {
    console.log(false);
    // return false;
  } else {
    console.log(true);
    // return true;
  }
}
function isNull(str) {
  if (str.length === 0) {
    return true;
  } else return false;
}

function canJoin(e) {
  e.preventDefault();

  const check = isEnteredAll();
  if (check) {
    alert('회원가입 완료');
  } else {
    alert('필수 항목을 모두 입력해주세요.');
  }
}

joinForm.addEventListener('submit', canJoin);

// 유효성 검사(password)

// 유효성 검사(phone)
