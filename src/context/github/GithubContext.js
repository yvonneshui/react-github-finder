import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // loading: state.loading,
        // repos: state.repos,
        //can be replaced by passing the whole state with spread operator
        ...state,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
        //can be replaced by dispatch(where all the functions are)
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
