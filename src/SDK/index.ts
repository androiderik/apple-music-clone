//Author: Erik Rodriguez
import { useEffect } from "react";
import axios from "axios";

const Request = (url: string, method: string, body: any) => {

  useEffect(() => {
    async function fetchAPI() {
         try {
          switch(method) {
            case 'GET':
              let response = await fetch(url, {
               method,
               headers: {
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*",
               },
               credentials: "include",
             });

             if (!response.ok) {
               throw new Error(response.status);
             }

             const json = await response.json();

          
             return json;

            case 'POST':

             let postResponse = await fetch(url, {
               method,
               body: JSON.stringify(body),
               headers: {
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*",
               },
               credentials: "include" //in order to set cookies in browser if there are from the server
             });

             if (!postResponse.ok) {
               throw new Error(postResponse.status);
             }

             const postJson = await postResponse.json();

       
             return postJson;

            default: null
          }
         } catch (error) {
           console.log(error);
         }

        
    }
    fetchAPI();
   
  }, [url]);

}

export default Request;