const currentInfo = document.querySelector('.current-info');
const usernameText = usernameContainer.querySelector('.username__highlight');
const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const label = document.querySelector('label');

const IMG_TOTAL = 4;
const GREEN_COLOR = '#01b257';
const BROWN_COLOR = '#855f54';
const YELLOW_COLOR = '#fedd47';
const ORANGE_COLOR = '#ffc456';

const randomNumber = Math.floor(Math.random() * IMG_TOTAL);
if (randomNumber === 0) {
  currentInfo.style.backgroundColor = GREEN_COLOR;
  usernameText.style.color = GREEN_COLOR;
  buttons.forEach(btn => (btn.style.borderColor = GREEN_COLOR));
  inputs.forEach(input => (input.style.borderColor = GREEN_COLOR));
  label.style.backgroundColor = GREEN_COLOR;
}
if (randomNumber === 1) {
  currentInfo.style.backgroundColor = BROWN_COLOR;
  usernameText.style.color = BROWN_COLOR;
  buttons.forEach(btn => (btn.style.borderColor = BROWN_COLOR));
  inputs.forEach(input => (input.style.borderColor = BROWN_COLOR));
  label.style.backgroundColor = BROWN_COLOR;
}
if (randomNumber === 2) {
  currentInfo.style.backgroundColor = YELLOW_COLOR;
  usernameText.style.color = YELLOW_COLOR;
  buttons.forEach(btn => (btn.style.borderColor = YELLOW_COLOR));
  inputs.forEach(input => (input.style.borderColor = YELLOW_COLOR));
  label.style.backgroundColor = YELLOW_COLOR;
}
if (randomNumber === 3) {
  currentInfo.style.backgroundColor = ORANGE_COLOR;
  usernameText.style.color = ORANGE_COLOR;
  buttons.forEach(btn => (btn.style.borderColor = ORANGE_COLOR));
  inputs.forEach(input => (input.style.borderColor = ORANGE_COLOR));
  label.style.backgroundColor = ORANGE_COLOR;
}

const pics = document.querySelector('.left-side');
pics.style.backgroundImage = `url(images/${randomNumber}.jpeg)`;
