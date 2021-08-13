import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
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
  return (
    <div className={s.Container}>
      <Suspense fallback={<h1>LOADER</h1>}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/films">
            <FilmsView />
          </Route>
          <Route path="/:filmId">
            <FilmDetail />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
