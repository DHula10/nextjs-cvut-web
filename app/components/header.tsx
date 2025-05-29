//import

// Hlavička pro všechny stránky kromě HOME

const Header = () =>{

    //logic

    //return html
    return (
    <header style={styles.header}>
      <div style={styles.container}>
        <img
          src="/Logo.svg"
          alt="ČVUT logo"
          style={styles.logo}
        />
        <nav style={styles.nav}>
            <a href="#ambice" className="heading6">Ambice</a>
            <a href="#co-delame" className="heading6">Co děláme</a>
            <a href="#realizace" className="heading6">Realizace</a>
            <a href="#kontakt" className="heading6">Kontakt</a>
        </nav>
      </div>
    </header>
  );
};

export default Header

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: 'radial-gradient(127.46% 109.43% at 0% 100%, #0072BC 0%, #000 100%)',
    padding: '20px 40px',
    color: 'white',
  },
  container: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { 
    height: '60px',
  },
  nav: {
    display: 'flex',
    gap: '30px',
    width: '40%',
    justifyContent: 'flex-start',
  },
};