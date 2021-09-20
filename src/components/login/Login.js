import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export const Login = () => {
  const { t } = useTranslation("translations");

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const changefirstName = (event) => {
    setFirstName(event.target.value);
  };

  const changeemail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="contact py-5 my-5">
      <div className="container col-md-8 order-md-1">
        <div className="mb-3 text-center">
          <h2 className="font-weight-bold ">{t("navi.loginTitle")}</h2>
        </div>
        <form className="needs-validation">
          <div className="row">
            <div className=" mb-3">
              <label htmlFor="firstName">{t("contact.firstName")}</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder={`${t("contact.firstNameHolder")}`}
                required=""
                value={firstName}
                onChange={changefirstName}
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
                required=""
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
              required=""
              value={email}
              onChange={changeemail}
            ></input>
            <div className="invalid-feedback">{t("contact.emailValid")}</div>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            {t("navi.loginButton")}
          </button>
        </form>
      </div>
    </div>
  );
};
