import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Invoice',
    description: 'Lorem Ipsum',
}

export default function Invoice() {
    return (
        <main className="mx-auto mt-[120px] mb-[80px] w-full max-w-[1200px] flex flex-col items-start px-4 md:px-8">
            <div>
                <h2>Fakturační údaje</h2>
            </div>

            <div className="mt-12 w-full flex flex-col md:grid md:grid-cols-2 md:gap-12 lg:flex lg:flex-row gap-12 lg:gap-8 xl:gap-16">
                {/* ČVUT */}
                <article className="flex-1 min-w-0">
                    <h5>ČVUT</h5>
                    <address className="body-s mt-5 not-italic">
                        České vysoké učení technické<br />
                        v Praze se sídlem 160 00 Praha 6<br />
                        Dejvice, Jugoslávských partyzánů <br /> 1580/3
                    </address>
                    <ul className="body-s">
                        <li className='mt-6'>Zastupující: RNDr. Vojtěch Petráček, CSc., <br /> rektor</li>
                        <li className='mt-6'>IČ: 684 07 700</li>
                        <li>DIČ: CZ68407700</li>
                        <li className='mt-6'>
                            Veřejná vysoká škola uvedená v Příloze <br />č. 1 k zákonu č. 111/1998 Sb. o <br />
                            vysokých školách bankovní spojení: č.ú.: <br /> 19-5504780277/0100</li>
                        <li className='mt-6'>
                            Komerční banka, a.s.
                            <br />
                            Praha 1, Na Příkopě 33 čp. 969, 114 07,
                            <br />
                            P.O. BOX 839</li>
                        <li className='mt-6'>IČ: 45317054 | DIČ: CZ699001182</li>
                        <li className='mt-6'>
                            Zapsaná v obchodním rejstříku
                            <br />
                            vedeném Městským soudem v Praze
                            <br />
                            pod sp. zn. B 1360
                        </li>
                        <li className='mt-6'>ID datové schránky: 4ktes4W</li>
                        <li>Kód banky: 0100</li>
                        <li>BIC / SWIFT: KOMBCZPPXXX</li>
                    </ul>
                </article>

                {/* ČVUT Tech */}
                <article className="flex-1 min-w-0 mt-12 md:mt-0">
                    <h5>ČVUT Tech s.r.o</h5>
                    <address className="body-s mt-5 not-italic">
                        Jugoslávských partyzánů 1580/3,
                        <br />
                        Dejvice, 160 00 Praha 6
                    </address>
                    <ul className="body-s mt-6">
                        <li >IČO: 11825634</li>
                        <li>DIČ: CZ11825634</li>
                        <li className='mt-6'>ID datové schránky: ehbf9v7</li>
                        <li>Číslo účtu: 0002389080/5800</li>
                        <li className='mt-6'>
                            Oficiální název banky:
                            <br />
                            J&T BANKA, a.s.
                        </li>
                        <li>Pobřežní 297/14, Praha 8</li>
                        <li className='mt-6'>IČO: 47115378</li>
                        <li className='mt-6'>Kód banky: 5800</li>
                        <li>SWIFT kód banky: JTBPCZPP</li>
                    </ul>
                </article>

                {/* Kontakt */}
                <aside className="bg-[#C4E0F4] flex flex-col gap-8 w-full md:col-span-2 lg:col-span-1 lg:w-[320px] h-fit p-8 lg:p-10 justify-center items-center rounded-[40px] lg:rounded-[60px] flex-shrink-0 mt-12 md:mt-12 lg:mt-0">
                    <figure className="flex justify-center items-center">
                        <img src="/images/ondrej2.svg" alt="Ondřej Durďák" className="w-28 h-28 lg:w-36 lg:h-36 object-cover rounded-full" />
                    </figure>
                    <ul className="flex flex-col gap-2.5">
                        <li className="flex gap-2 items-center">
                            <span>
                                <img src="icons/Phone.svg" alt="Ikonka telefonu" />
                            </span>
                            <a
                                href="tel:+420732471162"
                                className="relative inline-block no-underline transition-colors duration-300 w-fit heading6
                                    after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                style={{ color: "inherit" }}
                            >
                                +420 732 471 162
                            </a>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span>
                                <img src="icons/EnvelopeSimple.svg" alt="Ikonka obálky" />
                            </span>
                            <a
                                href="mailto:ondrej.durkac@cvut.cz"
                                className="relative inline-block no-underline transition-colors duration-300 w-fit heading6
                                    after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                                style={{ color: "inherit" }}
                            >
                                ondrej.durkac@cvut.cz
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </main>
    );
}