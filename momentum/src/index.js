import './scss/style.scss';
import './js/todoList';
import { getTime } from './js/getTime';
import { setBg } from './js/sliderImage';
import getWeather from './js/getWeather';
import getQuotes from './js/getQuotes';
import { loadTrack, trackIndex } from './js/audio';
import { openCloseSettings, showHideElements, setSettingsData, openCloseTodo } from './js/settings';
import { switchLanguage, lang } from './js/switchLang';

switchLanguage();
window.addEventListener('load', () => setSettingsData(lang));
getTime(lang);
setBg();
getWeather(lang);
getQuotes(lang);
loadTrack(trackIndex);
openCloseSettings();
openCloseTodo();
showHideElements();

console.log('Самооценка: \n1. Часы и календарь +15\n2. Приветствие +10\n3. Смена фонового изображения +20\n4. Виджет погоды +15\n5. Виджет цитата дня +10\n6. Продвинутый аудиоплеер (реализуется без использования библиотек) +20\n7. Перевод приложения на два языка (en/ru или en/be) +15\n8. Получение фонового изображения от API +10\n9. Настройки приложения +20\n10. Дополнительный функционал на выбор +10 (todo list)\nОбщая оценка: 150 / 150')
