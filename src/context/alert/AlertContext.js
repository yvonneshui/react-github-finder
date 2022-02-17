import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState); //dispatch sends the actions to the reducer and then makes changes to the state

  //Set an alert
  const setAlert = (msg, errType) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, errType },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContext;
