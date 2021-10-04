const formUsername = document.querySelector('.form__set__username ');
const createUsername = formUsername.querySelector('input');
const btnSave = formUsername.querySelector('button');

const editContainer = document.querySelector('.container__edit');
const usernameContainer = document.querySelector('.username');
const usernameText = usernameContainer.querySelector('.username__highlight');
const btnEdit = document.querySelector('.btn__edit');

const formEditUsername = document.querySelector('.form__edit__username');
const editUsername = formEditUsername.querySelector('input');
const btnUpdate = formEditUsername.querySelector('button');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const SUBMIT_LISTENER = 'submit';

const setUsername = function (event) {
  event.preventDefault();

  const usernameValue = createUsername.value;
  usernameText.innerText = `${usernameValue} 😉`;
  localStorage.setItem(USERNAME_KEY, usernameValue);

  formUsername.classList.add(HIDDEN_CLASSNAME);
  usernameContainer.classList.remove(HIDDEN_CLASSNAME);
  btnEdit.classList.remove(HIDDEN_CLASSNAME);
};

const getUsername = localStorage.getItem(USERNAME_KEY);
if (getUsername === null) {
  formUsername.classList.remove(HIDDEN_CLASSNAME);
  formUsername.addEventListener(SUBMIT_LISTENER, setUsername);
} else {
  usernameContainer.classList.remove(HIDDEN_CLASSNAME);
  btnEdit.classList.remove(HIDDEN_CLASSNAME);
  usernameText.innerText = `${getUsername} 😎`;
}

const onEditClick = function () {
  if (editUsername.value === '' || getUsername === null)
    editUsername.value = createUsername.value;

  editUsername.value = usernameText.innerText.slice(0, -3);

  editContainer.classList.add(HIDDEN_CLASSNAME);
  formEditUsername.classList.remove(HIDDEN_CLASSNAME);
};

const handleEditName = function (event) {
  event.preventDefault();

  const editValue = editUsername.value;
  usernameText.innerText = `${editValue} 😎`;
  localStorage.setItem(USERNAME_KEY, editValue);
  formEditUsername.classList.add(HIDDEN_CLASSNAME);
  editContainer.classList.remove(HIDDEN_CLASSNAME);
};

btnEdit.addEventListener('click', onEditClick);
formEditUsername.addEventListener(SUBMIT_LISTENER, handleEditName);
