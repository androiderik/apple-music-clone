//Author: Erik Rodriguez
import { useEffect, useReducer } from "react";
import axios from "axios";
import dataReducer, { FETCH_SUCCESS, FETCH_ERROR } from "./dataReducer";

const useRequest = (url : string) => {
  const [state, dispatch] = useReducer(dataReducer, {
    loading: true,
    error: "",
    post: {},
  });
  useEffect(() => {
    axios({
      url,
      method: "GET",
    })
      .then((result) => {
        console.log(result, "result");
        dispatch({ type: FETCH_SUCCESS, payload: result.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, error: err });
      });
  }, [url]);

  return {
    state,
  };
};

export default useRequest;