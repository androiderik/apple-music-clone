//Author: Erik Rodriguez
import { useEffect } from "react";
import axios from "axios";

const useRequest = (url : string) => {

  useEffect(() => {
    axios({
      url,
      method: "GET",
    })
      .then((result) => {
        console.log(result, "result");
      })
      .catch((err) => {
      });
  }, [url]);

};

export default useRequest;