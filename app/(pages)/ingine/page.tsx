import type { Metadata } from 'next'
import Button from '@/app/components/button';
import styles from "./ingine.module.css";

import ContactForm from './components/contactForm';
import ChecklistSection from './components/checklist-section';

import CircleWavyCheckIcon from '@/public/icons/CircleWavyCheckIcon';
import RocketIcon from '@/public/icons/RocketIcon';
import UserCircleGearIcon from '@/public/icons/UserCircleGearIcon';

export const metadata: Metadata = {
  title: 'Ingine | Odbor transferu technologií a fundraisingu ČVUT',
  description: 'Lorem Ipsum',
}

export default function InginePage() {

  return (
    <main className='w-full'>

      <section id='hero' className={`${styles.hero} flex flex-col h-svh justify-center md:pt-10
                                                    pl-8 sm:pl-14 md:pl-20 lg:pl-32`}>
        <div className='relative flex flex-col gap-8 z-50'>
          <h6 className='text-cvut-red'>#Ingine</h6>
          <h2 className='text-4xl font-bold max-w-3/4 md:max-w-3/4 lg:max-w-5/6 xl:max-w-3/4'>Připravte se získat financování</h2>
          <p className='body-l'>Pomůžeme vám splnit všechny klíčové požadavky <br /> a najít ty správné investory a partnery.</p>
          <Button isLink label="Zkontrolujte svůj projekt" bgColor="r" href="#Kontrola" inverse />
        </div>
      </section>

      <ChecklistSection />

      <section id='support' className={`${styles.support} flex flex-col justify-center py-16 lg:h-svh`}>
        <div className="flex flex-col gap-10 z-50">
          <h3 className="ml-8 sm:ml-16 md:ml-20 lg:ml-32">Jak vás v této fázi podpoříme</h3>

          <div className="flex flex-row gap-4 bg-cvut-red/20 backdrop-blur-md py-5 
                          pl-8 sm:pl-16 md:pl-20 lg:pl-32
                          rounded-r-full w-full md:w-9/12 lg:w-9/12 xl:w-7/12 items-center">
            <div className="min-w-14 h-14 text-cvut-red"><RocketIcon /></div>
            <span className="body-l whitespace-normal max-w-[80%] pr-5">
              Poskytneme nástroje a podporu, které akcelerují růst vašeho projektu.
            </span>
          </div>

          <div className="flex flex-row gap-4 bg-cvut-red/20 backdrop-blur-md py-5
                          pl-8 sm:pl-16 md:pl-20 lg:pl-32
                          rounded-r-full 
                          w-full md:w-10/12 xl:w-8/12 items-center text-xl">
            <div className="min-w-14 h-14 text-cvut-red"><CircleWavyCheckIcon /></div>
            <span className="body-l whitespace-normal max-w-[80%] pr-5">
              Nabídneme expertní analýzu a strategické poradenství k efektivní komercializaci.
            </span>
          </div>

          <div className="flex flex-row gap-4 bg-cvut-red/20 backdrop-blur-md py-5
                          pl-8 sm:pl-16 md:pl-20 lg:pl-32
                          rounded-r-full w-full md:w-11/12 lg:w-11/12 xl:w-9/12 items-center">
            <div className="min-w-14 h-14 text-cvut-red"><UserCircleGearIcon /></div>
            <span className="body-l whitespace-normal max-w-[80%] pr-5">
              Zhodnotíme připravenost vašeho projektu na úspěšnou prezentaci před investory.
            </span>
          </div>
        </div>
      </section>

      <section id='request-investment' className="flex flex-col gap-10 mt-8 mb-32
                                                  px-8 sm:px-14 md:px-20 lg:px-32">
        <h3 className='text-cvut-black'>Požádejte o investici</h3>
        <p className='body-m'>Vyplňte krátký formulář a my vám zašleme potvrzení spolu s dalším postupem.</p>
        <ContactForm />
      </section>

    </main>
  );
}