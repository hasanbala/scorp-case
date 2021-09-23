import React, { useContext } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Login } from "../login";
import { UserContext } from "../context";
import "../i18n";

export const Navi = () => {
  const { t, i18n } = useTranslation("translations");

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const { showModal, setShowModal } = useContext(UserContext);
  const { isLogin, setIsLogin } = useContext(UserContext);
  const { loginName, setLoginName } = useContext(UserContext);
  const { loginEmail, setLoginEmail } = useContext(UserContext);

  const close = () => {
    setShowModal(() => !showModal);
  };
  const open = () => {
    setShowModal(() => !showModal);
  };

  const handleExit = () => {
    setIsLogin((isLogin) => !isLogin);
    setLoginName("");
    setLoginEmail("");
  };

  const linkStyle = {
    margin: "10px",
    textDecoration: "none",
  };

  const inside = () => {
    return (
      <li className="nav-item dropdown">
        <Dropdown.Toggle
          variant="warning"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="/#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {loginName}
        </Dropdown.Toggle>
        <div className="dropdown-menu">
          <div className="dropdown-item"> {loginEmail} </div>
          <div className="dropdown-divider" />
          <div className="dropdown-item btn" onClick={handleExit}>
            {t("navi.logout")}
          </div>
        </div>
      </li>
    );
  };

  const outside = () => {
    return (
      <li className="nav-item dropdown">
        <Dropdown.Toggle
          variant="outline-primary"
          className="btn dropdown-toggle"
          role="button"
          // data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={open}
        >
          {t("navi.login")}
        </Dropdown.Toggle>
      </li>
    );
  };

  return (
    <div className="Navi">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <i className="user icon"></i>
          VOID
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <div className="ui secondary menu">
                <Link className="item" to="/" style={linkStyle}>
                  {t("navi.home")}
                </Link>
                <Link className="item" to="/contact" style={linkStyle}>
                  {t("navi.contact")}
                </Link>
              </div>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Button
                  variant="outline-warning"
                  type="button"
                  name="language"
                  value="tr"
                  id="tr"
                  onClick={changeLanguage}
                >
                  TR
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  variant="outline-warning"
                  type="button"
                  name="language"
                  value="en"
                  id="en"
                  onClick={changeLanguage}
                >
                  EN
                </Button>
              </li>
              {isLogin ? inside() : outside()}
              <Login showModal={showModal} onClose={close} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
