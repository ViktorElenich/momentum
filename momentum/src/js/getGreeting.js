import { getLocalStorage, getTimeOfDay, setLocalStorage } from "../common/util";
import { GREETING, PLACEHOLDER } from "../common/const";

const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const cityName = document.querySelector('.city');


const getGreeting = (date, lang) => {
  greeting.textContent = GREETING[lang][getTimeOfDay(date)];
  name.setAttribute('placeholder', PLACEHOLDER[lang].name);
  cityName.setAttribute('placeholder', PLACEHOLDER[lang].city);
  name.addEventListener('change', (event) => {
    setLocalStorage('name', event.target.value);
  });
}

const getNameFromLocalStorage = () => name.value = getLocalStorage('name');
window.addEventListener('load', getNameFromLocalStorage);

export default getGreeting;
