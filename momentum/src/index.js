import './scss/style.scss';
import { getTime } from './js/getTime';
import { setBg } from './js/sliderImage';
import getWeather from './js/getWeather';
import getQuotes from './js/getQuotes';
import { loadTrack, trackIndex } from './js/audio';
import { openCloseSettings, showHideElements, setSettingsData } from './js/settings';
import { switchLanguage, lang } from './js/switchLang';

switchLanguage();
window.addEventListener('load', () => setSettingsData(lang));
getTime(lang);
setBg();
getWeather(lang);
getQuotes(lang);
loadTrack(trackIndex);
openCloseSettings();
showHideElements();
