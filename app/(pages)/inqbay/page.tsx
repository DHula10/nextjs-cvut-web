
import styles from './inqbay.module.css';
import Button from '@/app/components/button';
import { Metadata } from 'next';

import InqbayClient from './inqbay-client';


export const metadata: Metadata = {
    title: 'Inqbay | Odbor transferu technologií a fundraisingu ČVUT',
    description: 'Lorem Ipsum',
}

export default function InqbayPage() {

  return (
    <main>
      <section className={`${styles.hero} flex flex-col h-svh justify-center pl-20 lg:pl-32 md:pt-10`}>
        <div className='relative flex flex-col gap-8 z-50'>
          <h6 className='text-cvut-green uppercase'>#transfer</h6>
          <h2 className='text-4xl font-bold md:max-w-3/4 uppercase lg:max-w-5/6 xl:max-w-3/4'>Opřete se o důvěryhodné zdroje ještě před realizací</h2>
          <p className='body-l w-[75%]'>Připravili jsme pro vás bezplatnou digitální databázi se stovkami článků, přednášek, podcastů a nástrojů, které vám pomůžou začít smysluplně.</p>
          <Button isLink label="PROZKOUMAT KNIHOVNU" bgColor="g" href="#category" inverse />
        </div>
      </section>

      <InqbayClient />

      <section className={`${styles.uniLion} mt-30 mb-20`}>
        <div className='ml-[11%]'>
          <h4>Zjednodušte si život s UniLion</h4>
          <p className='body-l mt-5 w-[40%]'>
            Organizujte své studium, sledujte termíny a udržujte přehled o všem důležitém na jednom místě.
          </p>
          <div className={`${styles.storeButtons} mt-10`}>
            <a href="" className={styles.storeButton}><img src="/imgs/appStore.svg" alt="App Store" /></a>
            <a href="" className={styles.storeButton}><img src="/imgs/googlePlay.png" alt="Google Play" /></a>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-20">
        <article className={`${styles.realisationArticle} flex flex-col gap-5 items-center`}>
          <h3 className={`text-center min-w-full`}>
            Chcete probrat realizaci
            <br />
            vašeho nápadu s odborníkem?
          </h3>
          <p className={`body-l mb-10`}>
            Domluvme si online konzultaci, během které se seznámíme
            s vaším projektem a probereme potentiální postup.
          </p>

          <Button isLink label="Domluvit konzultaci" bgColor="g" href="https://outlook.office365.com/book/TransferVUT@campuscvut.onmicrosoft.com/?ismsaljsauthenabled=true" target="_blank" inverse />
        </article>
      </section>
    </main>
  );
}