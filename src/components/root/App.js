import React from "react";
import { Route, Switch } from "react-router";
import { Navi } from "../navi";
import { Content } from "../content";
import { Footer } from "../footer";
import { NotFound } from "../notFound";
import { Contact } from "../contact/Contact";
import { Login } from "../login";

export const App = () => {
  return (
    <div className="App">
      <Navi />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};
