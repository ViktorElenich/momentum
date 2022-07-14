const getTimeOfDay = (date) => {
  const hours = date.getHours();
  return Math.floor(hours / 6);
};

const setLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

const getLocalStorage = (name) => {
  if(localStorage.getItem(name)){
    return localStorage.getItem(name);
  }
  return [];
};

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { getTimeOfDay, setLocalStorage, getLocalStorage, getRandomNum };
