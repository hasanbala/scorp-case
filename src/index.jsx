import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { UserContextProvider } from "./context";
import "./styles/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
