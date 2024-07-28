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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world </h1>
      <Link href="/browse">Listen Now</Link>
      <Link href="/browse">Browse</Link>
      <Link href="/browse">Radio</Link>
      <Link href="/users">Users</Link>
      <Link href="/login">Login</Link>
    </main>
  );
}

//Author: Erik Rodriguez
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import Navigation from "../components/Navigation";
// import { LogoAppleMusic } from "../components/LogoAppleMusic";

// import App from "./App";

// const rootElement = document.getElementById("root")!;
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <LogoAppleMusic />
//       <App />
//       <Navigation />
//     </BrowserRouter>
//   </StrictMode>,
// );
