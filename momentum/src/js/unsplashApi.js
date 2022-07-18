import { API_UNSPLASH } from "../common/const";


const getUnsplashApiImage = async (tags) => {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tags}&client_id=${API_UNSPLASH}`;
  const res = await fetch(url);
  const data = await res.json();

  return (data.urls.full);
}

export default getUnsplashApiImage;
