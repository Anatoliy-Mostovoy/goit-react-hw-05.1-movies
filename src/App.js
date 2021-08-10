import React, { lazy, Suspense } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import s from './App.module.css';

const Navigation = lazy(() =>
  import(
    './Component/Navigation/Navigation' /* webpackChunkName: "Navigation" */
  ),
);
const HomeView = lazy(() =>
  import('./View/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const FilmsView = lazy(() =>
  import('./View/FilmsView/FilmsView' /* webpackChunkName: "FilmsView" */),
);
const FilmDetail = lazy(() =>
  import('./View/FilmDetail/FilmDetail' /* webpackChunkName: "FilmDetail" */),
);
const NotFoundView = lazy(
  () =>
    import(
      './View/NotFoundView/NotFoundView'
    ) /* webpackChunkName: "NotFoundView" */,
);

export const App = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const onBtnClick = event => {
    history.push(`${match.url}`);
  };

  return (
    <div className={s.Container}>
      <Suspense fallback={<h1>LOADER</h1>}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/films">
            <FilmsView />
          </Route>
          <Route path="/:filmId">
            <FilmDetail onClick={onBtnClick} />
          </Route>

          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
};
