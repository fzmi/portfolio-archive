import React from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import { Eventx, Portfolio, PillX, PicQld, EightyDays } from '../projects';

export function Project() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/eventx`}><Eventx /></Route>
      <Route path={`${path}/portfolio`}><Portfolio /></Route>
      <Route path={`${path}/pillx`}><PillX /></Route>
      <Route path={`${path}/picqld`}><PicQld /></Route>
      <Route path={`${path}/80days`}><EightyDays /></Route>
      <Redirect to="/404" />
    </Switch>
  )
}
