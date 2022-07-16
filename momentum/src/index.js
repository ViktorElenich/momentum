import './scss/style.scss';
import { getTime } from './js/getTime';
import { setBg } from './js/sliderImage';
import getWeather from './js/getWeather';
import getQuotes from './js/getQuotes';
import { loadTrack, trackIndex } from './js/audio';
import { openCloseSettings, showHideElements, setSettingsData } from './js/settings';

getTime();
setBg();
getWeather();
getQuotes();
loadTrack(trackIndex);
openCloseSettings();
showHideElements();
window.addEventListener('load', setSettingsData)
