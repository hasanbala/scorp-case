import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [option, setOption] = useState("");
  const [textarea, setTextarea] = useState("");

  const changefirstName = (event) => {
    setFirstName(event.target.value);
  };
  const changelastName = (event) => {
    setlastName(event.target.value);
  };
  const changeemail = (event) => {
    setEmail(event.target.value);
  };
  const changephoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const changesetOption = (event) => {
    setOption(event.target.value);
  };
  const changetextarea = (event) => {
    setTextarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "First Name : " +
        firstName +
        "\nLast Name : " +
        lastName +
        "\nEmail : " +
        email +
        "\nPhone Number : " +
        phoneNumber +
        "\nOption : " +
        option +
        "\nTextarea : " +
        textarea
    );
    setFirstName("");
    setlastName("");
    setEmail("");
    setPhoneNumber("");
    setOption("");
    setTextarea("");
  };

  const { t } = useTranslation("translations");

  return (
    <div className="contact py-5 my-5">
      <div className="container col-md-8 order-md-1">
        <div className="mb-3 text-center">
          <h2 className="font-weight-bold ">{t("contact.title")}</h2>
        </div>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="row">
            <div className=" mb-3">
              <label htmlFor="firstName">{t("contact.firstName")}</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                placeholder={`${t("contact.firstNameHolder")}`}
                required
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
                name="lastName"
                id="lastName"
                placeholder={`${t("contact.lastNameHolder")}`}
                required
                value={lastName}
                onChange={changelastName}
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
              name="email"
              id="email"
              placeholder="email@example.com"
              required
              value={email}
              onChange={changeemail}
            ></input>
            <div className="invalid-feedback">{t("contact.emailValid")}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber">{t("contact.phoneNumber")}</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="form-control"
              placeholder="+1 (999) 999 9999"
              required
              value={phoneNumber}
              onChange={changephoneNumber}
            ></input>
            <div className="invalid-feedback">
              {t("contact.phoneNumberValid")}
            </div>
          </div>

          <div className="row">
            <div className="mb-3">
              <label htmlFor="country">{t("contact.country")}</label>
              <select
                className="custom-select d-block w-100"
                id="country"
                required
                value={option}
                onChange={changesetOption}
              >
                <option>Choose...</option>
                <option>Australia</option>
                <option>Brazil</option>
                <option>Canada</option>
                <option>Germany</option>
                <option>India</option>
                <option>Italy</option>
                <option>Japan</option>
                <option>Mexican</option>
                <option>Holland</option>
                <option>Spain</option>
                <option>United States of America</option>
                <option>United Kingdom</option>
              </select>
              <div className="invalid-feedback">
                {t("contact.countryValid")}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="textarea">{t("contact.textarea")}</label>
            <textarea
              className="form-control"
              id="textarea"
              name="textarea"
              placeholder={`${t("contact.textareaHolder")}`}
              rows="3"
              required
              value={textarea}
              onChange={changetextarea}
            ></textarea>
            <div className="invalid-feedback">{t("contact.textareaValid")}</div>
          </div>

          <button className="btn btn-warning btn-lg btn-block" type="submit">
            {t("contact.button")}
          </button>
        </form>
      </div>
    </div>
  );
};
