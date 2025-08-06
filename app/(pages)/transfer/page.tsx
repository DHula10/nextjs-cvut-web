import type { Metadata } from 'next';
import Button from '@/app/components/button';
import styles from './transfer.module.css';

export const metadata: Metadata = {
    title: 'Transfer | Odbor transferu technologií a fundraisingu ČVUT',
    description: 'Lorem Ipsum',
}

export default function TransferPage() {
    return (
        <main className='w-full'>
            <section className={`${styles.hero} flex flex-col h-svh justify-center pl-20 lg:pl-32 md:pt-10`}>
                <div className='relative flex flex-col gap-8 z-50'>
                    <h6 className='text-cvut-yellow'>#TRANSFER</h6>
                    <h2 className='text-4xl font-bold md:max-w-3/4 lg:max-w-5/6 xl:max-w-3/4'>Ověřte, zda je váš nápad připravený změnit svět</h2>
                    <p className='body-l'>Pomůžeme vám transformovat myšlenku do funkčního <br /> produktu, služby nebo byznysu.</p>
                    <Button isLink label="KDE ZAČÍT" bgColor="y" href="#validace" inverse />
                </div>
            </section>
            <section id='validace' className={`md:ml-24 md:mr-24 ml-32 mr-32 mt-5 flex flex-col`}>
                <h3>Jak probíhá validace nápadu</h3>
                <div className={'md:grid-cols-2 md:gap-8 grid lg:grid-cols-4 lg:gap-6 mt-10 pb-20'}>
                    <article className={`${styles.article} ${styles.consultation}`}>
                        <h4>Konzultace</h4>
                        <p className={`${styles.articleText} lg:text-[18px] text-[20px] leading-[22px]`}>
                            Podrobně se
                            seznámíme s vaším
                            nápadem, jeho vizí
                            a cíli, abychom lépe
                            pochopili, kam chcete
                            směřovat.
                        </p>
                    </article>

                    <article className={`${styles.article} ${styles.analysis}`}>
                        <h4>Analýza</h4>
                        <p className={`${styles.articleText} lg:text-[18px] text-[20px] leading-[22px]`}>
                            Provedeme důkladnou analýzu,
                            posoudíme komerční potenciál vašeho nápadu
                            a identifikujeme slabá místa.
                        </p>
                    </article>

                    <article className={`${styles.article} ${styles.plan}`}>
                        <h4>Plán</h4>
                        <p className={`${styles.articleText} lg:text-[18px] text-[20px] leading-[22px]`}>
                            Společně navrhneme konkrétní
                            akční plán s jasnými kroky,
                            které vás přiblíží k
                            úspěšné realizaci vašeho projektu.
                        </p>
                    </article>

                    <article className={`${styles.article} ${styles.presentation}`}>
                        <h4>Prezentace</h4>
                        <p className={`${styles.articleText} lg:text-[18px] text-[20px] leading-[22px]`}>
                            Připravíme vás na profesionální
                            prezentaci nápadu a efektivní
                            komunikaci s investory či partnery.
                        </p>
                    </article>
                </div>
            </section>
            <section className={`${styles.support} flex flex-col justify-center py-16`}>
                <h3 className={`relative z-50 ml-28`}>Jak vás v této fázi podpoříme</h3>

                <div className={`relative z-50 mt-15 flex flex-col gap-5`}>
                    <article className={`${styles.supportArticle} py-5 px-6 md:px-16 md:w-7/12 w-6/12`}>
                        <img src="/icons/ChartPieSlice.svg" alt="Ikonka koláčového grafu" className={`h-14`} />
                        <p className={`body-l`}>
                            Posoudíme potenciál vašeho projektu <br />
                            a ověříme zájem trhu.
                        </p>
                    </article>
                    <article className={`${styles.supportArticle} md:w-8/12 w-7/12`}>
                        <img src="/icons/MagnifyingGlass.svg" alt="Ikonka lupy" className={`h-14`} />
                        <p className={`body-l`}>
                            Identifikujeme partnery, zákazníky a možnosti rozvoje.
                        </p>
                    </article>
                    <article className={`${styles.supportArticle} md:w-9/12 w-8/12`}>
                        <img src="/icons/Copyright.svg" alt="Ikonka Copyrightu" className={`h-14`} />
                        <p className={`body-l`}>
                            Pomůžeme s propagací, ochranou patentů a inkubací projektu.
                        </p>
                    </article>
                    <article className={`${styles.supportArticle} md:w-10/12 w-9/12`}>
                        <img src="/icons/ShieldCheck.svg" alt="Ikonka fajvky v štítu" className={`h-14`} />
                        <p className={`body-l`}>
                            Poradíme s právními náležitostmi a efektivním vyjednáváním.
                        </p>
                    </article>
                    <article className={`${styles.supportArticle} md:w-11/12 w-10/12`}>
                        <img src="/icons/ChartLineUp.svg" alt="Ikonka vzrůstajícího grafu" className={`w-12 ml-2`} />
                        <p className={`body-l`}>
                            Připravíme vás na vstup na trh a podpoříme prodeje.
                        </p>
                    </article>
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
                        s vaším projektem a probereme potenciální postup.
                    </p>

                    <Button isLink label="naplánujte si schůzku" target='_blank' inverse bgColor="y" href="https://outlook.office365.com/book/TransferVUT@campuscvut.onmicrosoft.com/?ismsaljsauthenabled=true" />

                </article>    
            </section>
        </main>
    );
}