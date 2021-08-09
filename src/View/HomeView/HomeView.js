import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { CustomLoader } from '../../helpers/customLoader/customLoader';
import s from './HomeView.module.css';

export const HomeView = () => {
  const [films, setFilms] = useState(null);
  const [loader, setLoader] = useState(false);
  const match = useRouteMatch();

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    setLoader(true);
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=f4d5ed62044715aa9c5e4de0663d29b2',
    );
    setFilms(response.data.results);
    setLoader(false);
    return response;
  };

  return (
    <div>
      <h1 className={s.FilmsTitle}>Trending today</h1>
      {loader && <CustomLoader />}
      {films && (
        <ul className={s.Films}>
          {films.map(film => {
            return (
              <li key={film.id}>
                <Link className={s.FilmsItem} to={`${match.url}${film.id}`}>
                  {film.name ? film.name : film.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
