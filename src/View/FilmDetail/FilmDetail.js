import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { NavLink, useRouteMatch, Route, Switch } from 'react-router-dom';
import s from './FilmDetail.module.css';
import { CastView } from '../CastView/CastView';
import { ReviewView } from '../ReviewView/ReviewView';
import { CustomLoader } from '../../helpers/customLoader/customLoader';

export const FilmDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const [film, setFilm] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setLoader(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.filmId}?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US`,
      );
      setLoader(false);
      setFilm(response.data);
      return response;
    };
    fetcher();
  }, [params.filmId]);

  return (
    <>
      {loader && <CustomLoader />}
      {film && (
        <div>
          <div className={s.FilmCard}>
            <img
              className={s.FilmCardImg}
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt="film"
            />
            <div className={s.FilmInfo}>
              <h1>
                <span className={s.FilmInfoMark}>{film.title} </span>
                <span>{film.release_date}</span>
              </h1>
              <hr />
              <h2>
                <span className={s.FilmInfoMark}>User score:</span>{' '}
                {film.popularity.toFixed()}%
              </h2>
              <hr />
              <h2 className={s.FilmInfoMark}>Overview</h2>
              <p>{film.overview}</p>
              <hr />
              <h2 className={s.FilmInfoMark}>Genres:</h2>
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
          <div className={s.FilmDetailNav}>
            <NavLink
              className={s.InformationCast}
              activeClassName={s.FilmDetailNavActive}
              to={`${match.url}/cast`}
            >
              Cast
            </NavLink>
            <NavLink
              className={s.InformationReview}
              activeClassName={s.FilmDetailNavActive}
              to={`${match.url}/review`}
            >
              Review
            </NavLink>
          </div>
          <Switch>
            <Route path={`${match.path}/cast`}>{film && <CastView />}</Route>
            <Route path={`${match.path}/review`}>
              {film && <ReviewView />}
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
};
