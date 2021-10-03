const IMG_TOTAL = 4;
const ATTR_LOADING = 'lazy';
const ATTR_DECODING = 'async';

const randomNumber = Math.floor(Math.random() * IMG_TOTAL);

const pics = document.querySelector('.pictures');
const colPic = document.createElement('img');
colPic.src = `images/${randomNumber}.jpeg`;
colPic.loading = ATTR_LOADING;
colPic.decoding = ATTR_DECODING;

pics.appendChild(colPic);
