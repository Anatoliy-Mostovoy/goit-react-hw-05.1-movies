/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { CustomLoader } from '../../helpers/customLoader/customLoader';
import InputForm from '../../Component/InputForm/InputForm';
import s from './FilmsView.module.css';
import { filmViewQuery } from '../../api/api';

const FilmsView = () => {
  const [query, setQuery] = useState('');
  const [filmsSearch, setFilmsSearch] = useState([]);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const history = useHistory();

  const oSubmitForm = data => {
    setQuery(data);
    history.push({ ...location, search: `by=${data}` });
  };

  const currentValue = new URLSearchParams(location.search).get('by');

  useEffect(() => {
    if (!currentValue) {
      return;
    }
    const fetcher = async () => {
      setLoader(true);
      try {
        const response = await filmViewQuery(currentValue);
        setFilmsSearch(response.data.results);
        setLoader(false);
      } catch (error) {
        console.log(error.response);
        setLoader(false);
      }
    };
    fetcher();
  }, []);

  useEffect(() => {
    const fetcher = async () => {
      setLoader(true);
      try {
        const response = await filmViewQuery(query);
        setFilmsSearch(response.data.results);
        setLoader(false);
      } catch (error) {
        console.log(error.response);
        setLoader(false);
      }
    };
    {
      query && fetcher();
    }
  }, [query]);

  return (
    <>
      <InputForm onSubmit={oSubmitForm} />
      <div>
        {loader && <CustomLoader />}
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
