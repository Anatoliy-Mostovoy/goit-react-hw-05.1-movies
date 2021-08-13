import { useEffect, useState, lazy, Suspense } from 'react';
import {
  NavLink,
  useRouteMatch,
  useParams,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import s from './FilmDetail.module.css';
import { filmDetail } from '../../api/api';
import { CustomLoader } from '../../helpers/customLoader/customLoader';

const CastView = lazy(() =>
  import('../CastView/CastView' /* webpackChunkName: "CastView" */),
);
const ReviewView = lazy(() =>
  import('../ReviewView/ReviewView' /* webpackChunkName: "ReviewView" */),
);

const FilmDetail = ({ onClick }) => {
  const match = useRouteMatch();
  const params = useParams();
  const [film, setFilm] = useState(null);
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetcher = async () => {
      setLoader(true);
      try {
        const response = await filmDetail(params.filmId);
        setLoader(false);
        setFilm(response.data);
      } catch (error) {
        console.log(error.response);
        setLoader(false);
      }
    };
    fetcher();
  }, [params.filmId]);

  const onBtnClick = event => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {loader && <CustomLoader />}
      {film && (
        <div>
          <button
            className={s.FilmDetailBtn}
            type="button"
            onClick={onBtnClick}
          >
            Back
          </button>
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
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Switch>
              <Route path={`${match.path}/cast`}>{film && <CastView />}</Route>
              <Route path={`${match.path}/review`}>
                {film && <ReviewView />}
              </Route>
            </Switch>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default FilmDetail;
