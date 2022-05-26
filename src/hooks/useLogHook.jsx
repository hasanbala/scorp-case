import { useState } from "react";

export const useLogHook = (params) => {
  const [state, setState] = useState(params);
  const handleChange = (event) => {
    if (event.target) {
      setState({ ...state, [event.target.name]: event.target.value });
    } else {
      setState(event);
    }
  };
  return [state, handleChange];
};
