import getTimeOfDay from "../common/util";
import { GREETING, PLACEHOLDER } from "../common/const";

const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const city = document.querySelector('.city');


const getGreeting = (date) => {
  greeting.textContent = GREETING.en[getTimeOfDay(date)];
  name.setAttribute('placeholder', PLACEHOLDER.en.name);
  city.setAttribute('placeholder', PLACEHOLDER.en.city);
}

export default getGreeting;
