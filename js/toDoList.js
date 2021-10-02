const formToDo = document.querySelector('.form__todo');
const createToDo = formToDo.querySelector('input');
const btnEnter = formToDo.querySelector('button');
const toDoList = document.querySelector('.todo-list');

const TODO_KEY = 'toDo';
let toDos = [];

const setToDoList = function () {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
};

const removeToDo = function (event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  setToDoList();
};

const printToDo = function (toDo) {
  const toDoItem = document.createElement('li');
  toDoItem.id = toDo.id;
  const task = document.createElement('h4');
  task.innerText = toDo.task;
  const btnDelete = document.createElement('button');
  btnDelete.innerText = 'Delete';
  btnDelete.addEventListener('click', removeToDo);

  toDoList.appendChild(toDoItem);
  toDoItem.appendChild(task);
  toDoItem.appendChild(btnDelete);
};

const createToDoList = function (event) {
  event.preventDefault();

  const toDo = createToDo.value;
  createToDo.value = '';
  const newToDo = { task: toDo, id: Date.now() };
  toDos.push(newToDo);
  printToDo(newToDo);

  setToDoList();
};

formToDo.addEventListener('submit', createToDoList);

const getToDo = JSON.parse(localStorage.getItem(TODO_KEY));
if (getToDo !== null) {
  toDos = getToDo;
  toDos.forEach(item => printToDo(item));
}
