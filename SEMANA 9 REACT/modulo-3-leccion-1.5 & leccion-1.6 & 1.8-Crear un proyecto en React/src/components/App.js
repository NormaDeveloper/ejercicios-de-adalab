import '../styles/main.scss';
import '../styles/header.scss';
import '../styles/reset.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    <div>
      <header className="header">
        <a className="a-header" title="Adalab" href="https://adalab.es/">
          <img src={logo} alt="logo Adalab" className="logo" title="Adalab" />
        </a>
        <nav>
          <ul className="menu">
            <li>
              <a
                className="menu-link"
                title="Blog"
                href="https://adalab.es/blog/"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="menu-link"
                title="Contacto"
                href="https://adalab.es/contacto/"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
