import React from "react";
import Link from "next/link";

type HeaderProps = {
  isBgTransparent?: boolean;
};

const Header = ({ isBgTransparent = false }: HeaderProps) => {
  return (
    <header className={`absolute top-0 left-0 w-full z-50 ${isBgTransparent ? 'bg-transparent' : 'bg-[radial-gradient(127.46%_109.43%_at_0%_100%,#0072BC_0%,#000_100%)]'} py-5 px-10 text-white`}>
      <div className="w-full mx-auto flex items-center justify-between">
        <Link href="/">
          <img
            className="h-16 w-auto"
            src="logos/Logo.svg"
            alt="ČVUT logo"
          />
        </Link>

        <nav className="flex gap-8 w-2/5 justify-start">
          <Link href="#ambice" className="heading6 link">Ambice</Link>
          <Link href="#co-delame" className="heading6 link">Co děláme</Link>
          <Link href="#realizace" className="heading6 link">Realizace</Link>
          <Link href="#kontakt" className="heading6 link">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;