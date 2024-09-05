import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world </h1>
      <Link href="/browse">Listen Now</Link>
      <Link href="/browse">Browse</Link>
      <Link href="/browse">Radio</Link>
      <Link href="/contact-book">Contact book</Link>
      <Link href="/tic-tac-toe">Tic tac toe</Link>
      <Link href="/user-dashboard">User dashboard</Link>
      <Link href="/users">Users</Link>
      <Link href="/register-user">Register Users</Link>
      <Link href="/inventory">Inventory</Link>
      <Link href="/login">Login</Link>
    </main>
  )
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
