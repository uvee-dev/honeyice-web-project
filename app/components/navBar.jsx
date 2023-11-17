"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {

  return (
    <nav className="flex dark:text-white items-center w-screen md:px-24 xl:px-72 justify-between align-middle">
      <div>
        <Link href={"/"}>
          <p className="font-semibold uppercase">honeyïce</p>
        </Link>
      </div>
      <div className="md:w-44 md:flex justify-between hidden">
        <Link
          className="hover:text-black/50 dark:hover:text-white/50 font-semibold"
          href={"/shop"}
        >
          shop
        </Link>
        <Link
          className="hover:text-black/50 dark:hover:text-white/50 font-semibold"
          href={"/gallery"}
        >
          gallery
        </Link>
        <Link
          className="hover:text-black/50 dark:hover:text-white/50 font-semibold"
          href={"/about"}
        >
          about
        </Link>
      </div>
      <div>
      </div>
    </nav>
  );
};

export default NavBar;

