/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Roboto } from "next/font/google";
import { redirect, usePathname } from "next/navigation";
import { useUserAuth } from "@/_utils/auth-context";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Login from "./login";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const listItemStyle =
  "flex mx-1 px-2 py-1 rounded-md items-center justify-center duration-500 transition-all hover:underline hover:underline-offset-8 hover:decoration-brandWhite hover:transition-delay-500 text-lg";

const activeItemStyle =
  "flex mx-1 px-2 py-1 rounded-md items-center justify-center transition-colors duration-500 transition-all transition-delay-500 text-brandRed bg-brandWhite text-lg font-bold";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, firebaseSignOut } = useUserAuth();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [navigationItems, setNavigationItems] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Adopt", href: "/pets-for-adoption", current: false },
    { name: "About", href: "/about", current: false },
  ]);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  async function handleSignOut() {
    try {
      await firebaseSignOut();
      redirect("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  useEffect(() => {
    setNavigationItems(() => {
      const defaultItems = [
        { name: "Home", href: "/", current: true },
        { name: "Adopt", href: "/pets-for-adoption", current: false },
        { name: "About", href: "/about", current: false },
      ];
      const conditionalItems = user
        ? [
            { name: "Dashboard", href: "/dashboard", current: false },
            { name: "Logout", href: "#", current: false },
          ]
        : [{ name: user ? "Logout" : "Login", href: "#", current: false }];
      return [...defaultItems, ...conditionalItems];
    });
  }, [user]);

  return (
    <>
      <Disclosure as="nav" className="bg-brandRed">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="/assets/logo/roofus_logo_white.png"
                  className="h-16 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block self-center">
                <div className="flex space-x-4">
                  {navigationItems.map((item) => {
                    item.href === pathname
                      ? (item.current = true)
                      : (item.current = false);
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => {
                          switch (item.name) {
                            case "Login":
                              openLogin();
                            case "Logout":
                              handleSignOut();
                            default:
                              null;
                          }
                        }}
                        className={classNames(
                          item.current
                            ? "bg-brandWhite text-brandRed"
                            : "text-gray-300 hover:underline underline-offset-4 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            {navigationItems.map((item) => {
              item.href === pathname
                ? (item.current = true)
                : (item.current = false);
              return (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-brandWhite text-brandRed"
                      : "text-gray-300 hover:underline underline-offset-4 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
      {/* <nav className="flex justify-between items-center fixed w-screen shadow-lg bg-brandRed px-10 h-20 z-30">
        <Link href="/">
          <Image
            src="/assets/logo/roofus_logo_white.png"
            alt="logo"
            width={96}
            height={96}
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
      </nav> */}
      {isLoginOpen && <Login closeLoginModal={closeLogin} />}
    </>
  );
}
