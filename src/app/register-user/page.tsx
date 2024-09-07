//Author: Erik Rodriguez

import React from "react";
import RegisterUser from "../../containers/RegisterUsers";
import Link from "next/link";

function Register() {
    return (
        <div className="dash-title">
            Register
            <RegisterUser />
            <Link href="/">Back to home</Link>
        </div>
    );
}

export default Register;
