import { Modal } from "react-responsive-modal";
import { useAppContext } from "../context";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "../components";
import { Validate, stylex } from "./validation";
import "../i18n";
import "../styles/contact.css";
import "react-responsive-modal/styles.css";

export const SignIn = ({ showx, setShowx }) => {
  const { logname, setLogname, logmail, setLogmail, log, setLog } =
    useAppContext();
  const onCloseModal = () => setLog(false);
  const changeLogname = (e) => setLogname(e.target.value);
  const changeLogmail = (e) => setLogmail(e.target.value);
  const changePass = (e) => setPass(e.target.value);
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Validate(logname, logmail, pass)) {
      return;
    }
    toast.success("Logged in baby, Congratulations", stylex);
    setShowx(!showx);
    setLog(!log);
  };

  return (
    <div>
      <Modal open={log} onClose={onCloseModal} center>
        <div className="contact">
          <h2 style={{ color: "#000" }}>LOG IN</h2>
          <div className="contact-sub">
            <form className="contact-forms" onSubmit={handleSubmit}>
              <Input
                className="fname"
                type="text"
                placeholder="contact.firstNameHolder"
                value={logname}
                onChange={changeLogname}
              />
              <Input
                className="femail"
                type="email"
                placeholder="email@example.com"
                value={logmail}
                onChange={changeLogmail}
              />
              <Input
                className="fpassword"
                type="password"
                placeholder="Password"
                value={pass}
                onChange={changePass}
              />
              <Button
                type="submit"
                className="btn-hover color-3"
                data="contact.button"
              />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
