//Author: Erik Rodriguez

import React from "react";
import Login from "../../containers/Login";
import Link from "next/link";
function LoginUser() {
  return (
    <div className="dash-title">
      Login
      <Login />
      <Link href="/">Back to home</Link>
    </div>
  );
}

export default LoginUser;
