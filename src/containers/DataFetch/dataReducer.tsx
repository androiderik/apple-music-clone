//Author: Erik Rodriguez
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

const dataReducer = (state: any, action: any) => {
  // reducer is going to update part of the global state
  // action.type is defining what is to be updated
  // reducer returns the new state
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        post: action.payload,
        error: "something went wrong",
      };
    default:
      return state;
  }
};

export default dataReducer;
