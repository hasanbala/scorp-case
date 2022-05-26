import { useTranslation } from "react-i18next";
import { Modal } from "react-responsive-modal";
import { useAppContext } from "context";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "components";
import { validateLogin, stylex } from "./validation";
import "i18n";
import "styles/contact.css";
import "react-responsive-modal/styles.css";

export const SignIn = ({ showx, setShowx }) => {
  const { t } = useTranslation("translations");
  const { log, setLog } = useAppContext();
  const onCloseModal = () => setLog({ ...log, log: false });
  const changePass = (e) => setPass(e.target.value);
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateLogin(log.pass, log.logname, log.logmail)) {
      return;
    }
    toast.success("Logged in baby, Congratulations", stylex);
    setShowx(!showx);
    setPass("");
    setLog({ ...log, log: !log });
  };

  return (
    <div>
      <Modal open={log.log} onClose={onCloseModal} center>
        <div className='contact'>
          <h2 style={{ color: "#000" }}>LOG IN</h2>
          <div className='contact-sub'>
            <form className='contact-forms' onSubmit={handleSubmit}>
              <input
                className='fname'
                type='text'
                name='logname'
                placeholder={t("contact.firstNameHolder")}
                value={log.logname}
                onChange={setLog}
              />
              <input
                className='femail'
                type='email'
                name='logmail'
                placeholder='email@example.com'
                value={log.logmail}
                onChange={setLog}
                autoComplete='hidden'
              />
              <input
                className='fpassword'
                type='password'
                placeholder='Password'
                value={pass}
                onChange={changePass}
                autoComplete='current-password'
                minLength='8'
              />
              <Button
                type='submit'
                className='btn-hover color-3'
                data='contact.button'
              />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
