const todoForm = document.querySelector('.main__addTodo');
const todoContent = todoForm.querySelector('.addTodo__content');
const todoList = document.querySelector('.todo__list');

let todosArr = [];

function handletoSubmit(e) {
  e.preventDefault();

  const newTodo = todoContent.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todosArr.push(newTodoObj);
  paintItem(createItem(newTodoObj));
  todoContent.value = '';
}

// add
function createItem(content) {
  // li(.todo__item)
  const newTodoItem = document.createElement('li');
  newTodoItem.setAttribute('class', 'todo__item');
  newTodoItem.id = content.id;

  // 체크박스(.todo__checkbox)
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.setAttribute('class', 'todo__checkbox');
  newCheckbox.addEventListener('click', checkTodo);
  //   newCheckbox.addEventListener('click', isChecked);

  // 투두 이름(.todo__content)
  const newContent = document.createElement('p');
  newContent.setAttribute('class', 'todo__content');
  newContent.textContent = content.text;

  // 삭제 버튼(.todo__delete)
  const newDeleteBtn = document.createElement('button');
  newDeleteBtn.setAttribute('class', 'todo__delete');
  newDeleteBtn.innerHTML =
    '<i class="fa-solid fa-circle-minus todo__delete__icon"></i>';
  newDeleteBtn.addEventListener('click', deleteTodo);

  newTodoItem.appendChild(newCheckbox);
  newTodoItem.appendChild(newContent);
  newTodoItem.appendChild(newDeleteBtn);

  return newTodoItem;
}

function paintItem(newItem) {
  todoList.appendChild(newItem);
}

// delete
function deleteTodo(e) {
  const li = e.currentTarget.parentElement;
  li.remove();
  todosArr = todosArr.filter((todo) => todo.id !== parseInt(li.id)); // 수정? 이해?
}

// check
function checkTodo(e) {
  const todoContent = e.target.nextSibling;
  todoContent.classList.toggle('complete');
}

todoForm.addEventListener('submit', handletoSubmit);
