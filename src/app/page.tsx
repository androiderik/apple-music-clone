"use client"; // This is a client component 👈🏽
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faHouse,
  faBox,
  faTowerBroadcast,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <div id="flex-start">
        <div className="left">
          {" "}
          <FontAwesomeIcon icon={faApple} /> Music
        </div>
      </div>

      <div id="flex-start">
        <div className="left">
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            value={value}
            onChange={onChange}
            type="text"
            name="Search"
            placeholder="Search"
          />
        </div>
      </div>
      <div id="flex-start">
        <div className="left">
          {" "}
          <Link href="/browse">
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
        </div>
      </div>

      <div id="flex-start">
        <div className="left">
          {" "}
          <Link href="/browse">
            <FontAwesomeIcon icon={faBox} /> Browse
          </Link>
        </div>
      </div>
      <div id="flex-start">
        <div className="left">
          {" "}
          <Link href="/browse">
            <FontAwesomeIcon icon={faTowerBroadcast} /> Radio
          </Link>
        </div>
      </div>
    </main>
  );
}
