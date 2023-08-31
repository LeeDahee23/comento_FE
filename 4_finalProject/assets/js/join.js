'use strict';

const userArr = [];

let isAvailable = false;
let isCheckedDup = false;
const joinBtn = document.querySelector('.footer__submit');
const joinForm = document.querySelector('.form-join');
const dupButton = document.querySelector('.btn-check-id');
const pw_input = document.querySelector('.password__input');

// 전체 함수
function validation(e) {
  e.preventDefault();

  const allEnterCheck = isEnteredAll();
  const duplicateCheck = isDuplicate();
  const passwordCheck = isValidPassword();

  const id_value = document.querySelector('.id__input').value;
  const pw_value = document.querySelector('.password__input').value;
  const phone_value = document.querySelector('.phone__input').value;

  console.log(allEnterCheck, isCheckedDup, duplicateCheck, passwordCheck);
  if (!allEnterCheck) {
    alert('필수 항목을 모두 입력해주세요.');
  } else if (!isCheckedDup || duplicateCheck) {
    alert('아이디 중복검사는 반드시 진행해야 합니다.');
  } else if (
    allEnterCheck &&
    isCheckedDup &&
    !duplicateCheck &&
    passwordCheck
  ) {
    addUser(id_value, pw_value, phone_value);
    console.log(userArr);
    alert('회원가입 완료');
  }
}

function addUser(id, pw, phone) {
  userArr.push({ id, pw, phone });
}

// 중복 검사(id) => 완성
function isDuplicate() {
  const id_input = document.querySelector('.id__input');
  const id_value = document.querySelector('.id__input').value;
  const id_des = document.querySelector('.id__validation-description');
  let isDup = false;

  if (isNull(id_value)) {
    id_des.textContent = '아이디를 입력하세요';
    // id_des.style.color = '#d34141';
    id_des.classList.remove('possible');
    id_des.classList.add('impossible');
  } else {
    userArr.forEach((user) => {
      if (user.id === id_value) {
        isDup = true;
      }
    });

    if (!isDup) {
      isCheckedDup = true;
      id_input.setAttribute('disabled', true);
      dupButton.setAttribute('disabled', true);
      id_input.classList.add('disabled');
      dupButton.classList.add('disabled');
    }

    return isDup;
  }
}

function paintDuplicateCheck(check) {
  const id_des = document.querySelector('.id__validation-description');
  console.log(check);
  if (check) {
    id_des.textContent = '이미 사용중인 아이디입니다.';
    // id_des.style.color = '#d34141';
    id_des.classList.remove('possible');
    id_des.classList.add('impossible');
  } else {
    id_des.textContent = '사용 가능한 아이디입니다.';
    // id_des.style.color = '#1baa1b';
    id_des.classList.remove('impossible');
    id_des.classList.add('possible');
  }
}

// 필수 입력 검사 => 완성
function isEnteredAll() {
  const id = document.querySelector('.id__input').value;
  const password = document.querySelector('.password__input').value;
  const phone = document.querySelector('.phone__input').value;

  if (isNull(id) || isNull(password) || isNull(phone)) {
    // console.log(false);
    return false;
  } else {
    // console.log(true);
    return true;
  }
}
function isNull(str) {
  if (str.length <= 0) {
    return true;
  } else return false;
}

// 유효성 검사(password, 영문, 숫자, 특수문자의 조합으로 8자리 이상)
function isValidPassword() {
  const password = document.querySelector('.password__input').value;
  const passwordRule = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  let validPasswordResult = true;

  if (isNull(password)) {
    validPasswordResult = false;
  }

  if (!passwordRule.test(password)) {
    validPasswordResult = false;
  }
  // console.log(validPasswordResult);
  return validPasswordResult;
}

function paintPasswordCheck(check) {
  const password_des = document.querySelector(
    '.password__validation-description'
  );

  if (!check) {
    password_des.textContent = '8~16자 영문, 숫자, 특수문자를 사용하세요.';
    // password_des.style.color = '#d34141';
    password_des.classList.remove('possible');
    password_des.classList.add('impossible');
  } else {
    password_des.textContent = '';
  }
}

// 유효성 검사(phone)

joinForm.addEventListener('submit', validation);
dupButton.addEventListener('click', () => {
  const isDup = isDuplicate();
  paintDuplicateCheck(isDup);
});
joinBtn.addEventListener('click', () => {
  const isValidPW = isValidPassword();
  paintPasswordCheck(isValidPW);
});
