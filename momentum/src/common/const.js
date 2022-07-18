const GREETING = {
  'en': ['Good night,', 'Good morning,', 'Good afternoon,', 'Good evening,'],
  'ru': ['Доброй ночи,', 'Доброе утро,', 'Добрый день,', 'Добрый вечер,']
};

const PLACEHOLDER = {
  'ru': {
    'name':'[Укажите имя]',
    'city': '[Укажите город]'
  },
  'en': {
    'name': '[Enter name]',
    'city': '[Enter city]'
  },
};

const TIMES_OF_DAY = ['night', 'morning', 'afternoon', 'evening'];

const WEATHER = {
  'en': {
    'lang': 'en',
    'wind': 'Wind speed',
    'wind_units': 'm/s',
    'humidity': 'Humidity',
    'err': 'Data loading error. Enter the city again',
    'city': 'Minsk',
  },
  'ru': {
    'lang': 'ru',
    'wind': 'Скорость ветра',
    'wind_units': 'м/с',
    'humidity': 'Влажность',
    'err': 'Ошибка загрузки данных. Введите город еще раз',
    'city': 'Минск'
  },
};

const DATE = {
  'ru': 'ru-RU',
  'en': 'en-US'
};

const QUOTES = {
  'ru': 'quotes/dataRu.json',
  'en': 'quotes/dataEn.json'
}

const API_WEATHER = 'd25b5175e0bf7e9b83814d35136d4a7a';
const API_UNSPLASH = 'jzRAJmb2sI2UxKZFG2cgpbd492IhZYfejwBf82okOww';
const API_FLICKR = '898d23fc4caa1c0f3b5d6324c75676aa';

const LANGUAGES = [
  'ru',
  'en',
];

const PLAYLIST = [
  {
      img : 'assets/imgSound/stay.png',
      name : 'Stay',
      artist : 'The Kid LAROI, Justin Bieber',
      music : 'assets/sounds/stay.mp3'
  },
  {
      img : 'assets/imgSound/fallingdown.jpg',
      name : 'Falling Down',
      artist : 'Wid Cards',
      music : 'assets/sounds/fallingdown.mp3'
  },
  {
      img : 'assets/imgSound/faded.png',
      name : 'Faded',
      artist : 'Alan Walker',
      music : 'assets/sounds/Faded.mp3'
  },
  {
      img : 'assets/imgSound/ratherbe.jpg',
      name : 'Rather Be',
      artist : 'Clean Bandit',
      music : 'assets/sounds/Rather Be.mp3'
  }
];

const SETTINGS = {
  'ru': {
    'choose-lang': 'Выбрать язык',
    'russian': 'русский',
    'english': 'английский',
    'choose-photo': 'Выбрать источник фона',
    'choose-theme': 'Выбрать тему фона',
    'text-show"': 'Показать',
    'elements-date': 'дата',
    'elements-time': 'время',
    'elements-weather': 'погода',
    'elements-greeting': 'приветствие',
    'elements-quotes': 'цитаты',
    'elements-audio': 'плеер',
    'elements-todo': 'список дел',
  },
  'en': {
    'choose-lang': 'Choose language',
    'russian': 'russian',
    'english': 'english',
    'choose-photo': 'Choose Photo Source',
    'choose-theme': 'Choose Background Theme',
    'text-show"': 'Show',
    'elements-date': 'date',
    'elements-time': 'time',
    'elements-weather': 'weather',
    'elements-greeting': 'greeting',
    'elements-quotes': 'quotes',
    'elements-audio': 'audio',
    'elements-todo': 'todo',
  }
};

export {
  GREETING,
  PLACEHOLDER,
  TIMES_OF_DAY,
  WEATHER, DATE,
  LANGUAGES,
  API_WEATHER,
  API_UNSPLASH,
  API_FLICKR,
  QUOTES,
  PLAYLIST,
  SETTINGS
};
