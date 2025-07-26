"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

import BarsIcon from "@/public/icons/BarsIcon";
import XMarkIcon from "@/public/icons/X-markIcon";

type HeaderProps = {
  isBgTransparent?: boolean;
};

const Header = ({ isBgTransparent = false }: HeaderProps) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-999 ${isBgTransparent ? 'bg-transparent' : 'bg-[radial-gradient(127.46%_109.43%_at_0%_100%,#0072BC_0%,#000_100%)]'} py-5 lg:py-5 px-10  text-cvut-white`}>
      <div className="flex items-center justify-between">
        <Link href="/">
          <img
            className="h-10 lg:h-16 w-auto"
            src="/logos/Logo.svg"
            alt="ČVUT logo"
          />
        </Link>

        <button className={`${isMenuOpen ? 'hidden' : 'block'} sm:hidden`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BarsIcon />
        </button>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute z-50 bg-cvut-black/60 sm:bg-transparent right-0 top-0 py-5 px-10 sm:py-0 sm:px-0 flex-col gap-8 sm:flex sm:flex-row sm:static`}>
          <div className="flex justify-end mt-1 sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <XMarkIcon />
            </button>
          </div>
          <Link href="/ingine" className="heading6 link">Ingine</Link>
          <Link href="/transfer" className="heading6 link">Transfer</Link>
          <Link href="/inqbay" className="heading6 link">Inqbay</Link>
          <Link href="/#Konzultace" className="heading6 link">Kontakt</Link>
        </nav>



      </div>
    </header>
  );
};

export default Header;