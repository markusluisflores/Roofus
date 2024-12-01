"use client";

import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { redirect, usePathname } from "next/navigation";
import { useUserAuth } from "@/_utils/auth-context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Login from "./login";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const listItemStyle =
  "flex w-18 mx-2 px-2 py-1 rounded-md items-center justify-center duration-500 transition-all hover:underline hover:underline-offset-8 hover:decoration-brandWhite hover:transition-delay-500 text-xl";

const activeItemStyle =
  "flex w-18 mx-2 px-2 py-1 rounded-md items-center justify-center transition-colors duration-500 transition-all transition-delay-500 text-brandRed bg-brandWhite text-xl font-bold";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const { user, firebaseSignOut } = useUserAuth();

  async function handleSignOut() {
    try {
      await firebaseSignOut();
      redirect('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <nav className="flex justify-between items-center fixed w-screen shadow-lg bg-brandRed px-10 h-20 z-30">
        <Link href="/">
          <Image
            src="/assets/logo/roofus_logo_white.png"
            alt="logo"
            width={120}
            height={120}
          />
        </Link>
        <ul
          className={`${roboto.className} flex text-brandWhite text-lg h-full items-center`}
        >
          <li className={pathname === "/" ? activeItemStyle : listItemStyle}>
            <Link href="/">Home</Link>
          </li>
          {
            user &&
            <li className={pathname === "/dashboard" ? activeItemStyle : listItemStyle}>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          }

          <li
            className={
              pathname === "/pets-for-adoption" ? activeItemStyle : listItemStyle
            }
          >
            <Link href="/pets-for-adoption">Adopt</Link>
          </li>
          <li className={pathname === "/about" ? activeItemStyle : listItemStyle}>
            <Link href="/about">About</Link>
          </li>
          <li className={pathname === "/login" ? activeItemStyle : listItemStyle}>
            {
              user ?
                (
                  <button onClick={handleSignOut}>Logout</button>
                ) : (
                  <button onClick={openLogin}>Login</button>
                )

            }

          </li>
        </ul>
      </nav>
      {isLoginOpen && <Login closeLoginModal={closeLogin} />}
    </>
  );
}
