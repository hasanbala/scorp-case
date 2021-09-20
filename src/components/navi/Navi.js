import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../i18n";

export const Navi = () => {
  const { t, i18n } = useTranslation("translations");

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const [isLogin, setIsLogin] = useState("false");

  const exitLogin = () => {
    setIsLogin("true");
  };

  function log() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="/#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          NAME
        </a>
        <div className="dropdown-menu">
          <div className="dropdown-item">email</div>
          <div className="dropdown-divider" />
          <div className="dropdown-item btn" onClick={exitLogin}>
            {t("navi.logout")}
          </div>
        </div>
      </li>
    );
  }

  function unlog() {
    return (
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          to="/login"
        >
          {t("navi.login")}
        </Link>
      </li>
    );
  }

  const linkStyle = {
    margin: "10px",
    textDecoration: "none",
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
              <li className="nav-item ">
                <Link to="/" style={linkStyle}>
                  {t("navi.home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" style={linkStyle}>
                  {t("navi.contact")}
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="btn btn-outline-warning"
                  type="button"
                  name="language"
                  value="tr"
                  id="tr"
                  onClick={changeLanguage}
                >
                  TR
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-warning"
                  type="button"
                  name="language"
                  value="en"
                  id="en"
                  onClick={changeLanguage}
                >
                  EN
                </button>
              </li>
              {isLogin === "true" ? log() : unlog()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
