import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get initial users(testing purpose)
  const fetchUsers = async () => {
    setLoading();
    const res = await fetch(`http://api.github.com/users`);

    const data = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SER_LOADING",
    });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
