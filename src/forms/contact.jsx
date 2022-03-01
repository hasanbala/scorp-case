import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "../components";
import { toast } from "react-toastify";
import { Validate, stylex } from "./validation";
import "../styles/contact.css";
import "../i18n";

export const Contact = () => {
  const { t } = useTranslation("translations");

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    option: "",
    textarea: "",
  });

  const changeForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Validate(form)) {
      return;
    }
    toast.success("Your registration has been received ", stylex);
    console.log(form);
    setForm({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      option: "",
      textarea: "",
    });
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-body">
          <h2>{t("contact.title")}</h2>
          <hr className="main-hr" />
        </div>
        <div className="contact-sub">
          <form className="contact-forms" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="contact.firstNameHolder"
              name="fname"
              value={form.fname}
              onChange={changeForm}
            />
            <Input
              type="text"
              placeholder="contact.lastNameHolder"
              name="lname"
              value={form.lname}
              onChange={changeForm}
            />
            <Input
              type="email"
              placeholder="email@example.com"
              name="email"
              value={form.email}
              onChange={changeForm}
            />
            <Input
              type="text"
              placeholder="Format: 0500-000-0000"
              name="phone"
              value={form.phone}
              onChange={changeForm}
            />
            <select
              className="ftextarea"
              value={form.option}
              name="option"
              onChange={changeForm}
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
            <textarea
              className="fmessage"
              placeholder={t("contact.textareaHolder")}
              name="textarea"
              value={form.textarea}
              onChange={changeForm}
            ></textarea>
            <Button
              type="submit"
              className="btn-hover color-3"
              data="contact.button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
