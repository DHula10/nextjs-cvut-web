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
    <>
      <header className={`fixed top-0 left-0 w-full z-999 ${isBgTransparent ? 'bg-transparent' : 'bg-[radial-gradient(127.46%_109.43%_at_0%_100%,#0072BC_0%,#000_100%)]'} py-5 lg:py-5 px-10  text-cvut-white`}>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              className="h-10 lg:h-16 w-auto"
              src="/logos/Logo.svg"
              alt="ČVUT logo"
            />
          </Link>

          <button className={`${isMenuOpen ? 'hidden' : 'block'} sm:hidden`} onClick={() => setIsMenuOpen(true)}>
            <BarsIcon />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex sm:flex-row gap-8">
            <Link href="/ingine" className="heading6 link">Ingine</Link>
            <Link href="/transfer" className="heading6 link">Transfer</Link>
            <Link href="/inqbay" className="heading6 link">Inqbay</Link>
            <Link href="/#Konzultace" className="heading6 link">Kontakt</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Side Sheet Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Side Sheet */}
      <div className={`fixed top-0 right-0 h-full w-full bg-cvut-black/70 backdrop-blur-2xl transform transition-transform duration-300 ease-in-out z-999 sm:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full text-cvut-white">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b border-cvut-gray/20">
            <img
              className="h-12 w-auto"
              src="logos/Logo.svg"
              alt="ČVUT logo"
            />
            <button onClick={() => setIsMenuOpen(false)}>
              <XMarkIcon />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-6 space-y-6">
            <Link 
              href="/ingine" 
              className="heading5 link py-3 border-b border-cvut-gray/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Ingine
            </Link>
            <Link 
              href="/transfer" 
              className="heading5 link py-3 border-b border-cvut-gray/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Transfer
            </Link>
            <Link 
              href="/inqbay" 
              className="heading5 link py-3 border-b border-cvut-gray/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Inqbay
            </Link>
            <Link 
              href="/#Konzultace" 
              className="heading5 link py-3 border-b border-cvut-gray/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>

          {/* Footer space for additional content if needed */}
          <div className="mt-auto p-6">
            <p className="text-sm text-cvut-gray">
              © 2024 ČVUT
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;