import { API_WEATHER, WEATHER } from "../common/const";
import { getLocalStorage, setLocalStorage } from "../common/util";
import { lang } from "./switchLang";


const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const cityName = document.querySelector('.city');
// const weatherError = document.querySelector('.weather-error');

async function getWeather(language, city = 'Minsk'){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=${API_WEATHER}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${WEATHER[language].wind}: ${Math.round(data.wind.speed)} ${WEATHER[language].wind_units}`;
      humidity.textContent = `${WEATHER[language].humidity}: ${data.main.humidity}%`;
    })
    .catch(() => {
      temperature.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
      weatherDescription.textContent = WEATHER[language].err;
    })
};

window.addEventListener('beforeunload', () => setLocalStorage('city', cityName.value));

window.addEventListener('load', () => getLocalStorage('city'));

cityName.addEventListener('change', (event) => {
  getWeather(lang, event.target.value);
});

export default getWeather;
