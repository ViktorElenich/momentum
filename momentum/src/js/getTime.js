import getDate from './getDate';
import getGreeting from './getGreeting';

const time = document.querySelector('.time');
// eslint-disable-next-line import/no-mutable-exports
let timer;

const getTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  getDate(date);
  getGreeting(date);
  timer = setTimeout(getTime, 1000);
}

export { getTime, timer };
