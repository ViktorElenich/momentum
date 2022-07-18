import { SETTINGS } from "../common/const";
import { setLocalStorage } from "../common/util";

const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings__btn');
const todoBtn = document.querySelector('.todo__btn');
const todoContainer = document.querySelector('.todo__container');
const elementsList = document.querySelectorAll('.item input');
const elementsListText = document.querySelectorAll('.item label');
const textChooseLang = document.querySelector('.choose-lang');
const textChoosePhoto = document.querySelector('.choose-photo');
const textChooseTheme = document.querySelector('.choose-theme');
const textShow = document.querySelector('.text-show');
const ruLang = document.querySelector('option[value="ru"]');
const enLang = document.querySelector('option[value="en"]');
const switchPhotoSource = document.querySelector('.photo');
const themeBackgroundContainer = document.querySelector('.theme__background');

let isOpen = false;
let changeDeg = 0;

const openCloseSettings = () => {
  settingsBtn.addEventListener('click', () => {
    changeDeg += 180;
    settingsBtn.style.transform = `rotate(${changeDeg}deg)`;
    settingsBtn.style.transition = '0.6s';
    if (isOpen === false) {
      isOpen = true;
      settings.style.transform = `translateX(0)`;
    } else if (isOpen === true) {
      isOpen = false;
      settings.style.transform = `translateX(-120%)`;
    }
  })
};

const openCloseTodo = () => {
  todoBtn.addEventListener('click', () => {
    if (isOpen === false) {
      isOpen = true;
      todoContainer.style.transform = `translateX(0)`;
    } else if (isOpen === true) {
      isOpen = false;
      todoContainer.style.transform = `translateX(120%)`;
    }
  })
}

const showHideElements = () => {
  elementsList.forEach(item => {
    item.addEventListener('click', (event) => {
      if (event.target.checked) {
        const element = document.querySelector(`.${event.target.name}`);
        element.classList.remove('hide');
        element.classList.add('show');
        setLocalStorage(event.target.name, 'on');
      } else {
        const element = document.querySelector(`.${event.target.name}`);
        element.classList.remove('show');
        element.classList.add('hide');
        setLocalStorage(event.target.name, 'off');
      }
    })
  });
  switchPhotoSource.addEventListener('change', () => {
    if (switchPhotoSource.value == 'unsplash' || switchPhotoSource.value == 'flickr') {
      themeBackgroundContainer.classList.remove('show');
      themeBackgroundContainer.classList.add('hide');
    } else {
      themeBackgroundContainer.classList.remove('hide');
      themeBackgroundContainer.classList.add('show');
    }
  })
};

const setSettingsData = (lang) => {
  elementsList.forEach(item => {
    if (localStorage.getItem(item.name) == 'off') {
      const element = document.querySelector(`.${item.name}`);
      element.classList.add('hide');
      item.checked = false;
    }
  });
  elementsListText.forEach(item => {
    item.textContent = SETTINGS[lang][`elements-${item.htmlFor}`];
  });
  textChooseLang.textContent = SETTINGS[lang]['choose-lang'];
  textChoosePhoto.textContent = SETTINGS[lang]['choose-photo'];
  textChooseTheme.textContent = SETTINGS[lang]['choose-theme'];
  textShow.textContent =SETTINGS[lang]['text-show'];
  ruLang.textContent = SETTINGS[lang].russian;
  enLang.textContent = SETTINGS[lang].english;
}


export { openCloseSettings, openCloseTodo, showHideElements, setSettingsData };

