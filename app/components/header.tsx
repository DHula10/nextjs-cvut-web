//import

// Hlavička pro všechny stránky kromě HOME

const Header = () =>{
    //logic
    
    return (
    <header style={styles.header} className="absolute top-0 left-0 w-full z-50">
      <div style={styles.container}>
        <img
          src="logos/Logo.svg"
          alt="ČVUT logo"
          style={styles.logo}
        />
        <nav style={styles.nav}>
            <a href="#ambice" className="heading6 link">Ambice</a>
            <a href="#co-delame" className="heading6 link">Co děláme</a>
            <a href="#realizace" className="heading6 link">Realizace</a>
            <a href="#kontakt" className="heading6 link">Kontakt</a>
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