import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { CustomLoader } from '../../helpers/customLoader/customLoader';
import s from './HomeView.module.css';
import { homeView } from '../../api/api';

const HomeView = () => {
  const [films, setFilms] = useState(null);
  const [loader, setLoader] = useState(false);
  const match = useRouteMatch();

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    setLoader(true);
    try {
      const response = await homeView();
      setFilms(response.data.results);
      setLoader(false);
    } catch (error) {
      console.log(error.response);
      setLoader(false);
    }
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

export default HomeView;
