import styles from "./homepage.module.css";
import "@/app/styles/globals.css";

import ContactForm from "./components/contactForm";
import ContactCard from "./components/contactCard";

import Button from "@/app/components/button";

export default function Home() {
  return (
    <main className="w-full">
      <section id="vitejte" className={`${styles.hero} flex flex-col gap-20 pl-32 h-svh justify-center md:gap-10 md:pl-20 md:pt-10`}>
        <div className="flex flex-col gap-8 md:gap-2">
          <p className="body-l text-cvut-blue-light">Vítejte v centru</p>
          <h1 className="text-cvut-white">Transferu technologií</h1>
          <p className="body-l text-cvut-blue-light">Místě, kde posouváme hranice vědy <br /> a oživujeme inovace.</p>
        </div>
        <Button isLink label="chci konzultaci" bgColor="y" href="#konzultace" />
      </section>

      <section id="mise" className="flex flex-col items-center py-16 xl:py-32">

        <div className="bg-cvut-blue-light/40 p-12 w-[90%] rounded-[40px] flex gap-10 justify-between items-center xl:w-[75%] xl:p-20">

          <div className="flex flex-col gap-10 w-[50%]">

            <h2>Mise</h2>
            <p className="body-m">Naší misí je přinášet nápadům život. Transfer technologií na ČVUT je tu pro to, aby spojoval akademický svět s byznysem, inspiroval spolupráci a otevíral dveře inovacím.</p>
            <p className="body-m">Poslední dobou jsme přešli z teorie k akci. Nejenže vytahujeme skvělé nápady z našich laboratoří a posíláme je do světa, ale taky nasloucháme, co trh potřebuje, a tyhle podněty přinášíme zpět k našim vědcům a studentům.</p>
            <p className="body-m">Chceme, aby dobré nápady nekončily na papíře. Máte něco, co by mohlo změnit svět, nebo potřebujete pomoci s vaší vizí? Stavte se, rádi si popovídáme.</p>
          </div>

          <img className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-[40px] object-cover" src="images/mise.jpg" alt="Slečna s prostetickou rukou." />
        </div>
      </section>

      <section id="Proces" className="flex mx-32 mb-32 flex-col gap-20 items-center md:mx-10">
        <h2>Jak začít s péčí o nápad</h2>
        <div className="w-full flex flex-col gap-20">
          <div className="w-full h-0 flex flex-row">
            <div className="w-1/4 h-full">
              <h6 className="absolute text-cvut-black">Mám nápad!</h6>
              <span className="absolute translate-y-[152px] rounded-full z-50 bg-cvut-green w-10 h-10"></span>
            </div>
            <div className="w-1/4 h-full">
              <h6 className="absolute text-cvut-black">Chci mu dát <br /> formu</h6>
              <span className="absolute translate-y-[152px] rounded-full z-50 bg-cvut-yellow w-10 h-10"></span>
            </div>
            <div className="w-1/4 h-full">
              <h6 className="absolute text-cvut-black">Potřebuju ho <br /> ochránit</h6>
              <span className="absolute translate-y-[152px] rounded-full z-50 bg-cvut-orange w-10 h-10"></span>
            </div>
            <div className="w-1/4 h-full">
              <h6 className="absolute text-cvut-black">Jdu vydělávat</h6>
              <span className="absolute translate-y-[152px] rounded-full z-50 bg-cvut-red w-10 h-10"></span>
            </div>
          </div>

          <svg
            className="w-full h-[24px] mt-20"
            viewBox="0 0 1112 24"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1111.5 12.0012L1091.5 0.454215V23.5482L1111.5 12.0012ZM0.5 12.0012V14.0012H1093.5V12.0012V10.0012H0.5V12.0012Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0.5"
                x2="1"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop stopColor="#A0B102" />
                <stop offset="0.5" stopColor="#F9B002" />
                <stop offset="1" stopColor="#D70929" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-row gap-24 md:gap-12">
            <div className="w-1/3 flex flex-col gap-4">
              <h6 className="text-cvut-green">#INQBAY</h6>
              <h3 className="text-cvut-black">Připravujte</h3>
              <p className="text-cvut-black body-m">Získejte přístup do free online knihovny, která vám poskytne všechny potřebné podklady, díky kterým budete vědět, jak nápad připravit na další kroky. Navíc máte kdykoliv k dispozici odborníky, kteří vám rádi poradí a poskytnou zpětnou vazbu na vaše projekty.</p>
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <h6 className="text-cvut-yellow">#TRANSFER </h6>
              <h3 className="text-cvut-black">Validujte</h3>
              <p className="text-cvut-black body-m">Nechte si poradit, jak transformovat nápad do funkční formy a pomoct s právními náležitostmi, jako je ochrana duševního vlastnictví, registrace ochranné známky nebo smluvní zajištění s partnery.</p>
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <h6 className="text-cvut-red">#INGINE</h6>
              <h3 className="text-cvut-black">Připravujte</h3>
              <p className="text-cvut-black body-m">Získejte vstupní investici 25 000 EUR, mentory a poradce, kteří vám ukážou, jak projekt otestovat a získat první zákazníky. Taky vás připraví na další kola financování s napojením na investory.</p>
            </div>

          </div>

          <div className="flex flex-row gap-24 md:gap-12">
            <div className="w-1/3">
              <Button isLink label="více info" bgColor="g" inverse href="/inqbay" />
            </div>
            <div className="w-1/3">
              <Button isLink label="více info" bgColor="y" inverse href="/transfer" />
            </div>
            <div className="w-1/3">
              <Button isLink label="více info" bgColor="r" inverse href="/ingine" />
            </div>

          </div>

        </div>
      </section>

      <section id="Reference" className="flex flex-col gap-8 items-center pb-16 xl:pb-32">

        <h2>Úspěšné realizace</h2>
        <div className="bg-cvut-blue-light/40 p-12 w-[90%] rounded-[40px] flex gap-10 justify-between items-center xl:w-[75%] xl:p-20">

          <div className="flex flex-col gap-10 w-[50%]">
            <div className="flex flex-col gap-4">
              <div className="logo w-16 h-16 rounded-full bg-cvut-black text-cvut-white flex justify-center items-center">logo</div>
              <h3>Magu</h3>
            </div>
            <div className="flex flex-col gap-4">
              <h5>Kde jsme začínali?</h5>
              <p className="body-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>

            </div>
          </div>

          <img className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-[40px] object-cover" src="images/mise.jpg" alt="Slečna s prostetickou rukou." />
        </div>
      </section>

      <section id="Konzultace" className="flex flex-col gap-10 mx-16 xl:mx-32 pt-8 mb-32 items-center">
          <h2 className="w-fit">Ozvěte se nám</h2>
          <p className="body-l">Nechte nám zprávu a info kam a kdy se máme ozvat. Nebo rovnou zavolejte Ondrovi.</p>

          <ContactForm />

          <ContactCard />


      </section>

    </main>
  );
}
