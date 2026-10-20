import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[radial-gradient(127.46%_109.43%_at_0%_100%,#0072BC_0%,#000_100%)] text-cvut-white flex justify-center w-full ">
            <div className="mx-4 my-10 md:m-20 flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-10 xl:gap-20 w-full xl:w-fit md:flex-row md:flex-wrap lg:flex-nowrap">

                {/* SECTION: Navigace a logo */}
                <section className="flex flex-row gap-12 justify-center lg:flex-col lg:gap-6 xl:gap-12 md:justify-between md:w-full lg:w-fit">
                    <nav className="flex flex-col gap-3">
                        <Link href="/inqbay" className="heading6 link hover:text-cvut-green after:bg-cvut-green">Inqbay</Link>
                        <Link href="/transfer" className="heading6 link hover:text-cvut-yellow after:bg-cvut-yellow">Transfer</Link>
                        <Link href="/ingine" className="heading6 link hover:text-cvut-red after:bg-cvut-red">Ingine</Link>
                        <Link href="/invoice" className="heading6 link hover:text-cvut-blue-light after:bg-cvut-blue-light">Fakturační údaje</Link>
                    </nav>
                    <div>
                        <img
                            className="h-[72px] w-auto"
                            src="/logos/Logo.svg"
                            alt="ČVUT logo"
                        />
                        <p className="footerText mt-4">
                            Copyright ČVUT s.r.o. <br /> 2024, all rights <br /> reserved
                        </p>
                    </div>
                </section>

                {/* SECTION: Adresa */}
                <section className="flex flex-col w-fit">
                    <h6>Adresa</h6>
                    <div className="mt-2 flex flex-row gap-12 lg:flex-col">
                        <p className="footerText text-[#7EB1C5]">
                            InQbay <br />
                            Opletalova 929 / 22 <br />
                            110 00 Praha 1
                        </p>
                        <p className="footerText text-[#7EB1C5]">
                            Odbor pro transfer <br />
                            technologií a <br />
                            fundraisingu <br />
                            Husova 1910/5, <br />
                            110 00, Praha 1
                        </p>
                    </div>
                </section>

                {/* SECTION: Partneři */}
                <section className="grid grid-cols-2 gap-2 h-fit justify-center items-center xl:gap-4 lg:grid-cols-2 lg:gap-2">
                    <div className="border border-white rounded-full text-center flex items-center justify-center w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
                        Logo <br /> Partner
                    </div>
                    <div className="border border-white rounded-full text-center flex items-center justify-center w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
                        Logo <br /> Partner
                    </div>
                    <div className="border border-white rounded-full text-center flex items-center justify-center w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
                        Logo <br /> Partner
                    </div>
                    <div className="border border-white rounded-full text-center flex items-center justify-center w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
                        Logo <br /> Partner
                    </div>

                </section>

                {/* SECTION: Sociální sítě */}
                <section className="flex flex-col w-fit">
                    <h6>Sledujte nás</h6>
                    <div className="mt-2 flex flex-wrap">
                        <a href="">
                            <img src="/logos/LinkedinLogo.svg" alt="Linkedin logo" />
                        </a>
                        <a href="">
                            <img src="/logos/FacebookLogo.svg" alt="Facebook logo" />
                        </a>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;