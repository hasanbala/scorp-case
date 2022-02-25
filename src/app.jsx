import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar, NotFound, Footer, Content } from "./pages";
import { Contact } from "./forms";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
};
