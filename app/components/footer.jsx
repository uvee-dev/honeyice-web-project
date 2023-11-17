import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='flex justify-between dark:text-white w-screen px-8 py-10 md:px-24 xl:px-72 xl:pb-16'>
      <div className="flex w-24 justify-between">
        <Link className="hover:text-black/50 dark:hover:text-white/50 font-semibold" href={'/shop'}>
          shop
        </Link>
        <Link className="hover:text-black/50 dark:hover:text-white/50 font-semibold" href={'/about'}>
          about
        </Link>
      </div>
      <div>
        <a href='mailto:contact@honey.com?subject=ESTO VA A QUEDAR DE PINGA' className="hover:text-black/50 dark:hover:text-white/50 font-semibold">
          get in touch
        </a>
      </div>
    </footer>
  );
};

export default Footer;