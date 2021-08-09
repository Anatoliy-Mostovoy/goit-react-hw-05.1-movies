import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './CastView.module.css';
import axios from 'axios';

export const CastView = () => {
  const params = useParams();
  console.log(params);
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.filmId}/credits?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US`,
      );
      setCasts(response.data.cast);
      return response;
    };
    fetcher();
  }, [params.filmId]);

  return (
    <div className={s.CastContainer}>
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
                  <h3>Character: {cast.character} </h3>
                  <h3 className={s.CastItemText}>Name: {cast.name}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
