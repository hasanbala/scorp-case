import React from "react";
import { Route, Switch } from "react-router";
import { Navi } from "../navi";
import { Content } from "../content";
import { Footer } from "../footer";
import { NotFound } from "../notFound";
import { Contact } from "../contact/Contact";

export const App = () => {
  return (
    <div className="App">
      <Navi />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};
