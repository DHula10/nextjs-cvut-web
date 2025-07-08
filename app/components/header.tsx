import React from "react";
import Link from "next/link";

type HeaderProps = {
  isBgTransparent?: boolean;
};

const Header = ({ isBgTransparent = false }: HeaderProps) => {
  return (
    <header className={`absolute top-0 left-0 w-full z-50 ${isBgTransparent ? 'bg-transparent' : 'bg-[radial-gradient(127.46%_109.43%_at_0%_100%,#0072BC_0%,#000_100%)]'} py-2 lg:py-5 px-10  text-cvut-white`}>
      <div className="flex items-center justify-between">
        <Link href="/">
          <img
            className="h-10 lg:h-16 w-auto"
            src="logos/Logo.svg"
            alt="ČVUT logo"
          />
        </Link>

        <nav className="flex gap-8">
          <Link href="/ingine" className="heading6 link">Ingine</Link>
          <Link href="/transfer" className="heading6 link">Transfer</Link>
          <Link href="/inqbay" className="heading6 link">Inqbay</Link>
          <Link href="/invoice" className="heading6 link">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;