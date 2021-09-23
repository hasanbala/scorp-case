import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/root";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./components/context";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
