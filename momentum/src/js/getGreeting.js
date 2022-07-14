import { getLocalStorage, getTimeOfDay, setLocalStorage } from "../common/util";
import { GREETING, PLACEHOLDER } from "../common/const";

const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');


const getGreeting = (date) => {
  greeting.textContent = GREETING.en[getTimeOfDay(date)];
  name.setAttribute('placeholder', PLACEHOLDER.en.name);
  name.addEventListener('change', (event) => {
    setLocalStorage('name', event.target.value)
  });
}

const getNameFromLocalStorage = () => name.value = getLocalStorage('name')
window.addEventListener('load', getNameFromLocalStorage);

export default getGreeting;
