import { API_UNSPLASH, TIMES_OF_DAY } from "../common/const";
import { getTimeOfDay } from "../common/util";


const getUnsplashApiImage = async (tags) => {
  const date = new Date();
  const timeDay = TIMES_OF_DAY[getTimeOfDay(date)];
  tags = tags == 0 ? `${timeDay} nature` : tags;

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tags}&client_id=${API_UNSPLASH}`;
  const res = await fetch(url);
  const data = await res.json();

  return (data.urls.full);
}

export default getUnsplashApiImage;
