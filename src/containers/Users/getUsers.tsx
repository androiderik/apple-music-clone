//Author: Erik Rodriguez
'use client'; // This is a client component 

async function getData() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    credentials: "include",
  };

  const response = fetch(
    "http://localhost:8080/users",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export default async function getUsers() {
  const data = await getData();
  return data;
}