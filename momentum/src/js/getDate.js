import { DATE } from "../common/const";

const dateContainer = document.querySelector('.date');

const getDate = (date, lang = 'en') => {
  const options = {weekday: 'long', month: 'long', day: 'numeric' , timeZone: 'UTC'};
  const currentDate = date.toLocaleDateString(DATE[lang], options);
  dateContainer.textContent = currentDate;
}

export default getDate;
