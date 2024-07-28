//Author: Erik Rodriguez
'use client'; // This is a client component 👈🏽

import React from 'react';
import Request from '../../SDK';
import { useEffect } from 'react';


function Users() {

  useEffect(()=> {
    async function fetchUsers() {
      let response = await fetch('http://localhost:8080/users', {
               method: 'GET',
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
    }
    fetchUsers();

  }, [])

//   const users= Request(
//     'http://localhost:8080/users',
//     'GET',
//     null
//   );
//  console.log(users, 'state')

  return null;
}

export default Users;
