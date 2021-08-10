import React from 'react';
import s from './App.module.css';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { Navigation } from './Component/Navigation/Navigation';
import { HomeView } from './View/HomeView/HomeView';
import { FilmsView } from './View/FilmsView/FilmsView';
import { NotFoundView } from './View/NotFoundView/NotFoundView';
import { FilmDetail } from './View/FilmDetail/FilmDetail';

export const App = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const onBtnClick = event => {
    history.push(`${match.url}`);
  };

  return (
    <div className={s.Container}>
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
    </div>
  );
};
