import { LANGUAGES } from "../common/const";
import { getLocalStorage, setLocalStorage } from "../common/util";
import getQuotes from "./getQuotes";
import { getTime, timer } from "./getTime";
import getWeather from "./getWeather";
import { setSettingsData } from "./settings";

const language = document.querySelector('.language');

const lang = (getLocalStorage('language') && LANGUAGES.includes(getLocalStorage('language'))) ? getLocalStorage('language') : LANGUAGES[1];

const switchLanguage = () => {
  setSettingsData(language.value);
  language.addEventListener('change', () => {
    setLocalStorage('language', language.value)
    clearTimeout(timer);
    getTime(language.value)
    getWeather(language.value);
    getQuotes(language.value);
    setSettingsData(language.value);
  })
};

export { switchLanguage, lang };
