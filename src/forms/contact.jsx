import { useTranslation } from "react-i18next";
import { Button } from "components";
import { toast } from "react-toastify";
import { validate, stylex } from "./validation";
import { useFormHook } from "hooks/useFormHook";
import "styles/contact.css";
import "i18n";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  option: "",
  textarea: "",
};

export const Contact = () => {
  const { t } = useTranslation("translations");
  const [form, setForm] = useFormHook(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(form)) {
      return;
    }
    toast.success("Your registration has been received ", stylex);
    console.log(form);
    setForm(initialValues);
  };

  return (
    <div>
      <div className='contact'>
        <div className='contact-body'>
          <h2>{t("contact.title")}</h2>
          <hr className='main-hr' />
        </div>
        <div className='contact-sub'>
          <form className='contact-forms' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder={t("contact.firstNameHolder")}
              name='fname'
              value={form.fname}
              onChange={setForm}
            />
            <input
              type='text'
              placeholder={t("contact.lastNameHolder")}
              name='lname'
              value={form.lname}
              onChange={setForm}
            />
            <input
              type='email'
              placeholder='email@example.com'
              name='email'
              value={form.email}
              onChange={setForm}
            />
            <input
              type='text'
              placeholder='Format: 0500-000-0000'
              name='phone'
              value={form.phone}
              onChange={setForm}
            />
            <select
              className='ftextarea'
              value={form.option}
              name='option'
              onChange={setForm}>
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
              className='fmessage'
              placeholder={t("contact.textareaHolder")}
              name='textarea'
              value={form.textarea}
              onChange={setForm}></textarea>
            <Button
              type='submit'
              className='btn-hover color-3'
              data='contact.button'
            />
          </form>
        </div>
      </div>
    </div>
  );
};
