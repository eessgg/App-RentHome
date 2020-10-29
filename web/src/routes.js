import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing';
import HousesMap from "./screens/HousesMap";
import addNewHouse from "./screens/addNewHouse";
import House from "./screens/House";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/houses/map" component={HousesMap} />
        <Route path="/houses/add" component={addNewHouse} />
        <Route path="/houses/:id" component={House} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;