import { API_WEATHER, PLACEHOLDER, WEATHER } from "../common/const";
import { getLocalStorage, setLocalStorage } from "../common/util";


const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const cityName = document.querySelector('.city');
// const weatherError = document.querySelector('.weather-error');

async function getWeather(lang = 'en', city = 'Minsk'){
  cityName.setAttribute('placeholder', PLACEHOLDER.en.city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${API_WEATHER}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${WEATHER[lang].wind}: ${Math.round(data.wind.speed)} ${WEATHER[lang].wind_units}`;
      humidity.textContent = `${WEATHER[lang].humidity}: ${data.main.humidity}%`;
    })
    .catch(() => {
      temperature.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
      weatherDescription.textContent = WEATHER[lang].err;
    })
};

window.addEventListener('beforeunload', () => setLocalStorage('city', cityName));

window.addEventListener('load', () => getLocalStorage('city'));

cityName.addEventListener('change', (event) => {
  getWeather('en', event.target.value);
});

/* const changeCity = (lang) => {
  city.value = WEATHER[lang]['city'];
}

changeCity(language); */

export default getWeather;
