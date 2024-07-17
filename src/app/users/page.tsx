//Author: Erik Rodriguez
import React from "react";
import Users from "../../containers/Users";
import Link from "next/link";
function GetUsers() {
  return (
    <div className="dash-title">
      Users
      <Users />
      <Link href="/">Back to home</Link>
    </div>
  );
}

export default GetUsers;
