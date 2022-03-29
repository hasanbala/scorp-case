import { useEffect, useRef, useState } from "react";
import { LoggedIn, LoggedOut } from "./logs";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../context";
import { Toggle } from "./toogle";
import { Link } from "react-router-dom";
import Icontr from "../images/tr.png";
import Iconen from "../images/uk.png";
import { SignIn } from "../forms";
import { toast } from "react-toastify";
import { stylex } from "../forms";
import "../styles/navbar.css";
import "../i18n";

export const Navbar = () => {
  const { log, setLog, initialLogValues } = useAppContext();
  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);
  const { t, i18n } = useTranslation("translations");
  const [show, setShow] = useState(false);
  const onOpenModal = () => setLog({ ...log, log: true });
  const openNav = useRef();
  const closeNav = useRef();
  const closeNavX = useRef();

  useEffect(() => {
    openNav.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "100%");
    };
    closeNavX.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "0%");
    };
    closeNav.current.onclick = () => {
      document.documentElement.style.setProperty("--nav-width", "0%");
    };
  }, []);

  const handleExit = () => {
    toast.warning("Logged out baby", stylex);
    setShow(!show);
    setLog(initialLogValues);
  };

  return (
    <div className="navbar">
      <nav className="navbarsub">
        <div className="navbarsub-list">
          <ul id="myTopnav">
            <li className="title">
              <h2>TASK || CASE</h2>
            </li>
            <li
              className="item"
              style={{
                marginLeft: "40px",
              }}
            >
              <Link className="link" to="/" data-hover={t("navi.home")}>
                {t("navi.home")}
              </Link>
            </li>
            <li
              className="item"
              style={{
                marginLeft: "40px",
              }}
            >
              <Link
                className="link"
                to="/contact"
                data-hover={t("navi.contact")}
              >
                {t("navi.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <ul
          className="item"
          style={{
            marginRight: "40px",
          }}
        >
          <li className="toggle" ref={openNav}>
            <i className="fas fa-align-justify" />
          </li>
          {show
            ? LoggedIn(log.logname, log.logmail, handleExit)
            : LoggedOut(onOpenModal)}
          <li
            className="item"
            style={{
              marginLeft: "20px",
            }}
          >
            <input
              type="image"
              value="tr"
              onClick={changeLanguage}
              src={Icontr}
              alt="TR"
              className="btnx"
            />
          </li>
          <li className="item">
            <input
              type="image"
              value="en"
              onClick={changeLanguage}
              src={Iconen}
              alt="EN"
              className="btnx"
              style={{ marginLeft: "10px" }}
            />
          </li>
        </ul>
      </nav>
      <SignIn showx={show} setShowx={setShow} />
      <Toggle
        closeNavX={closeNavX}
        changeLanguage={changeLanguage}
        Icontr={Icontr}
        Iconen={Iconen}
        closeNav={closeNav}
      />
    </div>
  );
};
