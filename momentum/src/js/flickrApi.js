import { API_FLICKR } from "../common/const";
import { getRandomNum } from "../common/util";

const getFlickrApiImage = async (tags, chooseBackground) => {

  tags = chooseBackground || 'nature';
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_FLICKR}&tags=${tags}&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();

  const min = 1;
  const max = 50;

  const randomNumber = getRandomNum(min, max);

  return (data.photos.photo[randomNumber].url_l);
}

export default getFlickrApiImage;
