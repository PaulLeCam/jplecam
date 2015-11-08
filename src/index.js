import { createHistory, useBasename } from "history";
import React from "react";
import { render } from "react-dom";
import { Router } from "react-router";

import "./styles/styles.less";
import routes from "./routes";

const history = useBasename(createHistory)({
  basename: "/jplecam",
});

const site = <Router routes={routes} history={history} />;

render(site, document.getElementById("site"));
