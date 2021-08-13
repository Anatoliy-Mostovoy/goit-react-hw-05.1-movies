import axios from 'axios';

const KEY = 'f4d5ed62044715aa9c5e4de0663d29b2';
const URL = 'https://api.themoviedb.org';

const filmViewQuery = async query => {
  return await axios.get(`${URL}/3/search/movie?api_key=${KEY}&query=${query}`);
};

const filmDetail = async params => {
  return await axios.get(
    `${URL}/3/movie/${params}?api_key=${KEY}&language=en-US`,
  );
};

const castView = async params => {
  return await axios.get(
    `${URL}/3/movie/${params}/credits?api_key=${KEY}&language=en-US`,
  );
};

const homeView = async () => {
  return await axios.get(`${URL}/3/trending/all/day?api_key=${KEY}`);
};

const reviewView = async params => {
  return await axios.get(
    `${URL}/3/movie/${params}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
};

export { filmViewQuery, filmDetail, castView, homeView, reviewView };
