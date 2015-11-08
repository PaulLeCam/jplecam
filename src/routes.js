import React from "react";
import { Route } from "react-router";

import Home from "./components/Home";
import Individuals from "./components/Individuals";
import Layout from "./components/Layout";
import Professionals from "./components/Professionals";

export default (
  <Route component={Layout}>
    <Route path="/" component={Home} />
    <Route path="/particuliers/" component={Individuals} />
    <Route path="/professionnels/" component={Professionals} />
  </Route>
);
