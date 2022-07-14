import { QUOTES } from "../common/const";
import { getRandomNum } from "./sliderImage";

const button = document.querySelector('.change-quote');
const quotes = document.querySelector('.quote');
const author = document.querySelector('.author');

const getQuotes = async (lang = 'en') => {
  const res = await fetch(QUOTES[lang]);
  const data = await res.json();
  const index = getRandomNum(0, data.length - 1);
  quotes.textContent = data[index].text;
  author.textContent = data[index].author;
};

let changeDeg = 0;

const animateBtnQuotes = () => {
  changeDeg += 180;
  button.style.transform = `rotate(${changeDeg}deg)`;
  button.style.transition = '0.6s';
  getQuotes();
}

button.addEventListener('click', animateBtnQuotes);

export default getQuotes;
