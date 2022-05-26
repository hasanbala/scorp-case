import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, NotFound, Footer, Content } from "./pages";
import { Contact } from "./forms";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Content />} />
        <Route path='/contact' element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer theme='colored' />
    </BrowserRouter>
  );
};
