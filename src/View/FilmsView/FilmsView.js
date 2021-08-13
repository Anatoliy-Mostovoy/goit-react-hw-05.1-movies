/* eslint-disable no-lone-blocks */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputForm from '../../Component/InputForm/InputForm';
import axios from 'axios';
import s from './FilmsView.module.css';

const FilmsView = () => {
  const [query, setQuery] = useState('');
  const [filmsSearch, setFilmsSearch] = useState([]);

  const location = useLocation();

  const oSubmitForm = data => {
    setQuery(data);
  };

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f4d5ed62044715aa9c5e4de0663d29b2&query=${query}`,
      );

      setFilmsSearch(response.data.results);
      return response;
    };
    {
      query && fetcher();
    }
  }, [query]);

  return (
    <>
      <InputForm onSubmit={oSubmitForm} />
      <div>
        <ul className={s.Films}>
          {filmsSearch.map(film => {
            return (
              <li key={film.id}>
                <Link
                  className={s.FilmsItem}
                  to={{
                    pathname: `/${film.id}`,
                    state: { from: location, label: 'Back to the list' },
                  }}
                >
                  {film.name ? film.name : film.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FilmsView;
