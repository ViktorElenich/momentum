import getDate from './getDate';
import getGreeting from './getGreeting';

const time = document.querySelector('.time');

let timer;

const getTime = (lang) => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  getDate(date, lang);
  getGreeting(date, lang);
  timer = setTimeout(() => getTime(lang), 1000);
}

export { getTime, timer };
