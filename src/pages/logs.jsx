import { useTranslation } from "react-i18next";
import "../i18n";

export const LoggedIn = (logname, logmail, handleExit) => {
  const { t } = useTranslation("translations");
  return (
    <li>
      <div className="dropdown">
        <button className="dropbtn">
          <b>{logname}</b>
        </button>
        <div className="dropdown-content">
          <a href="#!">{logmail}</a>
          <a href="#!" onClick={handleExit}>
            {t("navi.logout")}
          </a>
        </div>
      </div>
    </li>
  );
};

export const LoggedOut = (onOpenModal) => {
  const { t } = useTranslation("translations");
  return (
    <li>
      <div className="dropdown">
        <button className="dropbtnx" onClick={onOpenModal}>
          <b>{t("navi.login")}</b>
        </button>
      </div>
    </li>
  );
};
