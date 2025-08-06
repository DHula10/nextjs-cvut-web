"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import BarsIcon from "@/public/icons/BarsIcon";
import XMarkIcon from "@/public/icons/X-markIcon";

type HeaderProps = {
  isBgTransparent?: boolean;
};

const Header = ({ isBgTransparent = false }: HeaderProps) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links configuration
  const navLinks = [
    { href: "/inqbay", label: "Inqbay", color: "cvut-green" },
    { href: "/transfer", label: "Transfer", color: "cvut-yellow" },
    { href: "/ingine", label: "Ingine", color: "cvut-red" },
    { href: "/#contact", label: "Kontakt", color: "cvut-blue-light" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 50;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper function to check if link is active
  const isActiveLink = (href: string) => {
    if (href === "/#contact") {
      return false; // Handle contact link separately since it's a hash link
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 z-999 text-cvut-white will-change-transform transition-all ${
        // Default header styling (when not scrolled or transparent)
        isBgTransparent && !isScrolled 
          ? 'bg-transparent w-full py-5 px-10 duration-300 ease-in-out' 
          : isScrolled 
            ? 'bg-cvut-black/50 backdrop-blur-xl shadow-lg w-full rounded-b-xl md:w-3/4 md:rounded-4xl md:overflow-clip md:mt-4 md:mx-auto md:left-1/2 md:-ml-[37.5%] py-5 md:py-3 px-10 transition-all duration-300 ease-in-out'
            : 'bg-[radial-gradient(127.46%_109.43%_at_0%_100%,#0072BC_0%,#000_100%)] w-full py-5 lg:py-5 px-10 transition-all duration-300 ease-in-out'
      }`}>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              className="h-12 lg:h-16 w-auto"
              src="/logos/Logo.svg"
              alt="ČVUT logo"
            />
          </Link>

          <button className={`${isMenuOpen ? 'hidden' : 'block'} md:hidden cursor-pointer`} onClick={() => setIsMenuOpen(true)}>
            <BarsIcon />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-row gap-8">
            {navLinks.map((link) => (
                <Link 
                key={link.href}
                href={link.href} 
                className={`heading6 link hover:text-${link.color} after:bg-${link.color} ${
                  isActiveLink(link.href) ? `text-${link.color}` : ''
                }`}
                >
                {link.label}
                </Link>
            ))}
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
      <div className={`fixed top-0 right-0 h-full w-full bg-cvut-black/70 backdrop-blur-2xl transform transition-transform duration-300 ease-in-out z-999 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full text-cvut-white">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b border-cvut-gray/20">
            <img
              className="h-12 w-auto"
              src="/logos/Logo.svg"
              alt="ČVUT logo"
            />
            <button className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <XMarkIcon />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href === "/#contact" ? "/#Konzultace" : link.href}
                className={`heading5 link py-3 border-b border-cvut-gray/20 ${
                  isActiveLink(link.href) ? `text-${link.color}` : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
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