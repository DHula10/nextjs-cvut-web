import "@/app/styles/globals.css";
import "@/app/styles/variables.css";
import Link from 'next/link'
import Button from './components/button'
import { Metadata } from 'next'

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: 'Stránka nenalezena | Transfer Technologií ČVUT',
  description: 'Požadovaná stránka nebyla nalezena. Vraťte se na hlavní stránku Transfer Technologií ČVUT nebo prozkoumejte naše služby.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-14 md:px-20 lg:px-32 bg-gray-50">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl font-bold text-cvut-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Stránka nenalezena</h2>
          <p className="body-l text-gray-600 mb-8">
            Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              isLink
              label="Zpět na hlavní stránku"
              bgColor="o"
              href="/"
              inverse
            />
            <Button
              isLink
              label="Kontaktujte nás"
              bgColor="y"
              href="/#contact"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Možná vás bude zajímat:</h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <Link href="/ingine" className="text-cvut-red hover:underline">
                Ingine - Fundraising
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/transfer" className="text-cvut-yellow hover:underline">
                Transfer - Validace nápadů
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/inqbay" className="text-cvut-green hover:underline">
                Inqbay - Knihovna zdrojů
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}