import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './CastView.module.css';
import { CustomLoader } from '../../helpers/customLoader/customLoader';
import { castView } from '../../api/api';

const CastView = () => {
  const params = useParams();

  const [casts, setCasts] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setLoader(true);
      try {
        const response = await castView(params.filmId);
        setCasts(response.data.cast);
        setLoader(false);
      } catch (error) {
        console.log(error.response);
        setLoader(false);
      }
    };
    fetcher();
  }, [params.filmId]);
  console.log(casts);
  return (
    <div className={s.CastContainer}>
      {loader && <CustomLoader />}
      {casts && (
        <ul className={s.CastList}>
          {casts.map(cast => {
            return (
              <li className={s.CastItem} key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                />
                <div className={s.CastItemContent}>
                  <h3>
                    <span className={s.CastItemContentTitle}>Character: </span>
                    {cast.character}{' '}
                  </h3>
                  <h3 className={s.CastItemText}>
                    <span className={s.CastItemContentTitle}>Name: </span>
                    {cast.name}
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CastView;
