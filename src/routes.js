import React from "react";
import { Route } from "react-router";

import Home from "./components/Home";
import Individuals from "./components/Individuals";
import Layout from "./components/Layout";
import Professionals from "./components/Professionals";

export default (
  <Route component={Layout}>
    <Route path={process.env.BASE_URI} component={Home} />
    <Route path={process.env.BASE_URI + "particuliers/"} component={Individuals} />
    <Route path={process.env.BASE_URI + "professionnels/"} component={Professionals} />
  </Route>
);
