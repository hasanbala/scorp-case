import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <UserContext.Provider
      value={{
        loginName,
        setLoginName,
        loginEmail,
        setLoginEmail,
        isLogin,
        setIsLogin,
        showModal,
        setShowModal,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
