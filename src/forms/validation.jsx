import { toast } from "react-toastify";

export const stylex = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const Validate = (props) => {
  if (
    props.fname === "" ||
    props.lname === "" ||
    props.email === "" ||
    props.phone === "" ||
    props.option === "" ||
    props.textarea === ""
  ) {
    toast.error("Please, fill in the all blanks with valid values !!", stylex);
    return false;
  }
  return true;
};
