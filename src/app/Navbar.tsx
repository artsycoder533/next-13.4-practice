"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { AiFillCaretDown } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [showSubNav, setShowSubNav] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="bg-black text-white w-full">
      <nav
        className="p-4 flex flex-col md:flex-row relative md:items-center md:justify-between max-w-7xl w-[90vw]: mx-auto"
        id="navbar"
      >
        <div className="flex flex-row justify-between items-center">
          <Link href="/" className="flex flex-row items-center space-x-2">
            <SiNextdotjs className="text-2xl" />
            <h2>Next.js 13.4 Image Galery</h2>
          </Link>

          <button aria-label={openNav ? "Close Menu" : "Open Menu"}>
            <span className="sr-only">Menu</span>
            {openNav ? (
              <RxCross2
                onClick={() => setOpenNav(!openNav)}
                className="md:hidden"
              />
            ) : (
              <RxHamburgerMenu
                className="md:hidden"
                onClick={() => setOpenNav(!openNav)}
              />
            )}
          </button>
        </div>

        <ul
          className={`absolute w-full flex flex-col space-y-5 items-center overflow-hidden md:h-auto  ${
            openNav
              ? "py translate-x-0 duration-300 ease-in-out top-full left-0 bg-black"
              : "-translate-x-full md:translate-x-0 h-0"
          } md:static md:w-auto md:flex-row md:space-x-4 md:space-y-0 md:items-center md:overflow-visible`}
        >
          <Link
            href="/"
            className={`
              ${
                pathname === "/"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            href="/static"
            className={`
              ${
                pathname === "/static"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
            aria-current={pathname === "/static" ? "page" : undefined}
          >
            Static
          </Link>
          <Link
            href="/dynamic"
            className={`
              ${
                pathname === "/dynamic"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
            aria-current={pathname === "/dynamic" ? "page" : undefined}
          >
            Dynamic
          </Link>
          <Link
            href="/isr"
            className={`
              ${
                pathname === "/isr"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
            aria-current={pathname === "/isr" ? "page" : undefined}
          >
            ISR
          </Link>
          <Link
            href="/fsfsf"
            className={`
              ${
                pathname === "/fsfsf"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
            aria-current={pathname === "/fsfsf" ? "page" : undefined}
          >
            Not Found
          </Link>
          <Link
            href="/search"
            className={`
              ${
                pathname === "/search"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
            aria-current={pathname === "/search" ? "page" : undefined}
          >
            Search
          </Link>
          <button
            onClick={() => setShowSubNav(!showSubNav)}
            className="flex flex-row items-center w-24"
          >
            Topics <AiFillCaretDown className="ml-2" />
          </button>
          <ul
            className={` md:absolute right-0 top-10  bg-slate-800 md:bg-black w-full md:w-24 flex flex-col items-center p-1  ${
              showSubNav ? "block" : "hidden"
            }`}
          >
            <li className="block p-2">
              <Link
                href="/topics/money"
                className={`
              ${
                pathname === "/topics/money"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
                aria-current={pathname === "/topics/money" ? "page" : undefined}
              >
                Money
              </Link>
            </li>
            <li className="block p-2">
              <Link
                href="/topics/fitness"
                className={`
              ${
                pathname === "/topics/fitness"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
                aria-current={
                  pathname === "/topics/fitness" ? "page" : undefined
                }
              >
                Fitness
              </Link>
            </li>
            <li className="block p-2">
              <Link
                href="/topics/coding"
                className={`
              ${
                pathname === "/topics/coding"
                  ? "text-blue-500 font-semibold underline underline-offset-4"
                  : ""
              }`}
                aria-current={
                  pathname === "/topics/coding" ? "page" : undefined
                }
              >
                Coding
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
