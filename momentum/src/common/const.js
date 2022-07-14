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
    'city': 'Saint-Petersburg',
  },
  'ru': {
    'lang': 'ru',
    'wind': 'Скорость ветра',
    'wind_units': 'м/с',
    'humidity': 'Влажность',
    'err': 'Ошибка загрузки данных. Введите город еще раз',
    'city': 'Санкт-Петербург'
  },
};

const DATE = {
  'ru': 'ru-RU',
  'en': 'en-US'
};

const DEFAULT_CITY = {
  'ru': 'Санкт-Петербург',
  'en': 'St. Petersburg'
};

const QUOTES = {
  'ru': 'quotes/dataRu.json',
  'en': 'quotes/dataEn.json'
}

const API_WEATHER = 'd25b5175e0bf7e9b83814d35136d4a7a';

const LANGUAGES = [
  'ru',
  'en',
];

export { GREETING, PLACEHOLDER, TIMES_OF_DAY, WEATHER, DATE, LANGUAGES, DEFAULT_CITY, API_WEATHER, QUOTES };
