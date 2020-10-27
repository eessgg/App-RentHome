import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing';
import HousesMap from "./screens/HousesMap";
import addNewHouse from "./screens/addNewHouse";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" exact component={HousesMap} />
        <Route path="/add" exact component={addNewHouse} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;