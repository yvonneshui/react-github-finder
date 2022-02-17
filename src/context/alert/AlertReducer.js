//check the action type
//update state object
//return the state-goes back to provider value

const AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};
export default AlertReducer;
