import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import s from './FilmDetail.module.css';
import { CastView } from '../CastView/CastView';

export const FilmDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  console.log(params.filmId);
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.filmId}?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US`,
      );
      setFilm(response.data);
      return response;
    };
    fetcher();
  }, [params.filmId]);

  return (
    <>
      {film && (
        <div>
          <div className={s.FilmCard}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt="film"
            />
            <div className={s.FilmInfo}>
              <h1>
                <span>{film.title}</span>
                <span>{film.release_date}</span>
              </h1>
              <hr />
              <h2>User score: {film.popularity.toFixed()}%</h2>
              <hr />
              <h2>Overview</h2>
              <p>{film.overview}</p>
              <hr />
              <h2>Genres:</h2>
              <ul>
                {film.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
              <hr />
            </div>
          </div>
          <hr />
          <h3>Additional information</h3>
          <NavLink to={`${match.url}/${film.id}`}>Cast</NavLink>
          <Route path={`${match.path}/:castId`}>{film && <CastView />}</Route>
          <p>Review</p>
        </div>
      )}
    </>
  );
};
