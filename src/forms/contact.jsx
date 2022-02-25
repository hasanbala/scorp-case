import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "../components";
import { toast } from "react-toastify";
import { Validate, stylex } from "./validation";
import "../styles/contact.css";
import "../i18n";

export const Contact = () => {
  const { t } = useTranslation("translations");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");
  const [textarea, setTextarea] = useState("");

  const changefname = (e) => setFname(e.target.value);
  const changelname = (e) => setLname(e.target.value);
  const changeemail = (e) => setEmail(e.target.value);
  const changephone = (e) => setPhone(e.target.value);
  const changesetOption = (e) => setOption(e.target.value);
  const changetextarea = (e) => setTextarea(e.target.value);
  const temp = { fname, lname, email, phone, option, textarea };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Validate(fname, lname, email, phone, option, textarea)) {
      return;
    }
    toast.success("Your registration has been received ", stylex);
    console.log(temp);
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setOption("");
    setTextarea("");
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
              className="fname"
              type="text"
              placeholder="contact.firstNameHolder"
              value={fname}
              onChange={changefname}
            />
            <Input
              className="lname"
              type="text"
              placeholder="contact.lastNameHolder"
              value={lname}
              onChange={changelname}
            />
            <Input
              className="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={changeemail}
            />
            <Input
              className="phone"
              type="text"
              placeholder="Format: 0500-000-0000"
              value={phone}
              onChange={changephone}
            />
            <select
              className="ftextarea"
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
            <textarea
              className="fmessage"
              placeholder={t("contact.textareaHolder")}
              value={textarea}
              onChange={changetextarea}
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
