import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/root";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
