import { getLocalStorage, setLocalStorage } from "../common/util";

const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings__btn');
const elementsList = document.querySelectorAll('.item input');

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

const showHideElements = () => {
  elementsList.forEach(item => {
    item.addEventListener('click', (event) => {
      if (event.target.checked) {
        const element = document.querySelector(`.${event.target.name}`);
        element.classList.remove('hide');
        element.classList.add('show');
        setLocalStorage(event.target.name, event.target.checked);
      } else {
        const element = document.querySelector(`.${event.target.name}`);
        element.classList.remove('show');
        element.classList.add('hide');
        setLocalStorage(event.target.name, event.target.checked);
      }
    })
  })
};

const setSettingsData = () => {
  elementsList.forEach(item => {
    if (getLocalStorage(item.name) == false) {
      const element = document.querySelector(`.${item.name}`);
      element.classList.add('hide');
      item.checked = false;
    }
  })
}


export { openCloseSettings, showHideElements, setSettingsData };

