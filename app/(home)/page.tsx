import styles from "./homepage.module.css";
import "@/app/styles/globals.css";

import ContactForm from "./components/contactForm";
import ContactCard from "./components/contactCard";
import { Carousel } from "./components/carousel";
import ProcessSection from "./components/processSection";

import Button from "@/app/components/button";

export default function Home() {
  return (
    <main className="w-full">
      <section id="vitejte" className={`${styles.hero} flex flex-col gap-20 h-[100svh] justify-center md:gap-10 md:pt-10
                                                       px-8 sm:px-14 md:px-20 lg:px-32`}>
        <div className="flex flex-col gap-8 md:gap-2">
          <p className="body-l text-cvut-blue-light">Vítejte v centru</p>
          <h1 className="text-cvut-white">Transferu technologií</h1>
          <p className="body-l text-cvut-blue-light">Místě, kde posouváme hranice vědy <br /> a oživujeme inovace.</p>
        </div>
        <Button isLink label="chci konzultaci" bgColor="y" href="#contact" />
      </section>

      <section id="Reference" className="flex flex-col gap-8 items-center py-8 xl:py-24">
        <h2>Úspěšné realizace</h2>
        <Carousel />
      </section>

      <ProcessSection />

      <section id="mission" className="flex flex-col items-center not-xl:mx-4 my-8 md:my-16">
        <div className="w-[100%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] bg-cvut-blue-lighter p-2 md:p-8 lg:p-12 rounded-[40px] flex flex-col md:flex-row md:gap-10 lg:justify-between items-center">
          <div className="flex flex-col gap-4 md:gap-10 p-4 w-full lg:w-[50%]">
            <img className="w-full object-cover lg:hidden rounded-[40px]" src="images/mise.jpg" alt="alt text" />
            <h2>Mise</h2>
            <p className="body-m">Naší misí je přinášet nápadům život. Transfer technologií na ČVUT je tu pro to, aby spojoval akademický svět s byznysem, inspiroval spolupráci a otevíral dveře inovacím.</p>
            <p className="body-m">Poslední dobou jsme přešli z teorie k akci. Nejenže vytahujeme skvělé nápady z našich laboratoří a posíláme je do světa, ale taky nasloucháme, co trh potřebuje, a tyhle podněty přinášíme zpět k našim vědcům a studentům.</p>
            <p className="body-m">Chceme, aby dobré nápady nekončily na papíře. Máte něco, co by mohlo změnit svět, nebo potřebujete pomoci s vaší vizí? Stavte se, rádi si popovídáme.</p>
          </div>
          <img className="hidden lg:block md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-[40px] object-cover" src="images/mise.jpg" alt="alt text" />
        </div>
      </section>

      <section id="contact" className="flex flex-col gap-10 px-8 sm:px-14 md:px-20 lg:px-32 pt-8 mb-16 md:mb-32 items-center justify-center">
        <h2 className="w-fit">Ozvěte se nám</h2>
        <p className="text-center body-l">Nechte nám zprávu a info kam a kdy se máme ozvat. Nebo rovnou zavolejte Ondrovi.</p>
        <ContactForm />
        <ContactCard />
      </section>
    </main>
  );
}
