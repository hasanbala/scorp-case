import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Toggle = ({
  closeNavX,
  changeLanguage,
  Icontr,
  Iconen,
  closeNav,
}) => {
  const { t } = useTranslation("translations");
  return (
    <div id="myNav" className="overlay">
      <a href="#!" className="closebtn" ref={closeNavX}>
        &times;
      </a>
      <div className="overlay-content">
        <ul>
          <div className="overlay-lang">
            <li>
              <input
                type="image"
                value="tr"
                onClick={changeLanguage}
                src={Icontr}
                alt="TR"
                className="btnx"
              />
            </li>
            <li>
              <input
                type="image"
                value="en"
                onClick={changeLanguage}
                src={Iconen}
                alt="EN"
                className="btnx"
              />
            </li>
          </div>
          <div ref={closeNav}>
            <li>
              <Link className="link" to="/">
                {t("navi.home")}
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                {t("navi.contact")}
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
