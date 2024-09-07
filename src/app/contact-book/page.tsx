//Author: Erik Rodriguez

import React from "react";
import { ContactBook } from "../../containers/contact-book";
import Link from "next/link";
function ContactUsers() {
  return (
    <div className="dash-title">
      Contact book|
      <ContactBook />
      <Link href="/">Back to home</Link>
    </div>
  );
}

export default ContactUsers;
