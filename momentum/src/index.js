import './scss/style.scss';
import { getTime } from './js/getTime';
import { setBg } from './js/sliderImage';
import getWeather from './js/getWeather';
import getQuotes from './js/getQuotes';
import { loadTrack, trackIndex } from './js/audio';

getTime();
setBg();
getWeather();
getQuotes();
loadTrack(trackIndex);
