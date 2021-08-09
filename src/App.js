import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './Component/Navigation/Navigation';
import { HomeView } from './View/HomeView/HomeView';
import { FilmsView } from './View/FilmsView/FilmsView';
import { NotFoundView } from './View/NotFoundView/NotFoundView';
import { FilmDetail } from './View/FilmDetail/FilmDetail';

export const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/films" component={FilmsView} />
        <Route path="/:filmId" component={FilmDetail} />

        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};
