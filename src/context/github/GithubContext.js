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

  //get single user
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);

    if (res.status === 404) {
      window.location = "./notfound";
    } else {
      const data = await res.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //Get user's repo
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const res = await fetch(
      `https://api.github.com/users/${login}/repos?${params}`
    );

    if (res.status === 404) {
      window.location = "./notfound";
    } else {
      const data = await res.json();
      dispatch({
        type: "GET_USER_REPO",
        payload: data,
      });
    }
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

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
