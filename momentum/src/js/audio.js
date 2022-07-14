import { PLAYLIST } from "../common/const";
import { populate } from "../common/util";

const nowPlaying = document.querySelector('.now-playing');
const trackArt = document.querySelector('.track-art');
const trackName = document.querySelector('.track-name');
const trackArtist = document.querySelector('.track-artist');
const playerContainer = document.querySelector('.player__wrapper');

const playpauseBtn = document.querySelector('.playpause-track');
const nextBtn = document.querySelector('.next-track');
const prevBtn = document.querySelector('.prev-track');
const repeatBtn = document.querySelector('.repeat-track');

const seekSlider = document.querySelector('.seek_slider');
const volumeSlider = document.querySelector('.volume_slider');
const currentTime = document.querySelector('.current-time');
const totalDuration = document.querySelector('.total-duration');
const wave = document.getElementById('wave');
const randomIcon = document.querySelector('.fa-random');
const randomBtn = document.querySelector('.random-track');
const currentTrack = document.createElement('audio');

let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

function randomBgColor() {
  const Color1 = populate('#');
  const Color2 = populate('#');
  const angle = 'to right';

  const gradient = `linear-gradient(${  angle  },${  Color1  }, ${  Color2  })`;
  playerContainer.style.background = gradient;
};

const reset = () => {
  currentTime.textContent = '00:00';
  totalDuration.textContent = '00:00';
  seekSlider.value = 0;
};

function playRandom(){
  isRandom = true;
  randomIcon.classList.add('randomActive');
};

function pauseRandom(){
  isRandom = false;
  randomIcon.classList.remove('randomActive');
};

function randomTrack(){
  return isRandom ? pauseRandom() : playRandom();
};

function playTrack() {
  currentTrack.play();
  isPlaying = true;
  trackArt.classList.add('rotate');
  wave.classList.add('loader');
  playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
};

function loadTrack(index) {
  clearInterval(updateTimer);
  reset();

  currentTrack.src = PLAYLIST[index].music;
  currentTrack.load();

  trackArt.style.backgroundImage = `url("${PLAYLIST[index].img}")`;
  trackName.textContent = PLAYLIST[index].name;
  trackArtist.textContent = PLAYLIST[index].artist;
  nowPlaying.textContent = `Playing music ${index + 1} of ${PLAYLIST.length}`;

  updateTimer = setInterval(setUpdate, 1000);
  currentTrack.addEventListener('ended', nextTrack);
  randomBgColor();
};

function nextTrack() {
  if (trackIndex < PLAYLIST.length - 1 && isRandom === false) {
    trackIndex += 1;
  } else if (trackIndex < PLAYLIST.length - 1 && isRandom === true) {
    const randomIndex = Number.parseInt(Math.random() * PLAYLIST.length, 10);
    trackIndex = randomIndex;
  } else {
    trackIndex = 0;
  }
  loadTrack(trackIndex);
  playTrack();
};

function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  trackArt.classList.remove('rotate');
  wave.classList.remove('loader');
  playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
};

function playPauseTrack(){
  return isPlaying ? pauseTrack() : playTrack();
};

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex -= 1;
  } else {
    trackIndex = PLAYLIST.length - 1;
  }
  loadTrack(trackIndex);
  playTrack();
};

function seekTo() {
  const seek = currentTrack.duration * (seekSlider.value / 100);
  currentTrack.currentTime = seek;
};

function setVolume() {
  currentTrack.volume = volumeSlider.value / 100;
};

function setUpdate() {
  let seekPosition = 0;
  if (!Number.isNaN(currentTrack.duration)) {
    seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
    seekSlider.value = seekPosition;

    let currentMinutes = Math.floor(currentTrack.currentTime / 60);
    let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(currentTrack.duration / 60);
    let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);

    if (currentSeconds < 10) {currentSeconds = `0${currentSeconds}`;}
    if (durationSeconds < 10) {durationSeconds = `0${durationSeconds}`;}
    if (currentMinutes < 10) {currentMinutes = `0${currentMinutes}`;}
    if (durationMinutes < 10) {durationMinutes = `0${durationMinutes}`;}

    currentTime.textContent = `${currentMinutes}:${currentSeconds}`;
    totalDuration.textContent = `${durationMinutes}:${durationSeconds}`;
  }
}

function repeatTrack() {
  const currentIndex = trackIndex;
  loadTrack(currentIndex);
  playTrack();
};

seekSlider.addEventListener('change', seekTo);
volumeSlider.addEventListener('change', setVolume);
randomBtn.addEventListener('click', randomTrack);
prevBtn.addEventListener('click', prevTrack);
playpauseBtn.addEventListener('click', playPauseTrack);
nextBtn.addEventListener('click', nextTrack);
repeatBtn.addEventListener('click', repeatTrack);

export { loadTrack, trackIndex };
