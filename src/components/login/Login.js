import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { UserContext } from "../context";
import "../i18n";

export const Login = (props) => {
  const { t } = useTranslation("translations");

  const { loginName, setLoginName } = useContext(UserContext);
  const [loginLast, setLoginLast] = useState("");
  const { loginEmail, setLoginEmail } = useContext(UserContext);
  const { setIsLogin } = useContext(UserContext);
  const { showModal } = useContext(UserContext);

  const changeloginName = (event) => {
    setLoginName(() => event.target.value);
  };
  const changeloginLast = (event) => {
    setLoginLast(event.target.value);
  };
  const changeloginEmail = (event) => {
    setLoginEmail(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLogin((isLogin) => !isLogin);
    setLoginLast("");
    props.onClose();
  };

  const renderLogin = () => {
    return (
      <div>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="row">
            <div className=" mb-3">
              <label htmlFor="firstName">{t("contact.firstName")}</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder={`${t("contact.firstNameHolder")}`}
                required
                value={loginName}
                onChange={changeloginName}
              ></input>
              <div className="invalid-feedback">
                {t("contact.firstNameValid")}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="lastName">{t("contact.lastName")}</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder={`${t("contact.lastNameHolder")}`}
                required
                value={loginLast}
                onChange={changeloginLast}
              ></input>
              <div className="invalid-feedback">
                {t("contact.lastNameValid")}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              {t("contact.email")} <span className="text-muted"></span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@example.com"
              required
              value={loginEmail}
              onChange={changeloginEmail}
            ></input>
            <div className="invalid-feedback">{t("contact.emailValid")}</div>
          </div>
          <Button className="btn btn-primary btn-lg btn-block" type="submit">
            {t("navi.loginButton")}
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <Modal show={showModal} onHide={props.onClose}>
        <Modal.Header closeButton={true}>
          <div>
            <h2>{t("navi.login")}</h2>
          </div>
        </Modal.Header>
        <Modal.Body>{renderLogin()}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={props.onClose}>
            {t("navi.closeButton")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
