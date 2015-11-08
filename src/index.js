import { createHistory } from "history";
import React from "react";
import { render } from "react-dom";
import { Router } from "react-router";

import "./styles/styles.less";
import routes from "./routes";

const site = <Router routes={routes} history={createHistory()} />;

render(site, document.getElementById("site"));
