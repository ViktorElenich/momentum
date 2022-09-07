import { TIMES_OF_DAY } from "../common/const";
import { getRandomNum, getTimeOfDay } from "../common/util";
import getFlickrApiImage from "./flickrApi";
import getUnsplashApiImage from "./unsplashApi";

const body = document.querySelector('body');
const slidePrev = body.querySelector('.slide-prev');
const slideNext = body.querySelector('.slide-next');
const switchPhotoSource = document.querySelector('.photo');
const changeBackground = document.querySelector('.theme');

let random = getRandomNum(1, 20);
let isEnabled = true;
let bgNum = random;
let tags;



const sliderImage = async (tag) => {
  const img = new Image();
  const date = new Date();
  const timeDay = TIMES_OF_DAY[getTimeOfDay(date)];

  isEnabled = false;
  bgNum = random >= 10 ? random : `0${  random}`;

  if (switchPhotoSource.value == 'github') {
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeDay}/${bgNum}.jpg`;
  } else if (switchPhotoSource.value == 'unsplash') {
    img.src = await getUnsplashApiImage(tag);
  } else if (switchPhotoSource.value == 'flickr') {
    img.src = await getFlickrApiImage(tag, changeBackground.value);
  }

  img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
  };
  setTimeout(() => {isEnabled = true}, 1000);
};

const getSlideNext = () => {
  if(isEnabled){
      random = random >= 20 ? 1 : ++random;
      sliderImage();
  }
};

const getSlidePrev = () => {
  if(isEnabled){
      random = random <= 1 ? 20 : --random;
      sliderImage();
  }
};

const setBg = () => {
  tags = changeBackground.value;
  sliderImage(tags);
  slideNext.addEventListener('click', getSlideNext);
  slidePrev.addEventListener('click', getSlidePrev);
};

switchPhotoSource.addEventListener('change', setBg);
changeBackground.addEventListener('change', setBg);

const removeListenerGitHub = () => {
  slidePrev.removeEventListener('click', getSlidePrev);
  slideNext.removeEventListener('click', getSlideNext);
};

export { setBg, getRandomNum, removeListenerGitHub };
