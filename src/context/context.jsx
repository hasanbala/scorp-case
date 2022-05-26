import { useLogHook } from "hooks/useLogHook";
import { useContext, createContext } from "react";

export const UserContext = createContext();
export const useAppContext = () => useContext(UserContext);
const initialLogValues = { logname: "", logmail: "", log: false };

export const UserContextProvider = ({ children }) => {
  const [log, setLog] = useLogHook(initialLogValues);
  const contextValue = {
    log,
    setLog,
    initialLogValues,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
