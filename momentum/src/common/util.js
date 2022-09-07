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

const populate = (a) => {
  const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  for(let i = 0; i < 6; i++){
    const x = Math.round(Math.random() * 14);
    const y = hex[x];
    a += y;
  }
  return a;
}

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { getTimeOfDay, setLocalStorage, getLocalStorage, getRandomNum, populate };
