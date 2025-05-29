const Footer = () => {

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>

                {/* SECTION: Navigace a logo */}
                <section style={styles.column}>
                    <nav style={styles.nav}>
                        <a href="" className="heading6">Vize</a>
                        <a href="" className="heading6">Co děláme</a>
                        <a href="" className="heading6">Realizace</a>
                        <a href="" className="heading6">Kontakt</a>
                        <a href="" className="heading6">Fakturační údaje</a>
                    </nav>
                    <div style={styles.logoDiv}>
                        <img
                            style={styles.logo}
                            src="/Logo.svg"
                        />
                        <p style={styles.copyright} className="footerText">
                            Copyright ČVUT s.r.o. <br /> 2024, all rights <br /> reserved
                        </p>
                    </div>
                </section>

                {/* SECTION: Adresa */}
                <section style={styles.column}>
                    <h6>Adresa</h6>
                    <div style={styles.address}>
                        <p className="footerText" style={styles.glacier}>
                            InQbay <br /> 
                            Opletalova 929 / 22 <br /> 
                            110 00 Praha 1
                        </p>
                        <p className="footerText" style={styles.glacier}>
                            Odbor pro transfer <br />
                            technologií a <br />
                            fundraisingu <br />
                            Husova 1910/5, <br />
                            110 00, Praha 1
                        </p>
                    </div>
                </section>

                {/* SECTION: Partneři */}
                <section style={styles.gridColumn}>
                    <div style={styles.partnerLogo}>
                        Logo <br /> Partner
                    </div>
                    <div style={styles.partnerLogo}>
                        Logo <br /> Partner
                    </div>
                    <div style={styles.partnerLogo}>
                        Logo <br /> Partner
                    </div>
                    <div style={styles.partnerLogo}>
                        Logo <br /> Partner
                    </div>
                </section>

                {/* SECTION: Sociální sítě */}
                <section style={styles.column}>
                    <h6>Sledujte nás</h6>
                    <div style={styles.socials}>
                        <a href="">
                            <img src="/LinkedinLogo.svg" alt="Linkedin logo" />
                        </a>
                        <a href="">
                            <img src="/FacebookLogo.svg" alt="Facebook logo" />
                        </a>
                    </div>
                </section>
            </div>
        </footer>
    );

};

export default Footer;

const styles: { [key: string]: React.CSSProperties } = {
    footer: {
        background: 'radial-gradient(127.46% 109.43% at 0% 100%, #0072BC 0%, #000 100%)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        height: '670px',
        width: '100%',
    },
    container: {
        width: 'fit-content',
        height: 'auto',
        margin: '160px auto',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '80px'
    },
    column: {
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    logoDiv: {
        marginTop: '50px'
    },
    logo: {
        height: '70px',
        width: 'auto',
    },
    copyright: {
        marginTop: '16px'
    },
    gridColumn: {
        height: 'fit-content',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    partnerLogo: {
        border: '1px solid white',
        borderRadius: '50%',
        textAlign: 'center',
        alignContent: 'center',
        width: '110px',
        height: '110px'
    },
    address: {
        marginTop: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    },
    /* Tady je ta třída, aby barva nebyla bílá - nevím momentálně, jak to udělat lépe*/
    glacier: {
        color: '#7EB1C5',
    },
    socials: {
        marginTop: '8px',
        display: 'flex',
        flexWrap: 'wrap'
    }
};