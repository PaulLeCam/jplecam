import React from "react";
import { IndexRoute, Route } from "react-router";

import Home from "./components/Home";
import Individuals from "./components/Individuals";
import IndividualsKitchen from "./components/IndividualsKitchen";
import Layout from "./components/Layout";
import Professionals from "./components/Professionals";

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="particuliers" component={Individuals} />
    <Route path="cuisines" component={IndividualsKitchen} />
    <Route path="professionnels" component={Professionals} />
  </Route>
);
