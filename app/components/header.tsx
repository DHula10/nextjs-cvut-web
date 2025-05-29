//import

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
          <h6>
            <a href="#ambice" style={styles.link}>Ambice</a>
          </h6>
          <h6>
            <a href="#co-delame" style={styles.link}>Co děláme</a>
          </h6>
          <h6>
            <a href="#realizace" style={styles.link}>Realizace</a>
          </h6>
          <h6>
            <a href="#kontakt" style={styles.link}>Kontakt</a>
          </h6>
        </nav>
      </div>
    </header>
  );
}

export default Header

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: 'radial-gradient(127.46% 109.43% at 0% 100%, #0072BC 0%, #000 100%)',
    padding: '20px 40px',
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
  link:{
    color: 'white',
  }
};