"use client";

import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const listItemStyle =
  "flex w-16 mx-1 px-2 py-1 rounded-md items-center justify-center duration-500 transition-all hover:underline hover:underline-offset-8 hover:decoration-brandWhite hover:transition-delay-500";

const activeItemStyle =
  "flex w-16 mx-1 px-2 py-1 rounded-md items-center justify-center transition-colors duration-500 transition-all transition-delay-500 text-brandRed bg-brandWhite";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center fixed w-screen shadow-lg bg-brandRed px-10 h-14">
      <div>
        <Image
          src="/assets/logo/roofus_logo_white.png"
          alt="logo"
          width={64}
          height={64}
        />
      </div>
      <ul
        className={`${roboto.className} flex text-brandWhite text-lg h-full items-center`}
      >
        <li className={pathname === "/" ? activeItemStyle : listItemStyle}>
          <Link href="/">Home</Link>
        </li>
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
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
