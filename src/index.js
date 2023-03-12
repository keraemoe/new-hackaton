import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Landing from "views/Landing.js";
import Chat from "components/Chat";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing" component={Landing} />
      <Route path="/chat" component={Chat} />
      <Redirect from="/" to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
